//change the value property to assign different weights
//add categories to the array if question covers multiple categories

const FEYNMAN = "Feynman";
const LEITNER = "Leitner";
const QR = "SQ3R/PQ4R";
const RETRIEVAL = "Retrieval";

export const questions = [
    {
        question: "When faced with a new topic to study, what's your first instinct?",
        answers: [
            {text: "Dive right into reading and taking notes", method: [QR], value: 2, description: "Your first instinct to Dive to read and take notes matches and is similar to the SQ3R / PQ4R study method!"},
            {text: "Test yourself on what you already know", method: [RETRIEVAL], value: 2, description: "Your first instinct to Test yourself on what you already know is similar to Retrieval Practice study method!"},
            {text: "Explain it to someone else as if they're a beginner", method: [FEYNMAN], value: 2, description: "Your first instinct to Explain it to someone else as if they're a beginner is similar to the Feynman Technique!"},
            {text: "Organize your study materials for spaced repetition", method: [LEITNER], value: 2, description: "Your first instinct to Organize your study materials for spaced repetition is similar to the Lietnar System study method!"}
        ]
    },
    {
        question: "Question 2",
        answers: [
            {text: "Feynman, Leitner +1", method: [FEYNMAN, LEITNER], value: 1, description: "This is the description for Feynman, Leitner +1 for question 2."},
            {text: "Feynman +2", method: [FEYNMAN], value: 2, description: "This is the description for Feynman +2 for question 2."},
            {text: "Leitner +2", method: [LEITNER], value: 2, description: "This is the description for Leitner +2 for question 2."},
            {text: "Retrieval +2", method: [RETRIEVAL], value: 2, description: "This is the description for Retrieval +2 for question 2."}
        ]
    },
    {
        question: "Question 3",
        answers: [
            {text: "Feynman, Leitner +1", method: [FEYNMAN, LEITNER], value: 1, description: "This is the description for Feynman, Leitner +1 for question 3."},
            {text: "Feynman +2", method: [FEYNMAN], value: 2, description: "This is the description for Feynman +2 for question 3."},
            {text: "Leitner +2", method: [LEITNER], value: 2, description: "This is the description for Leitner +2 for question 3."},
            {text: "Retrieval +2", method: [RETRIEVAL], value: 2, description: "This is the description for Retrieval +2 for question 3."}
        ]
    },
    {
        question: "Question 4",
        answers: [
            {text: "Feynman, Leitner +1", method: [FEYNMAN, LEITNER], value: 1, description: "This is the description for Feynman, Leitner +1 for question 4."},
            {text: "Feynman +2", method: [FEYNMAN], value: 2, description: "This is the description for Feynman +2 for question 4."},
            {text: "Leitner +2", method: [LEITNER], value: 2, description: "This is the description for Leitner +2 for question 4."},
            {text: "Retrieval +2", method: [RETRIEVAL], value: 2, description: "This is the description for Retrieval +2 for question 4."}
        ]
    }
]