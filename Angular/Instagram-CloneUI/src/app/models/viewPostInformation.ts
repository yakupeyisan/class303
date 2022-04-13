import { Photo } from "./photo";
import { User } from "./response";

export interface ViewPostInformation {
    id: number;
    userId: number;
    description: string;
    location: string;
    sharedDate: Date;   
    photos: Photo[];
    user: User;
    isLiked: boolean;
    isSaved: boolean;
    commentCount: number;
    likeCount: number;
}
export interface PostLike {
    userId: number;
    postId: number;
}
export interface PostSave {
    userId: number;
    postId: number;
}

export interface PostAdd {
    files: string[];
    location: string;
    description: string;
}

export interface PostComment {
    userId: number;
    postId: number;
    comment: string;
}
