export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

interface ResetAction {
  type: typeof RESET;
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction;

export const increment = (): IncrementAction => ({ type: INCREMENT });
export const decrement = (): DecrementAction => ({ type: DECREMENT });
export const reset = (): ResetAction => ({ type: RESET });
