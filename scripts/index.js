let Tetralogy = document.getElementById('Tetralogy');
let Chronology = document.getElementById('Chronology');
let Iamblichus = document.getElementById('Iamblichus');
// let Length = document.getElementById('Length')

Chronology.addEventListener('click', () => {
  document.getElementById('platoDialogues').innerHTML = textChronology;
});

Tetralogy.addEventListener('click', () => {
  document.getElementById('platoDialogues').innerHTML = textTetralogy;
});

Iamblichus.addEventListener('click', () => {
  document.getElementById('platoDialogues').innerHTML = textIamblichus;
});

// Length.addEventListener('click', () => {
//     document.getElementById("platoDialogues").innerHTML = textLength;
// })

let textChronology = `<div style="margin-top: 0; display: grid; grid-auto-flow: column">
<ul><h4 style ="margin:0">I</h4>
<li>Апология</li>
<li><a href="./plato-crito.html">Критон</a></li>
<li>Хармид</li>
<li><a href="./plato-alcibiades1.html">Алкивиад I</a></li>
<li>Евтидем</li>
<li>Евтифрон</li>
<li>[Гиппий Больший]</li>
<li>Гиппий Меньший</li>
<li>Ион</li>
<li>Лахет</li>
<li>Лисий</li>
<li>Менексен</li>
<li><a href="./plato-cratylus.html">Кратил</a></li>
<li><a href="./plato-gorgias.html">Горгий</a></li>
</ul>

<ul style="grid-column: 2;"><h4 style ="margin:0">II</h4>
<li><a href="./plato-meno.html">Менон</a></li>
<li><a href="./plato-phaedo.html">Федон</a></li>
<li>Протагор</li>
<li><a href="./plato-symposium.html">Пир</a></li>
<li><a href="./plato-phaedrus.html">Федр</a></li>
<li><a href="./plato-politeia.html">Государство</a></li>
<li><a href="./plato-parmenides.html">Парменид</a></li>
<li style="margin-bottom:5px"><a href="./plato-theaetetus.html">Теэтет</a></li>
<h4 style ="margin:0">III</h4>
<li><a href="./plato-sophistes.html">Софист</a></li>
<li><a href="./plato-politikos.html">Политик</a></li>
<li><a href="./plato-philebus.html">Филеб</a></li>
<li><a href="./plato-timaeus.html">Тимей</a></li>
<li><a href="./plato-critias.html">Критий</a></li>
<li>Законы</li>
</ul>`;

let textTetralogy = `<div style="margin-top: 0; display: grid; grid-auto-flow: column;
      grid-template-columns: 53%;">
<ul style="padding-left:12px">
<h4 style ="margin:0">Первая тетралогия</h4>
<li>Евтифрон, или О благочестии</li>
<li>Апология Сократа</li>
<li><a href="./plato-crito.html">Критон, или О должном</a></li>
<li><a href="./plato-phaedo.html">Федон, или О душе</a></li>

<h4 style ="margin-bottom:0; margin-top:2px">Вторая тетралогия</h4>
<li><a href="./plato-cratylus.html">Кратил, или О правильности имен</a></li>
<li><a href="./plato-theaetetus.html">Теэтет, или О знании</a></li>
<li><a href="./plato-sophistes.html">Софист, или О сущем</a></li>
<li><a href="./plato-politikos.html">Политик, или о Царской власти</a></li>

<h4 style ="margin-bottom:0; margin-top:2px">Третья тетралогия</h4>
<li><a href="./plato-parmenides.html">Парменид, или Об идеях</a></li>
<li><a href="./plato-philebus.html">Филеб, или О наслаждении</a></li>
<li><a href="./plato-symposium.html">Пир, или О благе</a></li>
<li><a href="./plato-phaedrus.html">Федр, или О любви</a></li>

<h4 style ="margin-bottom:0; margin-top:2px">Четвертая тетралогия</h4>
<li><a href="./plato-alcibiades1.html">Алкивиад Первый</a></li>
<li>Алкивиад Второй, или О молитве</li>
<li>Гиппарх, или Сребролюбец</li>
<li>Соперники, или О философии</li>

<h4 style ="margin-bottom:0; margin-top:2px">Пятая тетралогия</h4>
<li>Феаг, или О философии</li>
<li>Хармид, или Об умеренности</li>
<li>Лахет, или О мужестве</li>
<li>Лисий, или О дружбе</li>
</ul>

<ul style="grid-column: 2; padding-right: 12px; padding-left: 12px">
<h4 style ="margin:0">Шестая тетралогия</h4>
<li>Евфидем, или Спорщик</li>
<li>Протагор, или Софисты</li>
<li><a href="./plato-gorgias.html">Горгий, или О риторике</a></li>
<li><a href="./plato-meno.html">Менон, или О добродетели</a></li>

<h4 style ="margin-bottom:0; margin-top:2px">Седьмая тетралогия</h4>
<li>Гиппий первый или О прекрасном</li>
<li>Гиппий второй или О должном</li>
<li>Ион, или об Илиаде</li>
<li>Менексен, или Надгробное слово</li>

<h4 style ="margin-bottom:0; margin-top:2px">Восьмая тетралогия</h4>
<li>Клитофонт, или Вступление</li>
<li><a href="./plato-politeia.html">Государство, или О справедливости</a></li>
<li><a href="./plato-timaeus.html">Тимей, или О природе</a></li>
<li><a href="./plato-critias.html">Критий, или Атлантида</a></li>

<h4 style ="margin-bottom:0; margin-top:2px">Девятая тетралогия</h4>
<li>Минос, или О законе</li>
<li>Законы, или О законодательстве</li>
<li>Послезаконие, или Ночной совет, или Философ</li>
<li>Тринадцать Писем</li>
</ul></div>`;

let textIamblichus = `<ul><h3 style="margin-bottom:0; margin-top:2px">«Канон Ямвлиха»</h3>
<li><a href="./plato-alcibiades1.html">Алкивиад I</a> – введение в философию, «о познании самого себя»</li>
<li><a href="./plato-gorgias.html">Горгий</a> и <a href="./plato-phaedo.html">Федон</a> – «этические» диалоги</li>
<li><a href="./plato-cratylus.html">Кратил</a> и <a href="./plato-theaetetus.html">Теэтет</a> – «логические»</li>
<li><a href="./plato-sophistes.html">Софист</a> и <a href="./plato-politikos.html">Политик</a> – «физические»</li>
<li><a href="./plato-symposium.html">Пир</a> и <a href="./plato-phaedrus.html">Федр</a> – «теологические»</li>
<li><a href="./plato-timaeus.html">Тимей</a> (о физическом мире) и <a href="./plato-parmenides.html">Парменид</a> (о сверхчувственной реальности)</li>
<li><a href="./plato-philebus.html">Филеб</a> – о благе-первоначале</li></ul>`;

// let textLength = ``
