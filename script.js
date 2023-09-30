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



// modal box
// var modal box
const itemDetailBtn1 = document.querySelector(
".item-detail-button-chino-kafuu"
);
const itemDetailBtn2 = document.querySelector(
".item-detail-button-chiya-ujimatsu"
);
const itemDetailBtn3 = document.querySelector(
".item-detail-button-cocoa-hoto"
);
const itemDetailBtn4 = document.querySelector(
".item-detail-button-midori-aoyama"
);

// var detail modal
const detailModal1 = document.querySelector("#item-detail-modal-chino-kafuu");
const detailModal2 = document.querySelector("#item-detail-modal-chiya-ujimatsu");
const detailModal3 = document.querySelector("#item-detail-modal-cocoa-hoto");
const detailModal4 = document.querySelector("#item-detail-modal-midori-aoyama");

// looping
// itemDetailBtn.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         detailModal.style.display = 'flex';
//         e.preventDefault();
//     })
// })

// ketika icon mata diklik
itemDetailBtn1.addEventListener('click', (e) => {
    detailModal1.style.display = "flex";
    e.preventDefault();
});
itemDetailBtn2.addEventListener('click', (e) => {
    detailModal2.style.display = "flex";
    e.preventDefault();
});
itemDetailBtn3.addEventListener('click', (e) => {
    detailModal3.style.display = "flex";
    e.preventDefault();
});
itemDetailBtn4.addEventListener('click', (e) => {
    detailModal4.style.display = "flex";
    e.preventDefault();
});


// var icon close
const closeIcon = document.querySelectorAll(".close-icon");

// klik tombol close diklik
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

// ketika remove icon diklik
const removeItem = document.querySelectorAll(".remove-item");
removeItem.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('Fitur hapus belum bisa wlee😜');
    });
});


// ketika search icon diklik
const searchIcon = document.querySelector("#search-icon");
searchIcon.addEventListener('click', () => {
    alert('Fitur dalam penggerjaan! sabar ygy😁');
});


// ketika btn kirim pesan di submmit 
const submitPesan = document.querySelector('.btn');

submitPesan.addEventListener('click', (e) => {
    alert('Jangan di spam ya!💀')
})





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