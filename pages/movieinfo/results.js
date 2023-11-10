import Layout from '../../components/layout';
import { useRouter } from 'next/router';


export default function Results({ title, overview }) {
    const router = useRouter()

    const queryHandler = (e) => {
        e.preventDefault()
        router.push('/movieinfo')
    }

    return (
        <Layout>
            <h1>Title: <em>{title}</em></h1>
            <br />
            <h6>Overview:</h6><br />
            <p><em>{overview}</em></p><br />
            <button className="govuk-button" onClick={queryHandler} data-module="govuk-button">
                Search Another Movie
                <br />
            </button>
        </Layout>)
}

export async function getServerSideProps() {
    const req = await fetch('http://localhost:3000/api/movieapi')
    const response = await req.json()
    console.log(response)
    return { props: { title: response.title, overview: response.overview } }
}