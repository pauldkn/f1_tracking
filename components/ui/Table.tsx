import cn from 'classnames'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface TableProps<T> {
  columns: ColumnDef<T, any>[]
  data: T[]
}

export const Table = <T,>({ data, columns }: TableProps<T>) => {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <div className="grid place-items-center">
      <table className="max-w-xl border-separate border-spacing-y-0.5">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <th
                  key={header.id}
                  className={cn('w-fit px-4 py-1 font-light uppercase sm:px-8', {
                    'w-auto': i === 1,
                  })}
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
            <tr key={row.id} className="hover:bg-slate-950">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 py-2 first-of-type:rounded-l last-of-type:rounded-r sm:px-8"
                >
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
