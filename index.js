const form = document.querySelector(".fill form")

const inp_firstName = form.querySelector(`input[name="first-name"]`)
const inp_lastName = form.querySelector(`input[name="last-name"]`)
const inp_email = form.querySelector(`input[name="email"]`)
const inp_password = form.querySelector(`input[name="password"]`)

function showError(where) {
    where.classList.add("err-field")
    const errIcon = form.querySelector(`input[name="${where.name}"] + .err-icon-container > .err-icon`)
    errIcon.classList.remove("hidden")
    const errMsg = form.querySelector(`input[name="${where.name}"] ~ .err-msg-container > .err-msg`)
    errMsg.classList.remove("hidden")
}

function clearError(where) {
    where.classList.remove("err-field")
    const errIcon = form.querySelector(`input[name="${where.name}"] + .err-icon-container > .err-icon`)
    errIcon.classList.add("hidden")
    const errMsg = form.querySelector(`input[name="${where.name}"] ~ .err-msg-container > .err-msg`)
    errMsg.classList.add("hidden")
}

// browser prevents from validating some wrong email patterns
// need to check email validity through click event and not submit

function emailValidate() {
    const reg = new RegExp(/^[^.\s@]+(\.[^.\s@]+)*@[^.\s@]+(\.[^.\s@]+)+$/)
    // const reg2 = new RegExp(/^\S+@\S+\.\S+$/)
    if (!reg.test(inp_email.value) || (!inp_email.checkValidity())) showError(inp_email)
}

function formHandler(e) {
    e.preventDefault()

    clearError(inp_firstName)
    clearError(inp_lastName)
    clearError(inp_email)
    clearError(inp_password)

    if (inp_firstName.value.length === 0) showError(inp_firstName)
    if (inp_lastName.value.length === 0) showError(inp_lastName)
    if (inp_password.value.length === 0) showError(inp_password)
}

clearError(inp_firstName)
clearError(inp_lastName)
clearError(inp_email)
clearError(inp_password)

form.addEventListener("submit", formHandler)
form.querySelector(`input[type="submit"]`).addEventListener("click", emailValidate)