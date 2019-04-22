const fs = require('fs');
const moment = require('moment');


let write = (product, action) => {
  let log = {
    'action': action,
    'product_name': product.product_name,
    'datetime': moment().format('dddd, MMMM DD YYYY, h:mm:ss')
  };

  fs.writeFile('server/db/stats.json', JSON.stringify(log), (err)=> {
    if (err){
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send({result: 1, text: 'Success!'})
    }
  })
};

module.exports = write;