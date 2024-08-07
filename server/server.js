const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.log('Error: ' + err);
});
