import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search'
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem'; 

import '../assets/styles/App.scss';
import Header from '../components/Header';

    const Home = ({search,myList,trends,originals}) => {

    //  const [videos, setVideos] = useState({
    //      'mylist': [],
    //      'trends':[],
    //      'originals':[],
    //  });

    //  useEffect(() => { //Recordar poner parametro para que escuche el useEffect sino quedara en un bucle infinito
    //     fetch('http://localhost:3000/initalState')//Hace fetch a la api
    //       .then((response) => response.json())//La respuesta de la promesa la transforma en un json
    //       .then((data) => setVideos(data));//La data de la respuesta en json se la pasa a la funcion setVideos del estado
    // }, []);//parametro de useEffect

    // console.log(videos);

        const isVideoSearched = Object.keys(search).length > 0;

    return  (
        <div className="App">
        
            <Search isHome/> 

                {isVideoSearched &&
                    <Categories title="Video Encontrado">
                        <Carousel>
                            <Carouselitem 
                                key={search.id}
                                {...search}
                                isVideoSearched
                            />
                        </Carousel>
                    </Categories>
                }

                {myList.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                    {myList.map((item) =>
                    <Carouselitem
                        key={item.id}
                        {...item} 
                        isList
                    />
                    )}
                    </Carousel>
                </Categories>
                }
            
            <Categories title="Tendencias">
                <Carousel>
                    {
                    trends.map((item) => <Carouselitem key={item.id} {...item} />)
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                {
                    originals.map((item) => <Carouselitem key={item.id} {...item} />)
                    }
                </Carousel>
            </Categories>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        search: state.search,
    }
}

export default connect(mapStateToProps,null)(Home);