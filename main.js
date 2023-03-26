const form  = document.querySelector("form")
const BASE_URL = "https://opentdb.com/api.php?amount=10"
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
        json.results.forEach((result) =>{
            displayTrivia(result)
        })
    })
    .catch(displayError);

})

function displayTrivia(result) {
    //console.log(result);
    const article = document.createElement("article");
    article.classList.add("card");
  
    const h2 = document.createElement("h2");
    h2.textContent = result.category;
  
    const question = document.createElement("p");
    question.textContent = result.question;

    const answer = document.createElement("p")
    answer.classList.add("hidden")
    answer.textContent = result.correct_answer

    const button = document.createElement("button")
    button.textContent = "Show Answer"

    document.querySelector("button")
    button.addEventListener("click", (event) => {
        answer.classList.remove("hidden")
    })
    
    article.append(h2, question, button, answer);
    document.querySelector("main").append(article);
  }



function displayError(error) {
    const section = document.querySelector("section.error");
    section.style.display = "block";
  
    const paragraph = document.createElement("p");
    paragraph.textContent = "Something went wrong!";
  
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = error;
  
    section.append(paragraph, errorMessage);
  }