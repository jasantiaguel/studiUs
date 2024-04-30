export const groups = [
    {
        title: "Beans, Barbies, Borat",
        description: "This is a short description set by creator of the group. This includes anything from heads up to any more personal...",
        tags: ["Chemistry", "Food", "Outgoing"],
        time: new Date(2024, 4, 1, 13, 30),
        location: "BCIT Library",
        members: ["Jon", "Jerome", "Nathan"],
        status: function() {
            let rightNow = new Date();
            let diff = this.time.getTime() - rightNow.getTime();
            if (diff < 0) {
                return "In Progress";
            }
            return `Starts in ${
                Math.round((Math.floor(diff/10000)*10)/60/60)
            } hours`           
        },
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"},
        category: "Chemistry"
    },
    {
        title: "Mega Marketers",
        description: "We’ll be at the far table at the corner of the library! Take a right after entering and look for the group with all the starbucks cups lol!",
        tags: ["Marketing", "Quiet", "Coffee", "Music"],
        time: new Date(),
        location: "BCIT Library",
        members: ["Jon", "Jerome", "Nathan"],
        status: function() {
            let rightNow = new Date();
            let diff = this.time.getTime() - rightNow.getTime();
            if (diff < 0) {
                return "In Progress";
            }
            return `Starts in ${
                Math.round((Math.floor(diff/10000)*10)/60/60)
            } hours`          
        },
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"}
    },
    // {
    //     title: "JavaCrisps",
    //     description: "Looking for chill peeps to practice some coding, preferably JavaScript! Exams coming up and I needa prepaaare. Anyone is welcome!",
    //     tags: ["Front End", "JavaScript", "Coding", "Coffee"],
    //     time: new Date(),
    //     location: "BCIT Library",
    //     members: ["Jon", "Jerome"],
    //     status: function() {
    //         let rightNow = new Date();
    //         if (this.time.now() === rightNow.now()) {
    //             return "In Progress";
    //         }
    //         return `Starts in ${this.time.now() - rightNow.now()}`
    //     },
    //     coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"}
    // }
];

// export const schedGroups = [
//     {
//         title: "Beans, Barbies, Borat",
//         description: "This is a short description set by creator of the group. This includes anything from heads up to any more personal...",
//         tags: ["Chemistry", "Food", "Outgoing"],
//         time: new Date(),
//         location: "BCIT Library",
//         members: ["Jon", "Jerome", "Nathan"],
//         status: "Starts in 3 days",
//         coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"}
//     },
//     {
//         title: "Mega Marketers",
//         description: "We’ll be at the far table at the corner of the library! Take a right after entering and look for the group with all the starbucks cups lol!",
//         tags: ["Marketing", "Quiet", "Coffee", "Music"],
//         time: new Date(),
//         location: "BCIT Library",
//         members: ["Jon", "Jerome", "Nathan"],
//         status: "Starts in 3 days",
//         coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"},
//         category: "Marketing"
//     },
//     {
//         title: "JavaCrisps",
//         description: "Looking for chill peeps to practice some coding, preferably JavaScript! Exams coming up and I needa prepaaare. Anyone is welcome!",
//         tags: ["Front End", "JavaScript", "Coding", "Coffee"],
//         time: new Date(),
//         location: "BCIT Library",
//         members: ["Jon", "Jerome"],
//         status: "Starts in 3 days",
//         coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"},
//         category: "Computer Science"
//     }
// ];