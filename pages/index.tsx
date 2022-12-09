import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Image from 'next/image'
import logo from '../images/logo.svg'
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
			<div className="text-xl">

				<div className="bg-cover bg-[url('../images/bg-main.jpg')] lg:h-screen min-h-fit min-w-fit  flex flex-col items-center justify-center">

					<Image src={logo} width="400" height="400" alt="logo ange & vie" />

					<h1 className=" text-stone-5 pb-2 text-stone-50 text-center">Angelique Spaziani</h1>

					<p className=" text-stone-5 pb-2 text-stone-50 text-center">Soins holistique</p>

					<p className=" text-stone-5 pb-2 text-stone-50 text-center">Prochainement vous pourrez venir à mon cabinet</p>

					<p className=" text-stone-5 pb-2 text-stone-50 text-center">Je me déplace à votre domicile</p>

					<p className=" text-stone-5 pb-2 text-stone-50 text-center">Je peux également travaille à distance</p>

					<div className="flex">
						<Image src={phoneLogo} width="20" height="17" alt="image telephone" />
						<p className=" text-stone-5 text-stone-50 pl-2">07 67 05 57 90</p>
					</div>

				</div>

				<div className="grid lg:grid-cols-5">

					<div className="grid lg:col-span-4">
						<div className=" flex flex-col items-center justify-center p-6">
							<p>A tout moment vous pouvez bénéficier d’un soin énergétique, aux changements de saison, lorsqu’une douleur apparaît ou est chronique, avant ou après une opération, en cas de stress, ou tout simplement quand tout va bien !</p>
						</div>
					</div>

					<div className="grid">
						<div className=" flex flex-col items-center justify-center">
							<Lottie className="w-[300px] h-[300px]" animationData={DayNight} />
						</div>
					</div>

				</div>

				<div className="grid lg:grid-cols-5 bg-pur">

					<div className="grid">
						<div className=" flex flex-col items-center justify-center">
							<Lottie className="w-[300px] h-[300px]" animationData={Yoga} />
						</div>
					</div>

					<div className="grid lg:col-span-4">
						<div className="flex flex-col items-center justify-center p-6">
							<p className="text-stone-50">Le <b>soin énergétique</b> que je réalise vous permettra de trouver un mieux-être général, tant sur le plan physique, morale que mental. Le bilan rétablira votre équilibre en profondeur. Je suis certifiée <b>bio-énergéticienne acmos</b>.</p>
						</div>
					</div>

				</div>

				<div className="grid lg:grid-cols-5">

					<div className="grid lg:col-span-4">
						<div className="flex flex-col items-center justify-center p-6">
							<p>Le <b>rééquilibrage</b> se déroule en plusieurs phases. Tout d’abord j’interroge votre corps afin de faire un constat. Ensuite plusieurs protocoles peuvent être réalisés. Par exemple, en exécutant des <b>transferts quantiques</b> et des points d’<b>acupunctures</b>. En effet la méthode <b>acmos</b> a pour principe de rétablir et de faire circuler d’information.
								<br></br>
								J’utilise plus de 300 produits pour les transferts quantiques, par résonance plusieurs d’entre eux sont choisis par votre corps suivant votre degré d’urgence.
								Je continue avec la <b>chromothérapie</b> afin d’éliminer vos toxines vibratoires.
								<br></br>
								Enfin, si nécessaire vous pouvez profiter d’un soin <b>magnétisme</b> ou autres…</p>
						</div>
					</div>

					<div className="grid">
						<div className="flex flex-col items-center justify-center">
							<Lottie className="w-[300px] h-[300px]" animationData={Body} />
						</div>
					</div>

				</div>

				<div className="grid lg:grid-cols-5 bg-pur">

					<div className="grid">
						<div className="p-4 flex flex-col items-center justify-center">
							<Image src={peoples} width="300" height="150" alt="image de personnes" />
						</div>
					</div>

					<div className="grid lg:col-span-4">
						<div className="flex flex-col items-center justify-center p-6">
							<p className=" text-stone-50">Le soin s’adresse de 7 à 99 ans et plus. Pour les bébés et les nourrissons il est recommandé de réaliser le soin à la maman. L’enfant à cet âge est encore dans l’énergie de sa mère. Vos amis les animaux peuvent aussi en bénéficier.</p>
						</div>
					</div>

				</div>

				<div className="grid lg:grid-cols-5">

					<div className="grid lg:col-span-4">
						<div className="flex flex-col justify-center p-6">
							<p>L’ensemble du bilan est réalisé avec <b>l’antenne de Lescher</b>. Votre corps est utilisé comme une station radio.</p>
						</div>
					</div>

					<div className="grid">
						<div className="p-4 flex flex-col items-center justify-center">
							<Image src={antenneDeLecher} width="300" height="150" alt="image de antenne de lecher" />
						</div>
					</div>

				</div>

			</div>
		</Layout>
	)
}

export default Home