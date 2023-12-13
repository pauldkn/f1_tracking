import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface TableProps<T> {
  columns: ColumnDef<T, any>[]
  data: T[]
}

export const Table = <T,>({ data, columns }: TableProps<T>) => {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

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
