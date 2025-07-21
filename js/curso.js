document
.getElementById("check-answers-btn")
.addEventListener("click", function () {
    const questions = document.querySelectorAll(".quiz-question");
    let score = 0;
    const totalQuestions = questions.length;

questions.forEach((question, index) => {
    const optionsContainer = question.querySelector(".quiz-options");
    const correctAnswer = optionsContainer.dataset.correct;
    const selectedOption = question.querySelector(
        `input[name="q${index + 1}"]:checked`
    );

      // Reset styles
optionsContainer.querySelectorAll("label").forEach((label) => {
        label.classList.remove("correct", "incorrect");
    });

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const selectedLabel = selectedOption.parentElement;

        if (userAnswer === correctAnswer) {
        selectedLabel.classList.add("correct");
        score++;
        } else {
        selectedLabel.classList.add("incorrect");
          // Highlight the correct answer as well
        const correctLabel = optionsContainer.querySelector(
            `input[value="${correctAnswer}"]`
        ).parentElement;
        correctLabel.classList.add("correct");
        }
    } else {
        // If no answer is selected, just highlight the correct one
        const correctLabel = optionsContainer.querySelector(
        `input[value="${correctAnswer}"]`
        ).parentElement;
        correctLabel.classList.add("correct");
    }
    });

    const resultsDiv = document.getElementById("quiz-results");
    resultsDiv.innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas!`;
    resultsDiv.style.display = "block";

    // Change result color based on score
    if (score === totalQuestions) {
    resultsDiv.style.backgroundColor = "rgba(34, 197, 94, 0.2)";
      resultsDiv.style.color = "#22c55e"; // Verde
    } else if (score > 0) {
    resultsDiv.style.backgroundColor = "rgba(250, 204, 21, 0.2)";
      resultsDiv.style.color = "#facc15"; // Amarelo
    } else {
    resultsDiv.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
      resultsDiv.style.color = "#ef4444"; // Vermelho
    }
document.getElementById('quiz-audio').play().catch(function(e) {
console.log("Autoplay bloqueado: ", e);
});
});

    document.getElementById('start-quiz-btn').addEventListener('click', function () {
            // Mostrar avaliação
        document.getElementById('avaliacao').style.display = 'block';

            // Ocultar o botão após mostrar a avaliação
        this.style.display = 'none';

            // Tocar música
        const audio = document.getElementById('quiz-audio');
        audio.play().catch(err => {
            console.warn("Navegador bloqueou autoplay:", err);
        });

            // Scroll suave até a avaliação
        document.getElementById('avaliacao').scrollIntoView({ behavior: 'smooth' });
    });
});
