import Email_Sheduled_Agent from '../sheduled.js';


class IMAP4_Agent extends Email_Sheduled_Agent
{
    constructor(in_Options)
    {
        Object.assign(this, in_Options)
        super(in_Options);
        
    }

    do()
    {
        console.log("Starting IMAP4 task\nserver - ${this.sever}:${this.port} ${ this.tls ? 'tls' : 'plain'\nuser - ${this.user}");

    }
};

module.exports = IMAP4_Agent;



/*var fs = require('fs'), fileStream;
var Imap = require('imap'),
    inspect = require('util').inspect;



var imap = new Imap({
  user: 'mygmailname@gmail.com',
  password: 'mygmailpassword',
  host: 'imap.gmail.com',
  port: 993,
  tls: true
});


imap.once('ready', function() 
{
    imap.openBox('INBOX', true,
    function(err, box) 
    {
  if (err) throw err;
  imap.search([ 'UNSEEN', ['SINCE', 'May 20, 2010'] ], function(err, results) {
    if (err) throw err;
    var f = imap.fetch(results, { bodies: '' });
    f.on('message', function(msg, seqno) {
      console.log('Message #%d', seqno);
      var prefix = '(#' + seqno + ') ';
      msg.on('body', function(stream, info) {
        console.log(prefix + 'Body');
        stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
      });
      msg.once('attributes', function(attrs) {
        console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
      });
      msg.once('end', function() {
        console.log(prefix + 'Finished');
      });
    });
    f.once('error', function(err) {
      console.log('Fetch error: ' + err);
    });
    f.once('end', function() {
      console.log('Done fetching all messages!');
      imap.end();
    });
  });
});
*/