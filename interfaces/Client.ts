export class Client {
    lastName: string = '';
    firstName: string = '';
    address: string = '';
    zipCode: string = '';
    city: string = '';
    country: string = '';
    email: string = '';
    civility: string = '';
    login: string = '';
    password: string = '';

    constructor(
        lastName: string, firstName: string, civility: string,
        address: string, zipCode: string, city: string, country: string,
        email: string, login: string, password: string) {

            this.lastName = lastName;
            this.firstName = firstName;
            this.address = address;
            this.zipCode = zipCode;
            this.city = city;
            this.country = country;
            this.email = email;
            this.civility = civility;
            this.login = login;
            this.password = password;
    }
}
