const mongoose = require('mongoose');
const configs = require('../../constant');
const mongoURL = configs.mongoDbUrl;

const dbConnection = async () => {
    try {
        const con = await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB is Connected", con.connection.host);
    } catch (error) {
        console.error("DB is not connected", error);
    }
};
module.exports = dbConnection