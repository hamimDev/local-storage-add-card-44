const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    console.log(product , quantity);

    displayProduct(product , quantity);
    saveProductLocalStorage(product, quantity);
}

const displayProduct = (product , quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li);
}

const getSoppingCard = () =>{
    let card = {};
    const soppingCard = localStorage.getItem('card');
    if(soppingCard){
        card = JSON.parse(soppingCard);
    }
    return card
}

const saveProductLocalStorage = (product, quantity) =>{
    const card = getSoppingCard();
    card[product] = quantity;

    const changeString = JSON.stringify(card);
    localStorage.setItem('card', changeString);
}

const DisplayProductLocalStorage = () =>{
    const saveCard = getSoppingCard();
    console.log(saveCard);

    for(const product in saveCard){
        const quantity = saveCard[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

DisplayProductLocalStorage();