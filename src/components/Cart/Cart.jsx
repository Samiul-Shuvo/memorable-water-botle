import PropTypes from 'prop-types';
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart : {cart.length}</h4>
            <div>
                {
                    cart.map(bottle =>
                    <div key={bottle.id}>
                        <h3 > {bottle.id}</h3>
                        <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>
                )
                }
            </div>
        </div>
    );
};


Cart .propTypes = {
    cart:PropTypes.array.isRequired
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;