import * as React from "react"
import Image from 'next/image'
import logo from '../images/logo.svg'
import emailLogo from '../images/email-icon.png'
import phoneLogo from '../images/phone-icon.svg'
import mapLogo from '../images/map-icon.svg'
import Link from 'next/link'

export interface FooterProps {

}

export default function Footer(props: FooterProps) {
    return (

        <footer>

            <div className="bg-pur text-stone-50 p-4">

                <p className="text-center italic">« La santé naturelle est une pratique complémentaire à la médecine traditionnelle. Cette pratique n’interfère ni ne remplace une démarche médicale ou paramédicale ».</p>

                <div className="  grid lg:grid-cols-3">

                    <div className="grid">
                        <div className="flex flex-col items-center justify-center">
                            <Image src={logo} width="200" height="200" alt="logo ange & vie" />
                        </div>
                    </div>

                    <div className="grid lg:col-span-2">
                        <div className="flex flex-col items-center justify-center">

                            <p className="pb-2">Angélique Spaziani</p>
                            <div className="flex pb-2">
                                <Image src={emailLogo} width="20" height="20" alt="image telephone" />
                                <p className=" text-stone-5 text-stone-50 pl-2"><Link href="mailto:angeetvie@laposte.net">angeetvie@laposte.net</Link></p>
                            </div>
                            <div className="flex pb-2">
                                <Image src={phoneLogo} width="20" height="17" alt="image telephone" />
                                <p className=" text-stone-5 text-stone-50 pl-2">07 67 05 57 90</p>
                            </div>
                            <div className="flex">
                                <Image src={mapLogo} width="20" height="17" alt="image telephone" />
                                <p className=" text-stone-5 text-stone-50 pl-2">33320, Eysines</p>
                            </div>
                        </div>

                    </div>

                </div>

                <hr></hr>

                <div className="bg-pur py-4 text-stone-50 flex flex-col items-center justify-center">
                    <p>2022 - Site développé par <span><Link href="https://gubbiotti.fr/" >Paul Gubbiotti </Link></span></p>
                </div>
            </div>
        </footer>
    )
}