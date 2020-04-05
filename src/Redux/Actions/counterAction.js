import * as types from "../constant";
export function addCounter() {
  return {
    type: types.COUNTER_INCREMENT
  };
}
