let cart_icon = document.getElementById("cart_icon");
let cart_items = document.getElementById("cart_items");
let user_icon = document.getElementById("user_icon");
let cart_icon_container = document.getElementById("cart_icon_container");
let sideCart = document.getElementById("sideCart-open");
let searchBar_open = document.getElementById("searchBar_open");
let searchBg_open = document.getElementById("searchBg_open");
const sideCart_close = document.getElementById("cart_close");
const sideCart_open = document.getElementById("sideCart-open");




function goProductPage() {
    window.location.href = "/Html/product_page.html";
}


// Click the brand icon to go to the home page
function goHomePage() {
    window.location.href = "../index.html"
}


// warn the user when the input is empty
function toSearchResult() {
    if (search_input === '') {
        alert("input cannot be empty, please try again.");
    }
}

// cart_icon and user_icon hover effect 
function cartClick() {
    if (cart_icon.getAttribute("src") === "/icons/cart_icon.png") {
        cart_icon.src = "/icons/cart_icon_clicked.png";
        sideCart.style.display = "block";
    } else {
        sideCart.style.display = "none";
        cart_icon.src = "/icons/cart_icon.png";
    }
}

cart_icon_container.addEventListener("click", cartClick);

user_icon.addEventListener("mouseover", () => {
    user_icon.src = "/icons/user_icon_hover.png";
});

user_icon.addEventListener("mouseout", () => {
    user_icon.src = "/icons/user_icon.png";
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





// check first when user load the website second time
if (cart_items.innerHTML < 1) {
    cart_items.style.display = "none";
} else {
    cart_items.style.display = "block";
}


function close_sideCart() {
    sideCart_open.style.display = "none";
    cart_icon.src = "/icons/cart_icon.png";
}

// adding and removing the current product



sideCart_close.addEventListener("click", close_sideCart);



// Ignore the first load, in order to get errors
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

