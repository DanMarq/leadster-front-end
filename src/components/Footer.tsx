import Image from "next/image"
import { useState } from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

interface FooterProps {
    theme: () => void
}

export default function Footer(props:FooterProps) {

    const [toogle, setToogle]= useState <boolean> (false)
    function toogleTheme() { 
        setToogle (toogle => !toogle )
        props.theme()
    }

    return (
        <footer className="py-5 bg-white dark:bg-slate-900">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="flex flex-col justify-center items-center">
                <Image src={toogle? '/assets/logo-bg-white.png' : '/assets/logo-bg-dark.png'} width={192} height={42} alt="" />
                <p className="text-color dark:text-white text-base pt-2">Transformando visitantes em clientes.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4" >
                    <div>
                        <h6 className="mb-6 text-lg font-semibold text-color dark:text-white">
                            Links Principais
                        </h6>
                        <ul className="text-gray-400 dark:text-gray-200 font-normal">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Ferramente</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Preços</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="mb-6 text-lg font-semibold text-color dark:text-white">
                            Cases
                        </h6>
                        <ul className="text-gray-400 dark:text-gray-400 font-normal">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Geração de Leads B2B</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Geração de Leads em Software</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Geração de Leads em Imobiliária</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Cases de Sucesso</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="mb-6 text-lg font-semibold text-color dark:text-white">
                            Materiais
                        </h6>
                        <ul className="text-gray-400 dark:text-gray-200 font-normal">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Blog</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Parceria com Agências</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Guia Definifito de Marketing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Materiais Gratuitos</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="mb-6 text-lg font-semibold text-color dark:text-white">
                            Siga a Leadster
                        </h6>
                        <a href="https://www.linkedin.com/company/getleadster/" target="_blank" className="bg-gray-200 w-10 h-10 p-3 inline-block rounded-full text-gray-400 mr-3 hover:text-white bg-primary-hover">
                            <FaLinkedinIn />
                        </a>

                        <a href="https://www.facebook.com/leadsterplatform" target="_blank" className="bg-gray-200 w-10 h-10 p-3 inline-block rounded-full text-gray-400 mr-3 hover:text-white bg-primary-hover">
                            <FaFacebookF/>
                        </a>

                        <a href="https://www.instagram.com/leadster.com.br/" target="_blank" className="bg-gray-200 w-10 h-10 p-3 inline-block rounded-full text-gray-400 mr-3 hover:text-white bg-primary-hover">
                            <FaInstagram />
                        </a>

                        <p className="mt-5 text-sm text-gray-400 dark:text-white">
                            <span className="text-gray-600 dark:text-white font-medium">Email: </span>
                            <a className="primary-hover" href="mailto:contato@leadster.com.br">contato@leadster.com.br</a>
                        </p>

                        <p className="mt-3 text-sm text-gray-400 dark:text-white">
                            <span className="text-gray-600 dark:text-white font-medium">Telefone: </span>
                            <a className="primary-hover" href="mailto:contato@leadster.com.br">(42) 98828-9851</a></p>

                    </div>
                    
                </div>
            </div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-3 xl:gap-0 lg:py-6 lg:grid-cols-12 border-t">
                <div className="lg:col-span-6">
                <p className="text-sm text-gray-400 dark:text-gray-200">Copyright © 2015 - 2022 Todos os direitos reservados | <a href="" className="primary-color">Leadster</a></p>
                </div>

                <div className="lg:col-span-6 mt-3 lg:mt-0">
                    <p className="text-sm text-gray-400 dark:text-gray-200">Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | <a href="" className="hover:underline">Termos de Uso</a></p>
                </div>
            </div>
        </footer>
    )
}