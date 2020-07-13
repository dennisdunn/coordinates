import { IPolar } from "./interfaces";
import { toCartesian, toPolar } from "./convert";
import { Rect } from "./vector.rect";

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