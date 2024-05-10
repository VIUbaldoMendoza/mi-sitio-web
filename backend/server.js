const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.'); 
})
.cath(err => {
    console.log.error('Unable to connect to the database:', err);
});
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});