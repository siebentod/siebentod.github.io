function floatingToc() {
  let tocButton = document.getElementById("tocButton");
  tocButton.addEventListener("click", function(){
    let customToc = document.getElementById("tocContent");
    if (customToc.style.display === "none") {
      customToc.style.display = "inline-block";
    } else {
      customToc.style.display = "none";
      closeTrees();
    }
  })
}

function treeToc() {
  let toggler = document.getElementsByClassName("caret");
  for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }
}

function closeTrees() {
  let toggler = document.getElementsByClassName("caret");
  for (let i = 0; i < toggler.length; i++) {
    toggler[i].parentElement.querySelector(".nested").classList.remove("active");
    toggler[i].classList.remove("caret-down");
  }
}

treeToc();
floatingToc();