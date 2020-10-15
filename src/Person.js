import React, { useState } from 'react';

const Person = (props) => {
    const [name, setName] = useState(props.name);
    const switchNameHandler = () => {
        setName('Max');
    }
    return (
        <div>
            <button onClick={switchNameHandler}>Switch name</button>
            <h1>I am {name}</h1>
            <p>{props.children}</p>
        </div>

    );
}

export default Person;