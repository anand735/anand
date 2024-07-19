let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let navbar = document.querySelector('.navbar');
let totalElement = document.querySelector('.total');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper2 = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function updateTotal(price) {
    var currentTotal = parseFloat(totalElement.textContent.replace('total : $', '').replace('/-', ''));
    var newTotal = currentTotal + price;
    totalElement.textContent = `total : $${newTotal.toFixed(2)}/-`;
}

function addToCart(productName, price) {
    var cartItem = document.createElement('div');
    cartItem.classList.add('box');
    cartItem.innerHTML = `
        <div class="content">
            <h3>${productName}</h3>
            <span class="price">$${price}/-</span>
            <span class="quantity">Qty : 1</span>
        </div>
    `;
    document.querySelector('.box-1').appendChild(cartItem);
    updateTotal(price);
}

document.addEventListener('DOMContentLoaded', () => {
    const paymentMethod = document.getElementById('paymentMethod');
    const upiDetails = document.getElementById('upiDetails');
    const netbankingDetails = document.getElementById('netbankingDetails');

    paymentMethod.addEventListener('change', () => {
        const selectedMethod = paymentMethod.value;
        upiDetails.classList.add('hidden');
        netbankingDetails.classList.add('hidden');
        if (selectedMethod === 'upi') {
            upiDetails.classList.remove('hidden');
        } else if (selectedMethod === 'netbanking') {
            netbankingDetails.classList.remove('hidden');
        }
    });
});
