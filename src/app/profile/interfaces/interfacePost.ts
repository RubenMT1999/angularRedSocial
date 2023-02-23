
export interface PostsUsers {
    id?: number;
    message?: string;
    image?: string;
    relio?: number;
    publication?: PublicationDate;
}

export interface PostFollower {
    username?: string;
    pais?: string
    message?: string;
    image?: string;
    relio?: number;
    publication?: PublicationDate;
  }

export interface PostLike{
  resultado?: string;
}


export interface PublicationDate {
    date?:          Date;
    timezone_type?: number;
    timezone?:      string;
}


export interface ArrayPostUsers{
    userPosts?: PostsUsers[]
}

export interface ArrayPostFollowers{
    userPosts?: PostFollower[]
}

export interface PostStatus {
    status?: string;
}
