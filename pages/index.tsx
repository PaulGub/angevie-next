import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Image from 'next/image'
import phoneLogo from '../images/phoneLogo.png'

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="bg-cover bg-[url('../images/bg-main.jpg')] h-screen w-full flex flex-col items-center justify-center">

				<h1 className="font-fancy text-stone-50 text-9xl pb-8">Ange & Vie</h1>

				<h2 className=" text-stone-5 pb-2 text-stone-50">Angelique Spaziani</h2>

				<p className=" text-stone-5 pb-2 text-stone-50">Soins holistique</p>

				<div className="flex">
					<Image src={phoneLogo} width="20" height="17" alt="image telephone" />
					<p className=" text-stone-5 text-stone-50 pl-2">07 67 05 57 90</p>
				</div>

			</div>

			<div className="flex justify-center py-10 bg-gray-200">
				Content
			</div>
		</Layout>
	)
}

export default Home