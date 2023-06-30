import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import { MdCloudDownload, MdOutlineClose } from "react-icons/md";

interface DetailsProps {
    video: {
        link_video: string
        titulo: string
        descricao: string
    }
    onClose: () => void
}

export default function VideoDetails({video, onClose}: DetailsProps) {
    return(
    
    <div className="fixed bg-gray-600 bg-opacity-75 top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
        <div className="relative mx-auto mt-16 w-full max-w-2xl max-h-full"> 
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                
                <div className="border-t-4 primary-border-color pt-4 rounded-t dark:border-gray-600">
                    <h3 className="text-xl mx-auto text-center font-semibold text-color dark:text-white md:w-1/4 lg:w-1/2">
                        <span className='primary-color'>Webinar:</span> {video.titulo}
                    </h3>
                    <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <MdOutlineClose className='absolute top-3 right-2.5 text-color hover:bg-gray-200 hover:text-gray-900 rounded-lg text-4xl p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' />
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                
                
                <ReactPlayer
                width='100%'
                controls
                url={video.link_video}
                preload="auto"
                config={{
                    youtube: {
                        playerVars: {
                            origin: 'http//localhost:3000'
                        }
                    }
                }}
                />

                <div className='px-6 pt-6'>
                    <h6 className='text-lg font-semibold text-gray-900 dark:text-white'>
                        Descrição
                    </h6>
                    <hr className='my-2 border-gray-200 dark:border-gray-600' />
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                    {video.descricao}
                    </p>
                </div>
                
                <div className="p-6 rounded-b">
                <h6 className='text-lg font-semibold text-gray-900 dark:text-white'>
                        Download
                </h6>
                <hr className='my-2 border-gray-200 dark:border-gray-600' />
                <div className='gap-2 flex flex-wrap'>

                <a href="/assets/downloads/planilha_download.xlsx" download className="inline-flex overflow-hidden text-emerald-600 bg-emerald-200 rounded group">
                    <span className="px-2 py-1 text-emerald-200 bg-emerald-500 group-hover:bg-emerald-800 flex items-center justify-center">
                    <MdCloudDownload className='w-5 h-5' />
                    </span>
                <span className="pl-2 pr-5 py-1">Spreadsheet.xls</span>
                </a>

                <a href="/assets/downloads/documento_download.docx" download className="inline-flex overflow-hidden text-blue-600 bg-blue-200 rounded group">
                    <span className="px-2 py-1 text-blue-200 bg-blue-500 group-hover:bg-blue-800 flex items-center justify-center">
                    <MdCloudDownload className='w-5 h-5' />
                    </span>
                <span className="pl-2 pr-5 py-1">Document.doc</span>
                </a>

                <a href="/assets/downloads/apresentacao_download.pptx" className="inline-flex overflow-hidden text-amber-600 bg-amber-200 rounded group">
                    <span className="px-2 py-1 text-amber-200 bg-amber-500 group-hover:bg-amber-800 flex items-center justify-center">
                    <MdCloudDownload className='w-5 h-5' />
                    </span>
                <span className="pl-2 pr-5 py-1">Presentation.ppt</span>
                </a>
                </div>

                </div>
            </div>
        </div>
    </div>

       
    )
}