import {CHANGE_SOMEBODY} from './actionsTypes'

export function setName(name = 'world'){
    return {
        type: CHANGE_SOMEBODY,
        payload: name
    }
}
