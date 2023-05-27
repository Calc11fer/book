let cart_icon = document.getElementById("cart_icon");
let cart_items = document.getElementById("cart_items");
let user_icon = document.getElementById("user_icon");
let cart_icon_container = document.getElementById("cart_icon_container");
let sideCart = document.getElementById("sideCart-open");
let searchBar_open = document.getElementById("searchBar_open");
let searchBg_open = document.getElementById("searchBg_open");
const sideCart_close = document.getElementById("cart_close");
const sideCart_open = document.getElementById("sideCart-open");

// =================================================================================================================================================
// go to product page
function goProductPage() {
    window.location.href = "/book/Html/product_page.html";
}

// Click the brand icon to go to the home page
function goHomePage() {
    window.location.href = "/book/index.html"
}

// alert the user when the input is empty
function toSearchResult() {
    if (search_input === '') {
        alert("input cannot be empty, please try again.");
    }
}

// For drop down cart, after user clicked the cart icon, the cart will show up
cart_icon_container.addEventListener("click", cartClick);
function cartClick() {
    if (cart_icon.getAttribute("src") === "/book/icons/cart_icon.png") {
        cart_icon.src = "/book/icons/cart_icon_clicked.png";
        sideCart.style.display = "block";
    } else {
        sideCart.style.display = "none";
        cart_icon.src = "/book/icons/cart_icon.png";
    }
}
sideCart_close.addEventListener("click", close_sideCart);
function close_sideCart() {
    sideCart_open.style.display = "none";
    cart_icon.src = "/book/icons/cart_icon.png";
}


// user_icon hover effect
user_icon.addEventListener("mouseover", () => {
    user_icon.src = "/book/icons/user_icon_hover.png";
});
user_icon.addEventListener("mouseout", () => {
    user_icon.src = "/book/icons/user_icon.png";
});

// Controlling the searching background area in phone version
searchBg_open.addEventListener("click", closeSearch);
function openSearch() {
    searchBar_open.style.display = "flex";
    searchBg_open.style.display = "flex";
}
function closeSearch() {
    searchBar_open.style.display = "none";
    searchBg_open.style.display = "none";
}

// check the items in the cart first when user load the website
if (cart_items.innerHTML < 1) {
    cart_items.style.display = "none";
} else {
    cart_items.style.display = "block";
}

// count the load time of the page, to prevent the get function get the value in the search when it is null;
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

