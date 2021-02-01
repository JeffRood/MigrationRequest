import { IPerson } from "./Person";
import { IStatus } from "./Status";

export interface IRequest {
  Id?:number,
  personId ?: number,
  statusId ?: number,
  creationDate: Date,
  Person?: IPerson,
  Status?: IStatus
};

