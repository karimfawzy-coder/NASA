const express = require('express');
const { httpGetAllLaunches, httpAddNewLaunch } = require('./controller');


const launchesRouter = express.Router();

launchesRouter.get('/',httpGetAllLaunches);
launchesRouter.get('/',httpAddNewLaunch);

module.exports = launchesRouter;