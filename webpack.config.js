const path = require('path')

module.exports ={
    entry: {
        main: path.resolve(_dirname, './node_modules'),
    },

    output: {
        path: path.resolve(_dirname, './dist'),
        filename: '[name].bundle.js',
    }
}