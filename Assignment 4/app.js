const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexRoute = require('./routes/response')
const userRoute = require('./routes/userresponse');

app.use(express.urlencoded({ extended: true}));

app.use(userRoute);
app.use(indexRoute);

app.listen(3000, () => {
    console.log('Server has started');
});