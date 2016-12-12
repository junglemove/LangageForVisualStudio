var path = require('path');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: './01-hello.ts',
    output: {
        path: path.join(__dirname, 'Built'),
        filename: '[name].bundle.js'
    }
};