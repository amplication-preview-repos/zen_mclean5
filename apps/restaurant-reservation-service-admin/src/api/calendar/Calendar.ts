import { JsonValue } from "type-fest";

export type Calendar = {
  availability: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
