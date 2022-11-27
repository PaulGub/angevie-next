import * as React from "react"
import Image from 'next/image'
import emailLogo from '../images/email-icon.png'
import phoneLogo from '../images/phone-icon.svg'
import mapLogo from '../images/map-icon.svg'
import Link from 'next/link'

export interface FooterProps {

}

export default function Footer(props: FooterProps) {
    return (

        <footer>

            <div className=" bg-pur text-stone-50 p-4">

                <div className="flex flex-col items-center justify-center">
                    <p className="font-fancy text-4xl pb-2"> Ange & Vie</p>
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

            <div className="bg-violet-400 text-stone-50 flex flex-col items-center justify-center">
                <p>2022 - Développé par <span><Link href="https://pgubbiotti.me/" >Paul Gubbiotti </Link></span></p>
            </div>
        </footer>
    )
}