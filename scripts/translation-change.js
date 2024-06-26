function translChange() {
  const showTranslation1 = document.getElementById('toc__translation1');
  showTranslation1.addEventListener('click', function () {
    
    //change translation
    clearEndsOfColumns();
    document.querySelector('.endOfTranslation1').classList.add('hide');
    //boldness
    unBoldAll();
    showTranslation1.dataset.selected = true;
    //change text in header
    document.querySelector('.header__translator').innerHTML = showTranslation1.dataset.text;
    
  });
 
  const showTranslation2 = document.getElementById('toc__translation2');
  showTranslation2.addEventListener('click', function () {
        
    //change translation
    clearEndsOfColumns();
    document.querySelector('.endOfColumn2').classList.add('hide');
    document.querySelector('.endOfTranslation1').classList.add('show');
    document.querySelector('.endOfTranslation2').classList.add('hideFurther');
    //boldness
    unBoldAll();
    showTranslation2.dataset.selected = true;
    //change text in header
    document.querySelector('.header__translator').innerHTML = showTranslation2.dataset.text;
    
  });

  let showTranslation3 = document.getElementById('toc__translation3');
  showTranslation3.addEventListener('click', function () {
        
    //change translation
    clearEndsOfColumns();
    document.querySelector('.endOfColumn2').classList.add('hide');
    document.querySelector('.endOfTranslation2').classList.add('show');
    document.querySelector('.endOfTranslation3').classList.add('hideFurther');
    //boldness
    unBoldAll();
    showTranslation3.dataset.selected = true;
    //change text in header
    document.querySelector('.header__translator').innerHTML = showTranslation3.dataset.text;
    
  });

  let showTranslation4 = document.getElementById('toc__translation4');
  showTranslation4.addEventListener('click', function () {
        
    //change translation
    clearEndsOfColumns();
    document.querySelector('.endOfColumn2').classList.add('hide');
    // document.querySelector(".endOfDyn").classList.add("hide");
    document.querySelector('.endOfTranslation3').classList.add('show');
    //boldness
    unBoldAll();
    showTranslation4.dataset.selected = true;
    //change text in header
    document.querySelector('.header__translator').innerHTML = showTranslation4.dataset.text;
    
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

function clearEndsOfColumns() {
  const endsOfColumns = document.querySelectorAll('.endOfColumn');
  endsOfColumns.forEach((endOfColumn) => {
    endOfColumn.classList.remove('hide', 'show', 'hideFurther');
  });
}

function unBoldAll() {
  const tocTranslators = document.querySelectorAll('.chooseTranslator');
  tocTranslators.forEach((translator) => {
   translator.dataset.selected = false;
  });
}

translChange();
