
export interface AuthResponse {
    token?: string;
    message?:string;
    code?:number;
}

export interface RenovarToken {
    username?: string;
    roles?: string[];
}

export interface Usuario {
    username?: string;
    roles?: string[];
}

export interface RegistroStatus {
    status?: string;
}