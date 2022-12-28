import Layout from "../components/Layout"
import PrestationCard from "../components/PrestationCard";

class PrestationProps {
}

export async function getServerSideProps(context: any) {

    const callAPIHomePage = async () => {
        try {
            const res = await fetch(`https://admin-angeetvie.go.yj.fr/wp-json/api/homePage`)
            const data = await res.json()
            return data
        } catch (error) {
            return error
        }
    };

    let prestationPage = await callAPIHomePage()

    const props: PrestationProps = {
        prestationPage: prestationPage,
    }

    return {
        props: props
    };

}

export default function Prestations(props: any) {

    const prestations = props.prestationPage.prestations

    return (
        <Layout>
            <div className="pt-28 pb-12">

                <h1 className=" flex justify-center items-center font-fancy lg:text-9xl text-7xl">Prestations</h1>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 p-4">
                    {prestations.map((news: any, index: number) => {
                        return (
                            <div key={index}>
                                <PrestationCard data={news} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}