import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyAyUSuCHX0WkKHGgKSC3FQeCHMWrMbY48U",
    authDomain: "instacrate-57331.firebaseapp.com",
    databaseURL: "https://instacrate-57331.firebaseio.com",
    storageBucket: "instacrate-57331.appspot.com",
    messagingSenderId: "809523991293"
};

firebase.initializeApp(config);

var database = firebase.database();

var boxes = database.ref("boxes");
var vendors = database.ref("vendors");
var categories = database.ref("categories");
var customers = database.ref("customers");
var orders = database.ref("orders");
var pictures = database.ref("pictures");
var reviews = database.ref("reviews");
var subscriptions = database.ref("subscriptions");

function fetchBoxes(child, completion) {
    boxes.child(child).once("value").then(function (snapshot) {
        completion(snapshot.val());
    });
}

// require('../data/vendors.json').forEach(function (vendor) {
//     vendors.push(vendor);
// });
//
// require('../data/boxes.json').forEach(function (box) {
//     boxes.push(box);
// });
//
// require('../data/categories.json').forEach(function (category) {
//     categories.push(category);
// });
//
// require('../data/customers.json').forEach(function (customer) {
//     customers.push(customer);
// });
//
// require('../data/orders.json').forEach(function (order) {
//     orders.push(order);
// });
//
// require('../data/pictures.json').forEach(function (picture) {
//     pictures.push(picture);
// });
//
// require('../data/reviews.json').forEach(function (review) {
//     reviews.push(review);
// });
//
// require('../data/subscriptions.json').forEach(function (subscription) {
//     subscriptions.push(subscription);
// });

export {fetchBoxes}
