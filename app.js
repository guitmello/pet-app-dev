// Importar as configurações do servidor
var app = require('./server/server');
var PORT = process.env.PORT || 5000;

// Parametrizar porta de escuta
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));