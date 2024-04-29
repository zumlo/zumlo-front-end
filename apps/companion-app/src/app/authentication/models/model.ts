export interface login {
    email?: string;
    password?: string;
}

export interface forget {
    email?: string;
}

export interface otp {
    otp?: number;
    email?: string;
}

export interface reset {
    id?: any;
    password?: any
}