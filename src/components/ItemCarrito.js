import React from 'react';

const ItemCarrito = ({data, deleteFromCart}) => {
    const {id, name, price, cantidad} = data;
    return (
        <div className='col-md-12 d-flex flex-row justify-content-between'>
           <h4>{name}</h4>
           <h5> ${price} Cantidad {cantidad} = $ {price *cantidad}</h5>
           <button onClick={()=>deleteFromCart(id, false)} className='btn btn-warning btn-sm'>Eliminar uno</button>
           <button onClick={()=>deleteFromCart(id, true)} className='btn btn-warning btn-sm'>Eliminar todos</button> 
        </div>
    );
}

export default ItemCarrito;