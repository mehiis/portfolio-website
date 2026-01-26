export interface BlogChapter {
        title: string,
        paragraphs: string[],
        image?: string,
        imageAlt?: string,
        imageFigcaption?: string,
}

export interface BlogResource {
        name: string,
        url: string,
}

export default interface BlogPost {
        id:number,
        title:string,
        description: string,
        author: string,
        date: Date,
        technologies: string[],
        tags: string[],
        icon: string,
        articleCover: string,
        featureOnHomePage: boolean,
        chapters: BlogChapter[],
        resources: BlogResource[],
}
