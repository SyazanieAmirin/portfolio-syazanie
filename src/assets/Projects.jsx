import PetaMetroThumbnail from "../assets/image/peta-metro-thumb.svg"
import Button from "../assets/components/ButtonCOMP"

export default function Projects() {
    return (
        <main className="flex flex-col gap-5 mt-5 lg:flex-row flex-wrap animate-slide-right overflow-x-hidden">
            <div className="flex flex-col gap-5 bg-[#0E0E0E] w-full md:w-auto rounded-lg lg:max-w-[350px]">
                <img src={PetaMetroThumbnail} className="rounded-t-lg lg:max-w-[350px] h-full w-full" />
                <div className="flex flex-col gap-3 px-3 pb-3">
                    <h2 className="text-xl font-bold">Peta Metro</h2>
                    <p className="md:text-lg">View all the transit maps/diagrams in one place</p>
                    <Button size="xs" width="full" typeLink="new tab" link="https://petametro.com" isDownloadable={false} text="View Site" />
                </div>
            </div>
        </main>
    )
}