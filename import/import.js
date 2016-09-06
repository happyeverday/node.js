/**
 * Created by JNC on 2016/6/15.
 * 监听片段变化，并且合成
 */
var fs = require('fs');

var src = "src";
var filename = "body.html";

var fnImportExample = function(src, filename) {
	fs.readFile(src + '/' + filename, {
		encoding: 'utf8'
	}, function(err, data) {
		var dataReplace = data.replace(/<link\srel="import"\shref="(.*)">/gi, function(mats, m1) {
			fs.watch(src + '/' + m1, function(event, m1) {
				if (event == 'change') {
					console.log(src + '/' + m1 + '发生了改变，重新生成...');
					fnImportExample(src, filename);
				}
			});
			return fs.readFileSync(src + '/' + m1, {
				encoding: 'utf8'
			});
		});
		dataReplace = dataReplace.replace(/"\.\.\//g, '"');
		fs.writeFile(filename, dataReplace, {
			encoding: 'utf8'
		}, function(err) {
			if (err) throw err;
			console.log(filename + '生成成功！');
		});
	});
};

// 默认先执行一次
fnImportExample(src, filename);

// 监控文件，变更后重新生成
fs.watch(src + '/' + filename, function(event, filename) {
	if (event == 'change') {
		console.log(src + '/' + filename + '发生了改变，重新生成...');
		fnImportExample(src, filename);
	}
});