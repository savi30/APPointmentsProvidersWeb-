const enum Status{
    pending,
    confirmend
}

export interface Appointment{
    readonly clientID:string;
    readonly providerID:string;
    status:Status;
    date:Date;
}
