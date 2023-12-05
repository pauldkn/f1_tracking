import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { PiloteResultWithTeam } from '@/types/result'

const columnHelper = createColumnHelper<PiloteResultWithTeam>()
const columns = [
  columnHelper.accessor('position', {
    header: () => <div className="text-start">Pos.</div>,
    cell: (props) => <span className="text-start font-light">{props.getValue()}</span>,
  }),
  columnHelper.accessor('pilote', {
    header: () => <div className="text-start">Player</div>,
  }),
  columnHelper.accessor('team', {
    header: () => <div className="text-start">Team</div>,
    cell: (props) => <span className="font-light">{props.getValue()}</span>,
  }),
  columnHelper.accessor('points', {
    header: () => <div className="text-end">Points</div>,
    cell: (props) => <span className="block text-end">{props.getValue()}</span>,
  }),
]

export const RaceResultTable = ({ results }: { results: PiloteResultWithTeam[] }) => {
  const table = useReactTable({
    data: results,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="grid place-items-center">
      <table className="max-w-xl">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <th
                  key={header.id}
                  className={`px-4 py-1 font-light uppercase sm:px-8 ${
                    i === 1 ? 'w-full' : 'w-fit'
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
        <tbody className="bg-slate-900 bg-opacity-50 hover:cursor-pointer">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="mb-0.5 rounded-md hover:bg-slate-800">
              {row.getVisibleCells().map((cell, i) => (
                <td key={cell.id} className="px-4 py-1.5 sm:px-8">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
