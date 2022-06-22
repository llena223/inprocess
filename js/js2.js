
window.addEventListener(`click`,function (event){
    if (event.target.hasAttribute(`data-cart`)){
        const card = event.target.closest(`.class2`);
        console.log(card);
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector(`.imgsrc`).getAttribute(`src`),
            title: card.querySelector(`.h3`).innerText,
            itemsInBox: card.querySelector(`[data-items-in-box]`).innerText,
            weight: card.querySelector(`.price_weight`).innerText,
            price: card.querySelector(`.price_currency`).innerText,
            counter: card.querySelector(`[data-counter]`).innerText,
        };
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        
        console.log(itemInCart);
        if (itemInCart) {
                const counterEl = itemInCart.querySelector(`[data-counter]`);
                counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else {
            
            const cartItemHTML = ` 
             <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item_top">
                <div class="cart-item_img">
                    <img src="${productInfo.imgSrc}" width="50px" height="50px">
                </div>
                <div class="cart-item_desc">
                    <div class="cart-item_title">${productInfo.title}</div>
                    <div class="cart-item_weight">${productInfo.weight}</div>
                    <div class="cart-item_details">
                        <div class="items items--small counter-wrapper">
                            <div class="items_control" data-action="minus">-</div>
                        <div class="item_current" data-counter>1</div>
                        <div class="items_control" data-action="plus">+</div>
                        </div>
                        <div class="price">
                            <div class="price_currency">${productInfo.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        const colich = `<div class="count">${productInfo.counter}</div>
        <style>.count {
            top: 120px;
            right:65px;
        }
        </style>
        `;
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        
        }
        //console.log(productInfo);
       
    }
})
