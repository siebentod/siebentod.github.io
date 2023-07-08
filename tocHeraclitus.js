function translChange() {
    let showM = document.getElementById("chooseMakovelsky");
    showM.addEventListener("click", function() {
        //change translation
        clearEndsOfColumns();
        document.querySelector(".endOfMakov").classList.add("hide");
        //boldness
        unBoldAll();
        document.getElementById("chooseMakovelsky").dataset.selected = true;
        //change text in header
        document.querySelector(".translator").innerHTML = "Перевод А.О. Маковельского";
    });
    
    let showD = document.getElementById("chooseDynnik");
    showD.addEventListener("click", function() {
        //change translation
        clearEndsOfColumns();
        document.querySelector(".endOfColumn2").classList.add("hide");
        document.querySelector(".endOfMakov").classList.add("show");
        document.querySelector(".endOfDyn").classList.add("hideFurther");
        //boldness
        unBoldAll();
        document.getElementById("chooseDynnik").dataset.selected = true;
        //change text in header
        document.querySelector(".translator").innerHTML = "Перевод М.А. Дынника";
    });

    let showL = document.getElementById("chooseLebedev2014");
    showL.addEventListener("click", function() {
        //change translation
        clearEndsOfColumns();
        document.querySelector(".endOfColumn2").classList.add("hide");
        document.querySelector(".endOfDyn").classList.add("show");
        document.querySelector(".endOfLeb").classList.add("hideFurther");
        //boldness
        unBoldAll();
        document.getElementById("chooseLebedev2014").dataset.selected = true;
        //change text in header
        document.querySelector(".translator").innerHTML = 'Перевод <a href="https://www.academia.edu/13585247">А.В. Лебедева 2014</a>';
    });

    let showL2 = document.getElementById("chooseLebedev1989");
    showL2.addEventListener("click", function() {
        //change translation
        clearEndsOfColumns();
        document.querySelector(".endOfColumn2").classList.add("hide");
        document.querySelector(".endOfDyn").classList.add("hide");
        document.querySelector(".endOfLeb").classList.add("show");
        //boldness
        unBoldAll();
        document.getElementById("chooseLebedev1989").dataset.selected = true;
        //change text in header
        document.querySelector(".translator").innerHTML = "Перевод А.В. Лебедева 1989";
    });

    //   let customToc = document.getElementById("tocContent");
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

function unBoldAll(){
    const translators = document.querySelectorAll('.chooseTranslator')
    translators.forEach(translator => {
        translator.dataset.selected = false;
    });
}

translChange();