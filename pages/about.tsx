import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Image from 'next/image'
import angelique from '../images/angelique.jpg'

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="p-12">
				<div className="flex pb-4">

					<div className="basis-1/4 p-4">
						<Image className="rounded-full" src={angelique} width="1000" height="668" alt="image de personnes" />
					</div>

					<div className="basis-3/4 flex flex-col justify-center p-6">
						<h1 className="font-fancy text-9xl pb-4">Angélique Spaziani</h1>
						<p>Les défaites de la vie conduisent aux plus grandes victoires.</p>
					</div>
				</div>

				<div className="text-2xl">
					<p>
						Ma vie a commencé à Tours dans les années 1970. Mon arrière-grand-mère a commencé à m’enseigner (me transmettre) ses connaissances des plantes et à les respecter.
					</p>
					<br></br>
					<p>
						Chaque fin de semaine et pendant les vacances je retrouvais la maison familiale. Au mois d’août nous avions en charge le jardin. La cueillette des fruits et légumes, l’arrosage et le désherbage étaient les principales activités, sans oublier la préparation des conserves et la conception de bouquets de fleurs.
						Dans mon adolescence, j’ai rencontré une personne qui a décelé que j’avais du magnétisme. J’ai alors pratiqué sur mes proches, j’ai du arrêter car ma méconnaissance m’a épuisée.
					</p>
					<br></br>
					<p>
						Le nez dans les études puis dans la vie active le temps est passé. Quelques déménagements entre Strasbourg, Annecy, Grenoble et Saint Etienne, puis la  vie  de famille. Cependant, une tendinite chronique m’empêchait de porter mon deuxième bébé. C’est alors que j’ai découvert la bio-énergie. En effet ma prof de yoga avait suivi la formation acmos, et suite à mon premier bilan la douleur a disparue dans les heures qui ont suivies.
					</p>
					<br></br>
					<p>
						A cette époque je travaillais dans l’industrie la tête dans le guidon !
					</p>
					<br></br>
					<p>
						Régulièrement j’allais voir ma bio-énergéticienne pour réaliser des bilans afin de rester en bonne santé.
						Mon mari a eu une mutation sur Bordeaux en 2015. Lors d’un entretien d’embauche je me suis rendue compte que je ne pouvais pas exercer mon métier comme je l’aurai aimé…
					</p>
					<p>
						Un mois plus tard j’avais un rendez-vous avec ma bio-énergéticienne, c’est alors que je lui ai demandé comment faire pour suivre la formation qu’elle avait reçue. « Depuis le temps que j’attends cette question ! » m’a-t-elle répondu. Sa réponse m’a laissé sans voix. En fait, elle avait patienté que je prenne conscience que je pouvais évoluer vers de nouveaux horizons. Elle m’a expliqué que c’était à moi de trouver mon chemin.
					</p>
					<br></br>
					<p>
						En 2016, je commençais la formation. Quel bonheur de se trouver à sa place !
					</p>
					<br></br>
					<p>
						J’ai était portée par la joie lorsque j’ai réussi mon certificat de bio-énergéticienne acmos au printemps 2017. Dès l’été mon activité était créée.
					</p>
					<br></br>
					<p>
						Depuis j’ai suivi plusieurs stages afin de mieux connaître les plantes, les cristaux et les anges
					</p>
				</div>

			</div>


		</Layout>
	)
}

export default Home