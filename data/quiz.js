//change the value property to assign different weights
//add categories to the array if question covers multiple categories

const FEYNMAN = "Feynman";
const LEITNER = "Leitner";
const QR = "SQ3R/PQ4R";
const RETRIEVAL = "Retrieval";

export const questions = [
    {
        question: "Question 1",
        answers: [
            {text: "Feynman, Leitner +1", method: [FEYNMAN, LEITNER], value: 1, description: "This is the description for Feynman, Leitner +1 for question 1."},
            {text: "Feynman +2", method: [FEYNMAN], value: 2, description: "This is the description for Feynman +2 for question 1."},
            {text: "Leitner +2", method: [LEITNER], value: 2, description: "This is the description for Leitner +2 for question 1."},
            {text: "Retrieval +2", method: [RETRIEVAL], value: 2, description: "This is the description for Retrieval +2 for question 1."}
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