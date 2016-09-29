/**
 * Created by max on 7/27/16.
 */
import superagentWithCache from 'superagent-cache';
import config from './config'
import superagentPrefix from 'superagent-prefix'
import agentUse from 'superagent-use'
import superagent from 'superagent'
import superagentPromisePlugin from 'superagent-promise-plugin'


/**
 *
 * @param [params]
 * @param [params.cacheTime]
 * @param [params.baseUrl]
 * @param [params.withPromise] default true
 */
export default (params) => {
    params = params || {};
    const agent = agentUse(superagent);
    agent.use(superagentPrefix(params.baseUrl || config.baseURL));
    superagentWithCache(agent, undefined, {expiration: params.cacheTime || undefined});
    if (params.withPromise !== false) {
        superagentPromisePlugin.patch(agent);
    }
    return agent;
}
