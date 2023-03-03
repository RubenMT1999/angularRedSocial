

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
  text?: string;
  email?: string;
}

export interface Arraylista{
  arrayPrueba?: Arrayprueba[]
}

export interface ArrayCommentsPost{
  commentsPost?: CommentsPost[]
}

export interface commentsUser{
  commentsUser?: NuevaInterfaz[];
}


export interface NuevaInterfaz{
  text?: string;
  date_comments?: Date;
  email?: string;
  id_post?: number;
}
