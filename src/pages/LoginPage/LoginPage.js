import './Login.scss';
import logo from '../../assets/takes2.png';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
function LoginPage(){

    function handleSubmit(event){
        event.preventDefault();
        //console.log(event.target.email.value) 
        axios.post('http://localhost:8080/signin', {email:event.target.email.value, password:event.target.password.value})
            .then((result) => {
               if(result.data.page.redirect == '/'){
                   sessionStorage.setItem("id", result.data.id );
                   window.location = '/'

               }else{
                   window.location = "/signin"
               }
        })
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <img onClick={event =>  window.location.href='/'} className="login__logo" src={logo} alt="logo"/>
            <input className="form__input" type="text" placeholder="Email" name="email" ></input>
            <input className="form__input" type="password" placeholder="Password" name="password"></input>
            <button className="form__submit" type="submit">Sign In</button>
        </form>
    )
}
export default LoginPage;