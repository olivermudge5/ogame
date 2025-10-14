let questions = [
    {
      question: "What is the 4th largest city in Pennsylvania?",
      choices: ["Philadelphia", "Reading", "Harrisburg", "Pittsburgh"],
      answer: 1
    },
    {
      question: "Can greenflorite glow in UV light?",
      choices: ["YES", "No"],
      answer: 0
    },
    {
      question: "How was this game made?",
      choices: ["faires", "using coding", "typewriter", "markers"],
      answer: 1
    },
    {
      question: "What is Saquon's last name? (Of the Eagles football team)",
      choices: ["Hurts", "Mario", "Barkley", "Washington"],
      answer: 2
    },
    {
      question: "What is the name of the final boss in Minecraft?",
      choices: ["Mudge", "Endermen", "Ghast", "Enderdragon"],
      answer: 3
    },
    {
      question: "Narwhales can have two horns. True of False?",
      choices: ["TRUE", "FALSE"],
      answer: 0
    },
    {
      question: "Some cobras can spit venom.",
      choices: ["TRUE", "FALSE"],
      answer: 0
    },
    {
      question: " Raindrops can be red.",
      choices: ["TRUE", "FALSE"],
      answer: 0
    },
    {
      question: "Bonus Question : the most famous McDonald's item is Fries.",
      choices: ["TRUE", "FALSE"],
      answer: 0
    }
    ];

  
  let currentQuestion = 0;
  let score = 0;
  let gameOver = false;
  let popupMessage = "";
  let popupTimer = 0;
  
  function setup() {
    createCanvas(800, 600);
    textAlign(CENTER, CENTER);
  }
  
  function draw() {
    background(255);
  
    if (gameOver) {
      textSize(32);
      fill(0);
      text(`Game Over! Score: ${score}/${questions.length}`, width/2, height/2 - 20);
      textSize(20);
      text("Press R to Restart", width/2, height/2 + 40);
    } else {
      showQuestion();
  
      // show popup
      if (popupMessage !== "") {
        fill(200);
        rect(width/2 - 150, height/2 - 50, 300, 100);
        fill(0);
        textSize(32);
        text(popupMessage, width/2, height/2);
  
        if (millis() - popupTimer > 1000) {
          popupMessage = "";
          currentQuestion++;
          if (currentQuestion >= questions.length) {
            gameOver = true;
          }
        }
      }
    }
  }
  
  function showQuestion() {
    let q = questions[currentQuestion];
    textSize(28);
    fill(0);
    text(q.question, width/2, 80);
  
    // draw buttons
    for (let i = 0; i < q.choices.length; i++) {
      let x = width/2 - 150;
      let y = 150 + i * 80;
      fill(50, 150, 255);
      rect(x, y, 300, 60);
      fill(255);
      textSize(24);
      text(q.choices[i], x + 150, y + 30);
    }
  }
  
  function mousePressed() {
    if (!gameOver && popupMessage === "") {
      let q = questions[currentQuestion];
      for (let i = 0; i < q.choices.length; i++) {
        let x = width/2 - 150;
        let y = 150 + i * 80;
        if (mouseX > x && mouseX < x+300 && mouseY > y && mouseY < y+60) {
          if (i === q.answer) {
            score++;
            popupMessage = "Correct!";
          } else {
            popupMessage = "Wrong!";
          }
          popupTimer = millis();
        }
      }
    }
  }
  
  function keyPressed() {
    if (gameOver && (key === 'r' || key === 'R')) {
      // Reset everything
      score = 0;
      currentQuestion = 0;
      gameOver = false;
      popupMessage = "";
    }
  }
  
  