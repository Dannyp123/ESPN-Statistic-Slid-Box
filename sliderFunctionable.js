function slidingBox() {
    var expand = document.getElementById("expandingSliderBtn");
    var motion = document.querySelector(".card");
    expand.addEventListener("click", function() {
        
        if(! motion.classList.contains("sliderOut")) {
            motion.classList.add("sliderOut")
            
        }
        else {
            motion.classList.remove("sliderOut")  
        }

        setTimeout(function(){motion.classList.add("sliderOut")}, 3100)   
    
    })

    
    
}
slidingBox();