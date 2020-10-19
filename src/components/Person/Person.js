import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Person.css';

const Person = ({ name, children, deletePerson, id, updateNameHandler }) => {

    useEffect(() => {
        console.log('did mount');
    }, []);

    useEffect(() => {
        console.log('did update');
    }, [name]);

    useEffect(() => {
        return(() => console.log('will unmount'));
    }, []);

    return (
        <div className="Person">
            <h1 onClick={() => deletePerson(name)}>I am {name}</h1>
            <p>{children}</p>
            <input onChange={e => updateNameHandler(id, e.target.value)} value={name}></input>
        </div>

    );
}

Person.prototype = {
    name: PropTypes.string,
    children: PropTypes.children,
    deletePerson: PropTypes.func,
    id: PropTypes.number,
    updateNameHandler: PropTypes.func,
};

// class Person extends Component {
//     constructor(props) {
//         super(props);

//         console.log('componentWillUnmount')
//     }

//     componentDidMount() {
//         console.log('componentDidMount')
//     }

//     componentDidUpdate() {
//         console.log('componentDidUpdate')
//     }

//     componentWillUnmount() {
//         console.log('componentWillUnmount')
//     }

//     render() {
//         return (
//             <div className="Person">
//                 <h1 onClick={() => this.props.deletePerson(this.props.name)}>I am {this.props.name}</h1>
//                 <p>{this.props.children}</p>
//                 <input onChange={e => this.props.updateNameHandler(this.props.id, e.target.value)} value={this.props.name}></input>
//             </div>
//         );
//     }
// }

export default Person;