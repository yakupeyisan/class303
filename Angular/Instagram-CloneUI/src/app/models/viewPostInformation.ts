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