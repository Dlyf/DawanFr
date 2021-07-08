import React from 'react';

function DeepChild(props) {
    return (
        <React.Fragment>
            <h3>Deep Child: {props.childValeur}</h3>
            <button onClick={props.childIncrementer}>
                Incrementer
            </button>
        </React.Fragment>
    );
}
export default DeepChild;
