// Get the html elements
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
let title_itemTotal = document.getElementById("title_itemTotal");
let subtotalPrice_itemTotal = document.getElementById("subtotalPrice_itemTotal");
let subtotalPrice = parseFloat(document.getElementById("subtotalPrice").innerHTML);
// =================================================================================================================================================

// This variable is used for jumping over the first load on current page, so that we can record the search input
// and pass it to the result page
let loadtime = 0;
window.addEventListener("load", () => {
    loadtime ++;
    const searchParams = (new URL(document.location)).searchParams;
    const search_input = searchParams.get("search");

    if (loadtime > 1) {
        document.getElementById("searched_input").value = search_input;
        document.getElementById("searched_input_small").innerHTML = search_input;
    }
});

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


// detect whether to add the product to the cart or remove it
function product_1_detect() {
    if (product_1.getAttribute("src") === "/book/icons/cart_bt.png") {
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

    product_1.src = "/book/icons/cart_bt_clicked.png";
    item_1.style.display = "flex";
}

function removeProduct_1() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[0].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    
    product_1.src = "/book/icons/cart_bt.png";
    item_1.style.display = "none";

    // double checking whether the cart is empty or not
    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function product_2_detect() {
    if (product_2.getAttribute("src") === "/book/icons/cart_bt.png") {
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

    product_2.src = "/book/icons/cart_bt_clicked.png";
    item_2.style.display = "flex";
}

function removeProduct_2() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[1].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_2.src = "/book/icons/cart_bt.png";
    item_2.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function product_3_detect() {
    if (product_3.getAttribute("src") === "/book/icons/cart_bt.png") {
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
    product_3.src = "/book/icons/cart_bt_clicked.png";
    item_3.style.display = "flex";
}

function removeProduct_3() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[2].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_3.src = "/book/icons/cart_bt.png";
    item_3.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}


function product_4_detect() {
    if (product_4.getAttribute("src") === "/book/icons/cart_bt.png") {
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
    product_4.src = "/book/icons/cart_bt_clicked.png";
    item_4.style.display = "flex";
}

function removeProduct_4() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[3].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_4.src = "/book/icons/cart_bt.png";
    item_4.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function product_5_detect() {
    if (product_5.getAttribute("src") === "/book/icons/cart_bt.png") {
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
    product_5.src = "/book/icons/cart_bt_clicked.png";
    item_5.style.display = "flex";
}

function removeProduct_5() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[4].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_5.src = "/book/icons/cart_bt.png";
    item_5.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function product_6_detect() {
    if (product_6.getAttribute("src") === "/book/icons/cart_bt.png") {
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
    product_6.src = "/book/icons/cart_bt_clicked.png";
    item_6.style.display = "flex";
}

function removeProduct_6() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[5].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_6.src = "/book/icons/cart_bt.png";
    item_6.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}

function product_7_detect() {
    if (product_7.getAttribute("src") === "/book/icons/cart_bt.png") {
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
    product_7.src = "/book/icons/cart_bt_clicked.png";
    item_7.style.display = "flex";
}

function removeProduct_7() {
    cart_items.innerHTML--;
    title_itemTotal.innerHTML = subtotalPrice_itemTotal.innerHTML = cart_items.innerHTML;
    subtotalPrice -= parseFloat(books_price[6].innerHTML.slice(1));
    document.getElementById("subtotalPrice").innerHTML = subtotalPrice.toFixed(2);
    product_7.src = "/book/icons/cart_bt.png";
    item_7.style.display = "none";

    if (cart_items.innerHTML < 1) {
        cart_items.style.display = "none";
    } else {
        cart_items.style.display = "block";
    }
}