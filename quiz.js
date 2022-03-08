class Quiz {
  constructor(questions){
    this.questions = questions;
    this.index = 0;
    this.score = 0;
  }
  getQuestion() {
   return this.questions[this.index];
  }
  getCategories() {
    this.index = 0;
    this.score = 0;
    var categoriesObjs = [];
    var categoriesArr = [];
    var j = 0;
    for (let i = 0; i < questions.length; i++) {
      if (!categoriesArr.includes(questions[i].category)) {
      categoriesObjs[j] = {};
      categoriesObjs[j].id = j;
      categoriesObjs[j].label = questions[i].category;
      j++;
      categoriesArr.push(questions[i].category);
      }
    }
    //console.log(categoriesArr);
    // countCategoryQuestions start
    var cat1Count = 0;
    var cat2Count = 0;
    var cat3Count = 0;
    var cat4Count = 0;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].category === categoriesArr[0]) {
        cat1Count++;
      } else if (questions[i].category === categoriesArr[1]) {
        cat2Count++;
      } else if (questions[i].category === categoriesArr[2]) {
        cat3Count++;
      } else if (questions[i].category === categoriesArr[3]) {
        cat4Count++;
      }
    }

    for (let i = 0; i < categoriesObjs.length; i++) {
      if (categoriesObjs[i].label === categoriesArr[0]) {
        categoriesObjs[i].count = cat1Count;
      } else if (categoriesObjs[i].label === categoriesArr[1]) {
        categoriesObjs[i].count = cat2Count;
      } else if (categoriesObjs[i].label === categoriesArr[2]) {
        categoriesObjs[i].count = cat3Count;
      } else if (categoriesObjs[i].label === categoriesArr[3]){
        categoriesObjs[i].count = cat4Count;
      }
    }
    // countCategoryQuestions end
    //console.log(categoriesObjs);
    return categoriesObjs;
  }
  randomizeOptions(){
    let copyArray = [].concat(this.getQuestion().options);
    let rand = [];
    for (var i = 0; i < 4; i++) {
      let r = Math.floor(Math.random()*copyArray.length);
      //console.log(rand);
      rand.push(copyArray[r]);
      copyArray.splice(r,1);
    }
    //console.log(rand);
    return rand;
  }
  userAnswer(answer){
    if (answer == this.getQuestion().answer) {
      this.score += this.getQuestion().points;
    }
    this.index++;
  }
  stepping() {
    this.index++;
  }
  end() {
    return this.index === this.questions.length;
  }
}

const quiz = new Quiz(questions);
//console.log(quiz);
