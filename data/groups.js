// let now = new Date();
// DATE PARAMS: new Date(YYYY, MONTH-1, DATE, HOURS, MINUTES) | Do not add preceding 0s

export const groups = [
  {
    title: "Beans, Barbies, Borat",
    description: "beans beans beans beans...",
    tags: ["Chemistry", "Food", "Outgoing"],
    time: new Date(2024, 4, 15, 16, 0),
    location: "BCIT Library",
    members: ["Jon Santiaguel", "Jerome Gache", "Nathan Yee", ""],
    coords: {
      centerPoint: "49.249234265894394,-123.00899574963694",
      circlePoint: "49.24936795802063,-123.00199080213194",
    },
  },
  {
    title: "Mega Marketers",
    description:
      "We’ll be at the far table at the corner of the library! Take a right after entering and look for the group with all the starbucks cups lol!",
    tags: ["Marketing", "Quiet", "Coffee", "Music"],
    time: new Date(2024, 4, 15, 18, 30),
    location: "BCIT Library",
    members: ["Jimmy Heiser", "Jacob Smith", "Norman D'ron"],
    coords: {
      centerPoint: "49.249234265894394,-123.00899574963694",
      circlePoint: "49.24936795802063,-123.00199080213194",
    },
  },
  {
    title: "JavaCrisps",
    description:
      "Looking for chill peeps to practice some coding, preferably JavaScript! Exams coming up and I needa prepaaare. Anyone is welcome!",
    tags: ["Front End Development", "JavaScript", "Coding", "Coffee"],
    time: new Date(2024, 4, 15, 19, 0),
    location: "BCIT Library",
    members: ["Peter Peter", "Carol Corn", "", ""],
    coords: {
      centerPoint: "49.249234265894394,-123.00899574963694",
      circlePoint: "49.24936795802063,-123.00199080213194",
    },
  },
];

export const schedGroups = [
  {
    title: "Engineering Einsteins",
    description:
      "e=mc^2, but we’re not that smart lol. Just a group of engineering students looking to study together!",
    tags: ["Mechanical Engineering", "Metal", "Cars"],
    time: new Date(2024, 4, 18, 13, 0),
    location: "BCIT Library",
    members: ["Alex Man", "Buster Norman", "Sven Svenson"],
    coords: {
      centerPoint: "49.249234265894394,-123.00899574963694",
      circlePoint: "49.24936795802063,-123.00199080213194",
    },
  },
  {
    title: "M4th3m4t1c5",
    description:
      "Algebra and anything retro, love food man. Open to anyone who wants to join!",
    tags: ["Algebra", "Retro", "Food", "Music", "Coffee"],
    time: new Date(2024, 4, 20, 14, 0),
    location: "BCIT Library",
    members: ["Albert Ianshine", "", "", ""],
    coords: {
      centerPoint: "49.249234265894394,-123.00899574963694",
      circlePoint: "49.24936795802063,-123.00199080213194",
    },
    category: "Marketing",
  },
  {
    title: "Physicks",
    description:
      "Looking for chill peeps to practice some coding, preferably JavaScript! Exams coming up and I needa prepaaare. Anyone is welcome!",
    tags: ["Physics", "Food", "Gravity", "Apples"],
    time: new Date(2024, 4, 21, 14, 0),
    location: "BCIT Library",
    members: ["Gurav Itty", "", ""],
    coords: {
      centerPoint: "49.249234265894394,-123.00899574963694",
      circlePoint: "49.24936795802063,-123.00199080213194",
    },
    category: "Computer Science",
  },
];
