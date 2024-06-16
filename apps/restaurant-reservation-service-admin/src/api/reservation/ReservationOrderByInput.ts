import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  numberOfGuests?: SortOrder;
  status?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
