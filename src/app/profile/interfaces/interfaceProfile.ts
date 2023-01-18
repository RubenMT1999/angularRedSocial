export interface UserProfile {
    name?: string;
    bio?: string;
    weburl?: string;
    username?: string;
    empresa?: string;
    direccion?: string;
    fecha?: Date;
    phone_number?: string;
}

export interface ProfileStatus {
    status?: string;
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
    date_of_birth?: DateOfBirth;
    phone_number?: string;
}

export interface DateOfBirth {
    date?:          Date;
    timezone_type?: number;
    timezone?:      string;
}
