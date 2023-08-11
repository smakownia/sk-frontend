import { ComponentProps, forwardRef } from "react";

type TableHeadProps = ComponentProps<"thead">;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  (props, ref) => {
    return (
      <thead
        ref={ref}
        className="text-left border-b border-neutral-50 bg-neutral-10"
        {...props}
      />
    );
  },
);

TableHead.displayName = "Table.Head";
