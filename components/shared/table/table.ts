import { TableRoot } from "./table-root";
import { TableBody } from "./table-body";
import { TableHead } from "./table-head";
import { TableH } from "./table-h";
import { TableD } from "./table-d";

export const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  H: TableH,
  D: TableD,
});
