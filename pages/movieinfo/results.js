import Layout from '../../components/layout';
import { useRouter } from 'next/router';


export default function Results({ results }) {
    const router = useRouter()

    console.log("Results is:")
    console.log(results)

    const queryHandler = (e) => {
        e.preventDefault()
        router.push('/movieinfo')
    }

    return (
        <Layout>
            {results.results.map((result) => (
                <div key={result.id} >
                    <h1>Title: <em>{result.original_title}</em></h1>
                    <br />
                    <h6>Overview:</h6><br />
                    <p><em>{result.overview}</em></p><br />
                </div>
            ))}

            <button className="govuk-button" onClick={queryHandler} data-module="govuk-button">
                Search Another Movie
                <br />
            </button>
        </Layout>)
}

// export async function getServerSideProps(context) {
//     let query = context.query.query
//     const req = await fetch('http://localhost:3000/api/movieapi')
//     const response = await req.json()
//     console.log(response)
//     return { props: { title: response.title, overview: response.overview } }
// }

export async function getServerSideProps(context) {
    let query = context.query.query
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + query + '&include_adult=false&language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.API_KEY
        }
    };

    const req = await fetch(url, options)
    const response = await req.json()
    console.log(response)

    return {
        props: { results: response }
    }
}
