var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let cos = Math.cos(x)
  let asin =Math.asin(x)
  let asinh = Math.asinh(x)
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + cos ,
    v1: `applied to ` + x + ` is ` + asin,
    v2: `applied to ` + x + ` is ` + asinh,
    });
});

module.exports = router;