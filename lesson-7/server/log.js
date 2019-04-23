const fs = require('fs');
const moment = require('moment');


let write = (product, action) => {

  let newLog = {
    'action': action,
    'product_name': product.product_name,
    'datetime': moment().format('YYYY-MM-DD HH:mm:ss')
  };

  fs.readFile('server/db/stats.json', 'utf-8', (err, data) => {
    if(err){
      console.log({result: 0, text: err});
    } else {
      let newData = JSON.parse(data);
      newData.push(newLog);
      fs.writeFile('server/db/stats.json', JSON.stringify(newData, null, 4), (err)=> {
        if (err){
          console.log(err);
        }
      })
    }
  });

};

module.exports = write;