import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'

export interface FooterProps {

}

export default function Footer(props: FooterProps) {
    return (

        <footer>

            <div className="bg-pur text-stone-50 px-2 lg:py-0 py-4">

                

                <div className="  grid lg:grid-cols-3">

                <div className="grid">
                        <div className="flex flex-col items-center justify-center">
                        <p className="text-center italic text-xl">« La santé naturelle est une pratique complémentaire à la médecine traditionnelle. Cette pratique n’interfère ni ne remplace une démarche médicale ou paramédicale ».</p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="flex flex-col items-center justify-center">
                            <Image src={"/logo.png"} width="200" height="200" alt="logo ange & vie" />
                        </div>
                    </div>

                    <div className="grid">
                        <div className="flex flex-col items-center justify-center">

                            <p className="pb-2 text-xl">Angélique Spaziani</p>
                            <div className="flex pb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <p className=" text-xl transition duration-1000 ease-in-out  hover:scale-105 text-stone-5 text-stone-50 pl-2"><Link href="mailto:angeetvie@laposte.net">angeetvie@laposte.net</Link></p>
                            </div>
                            <div className="flex pb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <p className=" text-xl transition duration-1000 ease-in-out  hover:scale-105 text-stone-5 text-stone-50 pl-2"><Link href="tel:+33767055790">07 67 05 57 90</Link></p>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                                <p className=" text-xl transition duration-1000 ease-in-out  hover:scale-105 text-stone-5 text-stone-50 pl-2"> <Link  target="_blank" href="https://www.google.com/maps/place/18+All.+du+Poujeau,+33320+Eysines/@44.8787043,-0.6620575,17z/data=!3m1!4b1!4m6!3m5!1s0xd54d7228cb3f473:0x6593e8a0f861ddb4!8m2!3d44.8787005!4d-0.6594826!16s%2Fg%2F11c14rltsl">18 Allée du Poujeau, 33320 Eysines</Link></p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="bg-pur py-4 text-stone-50 flex flex-col items-center">
                    <p className="transition duration-1000 ease-in-out  hover:scale-105 text-center">2022/2023 - Site développé par <span><Link target="_blank" href="https://gubbiotti.fr/" >Paul Gubbiotti </Link></span></p>
                </div>
            </div>
        </footer>
    )
}