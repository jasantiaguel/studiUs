export const studyMethods = [
    {
        name: "Feynman",
        sub: "Study Method",
        description: "The Feynman Technique, named after physicist Richard Feynman, involves simplifying complex concepts by explaining them in simple terms as if teaching them to someone else. This technique emphasizes understanding through clear, concise explanations.",
        howToUse: [
            {point: "Understand", description: "Grasp the concept thoroughly before attempting to explain it."},
            {point: "Simplify", description: "Break down the concept into basic elements or analogies."},
            {point: "Teach", description: "Pretend to teach the concept to someone unfamiliar with it."},
            {point: "Identify Gaps", description: "Note areas where your explanation isn’t as clear and revisit them."}
        ],
        benefits: [
            "Enhances comprehension by breaking down complex topics into manageable chunks.",
            "Identifies gaps in understanding through the process of explanation.",
            "Strengthens memory retention by reinforcing learned concepts through teaching.",
            "Cultivates effective communication and critical thinking skills."
        ],
        whoCanBenefit: "Individuals who thrive on teaching and explaining concepts to others, visual learners who benefit from simplification, and those seeking to deepen their understanding of complex subjects."
    },
    {
        name: "Leitner",
        sub: "System",
        description: "The Leitner System is a spaced repetition technique that utilizes flashcards to review and memorize information. Flashcards are sorted into different boxes based on the level of mastery, with cards moving to higher boxes as they are answered correctly and vice versa.",
        howToUse: [
            { point: "Create", description: "Make flashcards with key information or questions." },
            { point: "Review", description: "Test yourself using the flashcards, starting with all cards in Box 1." },
            { point: "Sort", description: "Move cards to higher boxes as you answer them correctly, and lower boxes for incorrect answers." },
            { point: "Repeat", description: "Continue reviewing cards, adjusting based on your performance." }
        ],
        benefits: [
            "Optimizes study time by focusing on challenging concepts.",
            "Facilitates long-term retention through spaced repetition.",
            "Adaptable to individual learning pace and preferences.",
            "Provides a visual progress tracking system for motivation."
        ],
        whoCanBenefit: "Students looking to efficiently memorize large amounts of information, language learners aiming to build vocabulary, and individuals seeking a flexible and personalized study approach."
    },
    {
        name: "Retrieval",
        sub: "Practice",
        description: "Retrieval practice involves actively recalling information from memory, without the aid of materials or notes. This technique strengthens memory retention by repeatedly retrieving and reinforcing learned information.",
        howToUse: [
            { point: "Recall", description: "Test yourself by trying to remember key facts or concepts." },
            { point: "Repeat", description: "Practice retrieving information multiple times over intervals." },
            { point: "Review", description: "Reflect on what you struggled to recall and focus on those areas." },
            { point: "Record", description: "Keep track of your progress and areas of improvement." }
        ],
        benefits: [
            "Improves long-term retention and recall of information.",
            "Enhances understanding by identifying gaps in knowledge.",
            "Boosts confidence and reduces reliance on passive study methods.",
            "Can be adapted to various subjects and learning styles."
        ],
        whoCanBenefit: "Students seeking to solidify their understanding of material, individuals preparing for exams or assessments, and those aiming to build robust memory recall skills."
    },
    {
        name: "SQ3R / PQ4R",
        sub: "Method",
        description: "SQ3R (Survey, Question, Read, Recite, Review) or PQ4R (Preview, Question, Read, Reflect, Recite, Review) is an active reading and study method. It involves previewing the material, generating questions, reading actively while answering those questions, reciting or recalling information, and finally reviewing the material to reinforce learning.",
        howToUse: [
            { point: "Survey", description: "Skim through the material to get an overview." },
            { point: "Question", description: "Formulate questions based on headings or key points." },
            { point: "Read", description: "Engage actively with the text, answering your questions." },
            { point: "Recite", description: "Test your understanding by summarizing or explaining aloud." },
            { point: "Review", description: "Revisit the material periodically to reinforce learning." }
        ],
        benefits: [
            "Encourages active engagement with the material.",
            "Enhances comprehension and retention through repeated exposure.",
            "Provides a structured approach to studying complex texts.",
            "Promotes critical thinking and deeper understanding of concepts."
        ],
        whoCanBenefit: "Individuals who prefer structured study routines, enjoy active participation in learning, and benefit from repetition and reinforcement."
    }
]