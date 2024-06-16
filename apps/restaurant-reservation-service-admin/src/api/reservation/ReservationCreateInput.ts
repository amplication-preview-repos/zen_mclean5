import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationCreateInput = {
  date?: Date | null;
  numberOfGuests?: number | null;
  status?: "Option1" | null;
  time?: Date | null;
  user?: UserWhereUniqueInput | null;
};
