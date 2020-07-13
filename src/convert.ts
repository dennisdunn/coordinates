import { IPolar, IRect } from './interfaces';

export const toRad = (degree: number): number => {
    return degree / 57.2958;
}

export const toDeg = (radian: number): number => {
    return radian * 57.2958;
}

export const toPolar = (point: IRect): IPolar => {
    return {
        r: Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2)),
        theta: point.y >= 0
            ? Math.atan2(point.y, point.x)
            : Math.atan2(point.y, point.x) + 2 * Math.PI,
    }
}

export const toCartesian = (point: IPolar): IRect => {
    return {
        x: point.r * Math.cos(point.theta),
        y: point.r * Math.sin(point.theta),
    }
}