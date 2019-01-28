function slidingBox() {
    var expand = document.getElementById("expandingSliderBtn");
    var motion = document.querySelector(".card");
    expand.addEventListener("click", function () {

        if (!motion.classList.contains("sliderOut")) {
            motion.classList.add("sliderOut")

        } else {
            motion.classList.remove("sliderOut")
        }

        setTimeout(function () {
            motion.classList.add("sliderOut")
        }, 3100)

    })
}

// function showRandomStats(name, td, int, rating, yards) {
//     const newPlayer = document.createElement("div")
//     newPlayer.classList.add("card");
//     newPlayer.innerHTML = `
 
//           `

//     document.body.appendChild(newPlayer)
// }



slidingBox();
// showRandomStats(22, 8, 96.9, 3885)