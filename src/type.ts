export type itemTop = {

    id?: number;
    name: string;
    img: string;
    desc: string;

};

export type Top = {

    title: string;
    items: itemTop[];

};

export type listTop = Top;
