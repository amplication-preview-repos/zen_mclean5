import { User } from "../user/User";

export type Reservation = {
  createdAt: Date;
  date: Date | null;
  id: string;
  numberOfGuests: number | null;
  status?: "Option1" | null;
  time: Date | null;
  updatedAt: Date;
  user?: User | null;
};
