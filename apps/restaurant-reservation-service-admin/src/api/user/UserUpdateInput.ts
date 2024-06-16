import { ReservationUpdateManyWithoutUsersInput } from "./ReservationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  reservations?: ReservationUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
