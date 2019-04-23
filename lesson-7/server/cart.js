const log = require('./log');
let add = (cart, req) => {
  log(req.body, 'added');
  cart.contents.push(req.body);
  return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
  let find = cart.contents.find(el => el.id_product === +req.params.id);
  log(find, 'changed');
  find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

let remove = (cart, req) => {
  const index = cart.contents.findIndex(el => req.body.id === el.id_product);
  log(cart.contents[index], 'removed');
  cart.contents.splice(index, 1);
  return JSON.stringify(cart, null, 4);
};
module.exports = {
    add,
    change,
    remove
};