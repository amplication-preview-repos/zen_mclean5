import { SortOrder } from "../../util/SortOrder";

export type CalendarOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
