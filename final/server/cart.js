let add = (cart, req) => {
  cart.push(req.body);
  return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
  let find = cart.find(el => el.id === +req.params.id);
  find.qty += req.body.qty;
    return JSON.stringify(cart, null, 4);
};

let remove = (cart, req) => {
  const index = cart.findIndex(el => req.body.id === el.id);
  cart.splice(index, 1);
  return JSON.stringify(cart, null, 4);
};
module.exports = {
    add,
    change,
    remove
};