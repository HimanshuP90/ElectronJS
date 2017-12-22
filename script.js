var $ = document.querySelector.bind(document);

var db = new PouchDB('Student');

db.info().then(function (info) {
  console.log(info);
})

db.info().then(function (info) {
  $('#IndexedDB').innerHTML = '&#10004; We can use PouchDB with IndexedDB!';
}).catch(function (err) {
  $('#IndexedDB').innerHTML = 'Error for IndexedDB';
});


// // My Second pouch insertion in DB
// var myData = {
//     _id: '2',
//     title: 'My Pouch',
//     completed: false
// };

// db.put(myData, function callback(err, result) {
//     if (!err) {
//         alert("successfully saved");
//     } else {
//     	alert("Fail to save");
//     }
// });

// My first pouch insertion in DB
// db.put({
// 	_id: '1',
// 	title: 'Learn PouchDB',
// 	completed: false
// });
