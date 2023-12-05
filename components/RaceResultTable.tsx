import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { PiloteResult } from "@/types/result";

const columnHelper = createColumnHelper<PiloteResult>();
const columns = [
  columnHelper.accessor("position", {
    header: () => <div className="text-start w-min">Pos.</div>,
    cell: (props) => <span className="text-start">{props.getValue()}</span>,
  }),
  columnHelper.accessor("pilote", {
    header: () => <div className="text-start w-min">Player</div>,
  }),
  columnHelper.accessor("points", {
    header: () => <div className="text-end w-min">Points</div>,
    cell: (props) => <span className="block text-end">{props.getValue()}</span>,
  }),
];

export const RaceResultTable = ({ results }: { results: PiloteResult[] }) => {
  const table = useReactTable({
    data: results,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="text-lg grid place-items-center p-5">
      <table className="max-w-xl">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <th
                  key={header.id}
                  className={`uppercase py-1 px-4 font-light sm:px-8 ${
                    i === 1 ? "w-full" : "w-fit"
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="hover:cursor-pointer bg-slate-900 bg-opacity-50">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="mb-0.5 rounded-md hover:bg-slate-800">
              {row.getVisibleCells().map((cell, i) => (
                <td key={cell.id} className="py-1.5 px-4 sm:px-8">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
