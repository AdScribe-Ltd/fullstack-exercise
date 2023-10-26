import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Your routes and middleware

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/", async (req, res) => {
    return res.json({
        message: "yes"
    })
});