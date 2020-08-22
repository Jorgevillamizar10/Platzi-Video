import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import TwitterIcon from '../assets/static/twitter.svg';
import FaceIcon from '../assets/static/facebook.svg';
import '../assets/styles/components/Login.scss'

const Login = (props) => {

    const[form,setValues] = useState({
        email:' ',
    });

    const handleInput = (event) =>{
        setValues({
            ...form,
            [event.target.name]:event.target.value
        });
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');//lo enviamos al home si cumple con las propiedades de login
    }

    return(
        <section className="login">
            <section className="login_container">
                <h2>Inicia Sesion</h2>
                <form className="login_container-form" onSubmit={handleSubmit}>
                    <input 
                        name="email"
                        className="input" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input 
                        name="password"
                        className="input" 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar sesion</button>
                    <div className="login_container-remember">
                        <label>
                            <input type="checkbox" id="box1" value="checkbox"/>Recuerdame
                        </label>
                        <a href="/">Olvide mi contraseña</a>
                    </div>
                </form>
                <section className="login_container-socialmedia">
                    <div><img src={TwitterIcon} alt="Twitter" />Inicia sesion con Twitter</div>
                    <div><img src={FaceIcon} alt="Facebook"/>Inicia sesion con Facebook</div>
                </section>
                <p className="login_container-registro">No tienes ninguna cuenta {' '}
                    <Link to="/register">
                        Registrate
                    </Link>
                </p>
            </section>
        </section>
    );
}

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null,mapDispatchToProps)(Login);