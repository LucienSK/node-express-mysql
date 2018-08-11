
let Filter = {}
/**
 * 是否是跨域OPTIONS
 * @param  {Object} reject [req, res]
 * @return {Object}        [否，正常处理]
 */
Filter.header = function(req, res) {
  if (req.method === 'OPTIONS') {
    return {
	  	errCode: 200,
	  	errText: 'OPTIONS',
	  	success: true,
	  	data: ''
	  }
  } else {
  	return false
  }
}

module.exports = Filter;