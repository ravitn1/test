// const express = require('express')
// const app = express();
// const fs = require('fs');
// const port = 3000
// let i= 0;
// let sample = {};

// fs.readFile('./some.json', function(err, data) {
//     console.log(JSON.parse(data));
//     sample = JSON.parse(data);
// });
// // app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/0/:id', function(req, res) {
//     value = req.params.id;
//     if(value==false){
//         i=i+1;
//     }else{
//         i=i;
//     }
//     res.send('first answer verified');
// })

// app.get('/1/:id', function(req, res) {
//     value = req.params.id;
//     if(value=='First In, First Out'){
//         i=i+1;
//     }else{
//         i=i;
//     }
//     res.send('second answer verified');
// })


// app.get('/2/:id', function(req, res) {
//     value = req.params.id;
//     if(value==false){
//         i=i+1;
//     }else{
//         i=i;
//     }
//     res.send('Third answer verified');
// })
// app.get('/3/:id', function(req, res) {
//     value = req.params.id;
//     let data;
//     if(value){
//         i=i+1;
//     }else{
//         i=i;
//     }
//     if(i==0 ){
//         let data = [sample.messages[0], sample.messages[1]]
//     res.send(data);

//     }
//     if(i==1){
//         let data = [sample.messages[2], sample.messages[3]]
//         res.send(data);
//     }
//     if(i==2) {
//         let data = [sample.messages[4], sample.messages[5]]
//         res.send(data);
//     }
//     if(i==3) {
//         let data = [sample.messages[6], sample.messages[7]]
//     res.send(data);        
//     }
// })


// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

