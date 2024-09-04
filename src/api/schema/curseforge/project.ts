export interface Author {
    id: number;
    name: string;
    username: string;
    isEarlyAccessAuthor: boolean;
}

export interface Category {
    id: number;
    dateModified: string; // date, like "2014-05-08T17:34:59.587Z"
    gameId: number;
    iconUrl: string;
    name: string;
    slug: string;
    url: string;
    classId: number;
    displayIndex?: number;
    isClass: boolean;
    parentCategoryId: number;
}

export interface CurseforgeScrapedProject {
    id: number;
    name: string;
    slug: string;
    gameId: number;
    gameSlug: string;
    author: Author;
    downloads: number;
    avatarUrl: string;
    creationDate: number; // date
    releaseDate: number; // date
    mainFileId: number;
    summary: string;
    classSlug: string;
    isClientCompatible: boolean;
    classCategory: Category;
    categories: Category[];
}
