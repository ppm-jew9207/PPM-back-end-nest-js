import { Document, Types } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanProjectsView {
  _id: string;
  title: string,
  code: string,
  color: string,
  address: string,
  description: string,
  static: boolean,
  dateStart: Date,
  dateEnd: Date,
  deadline: Date,
  totalPrice: number,
  created: string,
}

export interface CreateProjectPayload {
  title: string,
  code: string,
  color?: string,
  timeSheetKey?: string,
  address?: string,
  description?: string,
  projectType: string,
  dateStart: Date,
  deadline?: Date,
  totalPrice?: number,
  created?: Types.ObjectId,
  workManager?: UserRef,
  projectManager?: UserRef,
}

export type ProjectsViewModel = LeanProjectsView & Document;
