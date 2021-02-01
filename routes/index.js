var express = require('express');
var router = express.Router();
const multer = require('multer')
const fs = require('fs')
var path = require('path')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./index.pug', { title: 'Express' });
});

let upload = multer({
	storage: multer.diskStorage({
		//设置文件存储位置
		destination: function(req, file, cb) {
			let date = new Date();
			let year = date.getFullYear();
			let month = (date.getMonth() + 1).toString().padStart(2, '0');
			let day = date.getDate();
			// let dir = "./public/" + year + month + day;
			let dir = "./public";

			//判断目录是否存在，没有则创建
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, {
					recursive: true
				});
			}

			//dir就是上传文件存放的目录
			cb(null, dir);
		},
		//设置文件名称
		filename: function(req, file, cb) {
			let fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
			//fileName就是上传文件的文件名
			cb(null, fileName);
		}
	})
});

router.post('/upload', upload.single('file'), function(req, res, next) {
  res.send({
    file: req.file,
    url: 'http://120.26.40.98:3000/'+ req.file.filename
	})
})

module.exports = router;
