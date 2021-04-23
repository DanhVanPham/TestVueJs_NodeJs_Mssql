const express = require('express');
const routes = require('./routes/appRoutes.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8082;
const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:8080', credentials: true, origin: true }));

routes(app);

app.listen(port, () => {
    console.log(`Listening in port ${port}`);
})