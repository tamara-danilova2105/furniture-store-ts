import { useState } from "react";
import './App.scss';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>
                +
            </button>
        </div>
    );
};
