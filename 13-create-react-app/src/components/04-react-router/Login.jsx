import React from 'react';

function connexion(event, props) {
    const login = event.target.login.value;
    const password = event.target.password.value;
    
    localStorage.setItem('user', login);
    console.log(password);
    
    props.history.push('/admin');

    event.preventDefault();
}

function Login(props) {

    return (
        <div className="container">
            <form onSubmit={(event) => connexion(event, props)}>
                <input type="text"  name="login" placeholder="login" />
                <input type="password" name="password"  placeholder="mot de passe" />
                <br/>
                <input type="submit" value="Connexion" />
            </form>
        </div>
    );
}
export default Login;