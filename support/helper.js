// const { default: axios } = require("axios");
// const fs = require('fs');
// require('dotenv').config();


// // const banana = async () => {
// //     return "xyz";
// // };
// // banana().then((val) => console.log(val));

// axios.get("http://localhost:8080/rest/raven/latest/export/test?keys=POC-10",
//     {
//         auth: {
//             username: process.env.JIRA_USER,
//             password: process.env.JIRA_PSWD
//         }
//     }).then(resp => {
//         console.log(resp.data);
//         fs.writeFile('features/y.feature', resp.data, function (err) {
//             if (err) throw err;
//             console.log('\n\nFeature exported!!');
//         });
//     });