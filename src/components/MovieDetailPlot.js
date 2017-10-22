import React from 'react';
import { Motion, spring } from 'react-motion';
import styles from '../styles/MovieDetailPlot.scss'
const MovieDetailPlot = ({Plot}) => (
    <div
        className={styles.container}
    >
        <Motion
            defaultStyle={{
                length: 1
            }}
            style={{
                length: spring(Plot.length,{
                    stiffness: 120,
                    damping: 50
                })
            }}
        >
            {style =>  <p> {Plot.slice(0, style.length)}. </p>}
        </Motion>
    </div>
);
export default MovieDetailPlot;