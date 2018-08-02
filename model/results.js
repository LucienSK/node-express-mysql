let Results = {}
/**
 * 正常处理数据response
 * @param  {Object} reject [description]
 * @return {Object}        [description]
 */
Results.response = function(response) {
  return {
  	errCode: 200,
  	errText: '',
  	success: true,
  	data: response
  }
}
/**
 * 错误处理reject
 * @param  {Object} reject [description]
 * @return {Object}        [description]
 */
Results.reject = function(reject) {
  return {
  	errCode: 500,
  	errText: '数据查询失败',
  	success: false,
  	data: null
  }
}
/**
 * 自定义返回处理review
 * @param  {Object} reject [description]
 * @return {Object}        [description]
 */
Results.review = function(review) {
  return Object.assign({
  	errCode: 505,
  	errText: '未知错误',
  	success: false,
  	data: null
  }, review)
}

module.exports = Results;