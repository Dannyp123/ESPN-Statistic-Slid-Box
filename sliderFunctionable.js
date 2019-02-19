function slidingBox() {
  var expand = document.getElementById("expandBtn");
  var motion = document.querySelector(".myCard");

  disablingBtn();
  expand.addEventListener("click", function() {
    if (!motion.classList.contains("sliderOut")) {
      motion.classList.add("sliderOut");
    } else {
      motion.classList.remove("sliderOut");
    }

    setTimeout(function() {
      // motion.classList.add("sliderOut");
      motion.classList.add("sliderRotate")
      
    }, 4500);
  });
}

refresh();  


function showPlayerName() {
  var inpt = document.querySelector("#nameBar");
  var nameArea = document.querySelector(".playerNameArea");
  var expand = document.getElementById("expandBtn");

  expand.addEventListener("click", function() {
    nameArea.innerHTML = inpt.value;
  });
}

function showPlayerTd() {
  var inpt = document.querySelector("#tdBar");
  var nameArea = document.querySelector(".stats-td");
  var expand = document.getElementById("expandBtn");

  expand.addEventListener("click", function() {
    nameArea.innerHTML = inpt.value + " Touchdowns";
  });
}

function showPlayerInt() {
  var inpt = document.querySelector("#intBar");
  var nameArea = document.querySelector(".stats-int");
  var expand = document.getElementById("expandBtn");

  expand.addEventListener("click", function() {
    nameArea.innerHTML = inpt.value + " Interceptions";
  });
}

function showPlayerYds() {
  var inpt = document.querySelector("#yrdBar");
  var nameArea = document.querySelector(".stats-yrd");
  var expand = document.getElementById("expandBtn");

  expand.addEventListener("click", function() {
    nameArea.innerHTML = inpt.value + " Yards";
  });
}

function showPlayerRate() {
  var inpt = document.querySelector("#rateBar");
  var nameArea = document.querySelector(".stats-rate");
  var expand = document.getElementById("expandBtn");

  expand.addEventListener("click", function() {
    nameArea.innerHTML = inpt.value + " Rating";
  });
}

function showPlayerImg() {
  var inpt = document.querySelector("#imgBar");
  var nameArea = document.querySelector(".img-one");
  var expand = document.getElementById("expandBtn");

  expand.addEventListener("click", function() {
    nameArea.src = inpt.value;
  });
}

function disablingBtn() {
  inputsNameDisabling()
  inputsImgDisabling()
  inputsIntDisabling()
  inputsRateDisabling()
  inputsTdDisabling()
}

function refresh() {
  expand = document.getElementById("refreshBtn");
  expand.addEventListener("click", function() {
    window.location.reload();
  })
}

function inputsImgDisabling() {
  expandBtn = document.getElementById("expandBtn");
  expandBtn.disabled = true;
  playerInput = document.getElementById("imgBar");
  playerInput.addEventListener("keyup", function() {
    if (playerInput.value == "") {
      expandBtn.disabled = true;
    } else {
      expandBtn.disabled = false;
    }
  });
}

function inputsRateDisabling() {
  expandBtn = document.getElementById("expandBtn");
  expandBtn.disabled = true;
  playerInput = document.getElementById("rateBar");
  playerInput.addEventListener("keyup", function() {
    if (playerInput.value == "") {
      expandBtn.classList.remove("sliding-btn:hover ")

      expandBtn.disabled = true;
    } else {
      expandBtn.disabled = false;
    }
  });
}

function inputsYrdDisabling() {
  expandBtn = document.getElementById("expandBtn");
  expandBtn.disabled = true;
  playerInput = document.getElementById("yrdBar");
  playerInput.addEventListener("keyup", function() {
    if (playerInput.value == "") {
      expandBtn.classList.remove("sliding-btn:hover ")
      expandBtn.disabled = true;
    } else {
      expandBtn.disabled = false;
    }
  });
}

function inputsTdDisabling() {
  expandBtn = document.getElementById("expandBtn");
  expandBtn.disabled = true;
  playerInput = document.getElementById("tdBar");
  playerInput.addEventListener("keyup", function() {
    if (playerInput.value == "") {
      expandBtn.disabled = true;
    } else {
      expandBtn.disabled = false;
    }
  });
}

function inputsNameDisabling() {
  expandBtn = document.getElementById("expandBtn");
  expandBtn.disabled = true;
  playerInput = document.getElementById("nameBar");
  playerInput.addEventListener("keyup", function() {
    
    if (playerInput.value == "") {
      expandBtn.classList.remove("sliding-btn:hover ")

      expandBtn.disabled = true;
    } else {
      expandBtn.disabled = false;
    }
  });
}

function inputsIntDisabling() {
  expandBtn = document.getElementById("expandBtn");
  expandBtn.disabled = true;
  playerInput = document.getElementById("intBar");
  playerInput.addEventListener("keyup", function() {
    if (playerInput.value == "") {
      expandBtn.classList.remove("sliding-btn:hover ")

      expandBtn.disabled = true;
    } else {
      expandBtn.disabled = false;
    }
  });
}



slidingBox();
showPlayerName();
showPlayerTd();
showPlayerInt();
showPlayerYds();
showPlayerRate();
showPlayerImg();
