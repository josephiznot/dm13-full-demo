const getProducts = (req, res) => {
  req.app
    .get("db")
    .getProducts()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const getCart = (req, res) => {
  console.log("HIT");
  req.app
    .get("db")
    .getCart(req.user.id)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const addToCart = (req, res) => {
  console.log(req.user.id, req.params.id);
  req.app
    .get("db")
    .addToCart([req.user.id, req.params.id])
    .then(response => getCart(req, res))
    .catch(err => res.status(500).json(err));
};
const deleteFromCart = (req,res)=>{
  console.log("DELETE")
  // var {id} = req.user;
  // req.app.get('db').deleteFromCart(id).then(res=>{
  //   getCart(req,res);
  // }).catch(console.log)
}

module.exports = {
  getProducts,
  getCart,
  addToCart,
  deleteFromCart
};
