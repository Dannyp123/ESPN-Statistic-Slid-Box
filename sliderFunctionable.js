function slidingBox() {
    var expand = document.getElementById("expandingSliderBtn");
    var motion = document.querySelector(".card");

    // missingValues();
    // var inputs = document.getElementById("insertName").querySelectorAll('.inputs')
    // for (const input of inputs){
    //     input.addEventListener("onInput", () => {
    //         missingValues();
    //     })
    // }

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


function showPlayerName() {
    var inpt = document.querySelector("#nameBar")
    var nameArea = document.querySelector(".playerNameArea")
    var expand = document.getElementById("expandingSliderBtn");

    expand.addEventListener("click", function() {
        nameArea.innerHTML =  inpt.value
    })


}

function showPlayerTd() {
    var inpt = document.querySelector("#tdBar")
    var nameArea = document.querySelector(".stats-td")
    var expand = document.getElementById("expandingSliderBtn");

    expand.addEventListener("click", function() {
        nameArea.innerHTML = inpt.value + " Touchdowns";
    })
}

function showPlayerInt() {
    var inpt = document.querySelector("#intBar")
    var nameArea = document.querySelector(".stats-int")
    var expand = document.getElementById("expandingSliderBtn");

    expand.addEventListener("click", function() {
        nameArea.innerHTML = inpt.value + " Interceptions"
    })
}

function showPlayerYds() {
    var inpt = document.querySelector("#yrdBar")
    var nameArea = document.querySelector(".stats-yrd")
    var expand = document.getElementById("expandingSliderBtn");

    expand.addEventListener("click", function() {
        nameArea.innerHTML = inpt.value + " Yards"
    })
}

function showPlayerRate() {
    var inpt = document.querySelector("#rateBar")
    var nameArea = document.querySelector(".stats-rate")
    var expand = document.getElementById("expandingSliderBtn");

    expand.addEventListener("click", function() {
        nameArea.innerHTML = inpt.value + " Rating"
    })
}

function showPlayerImg() {
    var inpt = document.querySelector("#imgBar")
    var nameArea = document.querySelector(".img-one")
    var expand = document.getElementById("expandingSliderBtn");

    expand.addEventListener("click", function() {
        nameArea.src = inpt.value
    })
}

function missingValues() {
    var rateInpt = document.querySelector("#rateBar")
    var intInpt = document.querySelector("#intBar")
    var yrdInpt = document.querySelector("#yrdBar")
    var tdInpt = document.querySelector("#tdBar")
    var inpt = document.querySelector("#nameBar")
    var expand = document.getElementById("expandingSliderBtn")

    console.log(rateInpt.value);

    if (rateInpt.value == "") {
        expand.style.display ="none"
    }
    else {
        expand.style.display = "block";
    }
    




}


slidingBox();
showPlayerName();
showPlayerTd();
showPlayerInt();
showPlayerYds();
showPlayerRate();
showPlayerImg();