function getFirstVisible() {
  const visible = (element) => {
    const rect = element?.getBoundingClientRect();
    if (!rect) return;
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  let first;
  let firstOffY;
  let allVisible = Array.from(document.querySelectorAll(".mainText > *:not(.endOfColumn1 ~ *)")).filter(visible);
  for (var elem in allVisible) {
    elem = allVisible[elem];
    const offY =
      elem.getBoundingClientRect().top + document.documentElement.scrollTop;
    if (first == null || offY < firstOffY) {
      first = elem;
      firstOffY = offY;
    }
  }
  console.log(first.outerHTML);
  return first;
}

function translChange() {
  let showRu = document.getElementById("choose2007");
  showRu.addEventListener("click", function () {
    let first = getFirstVisible();
    //change translation
    clearEndsOfColumns();
    document.querySelector(".endOfColumn2").classList.add("hide");
    //boldness
    unBoldAll();
    document.getElementById("choose2007").dataset.selected = true;
    //change text in header
    document.querySelector(".translator").innerHTML =
      "Перевод Ю.М. Антоновского (изд. 2007)";
    first.scrollIntoView();
  });

  let showEn = document.getElementById("choose1990");
  showEn.addEventListener("click", function () {
    let first = getFirstVisible();
    //change translation
    clearEndsOfColumns();
    document.querySelector(".endOfColumn1").classList.add("hide");
    document.querySelector(".endOfColumn2").classList.add("show");
    //boldness
    unBoldAll();
    document.getElementById("choose1990").dataset.selected = true;
    //change text in header
    document.querySelector(".translator").innerHTML =
      "Пер. Ю.М. Антоновского, правка К.А. Свасьяна (1990)";
    first.scrollIntoView();
  });
}

function clearEndsOfColumns() {
  const endsOfColumns = document.querySelectorAll(".endOfColumn");
  endsOfColumns.forEach((endOfColumn) => {
    endOfColumn.classList.remove("hide", "show");
  });
}

function unBoldAll() {
  const translators = document.querySelectorAll(".chooseTranslator");
  translators.forEach((translator) => {
    translator.dataset.selected = false;
  });
}

translChange();
