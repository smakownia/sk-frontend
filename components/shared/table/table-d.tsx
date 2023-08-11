import { ComponentProps, forwardRef } from "react";

type TableDProps = ComponentProps<"td">;

export const TableD = forwardRef<HTMLTableCellElement, TableDProps>(
  (props, ref) => {
    return <td ref={ref} className="px-6 py-3" {...props} />;
  },
);

TableD.displayName = "Table.D";
