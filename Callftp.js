var Client = require('ftp');

  var c = new Client();
  c.on('ready', function() {
    c.list('/uploads/csv/ks/',function(err, list) {
      if (err) throw err;
      console.dir(list);
      c.end();
    });
  });
  c.connect( {host: 'ftp.dlptest.com', user: 'dlpuser', password: 'rNrKYTX9g7z3RgJRmxWuGHbeu'
} );