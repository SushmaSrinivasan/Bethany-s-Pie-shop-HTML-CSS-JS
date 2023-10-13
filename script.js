const inventory = {
    apple: { price:12, qty: 0},
    cherry: { price:15, qty: 0},
    strawberry: { price:18, qty: 0}
};

function sum(){
    let total= 0;
    const keys=object.keys(inventory);
    keys.foreach(key => {
        total+=inventory[key].price * inventory[key].qty;
    })
    return total;
}

function Calculate(box)
{
    let qty=0;
    if(box.value.length > 0) {
        qty = parseInt(box.value);
    }
    inventory[box.id].qty = qty;

    const total=sum();
    return `$${total}.00`;
}