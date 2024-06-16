import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  numberOfGuests?: IntNullableFilter;
  status?: "Option1";
  time?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
