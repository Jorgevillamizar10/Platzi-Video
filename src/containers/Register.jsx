import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss'

const Register = props => {

    const [form,setValues] = useState ({
        email: '',
        name:'',
        password:'',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(form);
        registerRequest(form);
        props.history.push('/');
    }

    return(
        <section className="register">
            <section className="register__container">
                <h2>Registrate</h2>
                <form class="register__container-form" onSubmit={handleSubmit}>
                    
                    <input 
                        name="name"
                        className="input" 
                        type="text" 
                        placeholder="Nombre"
                        onChange={handleInput}
                    />

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

                    <button className="buttom">Registrarme</button>
                </form>
                <Link to="/login">
                    Iniciar Sesion
                </Link>
            </section>
        </section>
    );
}

export default connect(null,null)(Register);