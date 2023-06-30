interface bannerProps {
    tag: string
    subTitulo: string
    titulo: string
}

export default function BannerHero(props:bannerProps) {
    return (
        <section className="bg-light-primary dark:bg-gray-800 lg:py-10">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
                <div className="text-base uppercase font-semibold leading-7 primary-color mb-5">
                    <span className="primary-border-color rounded-tl-full rounded-r-full border-2 px-4 py-1">
                    {props.tag}
                    </span>
                </div>
                <h1 className="mb-4 text-4xl font-medium tracking-tight leading-none text-color md:text-5xl lg:text-5xl dark:text-white">
                        {props.subTitulo}
                        <br />
                        <span className="font-bold primary-color lg:text-8xl pt-4">
                            {props.titulo}
                        </span>
                </h1>
                <hr className="h-0.5 w-9/12 mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <p className="mb-8 text-lg font-normal text-color lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Conheça as estratétigas que <span className="font-bold">mudaram o jogo</span> e como aplicá-las no seu negócio
                </p>
            </div>
        </section>
    )
}