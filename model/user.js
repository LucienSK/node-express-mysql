let Pool = require('../drive/dbPool');

let User = {}
/**
 * 查询用户列表
 * @param  {String} table [description]
 * @param  {Array } keys  [description]
 * @param  {Number} start [description]
 * @param  {Number} end   [description]
 * @return {Array }       [description]
 */
User.getList = function(keys, start, end) {
  let  _sql =  "SELECT ?? FROM b_users  LIMIT ? , ?"
  return Pool.query(_sql, [keys, start, end])
}

module.exports = User;