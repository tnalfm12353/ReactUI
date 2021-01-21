import LoginForm from './LoginForm.jsx';

const Login = () =>{
    
    function handleEnterKey(e){
        if(e.key == 'Enter'){
            this.handleLogIn();
        }
    }

    function handleChange(e){
        
    }

    function handleLogIn(){

    }

    return(
        <LoginForm
            onChange={handleChange}
            onKeyPress={handleEnterKey}
            LogIn ={handleLogIn}
        />
    )
}

export default Login;