const cart = {
    bread: { price: 2, quantity: 1 },
    cheese: { price: 5, quantity: 1 },
    milk: { price: 3, quantity: 1 }
};


function calcTotal() {
    let total = 0;
    for (let item in cart) {
        total += cart[item].price * cart[item].quantity;
    }
    document.getElementById('total-price').textContent = '£' + total;
}


function increaseQuantity(itemId) {
    cart[itemId].quantity += 1;
    document.querySelector(`#${itemId} .quantity`).textContent = cart[itemId].quantity;
    calcTotal();
}


function decreaseQuantity(itemId) {
    if (cart[itemId].quantity > 1) {
        cart[itemId].quantity -= 1;
        document.querySelector(`#${itemId} .quantity`).textContent = cart[itemId].quantity;
        calcTotal();
    }
}


function removeItem(itemId) {
    document.getElementById(itemId).remove();
    delete cart[itemId];
    calcTotal();
}


function switchLike(button) {
    console.log('Button clicked:',button);
   if(button.style.color === 'red"'){
    button.style.color = 'black';
   }else{
    button.style.color = 'red';
   }
}


document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.parentElement.id;
        increaseQuantity(itemId);
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.parentElement.id;
        decreaseQuantity(itemId);
    });
});

document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.parentElement.id;
        removeItem(itemId);
    });
});

document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('click', function()  {
        switchLike(button);
    });
});

calcTotal();