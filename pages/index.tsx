import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="lg:text-2xl text-xl">

				<div className="bg-cover bg-[url('/index/background.jpg')] lg:h-screen h-auto min-h-fit min-w-fit  flex flex-col  justify-center">

					<div className="grid lg:grid-cols-5 grid-cols-1">

						<div className='lg:p-20 py-7 px-2 col-span-3 text-center lg:text-left'>

							<p className="text-pur">Bienvenue sur Ange & Vie, je suis </p>

							<h1 className=" text-stone-5 pb-2 text-7xl ">Angelique Spaziani</h1>

							<h1 className="text-4xl">
								<Typewriter
									options={{
										strings: ['Praticienne holistique', 'Energeticienne', 'Guerisseuse'],
										autoStart: true,
										loop: true,
									}}
								/>
							</h1>


							<p className=" text-stone-5 pb-4 pt-5">Actuellement, je viens à votre domicile ou je travaille à distance. Prochainement, vous pourrez venir à mon cabinet.</p>

							<Link href="tel:+33767055790">
								<button type="button" className="transition duration-1000 ease-in-out  hover:scale-105  text-white  bg-pur hover:bg-white hover:text-pur hover:border-pur border focus:ring-4 focus:outline-none focus:ring-pur/50 font-medium rounded-full  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
									</svg>

									07 67 05 57 90
								</button>
							</Link>

						</div>

						<div className='col-span-2 lg:justify-start justify-center flex py-7 px-2'>
							<Image className="rounded-full" src={"/index/angelique.png"} width="400" height="400" alt="image de angelique spaziani" />
						</div>

					</div>

				</div>

				<div className="px-6 py-10 leading-loose">

					<h1 className="font-bold text-4xl uppercase text-pur ">Pour quelles raisons venir voir une Energeticienne ?</h1>

					<p>- En cas de stress, angoisses, anxiété, tristesse, colère, burn out</p>
					<p>- Avant et/ou après une opération chirurgicale</p>
					<p>- Fatigue</p>
					<p>- Maladie chronique</p>
					<p>- Traitement médical lourd</p>
					<p>- Douleurs chronique ou soudaine</p>
					<p>- Maux de tête</p>
					<p>- Sentiment de mal être, de solitude </p>
					<p>- Perte ou prise de poids </p>
					<p>- Addictions </p>
					<p>- Candidose, remontées gastrique</p>
					<p>- Fertilité </p>
					<p>- Changement de saison </p>
					<p>- Et aussi quand tout va bien ;-) </p>
				</div>

				<div className="px-6 py-10 bg-pur text-stone-50 leading-loose">

					<h1 className="font-bold text-4xl uppercase">Les bienfaits le plus souvent ressenti après un bilan énergétique : </h1>

					<p>- Harmonisation de votre énergie</p>
					<p>- Stimule vos défenses immunitaires</p>
					<p>- Meilleur moral, joie de vivre</p>
					<p>- Diminution de la douleur</p>
					<p>- Élimination des toxines</p>
					<p>- Meilleures assimilation de vos traitements</p>
					<p>- Maintenir sa santé</p>
				</div>

				<div className="px-6 py-10 leading-loose ">

					<h1 className="font-bold text-4xl uppercase text-pur">Déroulé des séances :</h1>

					<p>- Accueil, écoute et recueil de vos besoins. Lors du premier bilan je vous propose de répondre à un questionnaire afin de faire un point.</p>
					<p>- Pour commencer, j’interroge votre corps avec l’antenne de Lescher afin de faire votre bilan. </p>
					<p>- Ensuite plusieurs protocoles peuvent être réalisés pour retrouver votre harmonie. </p>
					<p>- Par exemple, en exécutant des <b>transferts quantiques</b> et des points d’<b>acupunctures</b>.</p>
					<p>- En effet la méthode <b>ACMOS</b>  a pour principe de rétablir et de faire circuler l’information.</p>
					<p>- J’utilise plus de 300 produits pour les transferts quantiques, par résonance plusieurs d’entre eux sont choisis par votre corps suivant votre degré d’urgence.</p>
				</div>

				<div className="px-6 py-10 bg-pur text-stone-50 leading-loose">

					<h1 className="font-bold text-4xl uppercase">A qui s’adresse un bilan énergétique (Energeticienne) ? </h1>

					<p>- Enfant à partir de 7 ans jusqu’à 100 ans et plus. </p>
					<p>- Les nouveaux nés jusqu’aux enfants de 7 ans sont dans l’énergie de la maman, le bilan se réalise sur la mère. </p>
					<p>- Exceptionnellement, si blessure il est possible de travailler en direct sur l’enfant. </p>
					<p>- Nos amis les animaux peuvent aussi bénéficier d’un bilan.</p>
				</div>

				<div className="px-6 py-10 leading-loose ">

					<h1 className="font-bold text-4xl uppercase text-pur">En résumé :</h1>

					<p>Le <b>bilan énergétique</b> que je réalise vous permettra de trouver un mieux-être général, tant sur le plan physique, moral que mental. </p>
					<p>Le bilan rétablira votre équilibre en profondeur. </p>
					<p>Je suis certifiée <b>bio-énergéticienne ACMOS</b> (Analyse de Compatibilité des Matières sur l’Organisme et leur Synergie).</p>
				</div>

			</div>
		</Layout>
	)
}

export default Home