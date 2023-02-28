export interface UserProfile {
    name?: string;
    bio?: string;
    weburl?: string;
    username?: string;
    empresa?: string;
    direccion?: string;
    phone_number?: string;
    fecha?: Date;
}



export interface ProfileStatus {
    status?: string;
}


export interface PostDisLike{
  resultado?: string;
}

export interface PostLike{
  resultado?: string;
}

//quicktype
export interface ObtenerProfile {
    userProfile: UserObtener[];
}


export interface UserObtener {
    name?:          string;
    bio?:           string;
    website_url?:   string;
    username?:      string;
    company?:       string;
    location?:      string;
    phone_number?: string;
    date_of_birth?: DateOfBirth;
}


export type userSeguidores ={
   userSeguidores: number[];
}

export interface DateOfBirth {
    date?:          Date;
    timezone_type?: number;
    timezone?:      string;
}


