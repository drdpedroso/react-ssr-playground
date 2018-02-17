const path = require('path')

module.exports = {
    // inform webpack that we're building a bundle for nodeJS, not in the brownser
    target: 'node',
    //  tell webpack the root file of our app
    entry: './src/index.js',
    //  tell webpack where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // tell webpack to run babel into all the files passed through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}