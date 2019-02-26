import { Vehicle } from "./Vehicle";

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  vehicles: Vehicle[];
}
