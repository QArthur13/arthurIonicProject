export type itemTop5 = {

    id: number;
    name: string;
    img: string;
    desc: string;
    number: number;

};

export type Top5 = {

    title: string;
    items: itemTop5[];

};

export type listTop5 = Top5[];
