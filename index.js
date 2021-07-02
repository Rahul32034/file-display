const path = require('path');
const fs = require('fs');
const express = require("express");
const port = 9090;
const app = express();
app.use('/', express.static('/'));
app.use('/images', express.static('images'));


app.get('/', async(req, res) => {
  fs.readdir(
  path.resolve(__dirname, 'C:\\'),
  (err, files) => {
    res.status(200);
    files.forEach(function (data) {
      console.log(data);
      if(data.includes(".txt")){
          console.log(data);
          res.write('<div style="display:flex; align-items:center;"><img src ="./images/sys.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
      }
      else if(data.includes('.sys')){
          res.write('<div style="display:flex; align-items:center;"><img src ="./images/sys.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
      }
      else{
          res.write('<div style="display:flex; align-items:center;"><img src ="./images/folderIcon.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
      }
  });
});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})