/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { useTable } from "react-table"
import "./CustomTable.scss"

function CustomTable({ id, name, columns, data, title }) {
    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <>
            <h3 className="table-title">{title}</h3>
            <table className="table" id={id} name={name} {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className="table-header">
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.length !== 0 ? (
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td className="table-cell" {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })
                    ) : (
                        <h3 className="table-no-data-title">No History</h3>
                    )}
                </tbody>
            </table>
        </>
    )
}

CustomTable.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

export default CustomTable
