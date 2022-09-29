import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between '>
                <div >
                    <strong className='text-white text-2xl font-black block'>Nao encontrou seu duo?</strong>
                    <span className='text-zinc-400 block'>Publique um  anuncio para encontrar novos players!</span>
                </div>
                <button className='py-3 px-4 bg-violet-500 max-w-[] hover:bg-violet-600 text-white rounded flex justify-between'>
                    <MagnifyingGlassPlus size={25} />
                    Publicar anuncio
                </button>
            </div>
        </div>
    )
}