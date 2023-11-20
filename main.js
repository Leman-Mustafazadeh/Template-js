let box = document.querySelector(".box")
let boxItem = document.querySelector(".box-item")
let section = document.querySelectorAll("section")
let laptop = document.querySelectorAll(".laptop")
let icon = document.querySelector(".fa-solid")
let form1 = document.querySelector(".form1")
let name1 = document.querySelector(".name1")
let password1 = document.querySelector(".password1")
let email1 = document.querySelector(".email1")
let name2 = document.querySelector(".name2")
let password2 = document.querySelector(".password2")
let email2 = document.querySelector(".email2")
let form2 = document.querySelector(".form2")
let signupBtn = document.querySelector(".signup-btn")
let signinBtn = document.querySelector(".signin-btn")
let signin = document.querySelector(".sign-in")
let signup = document.querySelector(".sign-up")
let entry = document.querySelector(".fa-solid")
let output = document.querySelector(".fa-sign-out")
let user = document.querySelector(".user")
let backSign = document.querySelector(".back-sign")
let checkbox = document.querySelector("#checkbox")
let elite = document.querySelector(".elite")
let value2, pass2
let names, password, email
/* console.log(elite); */
form1.addEventListener("submit", (e) => {
    e.preventDefault()
    if (name1.length === 0 || password1.length === 0 || email1.length === 0) {
        alert("xanalari doldurun")
    } else {
        localStorage.setItem("allData", names)
        localStorage.setItem("allPass", password)
        localStorage.setItem("allEmail", email)
        signup.style.display = "none";
        signin.style.display = "flex";
        location.reload()
    }
})

let localName = localStorage.getItem("allData")
let localPass = localStorage.getItem("allPass")
let localEmail = localStorage.getItem("allEmail")

let userLoad = false
if (localPass && localName && localEmail) {
    signup.style.display = "none";
    signin.style.display = "flex";
}
form2.addEventListener("submit", (e) => {
    e.preventDefault()
    if (value2.length === 0 || pass2.length === 0) {
        alert("xanalari doldurun")
    } else if (value2 == localName && pass2 == localPass) {
        signin.style.display = "none"
        userLoad = true
        localStorage.setItem("localUser", userLoad)
        location.reload()
    } else {
        alert("parol sehvdir")
    }

})
name1?.addEventListener("input", (e) => {
    names = e.target.value
})
password1?.addEventListener("input", (e) => {
    password = e.target.value
})
email1?.addEventListener("input", (e) => {
    email = e.target.value
})
name2?.addEventListener("input", (e) => {
    value2 = e.target.value
})
password2?.addEventListener("input", (e) => {
    pass2 = e.target.value
})
output.addEventListener("click", () => {
    signin.style.display = "block";
    user.innerHTML = " ";
    location.reload();
    userLoad = false;
    localStorage.removeItem("localUser")
})
let localUserGet = localStorage.getItem("localUser")
console.log(localUserGet);
if (localPass && localName && localUserGet) {
    user.innerHTML = localName
    signin.style.display = "none"
    signup.style.display = "none"
}
backSign.addEventListener("click", () => {
    signin.style.display = "none"
    signup.style.display = "block"
    localStorage.removeItem("allData")
})

// NIGHTMODE
let div = document.querySelectorAll("div")
let p = document.querySelectorAll("p")
checkbox.addEventListener("change", () => {
    // console.log(checkbox.checked);
    if (checkbox.checked) {
        document.body.style.backgroundColor = "black"
        elite.style.backgroundColor = "black"
        div.forEach((item) => {
            item.style.color = "white"
        })
        p.forEach((item) => {
            item.style.color = "white"
        })
        localStorage.setItem("modeNight", "night")
    } else {
        document.body.style.backgroundColor = ""

        localStorage.removeItem("night")
        div.forEach((item) => {
            item.style.color = ""
        })
        p.forEach((item) => {
            item.style.color = ""
        })
    }
})

if ( localStorage.setItem("modeNight", "night")) {
    document.body.style.backgroundColor = "black"
    elite.style.backgroundColor = "black"
    div.forEach((item) => {
        item.style.color = "white"
    })
    p.forEach((item) => {
        item.style.color = "white"
    })
}