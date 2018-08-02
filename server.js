var mysql = require( 'mysql' );
var connection = mysql.createConnection( {
	host:'localhost',
	user:'root',
	password:'eeacc18f6f95',
	port: '3506',
	database: 'test'
});

connection.connect( function(err) {
	if( err ) { console.log( err ); }
	else { console.log( 'mysql connected' ); }
});
connection.query('SELECT * FROM `b_users` WHERE `index` != ""', function (error, results, fields) {
  if (error) {
  	console.log('feild', error)
  } else {
  	results.forEach((item) => {
  	  console.log(item.id)
  	})
  }
});

connection.end();