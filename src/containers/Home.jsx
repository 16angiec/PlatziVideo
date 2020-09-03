import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
    const initialState = useInitialState(API);
    return (
        <div className="App">

            <Header />
            <Search />

            {Object.keys(initialState).map((category) => {
                console.log(category);
                if (category != null) {
                    return (<Categories title={category}>
                        <Carousel>
                            {initialState[category].map((data) => {
                                if (data != null) {
                                    return (<CarouselItem key={data.id} {...data} />)
                                }
                            })}
                        </Carousel>
                    </Categories>)
                }
            })}

            <Footer />
        </div>
    );
    /**return (
        <div className="App">
            <Header />
            <Search />

            {initialState.mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    ); */
}

export default Home;