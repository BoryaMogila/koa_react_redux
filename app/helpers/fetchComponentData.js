function isPromise(val) {
    return val && typeof val.then === 'function';
}

export default function fetchComponentData (
    dispatch,
    components,
    params,
    query
){
    let needs = [];

    for(let component of components){
        component = component.WrappedComponent ? component.WrappedComponent : component;
        if(component.needs){
            needs.push(...component.needs);
        }
    }
    let promises = [];
    for(let need of needs){
        if(isPromise(need.payload) || isPromise(need)){
            if(isPromise(need)){
                promises.push(need.then(dispatch));
            }
            if(isPromise(need.payload)) {
                promises.push(need.payload.then((data) => {
                    dispatch(Object.assign({}, {
                        type: need.type,
                        payload: data
                    }));
                }));
            }
        } else {
            if(need.name === 'setName'){
                dispatch(need(params.name))
            };

        }

    }
    return Promise.all(promises)
}