import suzanoLogo from './assets/suzano-logo.svg'

import plantarOfuturoImg from './assets/plantar-o-futuro.png'
import turmaFormare from './assets/turma-formare.jpeg'

export function App() {
    return (
        <div>
            <div className='md:px-40 h-[70vh] md:h-[90vh] bg-formareGradientBottom md:bg-formareGradientLeft bg-right-bottom md:bg-center bg-cover bg-no-repeat flex items-end md:items-center'>
                <img src={suzanoLogo} alt="" className='z-10 w-24 absolute top-6 left-6' />
                <h1 className='md:w-7/12 z-10 mb-10 text-white text-center md:text-left text-3xl md:text-5xl font-unicase'>Transforme o futuro. Seja educador formare</h1>
            </div>
            <section className='flex flex-col gap-14 items-center justify-center h-screen bg-slate-200'>
                <div className='p-8 w-72 h-72 text-xl flex items-center justify-center rounded-full bg-white relative'>
                    <span className='text-center font-zooja text-5xl text-blue-600'>
                        Gente que inspira e transforma
                    </span>
                </div>
                <p className='px-10 text-center md:w-[700px]'>Os alunos formares são jovens com um potencial incrível, mas que precisa ser explorado. Cada colaborar com suas histórias de vida únicas e conhecimentos técnicos tem o poder de inspirar e transformar a vida de cada um, para que no futuro, possam se preparar para o mercado de trabalho assim como você. </p>
            </section>

            <section className='h-screen flex flex-col justify-center items-center gap-14'>
                <div className='p-8 w-72 h-72 text-xl flex items-center justify-center rounded-full bg-slate-200'>
                    <span className='text-center text-green-600 text-5xl font-zooja'>
                        Gerar e compartilhar valor
                    </span>
                </div>
                <p className='px-10 text-center md:w-[700px]'>O Formare não segue um modelo padrão de ensino e aprendizagem. Cada aula é um bate-papo, no qual os alunos e os professores aprendem um com o outro  e cada um leva um pedacinho de cada pessoa.</p>
            </section>

            <section className='flex flex-col gap-10 items-center justify-center h-screen bg-slate-200'>
                <img
                    className='w-72 h-72 rounded-full'
                    src={plantarOfuturoImg}
                    alt=""
                />

                <p className=' px-10 text-center md:w-[700px]'>Cada formare é como uma planta, que precisa ser regada, iluminada e nutrida. Por isso, venha plantar o futuro conosco.</p>

                <a href="#" className='px-14 py-4 bg-blue-600 text-white rounded-full shadow-blue-600/30 shadow-xl hover:scale-105 transition-transform'>
                    Seja um educador formare
                </a>
            </section>

            <footer className='py-10 px-10 text-center flex flex-col gap-6 items-center'>
                <span>Esse site foi feito com ❤ pela turma Formare de Imperatriz</span>
                <img src={turmaFormare} alt="turma formare" className='w-3/4 md:w-1/2'/>
            </footer>
        </div>
    )
}
