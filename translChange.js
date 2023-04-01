function translChange() {
    let showM = document.getElementById("makovelsky");
    showM.addEventListener("click", function() {
        clearEndsOfColumns();
        document.querySelector(".endOfMakov").classList.add("hide");
        document.getElementById("dynnik").style.fontWeight = "normal";
        document.getElementById("lebedev").style.fontWeight = "normal";
        document.getElementById("lebedev2").style.fontWeight = "normal";
        document.getElementById("makovelsky").style.fontWeight = "bold";
        document.querySelector(".translator").innerHTML = "Перевод А.О. Маковельского";
    });
    
    let showD = document.getElementById("dynnik");
    showD.addEventListener("click", function() {
        clearEndsOfColumns();
        document.querySelector(".endOfColumn2").classList.add("hide");
        document.querySelector(".endOfMakov").classList.add("show");
        document.querySelector(".endOfDyn").classList.add("hideFurther");
        document.getElementById("dynnik").style.fontWeight = "bold";
        document.getElementById("makovelsky").style.fontWeight = "normal";
        document.getElementById("lebedev").style.fontWeight = "normal";
        document.getElementById("lebedev2").style.fontWeight = "normal";
        document.querySelector(".translator").innerHTML = "Перевод М.А. Дынника";
    });

    let showL = document.getElementById("lebedev");
    showL.addEventListener("click", function() {
        clearEndsOfColumns();
        document.querySelector(".endOfColumn2").classList.add("hide");
        document.querySelector(".endOfDyn").classList.add("show");
        document.querySelector(".endOfLeb").classList.add("hideFurther");
        document.getElementById("lebedev").style.fontWeight = "bold";
        document.getElementById("lebedev2").style.fontWeight = "normal";
        document.getElementById("makovelsky").style.fontWeight = "normal";
        document.getElementById("dynnik").style.fontWeight = "normal";
        document.querySelector(".translator").innerHTML = 'Перевод <a href="https://www.academia.edu/13585247">А.В. Лебедева 2014</a>';
    });

    let showL2 = document.getElementById("lebedev2");
    showL2.addEventListener("click", function() {
        clearEndsOfColumns();
        document.querySelector(".endOfColumn2").classList.add("hide");
        document.querySelector(".endOfDyn").classList.add("hide");
        document.querySelector(".endOfLeb").classList.add("show");
        document.getElementById("lebedev2").style.fontWeight = "bold";
        document.getElementById("makovelsky").style.fontWeight = "normal";
        document.getElementById("dynnik").style.fontWeight = "normal";
        document.getElementById("lebedev").style.fontWeight = "normal";
        document.querySelector(".translator").innerHTML = "Перевод А.В. Лебедева 1989";
    });

    //   let customToc = document.getElementById("firstToc");
    //   classList.remove("active");
    //     toggler[i].classList.remove("caret-down");
    //   if (customToc.style.display === "none") {
    //     customToc.style.display = "inline-block";
    //   } else {
    //     customToc.style.display = "none";
    //     closeTrees();
    //   }
  }


function clearEndsOfColumns(){
    const endsOfColumns = document.querySelectorAll('.endOfColumn');
    endsOfColumns.forEach(endOfColumn => {
        endOfColumn.classList.remove("hide", "show", "hideFurther");
    });
}

translChange();