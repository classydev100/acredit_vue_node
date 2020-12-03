const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create UserSchema
const UserSchema = new Schema({
  userid: {
    type: Number,
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    default: "address"
  },
  // industry: {
  //   type: String,
  //   default: "address"
  // },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    // required: true
  },
  admin: {
    type: Boolean,
    protect: true,
    default: false
  },
  superadmin: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  bankaccount: String,
  lang: {
    type: String,
    default: "sv"
  },
  telnumber: String,
  profession: String,
  personummer: {
    type: Number,
    default: 199412345678
  }
  // invoices: [InvoiceSchema],
  // customers: [CustomerSchema]
  //   articles: [ArticleSchema],
  //    userinfo: [UserinfoSchema]
});

module.exports = User = mongoose.model('user', UserSchema);


