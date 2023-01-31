import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Image from 'next/image'
import angelique from '../images/angelique.jpg'

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="p-12 pt-32">
				<div className="grid lg:grid-cols-4 pb-6">

					<div className="grid">
						<div className=" flex flex-col items-center justify-center">
							<Image className="rounded-full" src={angelique} width="200" height="200" alt="image de angelique spaziani" />
						</div>
					</div>

					<div className="grid lg:col-span-3">
						<div className="flex flex-col lg:p-6">
							<h1 className="font-fancy lg:text-9xl text-7xl pb-4 lg:text-left text-center">Angélique Spaziani</h1>
							<p className="lg:text-left text-center">Les défaites de la vie conduisent aux plus grandes victoires. (Max-Pol Fouchet)</p>
						</div>
					</div>

				</div>

				<div className="text-2xl text-justify">
					<p>
						Ma vie a commencé à Tours dans les années 1970. Mon arrière-grand-mère a commencé à me transmettre ses connaissances des plantes et à les respecter.
					</p>
					<br></br>
					<p>
						Chaque fin de semaine et pendant les vacances je retrouvais la maison familiale. Au mois d’août nous avions en charge le jardin. La cueillette des fruits et légumes, l’arrosage et le désherbage étaient les principales activités, sans oublier la préparation des conserves et la conception de bouquets de fleurs.
						Dans mon adolescence, j’ai rencontré une personne qui a décelé que j’avais du magnétisme. J’ai alors pratiqué sur mes proches, j’ai dû arrêter car ma méconnaissance m’a épuisée.
					</p>
					<br></br>
					<p>
						Le nez dans les études puis dans la vie active le temps est passé. Quelques déménagements entre Strasbourg, Annecy, Grenoble et Saint Etienne, puis la  vie  de famille. Cependant, une tendinite chronique m’empêchait de porter mon deuxième bébé. C’est alors que j’ai découvert la bio-énergie. En effet ma prof de yoga avait suivi la formation ACMOS, et suite à mon premier bilan la douleur a disparu dans les heures qui ont suivi.
					</p>
					<br></br>
					<p>
						A cette époque je travaillais dans l’industrie la tête dans le guidon !
					</p>
					<br></br>
					<p>
						Régulièrement j’allais voir ma bio-énergéticienne pour réaliser des bilans afin de rester en bonne santé.
						Mon mari a eu une mutation sur Bordeaux en 2015. Lors d’un entretien d’embauche je me suis rendue compte que je ne pouvais pas exercer mon métier comme je l’aurais aimé…
					</p>
					<p>
						Un mois plus tard j’avais un rendez-vous avec ma bio-énergéticienne, c’est alors que je lui ai demandé comment faire pour suivre la formation qu’elle avait reçue. « Depuis le temps que j’attends cette question ! » m’a-t-elle répondu. Sa réponse m’a laissée sans voix. En fait, elle avait patiemment attendu ma prise de conscience. Elle validait ainsi que je pouvais évoluer vers de nouveaux horizons.
					</p>
					<br></br>
					<p>
						En 2016, je commençais la formation ACMOS à Bayonne. Quel bonheur de se trouver à sa place !
					</p>
					<br></br>
					<p>
						J’ai été portée par la joie lorsque j’ai réussi mon certificat de bio-énergéticienne acmos au printemps 2017.
					</p>
					<br></br>
					<p>
						Dès l’été mon activité était créée.
					</p>
					<br></br>
					<p>
						Depuis j’ai suivi plusieurs stages afin de mieux connaître les plantes, les cristaux et les anges.
					</p>
				</div>

			</div>


		</Layout>
	)
}

export default Home