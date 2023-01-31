import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Image from 'next/image'
import logo from '../images/logo.svg'
import phoneLogo from '../images/phoneLogo.png'

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="lg:text-2xl text-xl">

				<div className="bg-cover bg-[url('../images/phare.jpg')] h-screen min-h-fit min-w-fit  flex flex-col items-center justify-center">

					<Image src={logo} width="400" height="400" alt="logo ange & vie" />

					<h1 className=" text-stone-5 pb-2 text-slate-50 text-center">Angelique Spaziani</h1>

					<p className=" text-stone-5 pb-2 text-slate-50 text-center">Praticienne holistique</p>

					<p className=" text-stone-5 pb-2 text-slate-50 text-center">Prochainement vous pourrez venir à mon cabinet</p>

					<p className=" text-stone-5 pb-2 text-slate-50 text-center">Je me déplace à votre domicile</p>

					<p className=" text-stone-5 pb-2 text-slate-50 text-center">Je peux également travailler à distance</p>

					<div className="flex">
						<Image src={phoneLogo} width="20" height="17" alt="image telephone" />
						<p className=" text-stone-5 text-slate-50 pl-2">07 67 05 57 90</p>
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