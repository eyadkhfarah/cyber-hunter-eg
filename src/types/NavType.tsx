export type NavLink = {
    name: string,
    description: string,
    link: string,
    id: number,
    ifSecondaryCategory: boolean
    SecondaryCategory: Array<{
        title: string,
        description: string,
        slug: string,
        id: number,
    }>
}