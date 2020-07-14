export interface IPolar {
    r: number;
    theta: number;
}

export interface IRect {
    x: number;
    y: number;
}

export interface IBoundingBox {
    lowerLeft: IRect;
    upperRight: IRect;
}

export interface IBoundingArc {
    inner: IPolar;
    outer: IPolar;
}

export interface IBoundingCircle {
    center: IPolar;
    radius: number;
}