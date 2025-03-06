import React from 'react';
const HeroCard = ({ hero }) => {
    return (
        <div className = "hero-card">
            <div className = "hero-card-inner">
                <div className = "hero-card-front">
                    <div class = "hero-details">
                        <h2>{hero.name}</h2>
                        <p><strong>Вселенная:</strong> {hero.universe}</p>
                        <p><strong>Альтер-эго:</strong> {hero.alterego}</p>
                        <p><strong>Род деятельности:</strong> {hero.occupation}</p>
                        <p><strong>Друзья:</strong> {hero.friends}</p>
                        <p><strong>Суперсилы:</strong> {hero.superpowers}</p>
                    </div>
                    <img className = "hero-image" src={hero.url} alt={hero.name} />
                </div>
                <div className = "hero-card-back">
                    <p>{hero.info}</p>
                </div>
            </div>
        </div>    
    );
};

export default HeroCard;