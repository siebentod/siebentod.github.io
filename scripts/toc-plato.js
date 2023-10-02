function translChange() {
    let showRu = document.getElementById("chooseRu");
    showRu.addEventListener("click", function() {
        //change translation
        clearEndsOfColumns();
        document.querySelector(".endOfRu").classList.add("hide");
        //boldness
        unBoldAll();
        document.getElementById("chooseRu").dataset.selected = true;
        //change text in header
        let ruTranslator = document.querySelector('[data-translation="ru"]');
        document.querySelector(".translator").innerHTML = ruTranslator.innerHTML;
    });
    
    let showEn = document.getElementById("chooseEn");
    showEn.addEventListener("click", function() {
        //change translation
        clearEndsOfColumns();
        document.querySelector(".endOfColumn2").classList.add("hide");
        document.querySelector(".endOfRu").classList.add("show");
        //boldness
        unBoldAll();
        document.getElementById("chooseEn").dataset.selected = true;
        //change text in header
        let enTranslator = document.querySelector('[data-translation="en"]');
        document.querySelector(".translator").innerHTML = enTranslator.innerHTML;
    });
  }

function clearEndsOfColumns(){
    const endsOfColumns = document.querySelectorAll('.endOfColumn');
    endsOfColumns.forEach(endOfColumn => {
        endOfColumn.classList.remove("hide", "show");
    });
}

function unBoldAll(){
    const translators = document.querySelectorAll('.chooseTranslator')
    translators.forEach(translator => {
        translator.dataset.selected = false;
    });
}

translChange();