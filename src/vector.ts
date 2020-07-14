import { IPolar, IRect } from "./interfaces";
import { toCartesian, toPolar } from "./convert";

export namespace Vector {

    export namespace Polar {

        export const sum = (a: IPolar, b: IPolar): IPolar => {
            const c = toCartesian(a);
            const d = toCartesian(b);
            return toPolar(Rect.sum(c, d));
        }

        export const diff = (a: IPolar, b: IPolar): IPolar => {
            const c = toCartesian(a);
            const d = toCartesian(b);
            return toPolar(Rect.diff(c, d));
        }

        export const negation = (a: IPolar): IPolar => {
            throw new Error('not implemented');
        }

        export const magnitude = (a: IPolar): number => {
            return a.r;
        }

        export const scale = (a: IPolar, scalar: number): IPolar => {
            return { ...a, r: a.r * scalar };
        }

        // dot product
        export const dot = (a: IPolar, b: IPolar): number => {
            const c = toCartesian(a);
            const d = toCartesian(b);
            return Rect.dot(c, d);
        }
    }

    export namespace Rect {

        export const sum = (a: IRect, b: IRect): IRect => {
            return {
                x: a.x + b.x,
                y: a.y + b.y
            }
        }

        export const diff = (a: IRect, b: IRect): IRect => {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }

        export const negate = (a: IRect): IRect => {
            return {
                x: -1 * a.x,
                y: -1 * a.y
            }
        }

        export const magnitude = (a: IRect): number => {
            return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2))
        }

        export const scale = (a: IRect, scalar: number): IRect => {
            return {
                x: a.x * scalar,
                y: a.y * scalar
            }
        }

        // dot product
        export const dot = (a: IRect, b: IRect): number => {
            return a.x * b.x + a.y * b.y;
        }
    }
}