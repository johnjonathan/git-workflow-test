const path = require('path')
const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    context: __dirname,
    mode: 'production',
    entry: 'src/app/index.ts',
    devtool: 'source-map',
    resolve: {
        extensions: ['.mjs', '.json', '.ts'],
        symlinks: false,
        cacheWithContext: false,
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.(tsx?)$/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                },
            },
            {
                test: /\.(tsx?)$/,
                loader: 'ts-loader',
                exclude: [
                    [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, '.serverless'),
                        path.resolve(__dirname, '.webpack'),
                    ],
                ],
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
            },
        ],
    },
    plugins: [],
}
