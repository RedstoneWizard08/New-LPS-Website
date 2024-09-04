import type {
    CurseForgeCategory,
    CurseForgeFileIndex,
    CurseForgeModAsset,
    CurseForgeModAuthor,
    CurseForgeModLinks,
    CurseForgeModStatus,
} from "curseforge-api/v1/Types";
import { CurseForgeFile } from "./file";

export class CurseForgeMod {
    public id: number;
    public gameId: number;
    public name: string;
    public slug: string;
    public links: CurseForgeModLinks;
    public summary: string;
    public status: CurseForgeModStatus;
    public downloadCount: number;
    public isFeatured: boolean;
    public primaryCategoryId: number;
    public categories: CurseForgeCategory[];
    public classId: number | null;
    public authors: CurseForgeModAuthor[];
    public logo: CurseForgeModAsset;
    public screenshots: CurseForgeModAsset[];
    public mainFileId: number;
    public latestFiles: CurseForgeFile[];
    public latestFilesIndexes: CurseForgeFileIndex[];
    public latestEarlyAccessFilesIndexes: CurseForgeFileIndex[];
    public dateCreated: Date;
    public dateModified: Date;
    public dateReleased: Date;
    public allowModDistribution: boolean | null;
    public gamePopularityRank: number;
    public isAvailable: boolean;
    public thumbsUpCount: number;
    public rating: number | null;

    constructor(data: any) {
        this.id = data.id;
        this.gameId = data.gameId;
        this.name = data.name;
        this.slug = data.slug;
        this.links = data.links;
        this.summary = data.summary;
        this.status = data.status;
        this.downloadCount = data.downloadCount;
        this.isFeatured = data.isFeatured;
        this.primaryCategoryId = data.primaryCategoryId;
        this.categories = data.categories;
        this.classId = data.classId;
        this.authors = data.authors;
        this.logo = data.logo;
        this.screenshots = data.screenshots;
        this.mainFileId = data.mainFileId;
        this.latestFiles = data.latestFiles.map((rawFile: any) => {
            return new CurseForgeFile(rawFile);
        });
        this.latestFilesIndexes = data.latestFilesIndexes;
        this.latestEarlyAccessFilesIndexes = data.latestEarlyAccessFilesIndexes;
        this.dateCreated = data.dateCreated;
        this.dateModified = data.dateModified;
        this.dateReleased = data.dateReleased;
        this.allowModDistribution = data.allowModDistribution;
        this.gamePopularityRank = data.gamePopularityRank;
        this.isAvailable = data.isAvailable;
        this.thumbsUpCount = data.thumbsUpCount;
        this.rating = data.rating;
    }
}
