var http = require('http')
var jade = require('jade')
var fs = require('fs')
var html2jade = require('html2jade')

http.createServer(function (req, res) {
    res.writeHead(200, {
        // 'Content-Type': 'text/plain'
        'Content-Type': 'text/html'
    });

    var bf = fs.readFileSync('html2jade.html')
    var html = Buffer.from(bf).toString('utf-8')
    console.log(html)
    html2jade.convertHtml(html, {}, function (err, jade) {
        if (!err) {
           console.log(jade)
        }
    })

    //1.jade.compile
    // var fn = jade.compile('div #{course}', {})
    // var html = fn({ course: 'jade' })

    //2.jade.render
    // var html = jade.render('div #{course}',{course: 'jade'})

    //3.jade.renderFile
      var html = jade.renderFile('ifElse.jade', { course: 'jade', pretty: true })

    res.end(html)
}).listen(1337, '127.0.0.1');

console.log('Server running at 1337')