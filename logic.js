const quizData = [
    {
      question: "Who was the founder of Flipkart?",
      image: "https://th.bing.com/th?id=OIP.idB_-eo5pNgOG8Ker3jEpgAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      options: ["Sachin Bansal", "Aman Bansal", "Kunal Bahl", "Rohit Bansal"],
      answer: "Sachin Bansal",
     
    },
    {
      question: "Who was the founder of Zomato?",
      image: "https://tse1.mm.bing.net/th?id=OIP.-3260DNmeOY3YwSSGGi04QHaEK&pid=Api&P=0&h=180",
      options: ["Deepinder Goyal", "Kunal Shah", "Vijay Shekhar Sharma", "Ritesh Agarwal"],
      answer: "Deepinder Goyal",
      
    },
    {
      question: "Who was the founder of Paytm?",
      image: "https://tse2.mm.bing.net/th?id=OIP.awfBJZqGdaKZ0lO3wgkCMgHaDt&pid=Api&P=0&h=180",
      options: ["Vijay Shekhar Sharma", "Sachin Bansal", "Deepinder Goyal", "Kunal Bahl"],
      answer: "Vijay Shekhar Sharma",
      
    },
    {
      question: "Who was the founder of OYO Rooms?",
      image: "https://latestlogo.com/wp-content/uploads/2024/02/oyo-red.svg",
      options: ["Ritesh Agarwal", "Deepinder Goyal", "Vijay Shekhar Sharma", "Sachin Bansal"],
      answer: "Ritesh Agarwal",
      
    },
    {
      question: "Who was the founder of Ola Cabs?",
      image: "https://logosarchive.com/wp-content/uploads/2021/06/Ola-logo.png",
      options: ["Bhavish Aggarwal", "Ankit Bhati", "Kunal Shah", "Ritesh Agarwal"],
      answer: "Bhavish Aggarwal and Ankit Bhati",
      
    },
    {
      question: "Who was the founder of Byju's?",
      image: "https://logo-marque.com/wp-content/uploads/2021/08/Byjus-Symbole.jpg",
      options: ["Byju Raveendran", "Kunal Bahl", "Deepinder Goyal", "Vijay Shekhar Sharma"],
      answer: "Byju Raveendran",
      
    },
    {
      question: "Who was the founder of Swiggy?",
      image: "https://pnggallery.com/wp-content/uploads/swiggy-logo-01.png",
      options: ["Nandan Reddy", "Sriharsha Majety", "Rahul Jaimini", "All of the above"],
      answer: "All of the above",
      
    },
    
    {
      question: "Who was the founder of PW?",
      image: "https://i.pinimg.com/originals/9c/c7/bb/9cc7bbd64d14e518720835c0c4369306.jpg",
      options: ["Alakh Pandey", "Hitesh Oberoi", "Amit Basole", "Ashish Kashyap"],
      answer: "Alakh Pandey",
      
    },
    {
      question: "Who was the founder of MakeMyTrip?",
      image: "https://companieslogo.com/img/orig/MMYT_BIG-7271499a.png?t=1683788455",
      options: ["Deep Kalra", "Deepak Kalal", "Sachin Bansal", "Vijay Shekhar Sharma"],
      answer: "Deep Kalra ",
     
    },
    {
      question: "Who was the founder of Grofers?",
      image: "https://th.bing.com/th?id=OIP.MHQLwgRH2_RlZ5kc88HjmQHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      options: ["Albinder Dhindsa", "Saurabh Kumar", "Both of the above", "None of the above"],
      answer: "Both of the above",
      
    }
  ];
  const questionContainer = document.getElementById("question-container");
  const question = document.getElementById("question");
  const flagImage = document.getElementById("flag-image");
  const optionsContainer = document.getElementById("options-container");
  const scoreContainer = document.getElementById("score-container");
  const userScore = document.getElementById("user-score");
  const resultContainer = document.getElementById("result-container");
  const resultMessage = document.getElementById("result-message");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    question.textContent = currentQuestion.question;
    flagImage.src = currentQuestion.image;
    flagImage.alt = `${currentQuestion.question} Image`;
  
    const options = shuffleArray([...currentQuestion.options]);
    optionsContainer.innerHTML = "";
  
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("button");
      option.classList.add("option-btn", "btn", "btn-outline-primary", "btn-block", "mb-2");
      option.textContent = options[i];
      option.addEventListener("click", handleOptionClick);
      optionsContainer.appendChild(option);
    }
  }
  
  function handleOptionClick(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = quizData[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.answer) {
      event.target.classList.add("correct", "animate__animated", "animate__bounce","ca");
      score++;
    } else {
      event.target.classList.add("incorrect", "animate__animated", "animate__shakeX");
    }
  
    updateScore();
    disableOptions();
    setTimeout(loadNextQuestion, 1000);
  }
  
  function updateScore() {
    userScore.textContent = score;
  }
  
  function disableOptions() {
    const options = optionsContainer.getElementsByClassName("option-btn");
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
    }
  }
  
  function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      resetOptions();
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function resetOptions() {
    const options = optionsContainer.getElementsByClassName("option-btn");
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("correct", "incorrect", "animate__animated", "animate__bounce", "animate__shakeX");
      options[i].disabled = false;
    }
  }
  
  function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    if (score === quizData.length) {
      resultMessage.textContent = "Congratulations! You got all the answers correct! 🎉";
    } else {
      resultMessage.textContent = `Your final score is ${score}/${quizData.length}. Better luck next time!`;
    }
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  loadQuestion();