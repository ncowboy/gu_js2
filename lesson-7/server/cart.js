const log = require('./log')
let add = (cart, req) => {
  cart.contents.push(req.body);
  log(req.body, 'created');
  return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
  let find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

let remove = (cart, req) => {
  cart.contents.splice(cart.contents.findIndex(el => req.body.id === el.id_product), 1);
  return JSON.stringify(cart, null, 4);
};
module.exports = {
    add,
    change,
    remove
};