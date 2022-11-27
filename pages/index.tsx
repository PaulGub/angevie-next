import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Image from 'next/image'
import phoneLogo from '../images/phoneLogo.png'
import Lottie from "lottie-react";
import DayNight from "../images/lotties/day-night.json";
import Yoga from "../images/lotties/yoga.json";
import Body from "../images/lotties/scan-body.json";
import peoples from '../images/peoples.png'
import antenneDeLecher from '../images/antenne-de-lecher.webp'

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="bg-cover bg-[url('../images/bg-main.jpg')] h-screen w-full flex flex-col items-center justify-center">

				<h1 className="font-fancy text-stone-50 text-9xl pb-8">Ange & Vie</h1>

				<h2 className=" text-stone-5 pb-2 text-stone-50">Angelique Spaziani</h2>

				<p className=" text-stone-5 pb-2 text-stone-50">Soins holistique</p>

				<p className=" text-stone-5 pb-2 text-stone-50">Prochainement vous pourrez venir à mon cabinet d’Eysines.</p>

				<p className=" text-stone-5 pb-2 text-stone-50">Je me déplace à votre domicile ou travaille à distance.</p>

				<div className="flex">
					<Image src={phoneLogo} width="20" height="17" alt="image telephone" />
					<p className=" text-stone-5 text-stone-50 pl-2">07 67 05 57 90</p>
				</div>

			</div>

			<div className="flex">

				<div className="basis-3/4 flex flex-col items-center justify-center p-6">
					<p className="text-2xl">A tout moment vous pouvez bénéficier d’un soin énergétique, aux changements de saison, lorsqu’une douleur apparaît ou est chronique, avant ou après une opération, en cas de stress, ou tout simplement quand tout va bien !</p>
				</div>

				<div className="basis-1/4">
					<Lottie animationData={DayNight} />
				</div>

			</div>

			<div className="flex bg-pur">

				<div className="basis-1/4">
					<Lottie animationData={Yoga} />
				</div>


				<div className="basis-3/4 flex flex-col items-center justify-center p-6">
					<p className="text-2xl text-stone-50">Le <b>soin énergétique</b> que je réalise vous permettra de trouver un mieux-être général, tant sur le plan physique, morale que mental. Le bilan rétablira votre équilibre en profondeur. Je suis certifiée <b>bio-énergéticienne acmos</b>.</p>
				</div>

			</div>

			<div className="flex">

				<div className="basis-3/4 flex flex-col items-center justify-center p-6">
					<p className="text-2xl">Le <b>rééquilibrage</b> se déroule en plusieurs phases. Tout d’abord j’interroge votre corps afin de faire un constat. Ensuite plusieurs protocoles peuvent être réalisés. Par exemple, en exécutant des <b>transferts quantiques</b> et des points d’<b>acupunctures</b>. En effet la méthode <b>acmos</b> a pour principe de rétablir et de faire circuler d’information.
						<br></br>
						J’utilise plus de 300 produits pour les transferts quantiques, par résonance plusieurs d’entre eux sont choisis par votre corps suivant votre degré d’urgence.
						Je continue avec la <b>chromothérapie</b> afin d’éliminer vos toxines vibratoires.
						<br></br>
						Enfin, si nécessaire vous pouvez profiter d’un soin <b>magnétisme</b> ou autres…</p>
				</div>

				<div className="basis-1/4">
					<Lottie animationData={Body} />
				</div>

			</div>

			<div className="flex bg-pur">

				<div className="basis-1/4 p-12">
					<Image src={peoples} width="1000" height="668" alt="image de personnes" />
				</div>


				<div className="basis-3/4 flex flex-col items-center justify-center p-6">
					<p className="text-2xl text-stone-50">Le soin s’adresse de 7 à 99 ans et plus. Pour les bébés et les nourrissons il est recommandé de réaliser le soin à la maman. L’enfant à cet âge est encore dans l’énergie de sa mère. Vos amis les animaux peuvent aussi en bénéficier.</p>
				</div>

			</div>

			<div className="flex">

				<div className="basis-3/4 flex flex-col items-center justify-center p-6">
					<p className="text-2xl">L’ensemble du bilan est réalisé avec <b>l’antenne de Lescher</b>. Votre corps est utilisé comme une station radio.</p>
				</div>

				<div className="basis-1/4">
					<Image src={antenneDeLecher} width="1000" height="668" alt="image de personnes" />
				</div>

			</div>
		</Layout>
	)
}

export default Home