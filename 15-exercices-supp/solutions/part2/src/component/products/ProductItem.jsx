import React from 'react';


function ProductItem(props) {
    const {title, price, description} = props;
    return (
         <div class="card">
            <h2>{title}</h2>
            <p>{price}</p>
            <div class="more-infos">
                <p>{description}</p>
                <div>
                    <button onClick={null} className="btn btn-success"> - </button>
                    <span className="btn btn-light">{props.quantity}</span>
                    <button onClick={null} className="btn btn-success"> + </button>
                </div>
            </div>
        </div>
    );
}
export default ProductItem;