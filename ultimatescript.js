const questions = [
    {
      question: "Identify the term which denotes that only authorized users are capable of accessing the information",
      options: ["Confidentiality", "Availability", "Integrity", "Non-repudiation"],
      answer: "Availability"
    },
    {
      question: "Identify among the following which is used to avoid browser-based hacking",
      options: ["Incognito mode in browser", "Anti-malware in browser", "Remote browser access", "Adware remover in browser"],
      answer: "Remote browser access"
    },
    {
      question: "Which of the following is used for monitoring traffic and analyzing network flow?",
      options: ["Managed detection and response", "Cloud access security broker", "Network traffic analysis", "Network security firewall"],
      answer: "Network traffic analysis"
    },
    {
      question: "In which category does compromising confidential information fall?",
      options: ["Bug", "Attack", "Vulnerability", "Threat"],
      answer: "Threat"
    },
    {
      question: "Identify the class of computer threats",
      options: ["Phishing", "DOS attack", "Soliciting", "Both Soliciting and Phishing"],
      answer: "DOS attack"
    },
    {
      question: "Which software is mainly used to help users detect viruses and avoid them?",
      options: ["Malware", "Virusfinder", "Antivirus", "Adware"],
      answer: "Antivirus"
    },
    {
      question: "Which of the following is considered an element of cyber security?",
      options: ["Network security", "Operational security", "Application security", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Choose among the following techniques, which are used to hide information inside a picture.",
      options: ["Image rendering", "Steganography", "Rootkits", "Bitmapping"],
      answer: "Steganography"
    },
    {
      question: "Which of the following is considered as the unsolicited commercial email?",
      options: ["Spam", "Malware", "Virus", "All of the above"],
      answer: "Spam"
    },
    {
      question: "What is the CIA triad also known as?",
      options: ["AIC(Availability, Integrity, Confidentiality)", "ANC(Availability, Non-repudiation, Confidentiality)", "AIN(Availability, Integrity, Non-repudiation)", "NIC(Non-repudiation, Integrity, Confidentiality)"],
      answer: "AIC(Availability, Integrity, Confidentiality)"
    }
  ];
  let currentQuestionIndex = 0;
  let score = 0;
  let questionContainer = document.getElementById("questionContainer");
  let progressBar = document.getElementById("progressBar");
  let isFirstQuestionLoaded = false; // Add a flag to track whether the first question has been loaded
  let timerId; // Variable to store the timer ID
  
  // Initialize progress bar to 0% when the page is loaded
  document.addEventListener("DOMContentLoaded", function() {
    progressBar.style.width = "0%";
    loadQuestion(); // Call loadQuestion() directly
  });
  
  function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";
  
    // Update progress bar to be fully complete after the last question
    if (currentQuestionIndex >= questions.length - 1) {
      progressBar.style.width = "100%";
    }
  }
  
  function loadQuestion() {
    clearTimeout(timerId); // Clear any existing timers before loading new question
    const question = questions[currentQuestionIndex];
  
    questionContainer.style.display = "block";
    document.querySelector(".question").textContent = question.question;
    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = "";
  
    for (let i = 0; i < question.options.length; i++) {
      const option = document.createElement("label");
      option.className = "option";
      option.innerHTML = `<input type="radio" name="answer" value="${question.options[i]}"> ${question.options[i]}`;
      optionsContainer.appendChild(option);
    }
  
    if (!isFirstQuestionLoaded) {
      isFirstQuestionLoaded = true; // Set the flag to true after loading the first question
    }
  }
  
  function checkAnswer() {
    clearTimeout(timerId); // Clear any existing timers before checking answer
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      if (selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
      }
  
      updateProgressBar(); // Move progress bar update here, before incrementing currentQuestionIndex
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex >= questions.length) {
        questionContainer.style.display = "none";
        if (score === questions.length) {
          // Display regular game over message for perfect score
          document.getElementById("result").textContent = `Wow, Flawless Victory! ${score}/${questions.length} correct answers!`;
        } else {
          // Display regular game over message
          document.getElementById("result").textContent = `Game Over! Your score is: ${score}/${questions.length}`;
        }
        return;
      }
  
      loadQuestion();
    }
  }
  
  
  document.getElementById("checkAnswerBtn").addEventListener("click", checkAnswer);


