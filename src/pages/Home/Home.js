import { Link, Redirect } from "react-router-dom";
import './Home.scss';
import logo from '../../assets/takes2.png';
function Home (){

    const logoutHandler = () =>{
        sessionStorage.clear();
        window.location = '/';
    }

    return(

        <section className="login">
            {/* <h1 className="login__title">Takes2 to Mango</h1> */}
            <img className="login__logo" src={logo} alt="logo"/>
            <section className="login__links">
            {sessionStorage.length == 0?
            <Link className="login__route"to="/mangos">Browse Mangos as Guest</Link>:
            <Link className="login__route"to="/mangos">Browse Mangos</Link>}
            {
            (sessionStorage.length == 0)?
                <Link className="login__route" to="/signin">Sign in</Link>: 
                <div className="login__buttons">
                    <button className="detailPage__options--button" type="logout" onClick={logoutHandler}>Log Out</button>
                    <button className="detailPage__options--button" type="create listing" onClick={event =>  window.location.href='/createlisting'}>Create Listing</button> 
                </div>
            }
            </section>
        </section>
    )
}
export default Home;