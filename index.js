const form = document.querySelector(".fill form")

const inp_firstName = form.querySelector(`input[name="first-name"]`)
const inp_lastName = form.querySelector(`input[name="last-name"]`)
const inp_email = form.querySelector(`input[name="email"]`)
const inp_password = form.querySelector(`input[name="password"]`)

// todo: if input is inalid, highlight element as invalid
// input:focus border should not be visible when error occured
// error icons and messages should be visible too
// everything should be reset after success submit or page reload

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

function formHandler(e) {
    e.preventDefault()

    const reg = new RegExp(/^[^.\s@]+(\.[^.\s@]+)*@[^.\s@]+(\.[^.\s@]+)+$/)

    clearError(inp_firstName)
    clearError(inp_lastName)
    clearError(inp_email)
    clearError(inp_password)

    if (inp_firstName.value.length === 0) showError(inp_firstName)
    if (inp_lastName.value.length === 0) showError(inp_lastName)
    if (!reg.test(inp_email.value)) showError(inp_email)
    if (inp_password.value.length === 0) showError(inp_password)
}

clearError(inp_firstName)
clearError(inp_lastName)
clearError(inp_email)
clearError(inp_password)

form.addEventListener("submit", formHandler)