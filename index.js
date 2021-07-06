const path = require('path');
const fs = require('fs');
const express = require("express");
//const port = 9090 ;
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 9090;
app.use('/', express.static('/'));
app.use('/images', express.static('images'));


app.get('/', async (req, res) => {
  
  res.status(200);
  const directoryPath = path.join(__dirname, "/custom");
  
  fs.readdir(directoryPath, function (err, files) {
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      
      files.forEach(function (data) {
          console.log(data);
          if(data.includes(".txt")){
              console.log(data);
              res.write('<div style="display:flex; align-items:center;"><img src ="./images/sys.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
          }
          else if(data.includes('.sys')){
              res.write('<div style="display:flex; align-items:center;"><img src ="./images/sys.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
          }
          else if(data.includes('.html')){
              res.write('<div style="display:flex; align-items:center;"><img src ="./images/html.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
          }
          else if(data.includes('.js')){
              res.write('<div style="display:flex; align-items:center;"><img src ="./images/js.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
          }
          else{
              res.write('<div style="display:flex; align-items:center;"><img src ="./images/folderIcon.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
          }
      });
    });
  });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})