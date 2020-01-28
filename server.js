const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const httpStatus = require('http-status-codes');
const app = express();

const notFoundHandler = (req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.getStatusText(httpStatus.NOT_FOUND),
        uri: req.url
    });
};

//error handler that captures erros
const genericErrorHandler = (err, req, res, next) => {
    let errorData = {
      code: err.code || httpStatus.INTERNAL_SERVER_ERROR,
      status: httpStatus.getStatusText(err.code || httpStatus.INTERNAL_SERVER_ERROR),
      router: err.router,
      uri: req.url,
      query: req.query,
      body: req.body,
      message: err.message,
      error: err
    };
    res.status(errorData.code).json(errorData);
    return null;
};

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
})

app.use('/', require('./routes/stringParser'));

app.use(notFoundHandler);
app.use(genericErrorHandler);

app.listen(3000, () => 
    console.log(`App is listening on port 3000.`)
);
