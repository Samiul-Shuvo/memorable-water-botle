import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottle.css'
import { addToLs, getStoredCart, removeFromLs } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

   const [bottles,setBottles] = useState([]); 


   useEffect(()=>{
    fetch('Bottle.json')
    .then(res => res.json())
    .then(data =>setBottles(data))
   },[])


//    Load Card from local storage
    useEffect(()=>{
        // const storedCart = getStoredCart();
        if(bottles.length){
            const storedCart = getStoredCart();
            const savedCart = [];

            for(const id of storedCart ){
                const bottle = bottle.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart);
        }
    },[bottles])

   const [cart,setCart] = useState([]);


   const handleAddToCart = bottle =>{

    const newCart = [...cart,bottle]
    setCart(newCart);
    addToLs(bottle.id);
   }

   const handleRemoveFromCart =id =>{
    const remainingCart = cart.filter(bottle => bottle.id !== id)
    setCart(remainingCart);

    removeFromLs(id);
   }
    return (
        <div>
            <h2>Bottles Here : {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                handleAddToCart=
                {handleAddToCart}
                ></Bottle>)
            }

            </div>
        </div>
    );
};

export default Bottles;