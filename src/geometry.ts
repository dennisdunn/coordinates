import { IBoundingArc, IBoundingBox, IBoundingCircle, IPolar, IRect } from './interfaces';
import { between } from './util';
import { Vector } from './vector';

export namespace Geometry {

    export namespace Polar {

        export const contains = (bounds: IBoundingArc, point: IPolar): boolean => {
            return between(bounds.inner.r, point.r, bounds.outer.r)
                && between(bounds.inner.theta, point.theta, bounds.outer.theta)
        }

        export const within = (bounds: IBoundingCircle, point: IPolar): boolean => {
            return distance(bounds.center, point) < bounds.radius;
        }

        export const distance = (a: IPolar, b: IPolar): number => {
            return Vector.Polar.magnitude(Vector.Polar.diff(a, b));
        }
    }

    export namespace Rect {

        export const contains = (bounds: IBoundingBox, point: IRect): boolean => {
            return between(bounds.lowerLeft.x, point.x, bounds.upperRight.x)
                && between(bounds.lowerLeft.y, point.y, bounds.upperRight.y)
        }

        export const distance = (a: IRect, b: IRect): number => {
            return Vector.Rect.magnitude(Vector.Rect.diff(a, b));
        }
    }
}
