const questions = [
  // 🟡 Emotional
  {
    question: "How do you typically react when someone close to you is upset?",
    answers: [
      { text: "I feel their pain deeply", type: "Emotional" },
      { text: "I try to solve the issue immediately", type: "Decisive" },
      { text: "I stay calm and support logically", type: "Analytical" },
      { text: "I lift their spirits creatively", type: "Creative" },
      { text: "I reassure them to move forward", type: "Resilient" }
    ]
  },
  {
    question: "What best describes your response to a sad movie?",
    answers: [
      { text: "I often cry", type: "Emotional" },
      { text: "I think about its message", type: "Analytical" },
      { text: "I get inspired artistically", type: "Creative" },
      { text: "I stay composed", type: "Resilient" },
      { text: "I look for a deeper moral", type: "Decisive" }
    ]
  },
  {
    question: "How do you handle emotional stress?",
    answers: [
      { text: "Let it out and talk about it", type: "Emotional" },
      { text: "Redirect it into art or writing", type: "Creative" },
      { text: "Rationalize it", type: "Analytical" },
      { text: "Push through quietly", type: "Resilient" },
      { text: "Make a plan to fix things", type: "Decisive" }
    ]
  },
  {
    question: "What do friends usually come to you for?",
    answers: [
      { text: "Emotional support", type: "Emotional" },
      { text: "Strategic advice", type: "Decisive" },
      { text: "Creative brainstorming", type: "Creative" },
      { text: "Problem solving", type: "Analytical" },
      { text: "Encouragement to not give up", type: "Resilient" }
    ]
  },
  {
    question: "How do you feel after a conflict?",
    answers: [
      { text: "Drained emotionally", type: "Emotional" },
      { text: "Unmoved, it’s part of life", type: "Resilient" },
      { text: "Ready to fix things logically", type: "Analytical" },
      { text: "More aware and decisive", type: "Decisive" },
      { text: "Inspired to write a song or draw", type: "Creative" }
    ]
  },
  {
    question: "When helping someone, what matters most?",
    answers: [
      { text: "Their feelings", type: "Emotional" },
      { text: "Helping them bounce back", type: "Resilient" },
      { text: "Making a clear decision", type: "Decisive" },
      { text: "Analyzing the real problem", type: "Analytical" },
      { text: "Bringing a creative solution", type: "Creative" }
    ]
  },

  // 🟢 Resilient
  {
    question: "What do you do after failing at something important?",
    answers: [
      { text: "Try again with more strength", type: "Resilient" },
      { text: "Analyze what went wrong", type: "Analytical" },
      { text: "Look for a different angle", type: "Creative" },
      { text: "Let emotions out first", type: "Emotional" },
      { text: "Quickly decide the next step", type: "Decisive" }
    ]
  },
  {
    question: "How do you handle long-term pressure?",
    answers: [
      { text: "I keep going no matter what", type: "Resilient" },
      { text: "I overthink everything", type: "Analytical" },
      { text: "I feel emotionally overwhelmed", type: "Emotional" },
      { text: "I take charge to end it fast", type: "Decisive" },
      { text: "I find distractions to stay positive", type: "Creative" }
    ]
  },
  {
    question: "How do you react to setbacks?",
    answers: [
      { text: "Learn and recover fast", type: "Resilient" },
      { text: "Get emotionally affected", type: "Emotional" },
      { text: "Try a creative workaround", type: "Creative" },
      { text: "Think deeply before acting again", type: "Analytical" },
      { text: "Move on with a bold decision", type: "Decisive" }
    ]
  },
  {
    question: "What's your approach to burnout?",
    answers: [
      { text: "Power through it", type: "Resilient" },
      { text: "Pause and reflect", type: "Analytical" },
      { text: "Vent to someone", type: "Emotional" },
      { text: "Try something completely new", type: "Creative" },
      { text: "Change course decisively", type: "Decisive" }
    ]
  },
  {
    question: "What quality do you admire most in yourself?",
    answers: [
      { text: "Inner strength", type: "Resilient" },
      { text: "Kindness", type: "Emotional" },
      { text: "Quick thinking", type: "Decisive" },
      { text: "Originality", type: "Creative" },
      { text: "Rational thinking", type: "Analytical" }
    ]
  },
  {
    question: "You’re under pressure. What gets you through?",
    answers: [
      { text: "My grit and mental strength", type: "Resilient" },
      { text: "Emotional support", type: "Emotional" },
      { text: "Clear decisions", type: "Decisive" },
      { text: "Breaking down the issue", type: "Analytical" },
      { text: "Changing perspective", type: "Creative" }
    ]
  },

  // 🔴 Decisive
  {
    question: "You're faced with a tough choice. What's your style?",
    answers: [
      { text: "Make a bold call", type: "Decisive" },
      { text: "Break it down logically", type: "Analytical" },
      { text: "Ask friends for emotional input", type: "Emotional" },
      { text: "Take a unique path", type: "Creative" },
      { text: "Stay calm and adapt", type: "Resilient" }
    ]
  },
  {
    question: "You’re given a leadership role. How do you handle it?",
    answers: [
      { text: "Make strong decisions quickly", type: "Decisive" },
      { text: "Encourage emotional unity", type: "Emotional" },
      { text: "Bring logic and data", type: "Analytical" },
      { text: "Support and motivate the team", type: "Resilient" },
      { text: "Think outside the box", type: "Creative" }
    ]
  },
  {
    question: "What’s your strength in a team?",
    answers: [
      { text: "Making final calls", type: "Decisive" },
      { text: "Keeping the peace emotionally", type: "Emotional" },
      { text: "Solving tough puzzles", type: "Analytical" },
      { text: "Keeping morale high", type: "Resilient" },
      { text: "Bringing new ideas", type: "Creative" }
    ]
  },
  {
    question: "When under time pressure, you...",
    answers: [
      { text: "Act fast and confidently", type: "Decisive" },
      { text: "Stick to a rational plan", type: "Analytical" },
      { text: "Stay emotionally composed", type: "Emotional" },
      { text: "Push through strongly", type: "Resilient" },
      { text: "Get innovative to save time", type: "Creative" }
    ]
  },
  {
    question: "Your boss wants a decision now. You...",
    answers: [
      { text: "Give an answer immediately", type: "Decisive" },
      { text: "Ask for data to decide", type: "Analytical" },
      { text: "Consider everyone’s feelings", type: "Emotional" },
      { text: "Adapt to meet expectations", type: "Resilient" },
      { text: "Pitch a novel idea", type: "Creative" }
    ]
  },
  {
    question: "How do you react to indecisive people?",
    answers: [
      { text: "Step up and decide for them", type: "Decisive" },
      { text: "Help guide their emotions", type: "Emotional" },
      { text: "Analyze what’s blocking them", type: "Analytical" },
      { text: "Motivate them to act", type: "Resilient" },
      { text: "Offer a creative alternative", type: "Creative" }
    ]
  },

  // 🔵 Analytical
  {
    question: "How do you usually solve problems?",
    answers: [
      { text: "Step-by-step logical analysis", type: "Analytical" },
      { text: "Listen to my gut", type: "Emotional" },
      { text: "Just try something", type: "Creative" },
      { text: "Make a quick decision", type: "Decisive" },
      { text: "Work through it calmly", type: "Resilient" }
    ]
  },
  {
    question: "How do you react to confusing situations?",
    answers: [
      { text: "Break it down", type: "Analytical" },
      { text: "Try creative options", type: "Creative" },
      { text: "Decide and move", type: "Decisive" },
      { text: "Wait for clarity", type: "Resilient" },
      { text: "Ask how others feel", type: "Emotional" }
    ]
  },
  {
    question: "How do you prepare for big decisions?",
    answers: [
      { text: "List pros and cons", type: "Analytical" },
      { text: "Ask others for emotional input", type: "Emotional" },
      { text: "Act on instinct", type: "Decisive" },
      { text: "Explore creative alternatives", type: "Creative" },
      { text: "Weigh long-term resilience", type: "Resilient" }
    ]
  },
  {
    question: "What's your biggest asset?",
    answers: [
      { text: "My mind and logic", type: "Analytical" },
      { text: "My courage and will", type: "Resilient" },
      { text: "My sensitivity", type: "Emotional" },
      { text: "My boldness", type: "Decisive" },
      { text: "My originality", type: "Creative" }
    ]
  },
  {
    question: "What's your approach to mistakes?",
    answers: [
      { text: "I reflect and analyze", type: "Analytical" },
      { text: "I feel bad", type: "Emotional" },
      { text: "I bounce back quickly", type: "Resilient" },
      { text: "I react fast and shift course", type: "Decisive" },
      { text: "I use them for new ideas", type: "Creative" }
    ]
  },
  {
    question: "You’re planning a trip. What's your style?",
    answers: [
      { text: "Compare all options logically", type: "Analytical" },
      { text: "Go wherever feels right", type: "Emotional" },
      { text: "Book it and go", type: "Decisive" },
      { text: "Choose a unique destination", type: "Creative" },
      { text: "Be ready for any situation", type: "Resilient" }
    ]
  },

  // 🟣 Creative
  {
    question: "When faced with a problem, you prefer...",
    answers: [
      { text: "Thinking outside the box", type: "Creative" },
      { text: "Following logic", type: "Analytical" },
      { text: "Using emotions as a guide", type: "Emotional" },
      { text: "Being firm and direct", type: "Decisive" },
      { text: "Adapting over time", type: "Resilient" }
    ]
  },
  {
    question: "How do you express yourself best?",
    answers: [
      { text: "Through art, music or writing", type: "Creative" },
      { text: "Through conversations", type: "Emotional" },
      { text: "Through thoughtful ideas", type: "Analytical" },
      { text: "Through strong actions", type: "Decisive" },
      { text: "Through consistency", type: "Resilient" }
    ]
  },
  {
    question: "What motivates your ideas?",
    answers: [
      { text: "Imagination and visuals", type: "Creative" },
      { text: "Logic and facts", type: "Analytical" },
      { text: "Emotions and people", type: "Emotional" },
      { text: "Ambition and courage", type: "Decisive" },
      { text: "Overcoming limits", type: "Resilient" }
    ]
  },
  {
    question: "When stuck, what helps most?",
    answers: [
      { text: "Trying something wildly new", type: "Creative" },
      { text: "Analyzing details", type: "Analytical" },
      { text: "Letting feelings out", type: "Emotional" },
      { text: "Making a quick call", type: "Decisive" },
      { text: "Staying strong mentally", type: "Resilient" }
    ]
  },
  {
    question: "Which task excites you most?",
    answers: [
      { text: "Creating something unique", type: "Creative" },
      { text: "Solving a complex problem", type: "Analytical" },
      { text: "Helping someone emotionally", type: "Emotional" },
      { text: "Taking a big risk", type: "Decisive" },
      { text: "Working through a tough challenge", type: "Resilient" }
    ]
  },
  {
    question: "You have free time. What do you do?",
    answers: [
      { text: "Draw, write, or create", type: "Creative" },
      { text: "Plan and organize", type: "Analytical" },
      { text: "Reflect on my emotions", type: "Emotional" },
      { text: "Try something bold", type: "Decisive" },
      { text: "Recharge and refocus", type: "Resilient" }
    ]
  }
];
