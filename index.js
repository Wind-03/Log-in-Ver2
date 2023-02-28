const name_el= document.getElementById("name-el")
const number_el= document.getElementById("number-el")
const month_el= document.getElementById("month-el")
const year_el= document.getElementById("year-el")
const hidden_el= document.getElementById("hidden-el")
const card_number_el= document.getElementById("card-number-el")
const card_name_el= document.getElementById("card-name-el")
const card_month_expire = document.getElementById("expiry-month")
const card_year_expire = document.getElementById("expiry-year")
const cvc_number_display = document.getElementById("cvc-number-display")
let card_form = document.querySelector(".card-form")
const completed_form = document.querySelector(".completed")

function inputName(){
    let regex_one = /[\w\s]+/ig
    let name = name_el.value.match(regex_one)
    if(name){
        card_name_el.innerHTML =name
    }
    else{

    }
    console.log(typeof(name))
}
function inputNumber(){
    let myRegex = /\d.{4}/g
    let num = number_el.value.match(myRegex)
    let user_num = num.join('')
    card_number_el.innerHTML = user_num

        if (user_num.length % 4 == 0) {
            user_num += " ";
        }
    
}
function inputMonth(){
    let month = month_el.value  
    card_month_expire.innerHTML = month
    console.log("Otondo")   
}
function inputYear(){
    let year = year_el.value  
    card_year_expire.innerHTML = year
    console.log("Otondo")   
}
function inputCVC(){
    let hidden_number = hidden_el.value  
    cvc_number_display.innerHTML = hidden_number
    console.log("Otondo")   
}
function invalid(){
    name_el.placeholder= "Please enter your name"
    number_el.placeholder= "Please enter your Card number"
    month_el.placeholder="Can't be Blank"
    year_el.placeholder= "Can't be Blank"
    hidden_el.placeholder="Can't be Blank"
}
function button_click(){
    card_form.innerHTML = `
    <div class="completed" >
        <img src="./images/icon-complete.svg" alt="" width="80" height="80" class="img-completed">
        <h1>Thank you!</h1> 
        <p>We've added your card details</p> 
        <button class="continue">Continue<button> 
    </div>`
}