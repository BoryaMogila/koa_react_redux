import axios from 'axios';

export default (store) =>{
    const {dispatch} = store;
    return (next) =>{
        return (action) => {
            if(action.type === '@@router/LOCATION_CHANGE'){
                return axios.get(`http://local.dom.ria.com${action.payload.pathname}`).then((res) =>{
                    return next({
                        type: 'STORE_FOR_APP',
                        payload: res
                    })
                })
            }
        }
    }
}