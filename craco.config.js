const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#4276e3',
                            '@font-family': "'Source Sans Pro',Helvetica, Arial, 'Helvetica Neue', sans-serif"
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};