import LogoTahfizNurulInsaniah from '../assets/image/Logo_Tahfiz.webp'

export default function Clients() {
    return (
        <main className="flex flex-col gap-5 animate-slide-right overflow-hidden">
            <div className="flex flex-row gap-5 md:gap-6 flex-wrap justify-between sm:justify-normal">
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <a className="bg-[#1D1D1D] rounded-md flex items-center w-12 h-12 md:w-24 md:h-20" href="https://tahfizinsaniah.com" target='_blank'>
                        <img src={LogoTahfizNurulInsaniah} alt="Logo Tahfiz Nurul Insaniah Icon" className="w-7 h-9 md:w-12 md:h-16 mx-auto" />
                    </a>
                    <h1 className='font-bold text-center'>Tahfiz Nurul<br></br>Insaniah</h1>
                </div>
            </div>
        </main>
    )
}