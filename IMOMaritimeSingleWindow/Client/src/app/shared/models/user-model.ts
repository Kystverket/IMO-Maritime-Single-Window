export class User {
    userId: number;
    userUuid: number;
    userName: string;
    accessFailedCount: number;
    concurrencyStamp: string;
    customField: string;
    email: string;
    emailConfirmed: boolean;
    lockoutEnabled: boolean;
    lockoutEnd: number;
    passwordHash: string;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    securityStamp: string;
    twoFactorEnabled: boolean;
}