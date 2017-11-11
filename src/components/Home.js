import React from 'react';
import HomeContent1 from './HomeContent1';
import styles from '../styles/Home.scss';
const Home = (props) => (
    <div
        className={styles.container}
    >
        <HomeContent1 />
    </div>
);
export default Home;