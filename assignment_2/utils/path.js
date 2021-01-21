// Get absolute path of entry point directory
const path = require('path');
module.exports = path.dirname(require.main.filename);