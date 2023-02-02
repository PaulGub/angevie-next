import type { NextPage } from 'next'
import Layout from "../components/Layout"

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="py-12">

				<h1 className=" flex justify-center items-center lg:text-7xl text-5xl pb-5">Tarifs</h1>

				<div className="grid lg:grid-cols-2 gap-10 p-4">

					<div className="bg-pur p-4  text-center rounded-lg flex flex-col justify-center">
						<p className="text-stone-50 text-xl uppercase"> 1er bilan énergétique avec votre questionnaire</p>
						<p className="text-stone-50 text-3xl font-bold">60 €</p>
						<p className='text-stone-50 italic'> 3h en moyenne</p>
					</div>

					<div className="bg-pur p-4  text-center rounded-lg flex flex-col justify-center">
						<p className="text-stone-50 text-xl uppercase">peinture canalisée 30 x 30 cm ou 41 x 33 cm</p>
						<p className="text-stone-50 text-3xl font-bold">60 €</p>
						<p className='text-stone-50 italic'>Une semaine de délais</p>
					</div>

					<div className="bg-pur p-4  text-center rounded-lg flex flex-col justify-center">
						<p className="text-stone-50 text-xl uppercase"> bilan énergétique</p>
						<p className="text-stone-50 text-3xl font-bold">60 €</p>
						<p className='text-stone-50 italic'>1h en moyenne</p>
					</div>

					<div className="bg-pur p-4  text-center rounded-lg flex flex-col justify-center">
						<p className="text-stone-50 text-xl uppercase"> Bon cadeaux</p>
						<p className="text-stone-50 text-3xl font-bold">25 € - 60€ - 85€</p>
						<p className='text-stone-50 italic'>Pour offrir une expérience à vos proches</p>
					</div>

					<div className="bg-pur p-4  text-center rounded-lg flex flex-col justify-center">
						<p className="text-stone-50 text-xl uppercase"> un protocole du bilan au choix </p>
						<p className='text-stone-50'>(couper le feu, pansement énergétique,…)</p>
						<p className="text-stone-50 text-3xl font-bold">25 €</p>
					</div>

				</div>


			</div>
		</Layout>
	)
}

export default Home