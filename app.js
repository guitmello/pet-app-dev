'use strict';

// Importar as configurações do servidor
const app = require('./server/config/server');
const PORT = process.env.PORT || 5000;

// Parametrizar porta de escuta
app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));