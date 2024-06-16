import { ReservationCreateNestedManyWithoutUsersInput } from "./ReservationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  reservations?: ReservationCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
