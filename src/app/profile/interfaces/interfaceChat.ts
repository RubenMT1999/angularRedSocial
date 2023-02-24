
export interface ChatStatus {
    status?: string;
}


export interface ListadoMensajes {
    listaMensajes?: ListaPersonalizada[];
}


export interface ListaPersonalizada {
    texto?: string;
    creation_date ?: DateOfCreation;
}

export interface DateOfCreation {
    date?:          Date;
    timezone_type?: number;
    timezone?:      string;
}
