export const FILL_TABLE = "FILL_TABLE"

export function fillTable() {
  return dispatch => {
    dispatch({
      type: FILL_TABLE
    });
  };
}
