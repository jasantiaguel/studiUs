//change the value property to assign different weights
//add categories to the array if question covers multiple categories

const FEYNMAN = "Feynman";
const LEITNER = "Leitner";
const QR = "SQ3R/PQ4R";
const RETRIEVAL = "Retrieval";

export const questions = [
  {
    question:
      "When faced with a new topic to study, what's your first instinct?",
    answers: [
      {
        text: "Dive right into reading and taking notes",
        method: [QR],
        value: 2,
        description:
          "Your first instinct to Dive to read and take notes matches and is similar to the SQ3R / PQ4R study method!",
        number: 1,
        image: "/images/quiz.PQ4R.svg",
      },
      {
        text: "Test yourself on what you already know",
        method: [RETRIEVAL],
        value: 2,
        description:
          "Your first instinct to Test yourself on what you already know is similar to Retrieval Practice study method!",
        number: 2,
        image: "/images/quiz.Retrieval.svg",
      },
      {
        text: "Explain it to someone else as if they're a beginner",
        method: [FEYNMAN],
        value: 2,
        description:
          "Your first instinct to Explain it to someone else as if they're a beginner is similar to the Feynman Technique!",
        number: 3,
        image: "/images/quiz.Feynman.svg",
      },
      {
        text: "Organize your study materials for spaced repetition",
        method: [LEITNER],
        value: 2,
        description:
          "Your first instinct to Organize your study materials for spaced repetition is similar to the Lietnar System study method!",
        number: 4,
        image: "/images/quiz.Lietner.svg",
      },
    ],
  },
  {
    question: "How do you prefer to review and reinforce what you've learned?",
    answers: [
      {
        text: "Re-reading and summarizing key points",
        method: [QR],
        value: 2,
        description:
          "Your preference to Re-read and summarize key points is similar to the SQ3R / PQ4R study method!",
        number: 1,
        image: "/images/quiz.PQ4R.svg",
      },
      {
        text: "Frequent quizzing and self-testing",
        method: [RETRIEVAL],
        value: 2,
        description:
          "Your preference to Test yourself on what you already know is similar to Retrieval Practice study method!",
        number: 2,
        image: "/images/quiz.Retrieval.svg",
      },
      {
        text: "Teaching others or discussing concepts out loud",
        method: [FEYNMAN],
        value: 2,
        description:
          "Your preference to Teach others or discuss concepts out loud is similar to the Feynman Technique!",
        number: 3,
        image: "/images/quiz.Feynman.svg",
      },
      {
        text: "Using flashcards or spaced repetition software",
        method: [LEITNER],
        value: 2,
        description:
          "Your preference to Use flashcards or spaced repetition software is similar to the Lietnar System study method!",
        number: 4,
        image: "/images/quiz.Lietner.svg",
      },
    ],
  },
  {
    question: "What motivates you to stay engaged with your study material?",
    answers: [
      {
        text: "Understanding the big picture and connecting concepts",
        method: [QR],
        value: 2,
        description:
          "Your motivation to Understand the big picture and connect concepts is similar to the SQ3R / PQ4R study method!",
        number: 1,
        image: "/images/quiz.PQ4R.svg",
      },
      {
        text: "Seeing immediate improvement through self-testing",
        method: [RETRIEVAL],
        value: 2,
        description:
          "Your motivation to See immediate improvement through self-testing is similar to the Retrieval Practice study method!",
        number: 2,
        image: "/images/quiz.Retrieval.svg",
      },
      {
        text: "Simplifying complex ideas to grasp them better",
        method: [FEYNMAN],
        value: 2,
        description:
          "Your motivation to Simplify complex ideas to grasp them better is similar to the Feynman Technique!",
        number: 3,
        image: "/images/quiz.Feynman.svg",
      },
      {
        text: "The structured progression and organization of review",
        method: [LEITNER],
        value: 2,
        description:
          "Your source of motivation through structured progression is similar to the Lietner System!",
        number: 4,
        image: "/images/quiz.Lietner.svg",
      },
    ],
  },
  {
    question:
      "How do you prefer to track your progress and adjust your study approach?",
    answers: [
      {
        text: "Taking detailed notes and reviewing them regularly",
        method: [QR],
        value: 2,
        description:
          "Your approach to Take detailed notes and review them regularly is similar to the SQ3R / PQ4R study method!",
        number: 1,
        image: "/images/quiz.PQ4R.svg",
      },
      {
        text: "Monitoring your ability to recall information over time",
        method: [RETRIEVAL],
        value: 2,
        description:
          "Your approach to Monitor your ability to recall information over time is similar to Retrieval Practice study method!",
        number: 2,
        image: "/images/quiz.Retrieval.svg",
      },
      {
        text: "Reflecting on how well you can explain the topic to others",
        method: [FEYNMAN],
        value: 2,
        description:
          "Your approach to Reflect on how well you can explain the topic to others is similar to the Feynman Technique!",
        number: 3,
        image: "/images/quiz.Feynman.svg",
      },
      {
        text: "Organize your study materials for spaced repetition",
        method: [LEITNER],
        value: 2,
        description:
          "Your approach to Use a system that adapts based on what you know and don't know is similar to the Lietnar System method!",
        number: 4,
        image: "/images/quiz.Lietner.svg",
      },
    ],
  },
];
