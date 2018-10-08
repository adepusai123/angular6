export interface LoginResponse {
    status: number,
    message: string,
    token: string
}

export interface DashboardResponse {
    agent: any,
    status: number,
    message?:string //option property
}

//enum 
/* 
export enum colors {
    red='redColor',
    yellow='yellowColor'
}

*/