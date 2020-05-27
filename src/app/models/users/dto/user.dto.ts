import { SettingsDto } from "./settings.dto";

export class UserDto {
  constructor(object: any) {
    this.name = object.name;
    this.surname = object.surname;
    this.email = object.email;
    this.phone = object.phone;
    this.birthDayDate = object.birthDayDate;
    this.settings = new SettingsDto(object.settings);
  };
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly phone: string;
  readonly birthDayDate: Date;
  settings: SettingsDto
}