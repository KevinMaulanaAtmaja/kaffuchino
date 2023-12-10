// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const menu = document.querySelector('#hamburger-menu');

// ketika hamburger menu diklik
menu.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});


// Toggle class active search form 
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
});

// Toggle class active shopping cart 
const shoppingCartBtn = document.querySelectorAll("#shopping-cart-btn");
const shoppingCart = document.querySelector(".shopping-cart");

// ketika icon shopping cart diklik
shoppingCartBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        shoppingCart.classList.toggle('active');
        e.preventDefault();
    });
});


// var icon close
const closeIcon = document.querySelectorAll(".close-icon");

// klik tombol close diklik

const detailModal1 = document.getElementById("detail-modal-chino-kafuu");
const detailModal2 = document.getElementById("detail-modal-chiya-ujimatsu");
const detailModal3 = document.getElementById("detail-modal-cocoa-hoto");
const detailModal4 = document.getElementById("detail-modal-midori-aoyama");

closeIcon.forEach((close) => {
    close.addEventListener('click', (e) => {
        detailModal1.style.display = 'none';
        detailModal2.style.display = 'none';
        detailModal3.style.display = 'none';
        detailModal4.style.display = 'none';
        e.preventDefault();
    });
});



// ketika diklik selain modal box
window.onclick = (e) => {
    if (e.target === detailModal1) {
        detailModal1.style.display = "none";
    } else if (e.target === detailModal2) {
        detailModal2.style.display = "none";
    } else if (e.target === detailModal3) {
        detailModal3.style.display = "none";
    } else if (e.target === detailModal4) {
        detailModal4.style.display = "none";
    }
}


// ketika add to cart diklik
const addToCart = document.querySelectorAll('#add-to-cart');

addToCart.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('Fitur masih belum jalan😅');
    });
});


// ketika search icon diklik
function searchIconAlert() {
    alert("Fitur dalam penggerjaan! sabar ygy😁");
}


// ketika btn kirim pesan di submit 
function submitAlert() {
    alert("Jangan di spam ya!💀");
}

// ketika btn checkout di submit 
// function checkoutAlert() {
//     alert("Fitur payment gateway, coming soon!💳");
// }




// klik diluar elemen
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    // looping utk cart icon
    let isOutsideShoppingCartBtns = true;

    shoppingCartBtn.forEach((btn) => {
        if (btn.contains(e.target) || shoppingCart.contains(e.target)) {
            isOutsideShoppingCartBtns = false;
        }
    });

    if (isOutsideShoppingCartBtns) {
        shoppingCart.classList.remove("active");
    }

    // if (!shoppingCartBtn.contains(e.target) && !shoppingCart.contains(e.target)){
    //     shoppingCart.classList.remove("active");
    // }
});