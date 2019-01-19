export const DRAW_FIGURES = "DRAW_FIGURES";

export function drawFigures(radius) {
  return function(dispatch) {
    dispatch({
      type: DRAW_FIGURES,
      payload: radius
    });
  };
}
