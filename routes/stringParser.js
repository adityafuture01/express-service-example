const express = require('express');
const httpStatus = require('http-status-codes');
const router = express.Router();
const util = require('../util/util');
const parseHelper = require('../helper/parseHelper');

//route /api/v1/parse
router.post('/api/v1/parse', (req, res) => {
    const reqBody = req.body;
    if (util.isEmpty(reqBody)) {
        res.status(httpStatus.BAD_REQUEST).json({status: {code: httpStatus.BAD_REQUEST, message: "Bad Request"}});
        return;
    }
    let reqData = reqBody.data;
    const parseData = parseHelper.parseInput (reqData, 1);
    const resData = {statusCode: httpStatus.OK, data: parseData};
    res.status(httpStatus.OK).json(resData);
})

//route /api/v2/parse
router.post('/api/v2/parse', (req, res) => {
    const reqBody = req.body;
    if (util.isEmpty(reqBody)) {
        res.status(httpStatus.BAD_REQUEST).json({status: {code: httpStatus.BAD_REQUEST, message: "Bad Request"}});
        return;
    }
    let reqData = reqBody.data;
    const parseData = parseHelper.parseInput (reqData, 2);
    const resData = {statusCode: httpStatus.OK, data: parseData};
    res.status(httpStatus.OK).json(resData);
})

module.exports = router;