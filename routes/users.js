let express = require('express');
let router = express.Router();
let User = require('../model/user'); // 用户模块
let Results = require('../model/results'); // 返回处理机制模块
//插入测试
router.get('/getUserList', function(req, res) {
	// let sqlString = `SELECT * from users where phone="${options.phone}" and pwd="${options.pwd}" limit 1`;
	User.getList(['id', 'index'], 0, 10).then(response => {
		res.send(Results.response(response))
	}, reject => {
		res.send(Results.reject(reject))
	})
});

module.exports = router;