import React from 'react';
import { Motion, spring } from 'react-motion';
import styles from '../styles/HomeContent1.scss';
const content1 = 'Share Your Opinion about Movies.';
const HomeContent1 = () => (
    <div
        className={styles.container}
    >
        <div
            className={styles.overlay}
        >
        </div>
        <div
            className={styles.content}
        >
        <Motion
            defaultStyle={{
                v: 0
            }}
            style={{
                v: spring(content1.length,{
                    stiffness: 60,
                    damping: 50
                })
            }}
        >
            {style =>
                <h4
                    id={styles.content1}
                >{content1.slice(0, style.v)}</h4>
            }
        </Motion>
        
        </div>
    </div>
)
export default HomeContent1;