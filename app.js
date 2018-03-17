var app = require('./server/server');

var PORT = process.env.PORT || 5000;

//parametrizar porta de escuta
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
