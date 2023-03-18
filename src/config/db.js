var {createPool} = require('mysql');
var pool = createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'my_db',
  connectionLimit:10
});
 
module.exports = pool;
