/* nav bar variables */
const articles = document.getElementById("articles");
const temperature = document.getElementById("temperature");
const quizz = document.getElementById("quizz");

/* celsius variables */
const converterCelsiusButton = document.getElementById("c-converter-button");
converterCelsiusButton.addEventListener("click", converterCelsiusFunction);

/* farenheit variables */
const converterFarenheitButton = document.getElementById("f-converter-button");
converterFarenheitButton.addEventListener("click", converterFarenheitFunction);

/* kelvin variables */
const converterKelvinButton = document.getElementById("k-converter-button");
converterKelvinButton.addEventListener("click", converterKelvinFunction);

/* quizz array */
const quizzArray = [
    [1, "how many liters of water should one drink a day", "2"],
    [2, "Which of these foods does not count towards your five-a-day?: potatoes, orange juice, fruits, vegetables", "potatoes"],
    [3, "How many portions of fish should you eat each week?: 8, 6, 4 or 2", "2"],
];

 

/* nav bar functions */

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
        if ((quizz.style.display = "block") && (articles.style.display = "none") &&  (temperature.style.display = "none")) {
            let answer;
            let response;
            for(var i=0; i < quizzArray.length; i += 1) {  
                answer = prompt(quizzArray[i][1]);
                response = answer.toLowerCase();
            
                if (response === quizzArray[i][2]){
                    document.write(`<p>You got question ${quizzArray[i][0]} correct</p>`);
                }else {
                    document.write(`<p>You got question ${quizzArray[i][0]} incorrect</p>`);
                }    
        }
        }
        
}



/* celsius function */
function converterCelsiusFunction() {  
const celsiusValue = document.getElementById("c-celsius").value;
console.log (celsiusValue);
let farenheitValue = (celsiusValue * 9/5) + 32;
console.log (farenheitValue);
let kelvinValue = parseInt(celsiusValue) + 273.15;
console.log (kelvinValue);
  document.getElementById("c-farenheit").value = farenheitValue;
  document.getElementById("c-kelvin").value = kelvinValue;
}

/* farenheit function */
function converterFarenheitFunction() {  
    const farenheitValue = document.getElementById("f-farenheit").value;
    console.log (farenheitValue);
    let celsiusValue = (parseInt(farenheitValue) - 32) * 5/9;
    console.log (celsiusValue);
    let kelvinValue = (parseInt(farenheitValue) + 459.67) / 1.8;
    console.log (kelvinValue);
      document.getElementById("f-celsius").value = celsiusValue;
      document.getElementById("f-kelvin").value = kelvinValue;
    }

    /* kelvin function */
function converterKelvinFunction() {  
    const kelvinValue = document.getElementById("k-kelvin").value;
    console.log (kelvinValue);
    let farenheitValue = 1.8 * (parseInt(kelvinValue) - 273.15) + 32;
    console.log (farenheitValue);
    let celsiusValue = parseInt(kelvinValue) - 273.15;
    console.log (celsiusValue);
      document.getElementById("k-farenheit").value = farenheitValue;
      document.getElementById("k-celsius").value = celsiusValue;
    }