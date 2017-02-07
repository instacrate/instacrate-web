/**
 * Created by hakonhanesand on 2/6/17.
 */

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

function fetchBoxes(child, completion) {
    boxes.child(child).once("value").then(function (snapshot) {
        completion(snapshot.val());
    });
}
