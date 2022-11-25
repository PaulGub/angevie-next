import * as React from "react"
import Image from 'next/image'
import phoneLogo from '../images/phoneLogo.png'

export interface FooterProps {

}

export default function Footer(props: FooterProps) {
    return (

        <footer>

            <div className=" bg-pur text-stone-50 p-4">

            <div className="flex justify-between">
                    <div className="p-4">
                        <p>Je me déplace à votre domicile ou travaille à distance.</p>
                    </div>
                    <div className="p-4">
                        <p>Prochainement vous pourrez venir à mon cabinet d’Eysines.</p>
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center">
                    <p className="font-fancy text-4xl pb-2"> Ange & Vie</p>
                    <p className="pb-2">Angélique Spaziani</p>
                    <p className="pb-2">angeetvie@laposte.net</p>
                    <div className="flex">
                        <Image src={phoneLogo} width="20" height="17" alt="image telephone" />
                        <p className=" text-stone-5 text-stone-50 pl-2">07 67 05 57 90</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}