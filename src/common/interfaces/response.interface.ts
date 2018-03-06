namespace Daze.Interfaces {

    export interface Response<T> {
        _links: {
            self: { href: string | null },
            next: { href: string | null }
        },
        _embedded: T;
    }
}


// type Items<T> = Array<T>
// type Item<T> = T

// type HALLinks = {
//     self: { href: string | null },
//     next: { href: string | null }
// }
