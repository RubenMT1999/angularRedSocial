

export interface CommentsInterface{
    status?: string;
}

export interface CommentsPost{
  text?:string;
  email?:string;
  id_post?: number;
  date_comments?: PublicationDate;
 }

export interface PublicationDate {
  date?:          Date;
  timezone_type?: number;
  timezone?:      string;
}

export interface Arrayprueba  {
  datos?: any[];
}

export interface commentsUser{
  commentsUser?: CommentsPost[];
}
