import Image from "next/image"

interface VideoProps {
    video: {
        thumbnail: string
        titulo: string
    }
    onClick: () => void
}

export default function VideoCard({video, onClick}: VideoProps) {
    return (
        <a className="cursor-pointer" onClick={onClick}>
            <div className="max-w-sm bg-white border border-gray-100 rounded-lg drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                
                    <Image src={video.thumbnail} className="rounded-t-lg h-auto max-w-full" width={532} height={300} alt="Capa do Video" />
                
                <div className="p-5">
                    <p className="mb-3 lg:text-lg text-base font-bold text-color dark:text-white primary-hover">
                        {video.titulo}
                    </p>
                </div>
            </div>
        </a>
    )
}