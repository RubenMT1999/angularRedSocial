

export interface CommentsInterface{
    status?: string;
}

export interface CommentsPost{
  text?:string;
  email?:string;
  id_post?: number;
  date_comments?: Date;
 }

export interface Arrayprueba  {
  datos?: any;
}

export interface ArrayCommentsPost{
  commentsPost?: CommentsPost[]
}
