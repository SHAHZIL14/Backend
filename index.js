import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import { run } from './DB/DBConnection.js'
const APP = express();
const PORT = process.env.PORT || 3000;
run()
    .then(function (response) {
        APP.on('error', function (error) {
            console.log(`App failed to listen due to ERROR: ${error}`);
        })
        APP.listen(PORT, function () {
            console.log(`App starts and listening on port: ${PORT}`);
        })
    })
    .catch(function (error) {
        console.log(`App failed to listen due to ERROR: ${error}`);
    })
