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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" name="email" ></input>
            <input type="password" placeholder="password" name="password"></input>
            <button type="submit">sign in</button>
        </form>
    )
}
export default LoginPage;