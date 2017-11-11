import React from 'react';
import { Motion, spring } from 'react-motion';
import styles from '../styles/MovieDetailRating.scss';
const MovieDetailRating = ({imdbRating, Metascore,Ratings}) => {
    let Tomato;
    let MetaCritic;
    let IMDB;
    Ratings.forEach((rating) => {
        switch(rating.Source) {
            case 'Rotten Tomatoes': 
                Tomato = {
                    Source: rating.Source,
                    Value: Number(rating.Value.slice(0,rating.Value.lastIndexOf('%')))
                }
                break;
            case 'Metacritic':
                MetaCritic = {
                    Source: rating.Source,
                    Value: Number(rating.Value.slice(0, rating.Value.lastIndexOf('/')))
                }
                break;
            case 'Internet Movie Database':
                IMDB = {
                    Source: 'Imdb',
                    Value: Number(rating.Value.slice(0, rating.Value.lastIndexOf('/')))
                }
                break;
            default: break;
        }
    })
    return (
        <div
        className={styles.container}
    >
        <h4>Ratings</h4>
        <div>
            {!IMDB
                ?<p>
                    Imdb: 
                    <Motion
                        defaultStyle={{ 
                            value: 0
                        }}
                        style={{ 
                            value: spring(Number(imdbRating), {
                                stiffness: 120,
                                damping: 17
                            })
                        }}
                    >
                        {style => <span id={styles.imdb}>{style.value.toFixed(1)}</span>}
                    </Motion>
                </p>
                : null
            }
        </div>
        <div>
            {!MetaCritic
                ? <p>
                Metascore: 
                <Motion
                    defaultStyle={{ value: 0}}
                    style={{ value: spring(Number(Metascore))}}
                >
                    {style => <span id={styles.metac}>{style.value.toFixed(0)}</span>}
                </Motion>
                </p>
                : null
            }
        </div>
        <div>
            {IMDB
                ? <Motion
                    defaultStyle={{ value: 0 }}
                    style={{value: spring(Number(IMDB.Value))}}
                >
                {(style) =>  <p>{IMDB.Source}:  <span id={styles.imdb}>{style.value.toFixed(1)}/10</span> </p>}
                </Motion>
                : null
            }
        </div>
        <div>
            {Tomato 
                ?<Motion
                    defaultStyle={{ value: 0 }}
                    style={{value: spring(Number(Tomato.Value))}}
                >
                {(style) =>  <p>{Tomato.Source}:  <span id={styles.tomato}>{style.value.toFixed(0)}%</span> </p>}
                </Motion>
                : null
            }
        </div>
        <div>
            {MetaCritic 
                ?<Motion
                    defaultStyle={{ value: 0 }}
                    style={{value: spring(Number(MetaCritic.Value))}}
                >
                {(style) =>  <p>{MetaCritic.Source}: <span id={styles.metac}>{style.value.toFixed(0)}</span></p>}
                </Motion>
                : null
            }
        </div>
    </div>
    )
};
export default MovieDetailRating;