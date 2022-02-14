import React, { Fragment } from 'react'

function TableCustom({
  classTable,
  columns,
  rows
}) {
  return (
    <Fragment>
      <table className={classTable}>
        <thead>
          <tr>
            {
              columns.map((item, index) => {
                return <th
                  key={index}
                  className={item.class || ''}>
                  {item.title}
                </th>
              })
            }
          </tr>
        </thead>
        <tbody>
        {
          rows.map((row, indexRow) => {
            return <tr
              key={indexRow}>
              {
                columns.map((column, indexColumn) => {
                  return <td
                    key={indexColumn}
                    className={column.classCell || ''}>
                    {column.customRows(row) || row[column.field]}
                  </td>
                })
              }
            </tr>
          })
        }
        </tbody>
      </table>
    </Fragment>
  )
}

export default TableCustom
