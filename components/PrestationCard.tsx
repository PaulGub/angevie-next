import * as React from "react"
import Image from "next/legacy/image";


export default function PrestationCard(data: any) {

    return (

        <div className={'bg-pur rounded-lg h-full'}>
            <div>
                <div className={"w-full h-[400px] relative bg-black"}>
                    <Image className={"rounded-lg"} src={data.data.img} alt={"news"} layout={"fill"}
                        objectFit="contain" objectPosition={"center"} placeholder="blur" blurDataURL={data.data.img} />
                </div>

                <div className={"p-6"}>
                    <div className="flex justify-between border-b-2 border-stone-50">
                        <p className="border-l-4 border-stone-50 pl-2 text-stone-50 uppercase text-2xl"> {data.data.title} </p>
                        <p>
                            {data.data.type.map((data: any, index: number) => {

                                return (
                                    <span key={index}>
                                        {data}
                                    </span>
                                )
                            }
                            )}
                        </p>
                    </div>
                    <p className={"text-stone-50 pt-3 text-xl"}>{data.data.description}</p>

                </div>
            </div>
        </div>
    )
}