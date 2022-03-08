window.addEventListener('load', run);
const myH1 = document.querySelector('h1');
var options = document.querySelectorAll('.option');
var categories = document.querySelectorAll('.category');
var cInfo = document.querySelector('.cInfo');
var igraj = true;

function run() {
  // category chooosing
  myH1.innerHTML = "Izaberite oblast";
  quizCategories = quiz.getCategories();

  for (let i = 0; i < categories.length; i++) {
    categories[i].innerHTML = quizCategories[i].label;
    categories[i].id = quizCategories[i].id;
    categories[i].addEventListener('mousemove', showInfo);
    //categories[i].addEventListener('click', ctgSelected);
    categories[i].onclick = function() {
      let current = quizCategories[this.id];
      selectedCategory = current.label;
      for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = "none";
        options[i].style.display = "block";
      }
      cInfo.style.display = "none";
      startQuiz();
    }
  }
}

function showInfo(e) {
  let current = quizCategories[this.id];
  cInfo.innerHTML = `Broj pitanja: ${current.count}`;
  cInfo.style.top = e.y + 20 +'px';
  cInfo.style.left = e.x + 5 + 'px';
}

function startQuiz() {
  if (!quiz.end()) {
    var cq = quiz.getQuestion();
    if (cq.category == selectedCategory) {
      myH1.innerHTML = cq.text;
      let rand = quiz.randomizeOptions();
      for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = rand[i];
        options[i].onclick = function () {
          quiz.userAnswer(this.innerHTML);
          startQuiz();
        }
      }
    } else {
      quiz.stepping();
      startQuiz();
    }
  } else {
    igraj = confirm(` Kraj kviza!
            Vas rezultat je: ${quiz.score}
            Da li zelite da igrate ponovo?
            OK - Da; Cancel - Ne;`);
    if (igraj === true) {
      for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = "block";
        options[i].style.display = "none";
      }
      run();
    } else {
      for (var i = 0; i < categories.length; i++) {
        options[i].style.display = "none";
      }
      myH1.innerHTML = "Kraj kviza";
    }
  }
}
