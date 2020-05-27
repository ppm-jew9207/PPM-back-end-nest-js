export class ProfileDto {
  constructor(object: any) {
    this.email = object.email;
    this.name = object.name;
    this.surname = object.surname;    
    this.birthDayDate = object.birthDayDate;
    this.phone = object.phone;
  };
  readonly email: string;
  readonly name: string;
  readonly surname: string;
  readonly birthDayDate: Date;
  readonly phone: string;
}