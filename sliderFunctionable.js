function slidingBox() {
    var expand = document.getElementById("expandingSliderBtn");
    var motion = document.querySelector(".card");
    expand.addEventListener("click", function() {
        
        if(motion.classList.contains("slider")) {
            motion.classList.remove("slider");
        }
        else {
            motion.classList.add("slider")
        }
    })
}
slidingBox();