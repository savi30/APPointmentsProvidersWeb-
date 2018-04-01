export interface Appointment{
    readonly appointmentID:string;
    readonly clientID:string;
    readonly providerID:string;
    status:string;
    date:Date;
}
