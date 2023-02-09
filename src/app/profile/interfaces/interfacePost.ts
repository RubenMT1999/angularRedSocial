
export interface PostsUsers {
    id?: number;
    message?: string;
    image?: string;
    relio?: number;
    publication?: PublicationDate;
}


export interface PublicationDate {
    date?:          Date;
    timezone_type?: number;
    timezone?:      string;
}


export interface ArrayPostUsers{
    userPosts?: PostsUsers[]
}

export interface PostStatus {
    status?: string;
}