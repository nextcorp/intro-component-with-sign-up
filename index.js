const form = document.querySelector(".fill form")

const inp_firstName = form.querySelector(`input[name="first-name"]`)
const inp_lastName = form.querySelector(`input[name="last-name"]`)
const inp_email = form.querySelector(`input[name="email"]`)
const inp_password = form.querySelector(`input[name="password"]`)

function formHandler(e) {
    e.preventDefault()


    //console.log(inp_firstName, inp_lastName, inp_email, inp_password)
}

form.addEventListener("submit", formHandler)