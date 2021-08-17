const { default: axios } = require("axios");
const fs = require('fs');
require('dotenv').config();

// // const banana = async () => {
// //     return "xyz";
// // };
// // banana().then((val) => console.log(val));

var obj = JSON.parse(fs.readFileSync('./test_reports/cucumber_report.json'));
var x = JSON.stringify(obj);
// fs.writeFile('my.json', x, function (err) {
//     if (err) throw err;
//     console.log('\n\nSaved!!');
// });

//console.log(typeof x);


axios.post("http://localhost:8080/rest/raven/1.0/import/execution/cucumber",
    x,
    {
        auth: {
            username: process.env.JIRA_USER,
            password: process.env.JIRA_PSWD
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        console.log(resp);
    }).catch(error => {
        console.error(error);
    });
