import { increment, decrement, reset } from '../constant/type.enum';

export const incrementAction = () => {
    return {type: increment, payload: "ppp"}
}

export const decrementAction = () => {
    return {type: decrement, payload: "ppp"}
}

export const resetAction = () => {
    return {type: reset, payload: "ppp"}
}