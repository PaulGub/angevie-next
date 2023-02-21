import type { NextPage } from 'next'
import Layout from "../components/Layout"

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="py-12">

				<h1 className=" flex justify-center items-center lg:text-7xl text-5xl pb-5">Tarifs</h1>

				<div className="grid lg:grid-cols-5 gap-10 p-4">


					<div
						className="w-full max-w-sm p-4 bg-pur border border-gray-200 rounded-lg shadow sm:p-8">
						<h5 className="mb-4 text-xl uppercase text-stone-50">1ER BILAN ÉNERGÉTIQUE AVEC VOTRE QUESTIONNAIRE</h5>
						<div className="flex items-baseline text-gray-900 dark:text-white">
							<span className="text-5xl font-extrabold tracking-tight">60</span>
							<span className="text-3xl font-semibold">€</span>
							<span className="ml-1 text-xl font-normal text-gray-700">/la séance</span>
						</div>

						<ul role="list" className="space-y-5 my-7">
							<li className="flex space-x-3 text-stone-50">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>3h en moyenne</span>
							</li>

						</ul>
					</div>

					<div
						className="w-full max-w-sm p-4 bg-pur/30 border border-gray-200 rounded-lg shadow sm:p-8">
						<h5 className="mb-4 text-xl uppercase text-dark">PEINTURE CANALISÉE 30 X 30 CM OU 41 X 33 CM</h5>
						<div className="flex items-baseline text-dark">
							<span className="text-5xl font-extrabold tracking-tight">60</span>
							<span className="text-3xl font-semibold">€</span>
							<span className="ml-1 text-xl font-normal text-gray-500">/la peinture</span>
						</div>

						<ul role="list" className="space-y-5 my-7">
							<li className="flex space-x-3 text-dark">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>Une semaine de délais</span>
							</li>

						</ul>
					</div>

					<div
						className="w-full max-w-sm p-4 bg-pur border border-gray-200 rounded-lg shadow sm:p-8">
						<h5 className="mb-4 text-xl uppercase text-stone-50">BILAN ÉNERGÉTIQUE</h5>
						<div className="flex items-baseline text-stone-50 ">
							<span className="text-5xl font-extrabold tracking-tight">60</span>
							<span className="text-3xl font-semibold">€</span>
							<span className="ml-1 text-xl font-normal text-gray-700">/la séance</span>
						</div>

						<ul role="list" className="space-y-5 my-7">
							<li className="flex space-x-3 text-stone-50">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>1h en moyenne</span>
							</li>

						</ul>
					</div>

					<div
						className="w-full max-w-sm p-4 bg-pur/30 border border-gray-200 rounded-lg shadow sm:p-8">
						<h5 className="mb-4 text-xl uppercase text-dark">UN PROTOCOLE DU BILAN AU CHOIX</h5>
						<div className="flex items-baseline  text-dark">
							<span className="text-5xl font-extrabold tracking-tight">25</span>
							<span className="text-3xl font-semibold">€</span>
							<span className="ml-1 text-xl font-normal text-gray-500">/la séance</span>
						</div>

						<ul role="list" className="space-y-5 my-7">
							<li className="flex space-x-3  text-dark">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>Couper le feu</span>
							</li>

							<li className="flex space-x-3  text-dark">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>Pansement énergétique</span>
							</li>

							<li className="flex space-x-3  text-dark">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>Etat actuel</span>
							</li>

							<li className="flex space-x-3  text-dark">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>Transfert quantique</span>
							</li>

							<li className="flex space-x-3  text-dark">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>Luxopuncture</span>
							</li>

							<li className="flex space-x-3  text-dark">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>Chromothérapie</span>
							</li>

							<li className="flex space-x-3  text-dark">

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<span>Anges</span>
							</li>

						</ul>
					</div>

					<div className="bg-pur p-4  text-stone-50  text-center rounded-lg flex flex-col justify-center">
						<div className={"flex justify-center pb-4"}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
							</svg>
						</div>


						<p className="text-xl uppercase"> Bon cadeaux</p>
						<p className="text-3xl font-bold">25 € - 60€ - 85€</p>
						<p className='italic'>Pour offrir une expérience à vos proches</p>
					</div>







				</div>




			</div>
		</Layout>
	)
}

export default Home