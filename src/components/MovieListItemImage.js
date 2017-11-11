import React from 'react';
import { Motion, spring } from 'react-motion';
const MovieListItemImage = ({active, onClick, src}) => (
    <Motion
        style={{
            x: spring(active ? 1: 0.6),
            y: spring(active ? 1 : 0.6)
        }}
    >
        {({x, y}) => 
            <img 
                onClick={onClick}
                src={src} 
                alt="Poster" 
                style={{
                    transform: `scale(${x},${y})`,
                }}
            />
        }
    </Motion>
);
export default MovieListItemImage;