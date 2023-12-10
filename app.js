document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [{
                id: 1,
                name: 'Chino Kafuu',
                img: 'Chino-Kafuu.jpg',
                price: 7000,
                originPrice: 10000,
                detail: 'chino-kafuu'
            },
            {
                id: 2,
                name: 'Chiya Ujimatsu',
                img: 'Chiya-Ujimatsu.jpg',
                price: 12000,
                originPrice: 15000,
                detail: 'chiya-ujimatsu'
            },
            {
                id: 3,
                name: 'Cocoa Hoto',
                img: 'Cocoa-Hoto.jpg',
                price: 5000,
                originPrice: 7000,
                detail: 'cocoa-hoto'
            },
            {
                id: 4,
                name: 'Midori Aoyama',
                img: 'Midori-Aoyama.jpg',
                price: 20000,
                originPrice: 70000,
                detail: 'midori-aoyama'
            },
        ],
    }));
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        currentDetail: '',
        add(newItem) {
            // cek apakah ada barang yg sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id)

            // jika cart blum ada / kosong
            if (!cartItem) {
                this.items.push({
                    ...newItem,
                    quantity: 1,
                    total: newItem.price
                });
                this.total += newItem.price;
                this.quantity++;
            } else {
                // jika sudah ada, cek apakah barang beda atau sama
                this.items = this.items.map((item) => {
                    // jika barang beda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang udh ada
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.total += item.price;
                        this.quantity++;
                        return item;
                    }
                });
            }
            // console.log(newItem);
        },
        remove(id) {
            // ambil item yg akan di remove
            const cartItem = this.items.find((item) => item.id === id);
            // console.log(cartItem);
            // jika item lebih dari 1
            if (cartItem.quantity > 1) {
                // telusuri 
                this.items = this.items.map((item) => {
                    // jika bukan barang yg diklik
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.total -= item.price;
                        this.quantity--;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                // jika barang sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            } else {

            }
        },
        showDetail(item) {
            const detailModal = document.querySelector(`#detail-modal-${item.detail}`);
            if (detailModal) {
                detailModal.style.display = "flex";
                this.currentDetail = item.detail;
            }
        },
    });
});


// form validation
const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn.disabled = true;

const submitLimit = 3;
let submitCount = localStorage.getItem("submitCount") || 0;

checkoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (submitCount < submitLimit) {
        submitCount++;
        localStorage.setItem("submitCount", submitCount);

        console.log(`Submit count: ${submitCount}`);

    } else {
        alert(
            "Anda telah mencapai batas pengiriman formulir. Dan tombol checkout tidak akan berfungsi lagi!");
            e.stopImmediatePropagation();
    }
});



const form = document.querySelector("#checkout-form");
form.addEventListener('keyup', () => {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value.length != 0) {
            checkoutBtn.classList.remove('disabled');
            checkoutBtn.classList.add('disabled');
        } else {
            return false;
        }
    }
    checkoutBtn.disabled = false;
    checkoutBtn.classList.remove('disabled');
});

// kirim data ketika tmbl checkout diklik
checkoutBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    // console.log(objData);

    // payment link metode (wa)
    // const message = formatPesan(objData);
    // window.open('http://wa.me/6285123456789?text=' + encodeURIComponent(message))

    // snap metode
    // minta transaction token mrnggunakan ajax / fetch
    try {
        const response = await fetch('php/placeholder.php', {
            method: 'POST',
            body: data
        });
        const token = await response.text();
        // console.log(token);
        window.snap.pay(token, {
            onSuccess: function (result) {
                alert("pembayaran berhasil!✅");
                console.log(result);
            },
            onPending: function (result) {
                alert("chotto matte!🔄");
                console.log(result);
            },
            onError: function (result) {
                alert("pembayaran gagal coy!❎");
                console.log(result);
            },
            onClose: function () {
                alert("belum selesai bayar woy!😐");
            },
        });
    } catch (err) {
        console.log(err.message);
    }
});

// format pesan wa
const formatPesan = (obj) => {
    return `Data customer :
    \tNama : ${obj.name},
    \tEmail : ${obj.email},
    \tNo HP : ${obj.phone},\n\nData Pesanan : \n${JSON.parse(obj.items)
    .map((item) => `\t${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)
    .join('')} \nTOTAL: ${rupiah(obj.total)} \nTerima kasih!`;
};



// konversi ke rupiah 
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}