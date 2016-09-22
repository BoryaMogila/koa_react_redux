/**
 * Created by max on 7/2/16.
 */
import defaultConfig from '../../config/default'
import deepExtend from 'deep-extend'

const NODE_ENV = process.env.NODE_ENV || 'development';
try {
    var environmentConfig = require('../../config/' + NODE_ENV);
    var environmentInstanceConfig = require('../../config/' + NODE_ENV + '-' + process.env.NODE_APP_INSTANCE);
} catch (e) {
}

export default deepExtend(defaultConfig, environmentConfig, environmentInstanceConfig);
