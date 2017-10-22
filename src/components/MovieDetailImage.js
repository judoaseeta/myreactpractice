import React from 'react';
import { Motion, spring } from 'react-motion';
const MovieDetailImage = ({Poster}) => (
    <Motion
        defaultStyle={{x: 0, y: 0}}
        style={
            { x: spring(1, {
            stiffness: 30,
            damping: 20
            }),
            y: spring(1, {
                stiffness: 30,
                damping: 20
            })
        }}
    >
    {(style) => <img style={{
        transform: `scale(${style.x}, ${style.y})`
    }} src={Poster} alt="Poster" />}
    </Motion>
);
export default MovieDetailImage;