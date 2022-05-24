import { Link, Redirect } from "react-router-dom";

function Home (){

    const logoutHandler = () =>{
        sessionStorage.clear();
        window.location = '/';
    }

    return(

        <section className="header">
            <h1>South Florida</h1>
            <Link to="/mangos">Mangos</Link>
            <Link to="/avacados">Avacados</Link>
            {
            (sessionStorage.length == 0)?
                <Link to="/signin">Sign in</Link>: 
                <div>
                    <button type="logout" onClick={logoutHandler}>log out</button>
                    <button type="create listing" onClick={event =>  window.location.href='/createlisting'}>create listing</button> 
                </div>
        
            
            }
        </section>
    )
}
export default Home;