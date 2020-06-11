import { Document, Types } from 'mongoose';

export interface CreateSettingPayload {
  type: string;
  settings: any;
  user: { _id: string; userName: string };
  enabled: boolean;
}

export interface LeanSettingsView {
  _id: string;
  type: string;
  settings: any;
  user: { _id: string; userName: string };
  enabled: boolean;
}

export interface GetSettingPayload {
  id: string;
}

export interface UpdateSettingPayload {
  id: string;
  type: string;
  settings: any;
  user: { _id: string; userName: string };
  enabled: boolean;
}

export interface RemoveSettingPayload {
  id: string;
}

export interface SettingPayload {
  type: string;
  settings: any;
  user: { _id: string; userName: string };
  enabled: boolean;
}

export type SettingsViewModel = LeanSettingsView & Document;
