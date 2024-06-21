import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            id: 2,
            joke: "What do you call a belt made out of watches? A waist of time."
        },
        {
            id: 3,
            joke: "Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
            id: 4,
            joke: "What do you call a fish wearing a crown? A kingfish."
        },
        {
            id: 5,
            joke: "Why did the math book look sad? Because it had too many problems."
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
