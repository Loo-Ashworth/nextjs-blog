import Layout from '../components/layout';
import { useRouter } from 'next/navigation'

export default function MovieInfo() {
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault()
        router.push('/movieinfo/results')
    }

    return (
        <Layout>
            <h1>Movie Info</h1>
            <br />
            <h6>Welcome to Movie Info, what movie do you want to find out about?</h6>
            <section>
                <br />
                <form><input type='text'></input><br />
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