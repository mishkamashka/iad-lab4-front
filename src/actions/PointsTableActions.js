export const FILL_TABLE_SUCCESS = "FILL_TABLE_SUCCESS"
export const FILL_TABLE_FAIL = "FILL_TABLE_FAIL"
export const CLEAR_TABLE_SUCCESS = "CLEAR_TABLE_SUCCESS"
export const CLEAR_TABLE_FAIL = "CLEAR_TABLE_FAIL"

export function fillTable() {
  return dispatch => {
    dispatch({
      type: FILL_TABLE_SUCCESS
    });
  };
}
