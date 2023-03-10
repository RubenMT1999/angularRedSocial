

export interface CommentsInterface{
    status?: string;
}

export interface CommentsPost{
  id?:number;
  text?:string;
  email?:string;
  id_post?: number;
  perfil?: string;
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

export interface commentsStatus {
  status?: string;
}
