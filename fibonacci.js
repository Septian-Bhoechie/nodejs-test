var http = require('http');
var url = require('url');
var port = 8000;

function fibonacci(n) {
	var f = [];
	for (var c = 0; c <= n; ++c) {
		f.push((c < 2) ? c : f[c-1] + f[c-2]);
	}
	return f;
}

function isPrime(i) {
  for (var c = 2; c <= Math.sqrt(i); ++c)
    if (i % c === 0) return false;
  return true;
}

http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});

		var q = url.parse(req.url, true).query;

		res.write('<h2>Test Fibonacci</h2>');
		res.write('<form>');
		res.write('<input value="' + (q.number || "") + '" type="number" min="1" size="30" name="number" placeholder="Input end number for fibonnaci"/>');
		res.write('&nbsp;&nbsp;');
		res.write('<button type="submit">Process</button>');
		res.write('</form>');

		if(q.number){
			res.write('<h3>Fibonacci Total Prime Result For Number "' + q.number + '" is :');
			res.write('<br/>');
			var fiboNumber = parseInt(q.number);
			var sumPrimes = 0;
			fibonacci(fiboNumber).forEach(function(item, index){
				sumPrimes += isPrime(item) ? item : 0;
			});
			res.write('<h2>' + sumPrimes + '</h2>');
		}

		res.end();
}).listen(port);

console.log("server running on http://localhost:" + port);