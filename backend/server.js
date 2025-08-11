import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
})

// app.get('/jokes', async (req, res) => {
//     const url = 'https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1';
// const options = {method: 'GET', headers: {accept: 'application/json'}};
//     const jokes = await fetch(url, options);
//     const data = await jokes.json();
//     console.log(data);

//     res.send(data);
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'Joke 1', content: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
        { id: 2, title: 'Joke 2', content: 'I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.' },
        { id: 3, title: 'Joke 3', content: 'Why don’t scientists trust atoms? Because they make up everything!' },
        { id: 4, title: 'Joke 4', content: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
        { id: 5, title: 'Joke 5', content: 'I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.' },
        { id: 6, title: 'Joke 6', content: 'Why don’t scientists trust atoms? Because they make up everything!' }
    ];
    res.send(jokes);
}
)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
}
);