const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document, temp) {require('../../common/vendors~home~other.js')(window, document);require('../../common/vendors~home.js')(window, document);require('../../common/default~home~other.js')(window, document);require('../../common/home.js')(window, document, temp)}

const baseConfig = getBaseConfig(mp, config, init)

Component({
    ...baseConfig.base,
    methods: {
        ...baseConfig.methods,
        
        
        
    },
})
