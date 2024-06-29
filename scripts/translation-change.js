const endsOfColumns = Array.from(document.querySelectorAll('.endOfColumn'));
const tocTranslations = Array.from(
  document.querySelectorAll('.chooseTranslation')
);
const isNumbered = document.getElementById('endOfNumbers') !== null;
const jumpNeeded = document.getElementById('jumpNeeded') !== null;

handleFirstTranslationButton();

if (isNumbered) {
  for (let i = 1; i < tocTranslations.length; i++) {
    handleTranslationButtons(
      tocTranslations[i],
      endsOfColumns[i + 1],
      endsOfColumns[i + 2]
    );
  }
} else {
  for (let i = 1; i < tocTranslations.length; i++) {
    handleTranslationButtons(
      tocTranslations[i],
      endsOfColumns[i],
      endsOfColumns[i + 1]
    );
  }
}

function handleFirstTranslationButton() {
  tocTranslations[0].addEventListener('click', function () {
    if (jumpNeeded) {
      var first = getFirstVisible();
    }
    clearEndsOfColumns();
    if (isNumbered) {
      endsOfColumns[2].classList.add('hide');
    } else {
      endsOfColumns[1].classList.add('hide');
    }

    unBoldAll();
    tocTranslations[0].dataset.selected = true;
    document.querySelector('.header__translator').innerHTML =
      tocTranslations[0].dataset.text;
    if (jumpNeeded) {
      first.scrollIntoView();
    }
  });
}

function handleTranslationButtons(translation, endOfColumn, nextEndOfColumn) {
  translation.addEventListener('click', function () {
    if (jumpNeeded) {
      var first = getFirstVisible();
    }
    clearEndsOfColumns();
    if (isNumbered) {
      endsOfColumns[1].classList.add('hide');
    } else {
      endsOfColumns[0].classList.add('hide');
    }
    endOfColumn.classList.add('show');
    nextEndOfColumn.classList.add('hideFurther');

    unBoldAll();
    translation.dataset.selected = true;
    document.querySelector('.header__translator').innerHTML =
      translation.dataset.text;
    if (jumpNeeded) {
      first.scrollIntoView();
    }
  });
}

function clearEndsOfColumns() {
  endsOfColumns.forEach((endOfColumn) => {
    endOfColumn.classList.remove('hide', 'show', 'hideFurther');
  });
}

function unBoldAll() {
  tocTranslations.forEach((translation) => {
    translation.dataset.selected = false;
  });
}
