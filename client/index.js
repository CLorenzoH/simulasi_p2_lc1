$(document).ready(() => {
    auth()
    $("#login-page").on("submit", (event) => {
        event.preventDefault()
        login()
    })
})

function auth() {
    if (!localStorage.getItem("access_token")) {
        $("#login-page").show()
        $("#main-page").hide()
        $("#my-gallery-page").hide()
    } else {
        $("#login-page").hide()
        $("#main-page").show()
        $("#my-gallery-page").show()
    }
}

// const baseUrl: "http://localhost:5000"
// function login(){
//   $.ajax({
//     url:
//   })
// }

function logout() {}
