translChange();

function translChange() {
  let showRu = document.getElementById('toc__translation1');
  showRu.addEventListener('click', function () {
    clearEndsOfColumns();
    document.querySelector('.endOfRu').classList.add('hide');

    unBoldAll();
    document.getElementById('toc__translation1').dataset.selected = true;

    let ruTranslator = document.querySelector('[data-translation="ru"]');
    document.querySelector('.header__translator').innerHTML =
      ruTranslator.innerHTML;
  });

  let showEn = document.getElementById('toc__translation2');
  showEn.addEventListener('click', function () {
    clearEndsOfColumns();
    document.querySelector('.endOfColumn2').classList.add('hide');
    document.querySelector('.endOfRu').classList.add('show');

    unBoldAll();
    document.getElementById('toc__translation2').dataset.selected = true;

    let enTranslator = document.querySelector('[data-translation="en"]');
    document.querySelector('.header__translator').innerHTML =
      enTranslator.innerHTML;
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
