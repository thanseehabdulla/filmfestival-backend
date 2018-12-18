var express = require('express');
var router = express.Router();
var request = require('request');


/* GET users listing. */
router.post('/:id/:cost', function(req, res, next) {
let id = req.params.id;
let cost = req.params.cost;
request({
  method: 'POST',
  url: 'https://rzp_live_pFgTjcFZ283ChM:UgbK6ntuNz4EDKhKebA0fuZY@api.razorpay.com/v1/payments/'+id+'/capture',
  form: {
    amount: cost
  }
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});  
res.send('respond with a resource');
});

module.exports = router;
