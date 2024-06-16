import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
