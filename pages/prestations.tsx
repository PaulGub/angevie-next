import type { NextPage } from 'next'
import Layout from "../components/Layout"

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="flex justify-center py-10 bg-gray-200">
				Prestations
			</div>
		</Layout>
	)
}

export default Home