/*Este archivo contiene las funciones necesarias para el desarrollo de Fruteria Online*/


/*Esta funcion verifica si existe suficiente stock de un producto
RECIBE:
quantity = La cantidad deseada por el usuario
stock =  La cantidad disponible para venta
DEVUELVE:
TRUE: Si hay stock
FALSE: Si no hay stock
*/
const isStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}


/*Esta funcion ejecuta el agregado de los productos seleccionados al carrito
option = La opcion seleccionada por el usuario
quantity = La cantidad deseada por el usuario
*/
const addToCart = (option, quantity) => {
    switch(option){
        case 1:
            if(isStock(quantity,mangoStock)){
                cart1 += (quantity * mangoPrice);
                mangoStock -= quantity;
                alert('Mango agregado a la cuenta');
            }
            break;

        case 2:
            if(isStock(quantity,lemonStock)){
                cart2 += (quantity * lemonPrice);
                lemonStock -= quantity;
                alert('Limon agregado a la cuenta');
            }
            break;
        
        case 3:
            if(isStock(quantity,tomatoStock)){
                cart3 += (quantity * tomatoPrice);
                tomatoStock -= quantity;
                alert('Tomate agregado a la cuenta');
            }
            break;

        default:
            alert ('Opcion no valida')
    }
    return true;
}

const purchaseDetail = (cart1,cart2,cart3) => {
    let tomate =0;
    let mango=0;
    let limon =0;

    if(cart1 > 0 ){
         mango += cart1 ;
        //return alert("Mango $ "+mango);
    }if(cart2 > 0){
        limon += cart2;
        //return alert("Limon $ "+limon );
    }if(cart3>0 ){
        tomate += cart3;
        //return alert("Mango $ "+cart1 + "\n" + "Limon $ "+cart2 +" \n"+ "Tomato $" + cart3 +"\n" +"Total $"+ total );
    }

    total = tomate + limon + mango;
    return alert("Mango $ "+mango + "\n" + "Limon $ "+limon +" \n"+ "Tomato $ " + tomate +"\n" +"Total $"+ total ); 
}

const calculateFees =(total,cuotas)=>{
    let interes = 0.1 * (cuotas) + 1;

    let totalcuotas =parseInt(interes * total); 
    return alert("Cantidad de cuotas "+ cuotas + "\n" +"Total en cuotas $ " +totalcuotas); 
}   
    


