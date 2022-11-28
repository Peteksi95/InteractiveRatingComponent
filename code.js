const btnlist = document.querySelectorAll("[data-btn]")
const submitBtn = document.getElementById("submit")
const selectedText = document.getElementById("selected")

btnlist.forEach((btn) => {
    btn.addEventListener("click", (e) => {
       let ratingValue = e.currentTarget.value 
       btnlist.forEach(btn => btn.classList.remove("active"))
       btn.classList.add("active")
       sessionStorage.setItem("rating", ratingValue)
       console.log(typeof ratingValue)
       console.log(ratingValue)
       console.log(sessionStorage)
    })
})

if (window.location.href.match("thankyou.html") != null) {
    let ratingText = sessionStorage.getItem("rating")
    selectedText.innerHTML = "You selected " + ratingText + " out of 5"
    console.log(sessionStorage)
    console.log(typeof ratingValue)
}