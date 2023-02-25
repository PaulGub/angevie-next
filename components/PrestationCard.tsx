import * as React from "react"
import Image from "next/legacy/image";


export default function PrestationCard(data: any) {

    return (

        <div className={'bg-pur rounded-lg h-full'}>
            <div>
                <div className={"absolute pl-2 pt-2 z-[6] "}>
                    <p className={"bg-white  p-2 rounded-lg text-center"}>
                        {data.data.type.map((data: any, index: number) => {

                            return (
                                <span className="text-pur" key={index}>
                                    {data}
                                </span>
                            )
                        }
                        )}
                    </p>
                </div>
                <div className={"w-full h-[300px] relative bg-black"}>
                    <Image className={"rounded-lg"} src={data.data.img} alt={"images des prestations"} layout={"fill"}
                        objectFit="contain" objectPosition={"center"} placeholder="blur"
                        blurDataURL={data.data.img} />
                </div>

                <div className={"p-6"}>

                    <p className="text-stone-50 uppercase text-3xl text-center font-bold"> {data.data.title} </p>

                    <div className={"flex flex-col justify-between"}>
                        <p className={"text-stone-50 pt-3 text-xl"}>{data.data.description}</p>


                    </div>


                </div>
            </div>
        </div>
    )
}