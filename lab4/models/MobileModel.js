var mongoose = require('mongoose')
var MobileSchema = mongoose.Schema(
   {
      model: String,
      brand: String,
      color: String,
      price: Number,
      image: String,
      video: String
   }
);
var MobileModel = mongoose.model('dienthoai', MobileSchema, 'mobile');
//Note: 3rd argument is collection name (ex: mobile)

module.exports = MobileModel;