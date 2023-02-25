let email = document.querySelector(".email")
let pass = document.querySelector(".password")
let btn = document.querySelector("button")
let emailError = document.querySelector(".email-error")
let passError = document.querySelector(".pass-error")
let body = document.querySelector("body")

btn.addEventListener("click", function(){
    if (email.value.trim() == "") {
        emailError.classList.remove("d-none")
    }
    else{
        emailError.classList.add("d-none")
    }
    if (pass.value.trim() == "") {
        passError.classList.remove("d-none")
    }
    else{
        passError.classList.add("d-none")
    }
})

body.addEventListener("keyup", e=>{
    e.preventDefault()

    if (e.keyCode == 13) {
        btn.click()
    }
})