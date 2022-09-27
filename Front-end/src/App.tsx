import './styles/main.css';
import logo from '/src/assets/logo-nlw-esports.png'

export function App() {
    return (
        < div className='max-w-[1344px] mx-auto flex items-center flex-col m-20'>
            <img src={logo} alt="" />

            <h1 className='text-6xl text-white '>
                Os <span className='bg-nlw-gradient text-transparent bg-clip-text '>Melhores doces </span> estão aqui.
            </h1>
            <div className='grid grid-cols-6 gap-6 mt-16'>
                <a href="" className='relative '>
                    <img src="/game-1.png" alt="" />
                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0 '>
                        <strong className='font-bold text-white block' >League of Legends</strong>
                        <span className='text-zinc-300 text-sm block  '>4 anúncios </span>
                    </div>
                </a>
                <a href="" className='relative '>
                    <img src="/game-2.png" alt="" />
                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0 '>
                        <strong className='font-bold text-white block' >Dota 2</strong>
                        <span className='text-zinc-300 text-sm block  '>4 anúncios </span>
                    </div>
                </a>
                <a href="" className='relative '>
                    <img src="/game-3.png" alt="" />
                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0 '>
                        <strong className='font-bold text-white block' >CS-GO</strong>
                        <span className='text-zinc-300 text-sm block  '>4 anúncios </span>
                    </div>
                </a>
                <a href="" className='relative '>
                    <img src="/game-4.png" alt="" />
                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0 '>
                        <strong className='font-bold text-white block' >Apex Legends</strong>
                        <span className='text-zinc-300 text-sm block  '>4 anúncios </span>
                    </div>
                </a>
                <a href="" className='relative '>
                    <img src="/game-5.png" alt="" />
                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0 '>
                        <strong className='font-bold text-white block' >Fortnite</strong>
                        <span className='text-zinc-300 text-sm block  '>4 anúncios </span>
                    </div>
                </a>
            </div>
            <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
                <div className='bg-[#2A2634] px-8 py-6 '>

                </div>
            </div>
        </div >
    )
}


