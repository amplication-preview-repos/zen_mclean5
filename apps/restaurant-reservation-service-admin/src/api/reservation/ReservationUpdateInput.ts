import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationUpdateInput = {
  date?: Date | null;
  numberOfGuests?: number | null;
  status?: "Option1" | null;
  time?: Date | null;
  user?: UserWhereUniqueInput | null;
};
