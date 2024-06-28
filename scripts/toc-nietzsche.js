function translChange() {
  let showRu = document.getElementById('choose2007');
  showRu.addEventListener('click', function () {
    let first = getFirstVisible();
    //change translation
    clearEndsOfColumns();
    document.querySelector('.endOfColumn2').classList.add('hide');
    //boldness
    unBoldAll();
    document.getElementById('choose2007').dataset.selected = true;
    //change text in header
    document.querySelector('.header__translator').innerHTML =
      'Перевод Ю.М. Антоновского (изд. 2007)';
    first.scrollIntoView();
  });

  let showEn = document.getElementById('choose1990');
  showEn.addEventListener('click', function () {
    let first = getFirstVisible();
    //change translation
    clearEndsOfColumns();
    document.querySelector('.endOfColumn1').classList.add('hide');
    document.querySelector('.endOfColumn2').classList.add('show');
    //boldness
    unBoldAll();
    document.getElementById('choose1990').dataset.selected = true;
    //change text in header
    document.querySelector('.header__translator').innerHTML =
      'Пер. Ю.М. Антоновского, правка К.А. Свасьяна (1990)';
    first.scrollIntoView();
  });
}

function clearEndsOfColumns() {
  const endsOfColumns = document.querySelectorAll('.endOfColumn');
  endsOfColumns.forEach((endOfColumn) => {
    endOfColumn.classList.remove('hide', 'show');
  });
}

function unBoldAll() {
  const translators = document.querySelectorAll('.chooseTranslation');
  translators.forEach((translator) => {
    translator.dataset.selected = false;
  });
}

translChange();
