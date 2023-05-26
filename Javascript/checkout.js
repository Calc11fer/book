let cart_icon = document.getElementById("cart_icon");
let cart_items = document.getElementById("cart_items");
let user_icon = document.getElementById("user_icon");
let cart_icon_container = document.getElementById("cart_icon_container");
let sideCart = document.getElementById("sideCart-open");
let searchBar_open = document.getElementById("searchBar_open");
let searchBg_open = document.getElementById("searchBg_open");
let open_orderSummary = document.getElementById("open_orderSummary");
let open_icon = document.getElementById("open_icon");
let orderSummary_opened = document.getElementById("orderSummary_opened");





open_orderSummary.addEventListener("click", () => {

    // to let javascript detect the display style I've given in css, so that I can
    // remove the orderSummary in the phone version in the first place
    let finalStyle_1 = window.getComputedStyle(orderSummary_opened);
    let finalStyle_2 = finalStyle_1.getPropertyValue("display");
    if(finalStyle_2 === "none") {
        orderSummary_opened.style.display = "block";
        open_orderSummary.innerHTML = "Hide order summary";
        open_icon.style.transform = "rotate(180deg)";
    } else {
        orderSummary_opened.style.display = "none";
        open_orderSummary.innerHTML = "Show order summary";
        open_icon.style.transform = "rotate(360deg)";
    }
});



// check first when user load the website second time
if (cart_items.innerHTML < 1) {
    cart_items.style.display = "none";
} else {
    cart_items.style.display = "block";
}


// Click the brand icon to go to the home page
function goHomePage() {
    window.location.href = "../index.html"
}

function goProductPage() {
    window.location.href = "/Html/product_page.html";
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


// let shipMethod = document.querySelector('input[name="shipMethod"]:checked').value;
// console.log(shipMethod);

// Collecting the datas which user typed in the form
const userInfo_form = document.getElementById("userInfo_form");
const shipping_form = document.getElementById("shipping_form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
let checkout = document.getElementsByClassName("checkout");
let shipping_method = document.getElementsByClassName("shipping_method");
let paymentPage = document.getElementsByClassName("paymentPage");

userInfo_form.addEventListener("submit", function(e) {
    // in order to prevent the broswer to refresh itself.
    e.preventDefault();
    checkout[0].style.display = "none"

    const emailNew = email.value;
    const countryNew = country.value;
    const lastNameNew = lastName.value;
    const addressNew = address.value;
    const cityNew = city.value;
    const stateNew = state.value;
    const postcodeNew = postcode.value;
    document.getElementById("user_email").innerHTML = emailNew;
    document.getElementById("user_address").innerHTML = addressNew + " " + cityNew + " " 
        + stateNew + " " + postcodeNew + " " + countryNew;
});

// changing shipping method
shipping_form.addEventListener("submit", function(e) {
    e.preventDefault();
    shipping_method[0].style.display = "none";
    paymentPage[0].style.display = "flex";
    // paymentPage[1].style.display = "flex";
    let shipMethod = document.querySelector('input[name="shipMethod"]:checked').value;
    if (shipMethod === "standard") {
        document.getElementById("shipping_standard").style.display = "block";
    } else {
        document.getElementById("shipping_express").style.display = "block";
    }
});