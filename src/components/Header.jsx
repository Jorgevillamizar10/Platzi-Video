import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/Platzi-Video.png';
import userIcon from '../assets/static/Hombre.png';

const Header = (props) => {

    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});//le envio un objeto vacio
    }
    
    return(
        <header className="header">
            <Link to="/">
                <img className="header_img" src={logo} alt="Aqui va el Llogo de Platzi" />
            </Link>
            <div className="header_menu">
                <div className="header_menu-perfil">
                    
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email} /> :
                        <img src={userIcon} alt="User" />
                    }

                    <p> <strong>Perfil</strong> </p>
                </div>
                <div>
                    <ul> 

                        {hasUser ?
                            <li><a href="/">{user.name}</a></li> 
                            : null
                        }

                        {hasUser ?
                        <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li>
                        :
                            <li>
                                <Link to="/login">
                                    Iniciar Sesion
                                </Link>
                            </li>
                        }

                    </ul>
                </div>

            </div>
        </header>
    );
}

const mapStateToProps = state => {
    return{
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);