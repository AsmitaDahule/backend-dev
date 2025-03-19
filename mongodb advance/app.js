const express = require("express");
const app = express();
const userModel = require("./models/user");

const dummydata = [
    {
        username: "john_doe",
        name: "John Doe",
        password: "pass123",
        age: "25",
        isMarried: false,
        email: "johndoe@example.com"
    },
    {
        username: "jane_smith",
        name: "Jane Smith",
        password: "securePass456",
        age: "30",
        isMarried: true,
        email: "janesmith@example.com"
    },
    {
        username: "sam_rogers",
        name: "Sam Rogers",
        password: "helloWorld789",
        age: "27",
        isMarried: false,
        email: "samrogers@example.com"
    },
    {
        username: "emily_white",
        name: "Emily White",
        password: "password123",
        age: "22",
        isMarried: false,
        email: "emilywhite@example.com"
    },
    {
        username: "mark_taylor",
        name: "Mark Taylor",
        password: "taylorSwift@123",
        age: "35",
        isMarried: true,
        email: "marktaylor@example.com"
    },
    {
        username: "lucas_brown",
        name: "Lucas Brown",
        password: "lucasRocks456",
        age: "29",
        isMarried: false,
        email: "lucasbrown@example.com"
    },
    {
        username: "olivia_green",
        name: "Olivia Green",
        password: "greenOlivia789",
        age: "24",
        isMarried: false,
        email: "oliviagreen@example.com"
    },
    {
        username: "michael_johnson",
        name: "Michael Johnson",
        password: "mikePass@321",
        age: "40",
        isMarried: true,
        email: "michaeljohnson@example.com"
    },
    {
        username: "sophia_martin",
        name: "Sophia Martin",
        password: "martinLove555",
        age: "26",
        isMarried: false,
        email: "sophiamartin@example.com"
    },
    {
        username: "david_wilson",
        name: "David Wilson",
        password: "wilsonSecure999",
        age: "38",
        isMarried: true,
        email: "davidwilson@example.com"
    },
    {
        username: "amelia_clark",
        name: "Amelia Clark",
        password: "clarky789",
        age: "21",
        isMarried: false,
        email: "ameliac@example.com"
    },
    {
        username: "daniel_lee",
        name: "Daniel Lee",
        password: "leeDanny@456",
        age: "31",
        isMarried: true,
        email: "daniellee@example.com"
    },
    {
        username: "grace_thomas",
        name: "Grace Thomas",
        password: "graceful123",
        age: "28",
        isMarried: false,
        email: "gracethomas@example.com"
    },
    {
        username: "ryan_cooper",
        name: "Ryan Cooper",
        password: "cooper@pass",
        age: "33",
        isMarried: true,
        email: "ryancooper@example.com"
    },
    {
        username: "hannah_adams",
        name: "Hannah Adams",
        password: "hannahLove987",
        age: "23",
        isMarried: false,
        email: "hannahadams@example.com"
    }
];

app.get("/", (req, res) => {
    res.send("working");
});

app.get("/createmany", async (req, res) => {
    let data = await userModel.insertMany(dummydata);
    res.send(data);
})

app.get("/users", async (req, res) => {
    let users = await userModel.find({age:{$gt:25}});
    res.send(users);
})

app.listen(3000);