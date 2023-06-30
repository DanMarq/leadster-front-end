import Image from "next/image"

export default function DemostracaoSection() {
    return (
        <section className="bg-white dark:bg-gray-800 bg-light-primary border-b dark:border-gray-600 lg:py-5">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                
                <div className="px-10 place-self-center lg:col-span-6">
                <Image src={'/assets/comparativo_img_CTA.png'} className="h-auto max-w-full" width={618} height={578} alt="" />
                </div>

                <div className="lg:mt-0 lg:col-span-6 flex justify-center flex-col">
                    <h2 className="mb-4 mt-3 text-4xl tracking-tight font-medium text-color dark:text-white lg:w-4/5">
                        Pronto para triplicar sua <span className="font-extrabold">Geração de Leads?</span>
                    </h2>
                    <h4 className="font-semibold text-color dark:text-white text-xl">
                        Criação e ativação em <span className="font-extrabold">4 minutos.</span>
                    </h4>
                    <hr className="my-4 border-gray-300 dark:border-gray-600" />
                    <div className="flex lg:justify-start justify-center items-center flex-wrap">
                        <button className="text-white bg-primary font-medium lg:mr-5 text-base text-center border primary-hover primary-border-hover hover:bg-transparent px-10 rounded-full transition-all ease-in-out delay-75 py-3">
                            Ver demostração
                        </button>
                        <Image src={'/assets/selo_RD.png'} width={150} height={53} alt="Selo Rd Station" />
                    </div>
                    <div className="flex items-center lg:justify-start justify-center flex-wrap mt-3 lg:mt-3">
                        <div className="flex items-center">
                            <Image src={'/assets/no-card-dark.webp'} width={16} height={16} alt="" />
                            <p className="text-color text-sm dark:text-white font-semibold ml-1">Não é necessário cartão de crédito | </p>
                        </div>
                        <div className="flex items-center">
                            <Image src={'/assets/rating.webp'} width={92} height={16} alt="" />
                            <p className="text-color text-sm dark:text-white font-semibold ml-1">4.9/5 - Média de Satisfação</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}