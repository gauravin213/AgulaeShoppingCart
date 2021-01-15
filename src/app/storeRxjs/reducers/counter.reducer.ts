import { increment, decrement, reset } from '../constant/type.enum';
export const initialState = 0;
export function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case increment: 
      return state + 1;
    case decrement: 
      return state - 1;
    case reset: 
      return 0;
    default:
      return state;
  }
}