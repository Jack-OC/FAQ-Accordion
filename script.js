var questions = document.querySelectorAll(".question");
var answers = document.querySelectorAll(".answer");


questions.forEach((question, index) => {
    question.addEventListener("click", function () {
        this.classList.toggle("active");
        answers[index].classList.toggle("show");
    });
});