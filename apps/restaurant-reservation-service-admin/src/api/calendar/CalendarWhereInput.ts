import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type CalendarWhereInput = {
  availability?: JsonFilter;
  id?: StringFilter;
};
