import React from 'react';

import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
    const { loading, cocktails } = useGlobalContext();

    if (loading) {
        return <Loading></Loading>;
    }
    if (cocktails.length < 1) {
        return <h2 className="section-title">No cocktails were found</h2>;
    }
    return (
        <section className="cocktails-section">
            <h2>Cocktails</h2>
            <div className="cocktails-container">
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item}></Cocktail>;
                })}
            </div>
        </section>
    );
};

export default CocktailList;
