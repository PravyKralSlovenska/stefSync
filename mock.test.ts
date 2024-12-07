/*
 * General utils for managing cookies in Typescript.
 */
export function setCookie(name: string, val: string) {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}

export function getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length == 2) {
        // @ts-ignore // toto je cooooooooooooo XDD
        return parts.pop().split(";").shift();
    }
}

export function deleteCookie(name: string) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
}

export class Student {
    id: number = 0;
    meno: string = '';
    priezvisko: string = '';
    datumNarodenia: string = '';
    priemer: number = 0;
    trieda: string = '';
    odbor: string = '';
    pohlavie: string = '';
    info: string = '';
    disabled: boolean = false;
    lastEdit: string = ''; // mal by byt datum vytvorenia, new Date().toLocaleString() -> "11/10/2016, 11:49:36 AM"

    constructor(meno: string, priezvisko: string) {
        this.meno = meno;
        this.priezvisko = priezvisko;
        this.lastEdit = new Date().toLocaleString();
    }

    setDatumNarodenia(datum: string): void {
        this.datumNarodenia = datum;
    }
}

export interface Student {
    name: string;
    age: number;
}