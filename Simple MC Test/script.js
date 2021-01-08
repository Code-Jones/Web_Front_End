const request = new XMLHttpRequest();
let dataset;
let questionCounter = 0;
let answerList = [];
window.onload = loadXML;

function loadXML() {
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            dataset = request.responseXML;
        }
    };
    request.open("GET", "finalquiz.xml", true);
    request.send();
}

function nextQuestion() {
    let list = '';
    let questionList;
    if (questionCounter === 0) {
        document.getElementById('message').classList.remove('main_message');
        document.getElementById('question_title').classList.add('main_message');
        document.getElementById('question').classList.add('main_message');
        document.getElementById('message').style.display = 'none';
    }
        if (questionCounter === 5) {
        document.getElementById('results').style.display = 'block';
        document.getElementById('test').style.display = 'none';
        questionCounter = 0;
    }
    questionList = dataset.getElementsByTagName("question");
    document.getElementById('question_title').innerText = questionList[questionCounter].getElementsByTagName('qtitle')[0].innerHTML;
    list += "<li id='a' onclick='recordAnswer(this.id, questionCounter)'> A) " + questionList[questionCounter].getElementsByTagName("a")[0].innerHTML + "</li>";
    list += "<li id='b' onclick='recordAnswer(this.id, questionCounter)'> B) " + questionList[questionCounter].getElementsByTagName("b")[0].innerHTML + "</li>";
    list += "<li id='c' onclick='recordAnswer(this.id, questionCounter)'> C) " + questionList[questionCounter].getElementsByTagName("c")[0].innerHTML + "</li>";
    list += "<li id='d' onclick='recordAnswer(this.id, questionCounter)'> D) " + questionList[questionCounter].getElementsByTagName("d")[0].innerHTML + "</li>";
    document.getElementById('question').innerHTML = list;
    questionCounter = parseInt(questionList[questionCounter].getElementsByTagName('qnumber')[0].innerHTML);
}

function recordAnswer(id) {
    answerList[questionCounter] = id;
    nextQuestion();
}

function getResults() {
    let rightAnswers = (dataset.getElementsByTagName('rightanswers')[0].innerHTML.split(','));
    let correct = 0;
    for (let i = 0; i < rightAnswers.length; i++) {
        if (rightAnswers[i] === answerList[i]) {
            correct++;
        }
    }
    document.getElementById('marks').innerText = " Grade " + correct + "/" + rightAnswers.length + " " + ("%" + (correct/rightAnswers.length) * 100);
}
