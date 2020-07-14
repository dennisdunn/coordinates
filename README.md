# Coordinates

A coordinate transform library for the HTML5 canvas or svg elements.

## Coordinates

Rectangular coordinates are objects with x and y properties: {x:0, y:0} denoting
a point on the Cartesian plane.

Polar coordinates are objects with r (radius) and theta (angle) properties: {r:0, theta:0} describing
points on the polar plane.

Canvas coordinates are similar to cartesian coordinates except x and y are constrainted to positive values and describe a position on a canvas where the origin is the upper-left corner of the canvas.

Angels are measured in radians, 1 radian = 57.2958 degrees.

## API

### Static functions

static canvasToCartesian(canvasPoint, offset)

static cartesianToCanvas(cartesianPoint, offset)

static cartesianToPolar(cartesianPoint)

static polarToCartesian(polarPoint)

### Instance functions

canvasToCartesian(canvasPoint)

cartesianToCanvas(cartesianPoint)

cartesianToPolar(cartesianPoint)

polarToCartesian(polarPoint)

polarToCanvas(polarPoint)

canvasToPolar(CanvasPoint)
