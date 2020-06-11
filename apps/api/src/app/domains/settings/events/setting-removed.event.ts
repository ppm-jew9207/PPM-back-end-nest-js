import { RemoveSettingPayload } from '../../../models/settings/settings.interface';

export class SettingRemoved {
  constructor(public readonly setting: RemoveSettingPayload) {}
}