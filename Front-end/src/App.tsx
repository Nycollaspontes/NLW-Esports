import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import logo from '/src/assets/logo-nlw-esports.png'
import { useEffect, useState } from 'react';

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

export function App() {
    const [games, setGames] = useState<Game[]>([])




    useEffect(() => {
        fetch('http://localhost:3333/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, [])

    console.log(games)
    return (
        < div className='max-w-[1344px] mx-auto flex items-center flex-col m-20'>
            <img src={logo} alt="" />

            <h1 className='text-6xl text-white '>
                Seu <span className='bg-nlw-gradient text-transparent bg-clip-text '>duo</span> está aqui.
            </h1>
            <div className='grid grid-cols-6 gap-6 mt-16'>
                {games.map(game => {
                    return (
                        <GameBanner
                            key={game.id}
                            bannerUrl={game.bannerUrl}
                            gameTitle={game.title}
                            ads={game._count.ads}
                        />
                    )
                })}

            </div>
            <CreateAdBanner />
        </div >
    )
}


