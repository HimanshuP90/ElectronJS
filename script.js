var db = new PouchDB('shoppinglist');

db.info().then(function (info) {
  console.log(info);
})