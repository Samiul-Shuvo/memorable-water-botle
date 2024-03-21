import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    const {name, volume , color} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle For Life</h3>
            <p>Name : {name}</p>
            <p>Volume : {volume}</p>
            <p>Color : {color}</p>
            <button onClick={()=>handleAddToCart(bottle)} className='btn'>Add to Cart</button>
        </div>
    );
};

export default Bottle;