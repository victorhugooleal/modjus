'use client'

import { useState } from 'react'

import {
    flexRender,
    PaginationState,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable
} from '@tanstack/react-table'
import { Table as BTable, Pagination, Form } from 'react-bootstrap'
import tableSpecs from './table-specs'
import Link from 'next/link'
import { link } from 'fs'
import { usePathname } from "next/navigation"



export default function TableRecords({ records, spec, onSelecionado, linkToBack, pageSize }: { records: any[], spec: string, onSelecionado?: (s: string) => void, linkToBack?: string, pageSize?: number }) {
    const [sorting, setSorting] = useState([])
    const [globalFilter, setGlobalFilter] = useState('')
    const pathname = usePathname()

    // @ts-ignore
    const { columns, thead, tr } = tableSpecs(pathname, onSelecionado)[spec]


    // const records: [{ id: string, date: Date, category_name: string, description: string, explanation: string, value: string }] = props.records

    const table = useReactTable({
        data: records,
        columns,
        state: { sorting, globalFilter },
        // onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })
    table.getState().pagination.pageSize = pageSize || 5

    return (
        <div>
            <table className="table table-sm table-striped">
                <thead>
                    {thead ? thead() : table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} style={(header.column.columnDef as any)?.style}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {tr
                        ? table.getRowModel().rows.map(row => {
                            const record = row.original;
                            return tr(record)
                        })
                        : table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} style={(cell.column.columnDef as any)?.style}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="row">
                <div className="col col-auto">
                    {linkToBack &&
                        <Link href={`${pathname}/${linkToBack}`} className="btn btn-light bt d-print-none">Voltar</Link>
                    }
                </div>
                <div className="col col-auto ms-auto">
                    <Pagination>
                        <Pagination.Prev onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()} />
                        <Pagination.Item> {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount()}</Pagination.Item>
                        <Pagination.Next onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()} />
                    </Pagination>
                </div>
            </div>
        </div>
    )
}