import React from 'react';
import './QuantityInput.css';

class QuantityInput extends React.Component {
    
    onChangeHandler = (event) => {
        let quantity;
        if (!Number.isNaN(event)) {
            quantity = event;
        } else {
            quantity = +event.target.value;
        }
        this.props.editQuantity(quantity);
    }

    // onInputHandler(event) {
    //     const quantity = event.target.value;
    //     this.props.editQuantity(+quantity);
    // }

    render() {
        return(
            <form className='quantity-form'>
                <div className='value-button decrease btn' onClick={() => this.props.editQuantity(-1)}>-</div>
                <input className='card-input' type="number" id="number" value={this.props.quantity} onChange={this.onChangeHandler}/>
                <div className='value-button increase btn' onClick={() => this.props.editQuantity(1)}>+</div>
            </form>
        );
    }
}

export default QuantityInput;