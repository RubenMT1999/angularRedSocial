
export interface PostsUsers {
    id?: number;
    message?: string;
    image?: string;
    like?: number;
    dislike?: number;
    publication?: PublicationDate;
}



export interface PostFollower {
    id?: number;
    username?: string;
    pais?: string
    message?: string;
    image?: string;
    like?: number;
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

export interface ArrayPostFollowers{
    userPosts?: PostFollower[]
}

export interface PostStatus {
    status?: string;
}
