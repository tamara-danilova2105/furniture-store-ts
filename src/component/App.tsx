import { useState } from "react";
import styles from './App.module.scss';
import { Link } from "react-router-dom";
import imageTest from '@/assets/test.jpg';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <img src={imageTest} alt="furniture store" />
            <Link to='/about'>about</Link>
            <br />
            <Link to='/shop'>shop</Link>
            <p>{count}</p>
            <button className={styles.button} onClick={increment}>
                +
            </button>
        </div>
    );
};
