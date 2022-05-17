import { Link, Redirect } from "react-router-dom";

function Home (){

    return(
        <section className="header">
            <h1>South Florida</h1>
            <Link>Mangos</Link>
            <Link>Avacados</Link>
        </section>
    )
}
export default Home;