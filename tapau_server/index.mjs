import express from 'express';
import cors from 'cors';
import "express-async-errors";
import blogs from "./routes/blogs.mjs";
import foods from "./routes/foods.mjs";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

//Load blogs data
app.use('/blogs',blogs);

//Load foods data
app.use('/foods',foods);

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.") 
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});