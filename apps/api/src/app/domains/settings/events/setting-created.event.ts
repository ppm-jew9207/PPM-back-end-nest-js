import { CreateSettingPayload } from '../../../models/settings/settings.interface';
export class SettingCreated {
  constructor(public readonly id: string, public readonly data: CreateSettingPayload) {}
}