alert('Bienvenido a tu fruteria online de confianza')

do{
    let option = parseInt(prompt(menu))
    if(option === 4) break;
    let qty = parseInt(prompt(SelectedQty))

    addToCart(option, qty);

    resp = prompt('¿Desea agregar mas productos a la cuenta? S/N');

    if( resp == "N"){
    purchaseDetail(cart1,cart2,cart3);

        if(total>0){
            cuotas = parseInt(prompt('ingrese la cantidad de cuotas'));
            calculateFees(total,cuotas);
        } 
    }

}while(resp === "S" );

alert('Gracias, vuelva prontos')