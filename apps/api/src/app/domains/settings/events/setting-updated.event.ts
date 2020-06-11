import { UpdateSettingPayload } from '../../../models/settings/settings.interface';

export class SettingUpdated {
  constructor(public readonly setting: UpdateSettingPayload) {}
}