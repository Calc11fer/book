let cart_icon = document.getElementById("cart_icon");
let cart_items = document.getElementById("cart_items");
let user_icon = document.getElementById("user_icon");
let cart_icon_container = document.getElementById("cart_icon_container");
let sideCart = document.getElementById("sideCart-open");
let searchBar_open = document.getElementById("searchBar_open");
let searchBg_open = document.getElementById("searchBg_open");


function goHomePage() {
    window.location.href = "/book/index.html"
}

function goProductPage() {
    window.location.href = "/book/Html/product_page.html";
}




// warn the user when the input is empty
function toSearchResult() {
    if (search_input === '') {
        alert("input cannot be empty, please try again.");
    }
}

// cart_icon and user_icon hover effect 
function cartClick() {
    if (cart_icon.getAttribute("src") === "icons/cart_icon.png") {
        cart_icon.src = "icons/cart_icon_clicked.png";
        sideCart.style.display = "block";
    } else {
        sideCart.style.display = "none";
        cart_icon.src = "icons/cart_icon.png";
    }
}

cart_icon_container.addEventListener("click", cartClick);


user_icon.addEventListener("mouseover", () => {
    user_icon.src = "icons/user_icon_hover.png";
});

user_icon.addEventListener("mouseout", () => {
    user_icon.src = "icons/user_icon.png";
});


// Controlling the searching area
searchBg_open.addEventListener("click", closeSearch);

function openSearch() {
    searchBar_open.style.display = "flex";
    searchBg_open.style.display = "flex";
}

function closeSearch() {
    searchBar_open.style.display = "none";
    searchBg_open.style.display = "none";
}









const product_1 = document.getElementById("product_1_cart");
const item_1 = document.getElementById("item_1");
const remove_1 = document.getElementById("remove_1");

const product_2 = document.getElementById("product_2_cart");
const item_2 = document.getElementById("item_2");
const remove_2 = document.getElementById("remove_2");

const product_3 = document.getElementById("product_3_cart");
const item_3 = document.getElementById("item_3");
const remove_3 = document.getElementById("remove_3");

const product_4 = document.getElementById("product_4_cart");
const item_4 = document.getElementById("item_4");
const remove_4 = document.getElementById("remove_4");

const product_5 = document.getElementById("product_5_cart");
const item_5 = document.getElementById("item_5");
const remove_5 = document.getElementById("remove_5");

const product_6 = document.getElementById("product_6_cart");
const item_6 = document.getElementById("item_6");
const remove_6 = document.getElementById("remove_6");

const product_7 = document.getElementById("product_7_cart");
const item_7 = document.getElementById("item_7");
const remove_7 = document.getElementById("remove_7");

const books_price = document.getElementsByClassName("bookList_price");
const sideCart_close = document.getElementById("cart_close");
const sideCart_open = document.getElementById("sideCart-open");

let title_itemTotal = document.getElementById("title_itemTotal");
let subtotalPrice_itemTotal = document.getElementById("subtotalPrice_itemTotal");
let subtotalPrice = parseFloat(document.getElementById("subtotalPrice").innerHTML);

// check first when user load the website second time
if (cart_items.innerHTML < 1) {
    cart_items.style.display = "none";
} else {
    cart_items.style.display = "block";
}

// detect the whether the product has been added or not
function product_1_detect() {
    if (product_1.getAttribute("src") === "icons/cart_bt.png") {
        addProduct_1();
    } else {
        removeProduct_1();
    }

    // check is there an item in the cart, if not, hide the item number
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function addProduct_1() {
    cart_items.innerHTML++;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;

    // calculating the subtotal price
    subtotalPrice += parseFloat(books_price[0].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);

    product_1.src = "icons/cart_bt_clicked.png";
    item_1.style.display = "flex";
}

function removeProduct_1() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[0].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    
    product_1.src = "icons/cart_bt.png";
    item_1.style.display = "none";

    // double checking whether the cart is empty or not
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function product_2_detect() {
    if (product_2.getAttribute("src") === "icons/cart_bt.png") {
        addProduct_2();
    } else {
        removeProduct_2();
    }

    // check is there an item in the cart, if not, hide the item number
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function addProduct_2() {
    cart_items.innerHTML++;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice += parseFloat(books_price[1].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);

    product_2.src = "icons/cart_bt_clicked.png";
    item_2.style.display = "flex";
}

function removeProduct_2() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[1].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_2.src = "icons/cart_bt.png";
    item_2.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}


function product_3_detect() {
    if (product_3.getAttribute("src") === "icons/cart_bt.png") {
        addProduct_3();
    } else {
        removeProduct_3();
    }

    // check is there an item in the cart, if not, hide the item number
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function addProduct_3() {
    cart_items.innerHTML++;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice += parseFloat(books_price[2].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_3.src = "icons/cart_bt_clicked.png";
    item_3.style.display = "flex";
}

function removeProduct_3() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[2].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_3.src = "icons/cart_bt.png";
    item_3.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}


function product_4_detect() {
    if (product_4.getAttribute("src") === "icons/cart_bt.png") {
        addProduct_4();
    } else {
        removeProduct_4();
    }

    // check is there an item in the cart, if not, hide the item number
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function addProduct_4() {
    cart_items.innerHTML++;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice += parseFloat(books_price[3].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_4.src = "icons/cart_bt_clicked.png";
    item_4.style.display = "flex";
}

function removeProduct_4() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[3].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_4.src = "icons/cart_bt.png";
    item_4.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}


function product_5_detect() {
    if (product_5.getAttribute("src") === "icons/cart_bt.png") {
        addProduct_5();
    } else {
        removeProduct_5();
    }

    // check is there an item in the cart, if not, hide the item number
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function addProduct_5() {
    cart_items.innerHTML++;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice += parseFloat(books_price[4].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_5.src = "icons/cart_bt_clicked.png";
    item_5.style.display = "flex";
}

function removeProduct_5() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[4].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_5.src = "icons/cart_bt.png";
    item_5.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}


function product_6_detect() {
    if (product_6.getAttribute("src") === "icons/cart_bt.png") {
        addProduct_6();
    } else {
        removeProduct_6();
    }

    // check is there an item in the cart, if not, hide the item number
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function addProduct_6() {
    cart_items.innerHTML++;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice += parseFloat(books_price[5].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_6.src = "icons/cart_bt_clicked.png";
    item_6.style.display = "flex";
}

function removeProduct_6() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[5].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_6.src = "icons/cart_bt.png";
    item_6.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}


function product_7_detect() {
    if (product_7.getAttribute("src") === "icons/cart_bt.png") {
        addProduct_7();
    } else {
        removeProduct_7();
    }

    // check is there an item in the cart, if not, hide the item number
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function addProduct_7() {
    cart_items.innerHTML++;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice += parseFloat(books_price[6].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_7.src = "icons/cart_bt_clicked.png";
    item_7.style.display = "flex";
}

function removeProduct_7() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[6].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_7.src = "icons/cart_bt.png";
    item_7.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}


function close_sideCart() {
    sideCart_open.style.display = "none";
    cart_icon.src = "icons/cart_icon.png";
}





product_1.addEventListener("click", product_1_detect);
remove_1.addEventListener("click", removeProduct_1);

product_2.addEventListener("click", product_2_detect);
remove_2.addEventListener("click", removeProduct_2);

product_3.addEventListener("click", product_3_detect);
remove_3.addEventListener("click", removeProduct_3);

product_4.addEventListener("click", product_4_detect);
remove_4.addEventListener("click", removeProduct_4);

product_5.addEventListener("click", product_5_detect);
remove_5.addEventListener("click", removeProduct_5);

product_6.addEventListener("click", product_6_detect);
remove_6.addEventListener("click", removeProduct_6);

product_7.addEventListener("click", product_7_detect);
remove_7.addEventListener("click", removeProduct_7);

sideCart_close.addEventListener("click", close_sideCart);

let loadtime = 0;

window.addEventListener("load", () => {
    loadtime ++;
    const searchParams = (new URL(document.location)).searchParams;
    const search_input = searchParams.get("search");

    if (loadtime > 1) {
        document.getElementById("searched_input").value = search_input;
        document.getElementById("searched_input_small").innerHTML = search_input;
    }
})