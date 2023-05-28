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
const payment = document.getElementById("payment");
const adjustPopup = document.getElementById("adjustPopup");
const popup_dropShadow = document.getElementById("popup_dropShadow");
let checkout = document.getElementsByClassName("checkout");
let checkout_shipping = document.getElementsByClassName("checkout_shipping");
let shipping_method = document.getElementsByClassName("shipping_method");
let paymentPage = document.getElementsByClassName("paymentPage");
let shipMethod_checked = document.getElementsByClassName("shipMethod_checked");
let navbar_links = document.getElementsByClassName("navbar_links");
let recipt = document.getElementsByClassName("recipt");
let clearCart = document.getElementsByClassName("clearCart");
let clearNumber = document.getElementsByClassName("clearNumber");
let open_orderSummary = document.getElementById("open_orderSummary");
let open_icon = document.getElementById("open_icon");
let orderSummary_opened = document.getElementById("orderSummary_opened");
// =================================================================================================================================================

// Hide the order summary in phone version
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

// Allow user to go back to previous checkout procedure
function returnToInfo() {
    checkout[0].style.display = "block"
    checkout_shipping[0].style.display = "none";

    // change the style of the checkout navbar links
    navbar_links[1].style.fontWeight = "500";
    navbar_links[1].style.color = "#2F2F2F"
    navbar_links[2].style.fontWeight = "normal";
    navbar_links[2].style.color = "#4A4A4A";
    navbar_links[3].style.fontWeight = "normal";
    navbar_links[3].style.color = "#4A4A4A";
}
function returnToShip() {
    paymentPage[1].style.display = "none";
    paymentPage[0].style.display = "none";
    shipping_method[0].style.display = "block";  
    document.getElementById("shipping_standard").style.display = "none";
    document.getElementById("shipping_express").style.display = "none"; 

    // change the style of the checkout navbar links
    navbar_links[2].style.fontWeight = "500";
    navbar_links[2].style.color = "#2F2F2F"
    navbar_links[3].style.fontWeight = "normal";
    navbar_links[3].style.color = "#4A4A4A";
    navbar_links[1].style.fontWeight = "normal";
    navbar_links[1].style.color = "#4A4A4A";
}

// Giving the shipping option a selected effect
function checked_1() {
    shipMethod_checked[0].style.backgroundColor = "#EDF2F8";
    shipMethod_checked[0].style.borderColor = "#0460FB";
    shipMethod_checked[1].style.backgroundColor = "white";
    shipMethod_checked[1].style.borderColor = "#ACACAC";
}
function checked_2() {
    shipMethod_checked[1].style.backgroundColor = "#EDF2F8";
    shipMethod_checked[1].style.borderColor = "#0460FB";
    shipMethod_checked[0].style.backgroundColor = "white";
    shipMethod_checked[0].style.borderColor = "#ACACAC";
}

// grab user's address and contact that user typed in, submit it to to "shipping" procedure, which is the second procedure in check out 
userInfo_form.addEventListener("submit", function(e) {
    // in order to prevent the broswer to refresh itself.
    e.preventDefault();
    checkout[0].style.display = "none"
    checkout_shipping[0].style.display = "block";

    // change the style of the checkout navbar links
    navbar_links[2].style.fontWeight = "500";
    navbar_links[2].style.color = "#2F2F2F"
    navbar_links[3].style.fontWeight = "normal";
    navbar_links[3].style.color = "#4A4A4A";
    navbar_links[1].style.fontWeight = "normal";
    navbar_links[1].style.color = "#4A4A4A";

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

// controlling the shipping option, if user choose 15$, it will add to the total price
shipping_form.addEventListener("submit", function(e) {
    e.preventDefault();
    shipping_method[0].style.display = "none";
    paymentPage[0].style.display = "flex";
    paymentPage[1].style.display = "block";

    // change the style of the checkout navbar links
    navbar_links[3].style.fontWeight = "500";
    navbar_links[3].style.color = "#2F2F2F"
    navbar_links[2].style.fontWeight = "normal";
    navbar_links[2].style.color = "#4A4A4A";
    navbar_links[1].style.fontWeight = "normal";
    navbar_links[1].style.color = "#4A4A4A";
    
    let shipMethod = document.querySelector('input[name="shipMethod"]:checked').value;
    if (shipMethod === "standard") {
        document.getElementById("shipping_standard").style.display = "block";
        document.getElementById("final_shipMethod").innerHTML = "FREE";
    } else {
        document.getElementById("shipping_express").style.display = "block";
        document.getElementById("final_shipMethod").innerHTML = "$15";
        document.getElementById("totalPrice").innerHTML = "$201.52";
    }
});

// After the user proceed the payment, this listener will get the final information to the recipt window
payment.addEventListener("submit", function(e) {
    e.preventDefault();
    const emailNew = email.value;
    const countryNew = country.value;
    const lastNameNew = lastName.value;
    const addressNew = address.value;
    const cityNew = city.value;
    const stateNew = state.value;
    const postcodeNew = postcode.value;

    adjustPopup.style.display = "flex";
    popup_dropShadow.style.display = "block";
    document.getElementById("final_shipAddress").innerHTML = lastNameNew + ", " + addressNew + " " + cityNew + " " 
        + stateNew + " " + postcodeNew + " " + countryNew + ", contact via " +  emailNew;
    // to make the month and day in the format of mm, learned from https://www.scaler.com/topics/get-current-date-in-javascript/
    let currentDate = new Date();
    let currentMonth = String(currentDate.getMonth()+1).padStart(2,"0");
    let currentDay = String(currentDate.getDate()).padStart(2, '0');
    let currentYear = currentDate.getFullYear();

    // calculate the delivery date depending on the shipping method that user chose
    if (document.getElementById("final_shipMethod").innerHTML === "FREE") {
        document.getElementById("estDate").innerHTML = (parseInt(currentDay) + 6) + "/" + currentMonth;
    } else {
        document.getElementById("estDate").innerHTML = (parseInt(currentDay) + 2) + "/" + currentMonth;
    }
    
    recipt[0].innerHTML = currentDay + " " + currentMonth + " " + currentYear;
    recipt[1].innerHTML = lastNameNew + ", " + addressNew + " " + cityNew + " " 
        + stateNew + " " + postcodeNew + " " + countryNew;
    recipt[2].innerHTML = document.getElementById("final_shipMethod").innerHTML;
    recipt[3].innerHTML = document.getElementById("totalPrice").innerHTML;

    // clear all the items in the cart after payment
    for (let i=0; i<clearCart.length; i++) {
        clearCart[i].style.display = "none";
    }
    for (let i=0; i<clearNumber.length; i++) {
        clearNumber[i].innerHTML = "0";
    }
    document.getElementById("subtotalPrice").innerHTML = "0.00";
    cart_items.style.display = "none";
});