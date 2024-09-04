import type { CurseForgeFileDependency, CurseForgeFileHash, CurseForgeFileModule, CurseForgeFileReleaseType, CurseForgeFileStatus, CurseForgeSortableGameVersion } from "curseforge-api/v1/Types";

export class CurseForgeFile {
    public id: number;
    public gameId: number;
    public modId: number;
    public isAvailable: boolean;
    public displayName: string;
    public fileName: string;
    public releaseType: CurseForgeFileReleaseType;
    public fileStatus: CurseForgeFileStatus;
    public hashes: CurseForgeFileHash[];
    public fileDate: Date;
    public fileLength: number;
    public downloadCount: number;
    public fileSizeOnDisk: number | null;
    public downloadUrl: string;
    public gameVersions: string[];
    public sortableGameVersions: CurseForgeSortableGameVersion[];
    public dependencies: CurseForgeFileDependency[];
    public exposeAsAlternative: boolean | null;
    public parentProjectFileId: number | null;
    public alternateFileId: number | null;
    public isServerPack: boolean | null;
    public serverPackFileId: number | null;
    public isEarlyAccessContent: boolean | null;
    public earlyAccessEndDate: Date | null;
    public fileFingerprint: number;
    public modules: CurseForgeFileModule[];
    
    constructor(data: any) {
        this.id = data.id;
        this.gameId = data.gameId;
        this.modId = data.modId;
        this.isAvailable = data.isAvailable;
        this.displayName = data.displayName;
        this.fileName = data.fileName;
        this.releaseType = data.releaseType;
        this.fileStatus = data.fileStatus;
        this.hashes = data.hashes;
        this.fileDate = data.fileDate;
        this.fileLength = data.fileLength;
        this.downloadCount = data.downloadCount;
        this.fileSizeOnDisk = data.fileSizeOnDisk;
        this.downloadUrl = data.downloadUrl;
        this.gameVersions = data.gameVersions;
        this.sortableGameVersions = data.sortableGameVersions;
        this.dependencies = data.dependencies;
        this.exposeAsAlternative = data.exposeAsAlternative;
        this.parentProjectFileId = data.parentProjectFileId;
        this.alternateFileId = data.alternateFileId;
        this.isServerPack = data.isServerPack;
        this.serverPackFileId = data.serverPackFileId;
        this.isEarlyAccessContent = data.isEarlyAccessContent;
        this.earlyAccessEndDate = data.earlyAccessEndDate;
        this.fileFingerprint = data.fileFingerprint;
        this.modules = data.modules;
    }
}
