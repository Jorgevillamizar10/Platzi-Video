import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getSearch } from '../actions';
import '../assets/styles/components/Search.scss'

const Search = ({ isHome, getSearch }) => {

    const inputStyle = classNames('input',{
        isHome
    });

    const handleOnChange = event => {
        getSearch(event.target.value)
    }

    return(
        <section className="main">
        <h2 className="main_title">¿Que quieres ver hoy?</h2>
        <input 
            className={inputStyle} 
            type="text" 
            placeholder="Buscar..." 
            onChange={handleOnChange}
        />
        </section>
    );
}

const mapDispatchToProps = {
    getSearch,
}

export default connect(null,mapDispatchToProps)(Search);