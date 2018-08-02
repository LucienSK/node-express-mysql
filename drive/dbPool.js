let mysql = require('mysql');
let dbConfig = require('../config/dbConfig');

// 创建数据库连接池
var pool = mysql.createPool(Object.assign(dbConfig));

let dbPool = {}
/**
 * [update 更新操作]
 * @param  {obj}      pool  [dbpools]
 * @param  {string}   sql   [sqls]
 * @param  {array}          [params]
 * @return {promise}        [results]
 */
dbPool.query = function(sql, params) {
	return new Promise((resolve, reject) => {
		pool.getConnection(function(err, connection) {
			if (err) {
				resolve(err)
			} else {
				connection.query(sql, params, (err, rows) => {
					if (err) {
						reject(err)
					} else {
						resolve(rows)
					}
					connection.release()
				})
			}
		})
	})
}

// 关闭数据库
dbPool.close = function() {
	pool.end(function(err) {
		if (err) {
			return;
		} else {
			console.log('关闭连接');
		}
	});
}

module.exports = dbPool;