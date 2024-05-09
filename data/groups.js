// let now = new Date();
// DATE PARAMS: new Date(YYYY, MONTH-1, DATE, HOURS, MINUTES) | Do not add preceding 0s

export const groups = [
    {
        title: "Beans, Barbies, Borat",
        description: "This is a short description set by creator of the group. This includes anything from heads up to any more personal...",
        tags: ["Chemistry", "Food", "Outgoing"],
        time: new Date(2024, 4, 9, 16, 0),
        location: "BCIT Library",
        members: ["Jon", "Jerome", "Nathan"],
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"},
    },
    {
        title: "Mega Marketers",
        description: "We’ll be at the far table at the corner of the library! Take a right after entering and look for the group with all the starbucks cups lol!",
        tags: ["Marketing", "Quiet", "Coffee", "Music"],
        time: new Date(2024, 4, 9, 18, 30),
        location: "BCIT Library",
        members: ["Jon", "Jerome", "Nathan"],
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"}
    },
    {
        title: "JavaCrisps",
        description: "Looking for chill peeps to practice some coding, preferably JavaScript! Exams coming up and I needa prepaaare. Anyone is welcome!",
        tags: ["Front End Development", "JavaScript", "Coding", "Coffee"],
        time: new Date(2024, 4, 9, 19, 0),
        location: "BCIT Library",
        members: ["Jon", "Jerome"],
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"}
    }
];

export const schedGroups = [
    {
        title: "Engineering Einsteins",
        description: "This is a short description set by creator of the group. This includes anything from heads up to any more personal...",
        tags: ["Mechanical Engineering", "Metal", "Cars"],
        time: new Date(2024, 4, 11, 13, 0),
        location: "BCIT Library",
        members: ["Jon", "Jerome", "Nathan"],
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"}
    },
    {
        title: "M4th3m4t1c5",
        description: "We’ll be at the far table at the corner of the library! Take a right after entering and look for the group with all the starbucks cups lol!",
        tags: ["Algebra", "Retro", "Food", "Music", "Coffee"],
        time: new Date(2024, 4, 12, 14, 0),
        location: "BCIT Library",
        members: ["Jon", "Jerome", "Nathan", ""],
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"},
        category: "Marketing"
    },
    {
        title: "Physicks",
        description: "Looking for chill peeps to practice some coding, preferably JavaScript! Exams coming up and I needa prepaaare. Anyone is welcome!",
        tags: ["Physics", "Food", "Gravity", "Apples"],
        time: new Date(2024, 4, 14, 14, 0),
        location: "BCIT Library",
        members: ["Jon", "Jerome"],
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"},
        category: "Computer Science"
    }
];