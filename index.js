var articles = document.getElementById("articles");
var temperature = document.getElementById("temperature");
var quizz = document.getElementById("quizz");

function showArticlesSection() {
        articles.style.display = "flex";
        temperature.style.display = "none";
        quizz.style.display = "none";
}

function showTemperatureSection() {
        articles.style.display = "none";
        temperature.style.display = "block";
        quizz.style.display = "none";
}

function showQuizzSection() {
        articles.style.display = "none";
        temperature.style.display = "none";
        quizz.style.display = "block";
}