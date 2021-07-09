import React from 'react';
import QuantityInput from '../quantityinput/QuantityInput';

function Produit(props) {

    const sendQuantity = (id, quantite) => {
        props.editQuantity(id, quantite);
    }

    return(
        <React.Fragment>
            <tr>
                <td>{props.index + 1}</td>
                <td>{props.title}</td>
                <td>
                    <QuantityInput quantity={props.quantity} editQuantity={(valeur) => sendQuantity(props.id, valeur)}/>
                    {/* <button onClick={() => { props.editQuantity(props.id, 1) }}>+</button>
                    <span>{props.quantity}</span>
                    <button onClick={() => { props.editQuantity(props.id, -1) }}>-</button> */}
                </td>
                <td>{props.price}</td>
                <td>
                    <i className="fas fa-trash-alt" onClick={() => { props.delete(props.id)}}></i>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default Produit;