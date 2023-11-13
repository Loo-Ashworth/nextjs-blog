import Layout from '../components/layout';
import { useRouter } from 'next/navigation'

export default function MovieInfo() {
    const router = useRouter()

    let query;
    const userInputHandler = (value) => {
        query = value;
    }

    const submitHandler = (e) => {
        e.preventDefault()
        router.push('/movieinfo/results?query=' + query)
    }

    return (
        <Layout>
            <h1>Movie Info</h1>
            <br />
            <h6>Welcome to Movie Info, what movie do you want to find out about?</h6>
            <section>
                <br />
                <form><input className="govuk-input" type='text' onChange={(event) => userInputHandler(event.target.value)}></input><br />
                    <br />
                    <button className="govuk-button" onClick={submitHandler} data-module="govuk-button">
                        Get Info!
                        <br />
                    </button>
                </form>
            </section>

        </Layout>
    )
}