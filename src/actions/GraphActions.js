export const DRAW_GRAPH = "DRAW_GRAPH";

export function drawGraph() {
  return function(dispatch) {
    dispatch({
      type: DRAW_GRAPH
    });
  };
}
