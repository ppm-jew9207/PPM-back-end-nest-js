import { SettingCreatedHandler } from './created-setting.handler';
import { SettingRemovedHandler } from './removed-setting.handler';
import { SettingUpdatedHandler } from './updated-setting.handler'

export const EventHandlers = [ SettingCreatedHandler, SettingRemovedHandler, SettingUpdatedHandler];
