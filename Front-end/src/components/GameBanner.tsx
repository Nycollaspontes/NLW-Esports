interface GameBannerProps {
    bannerUrl: string;
    gameTitle: string;
    ads: number;
}


export function GameBanner(props: GameBannerProps) {

    return (
        <a href="" className='relative '>
            <img src={props.bannerUrl} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0 '>
                <strong className='font-bold text-white block' >{props.gameTitle}</strong>
                <span className='text-zinc-300 text-sm block  '>{props.ads} anúncios(s)</span>
            </div>
        </a>
    )
}