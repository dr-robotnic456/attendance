import React from 'react'

const Table = ({heads, data, onCheckIn, onCheckOut}) => {
  return (
    <table className='table-auto w-full'>
        <thead>
            <tr>
                {heads.map((head, index) => (
                    <th key={index}
                        className="px-4 py-2 bg-[#119D56] text-white font-semibold capitalize"
                    >{head}</th>
                ))}
            </tr>
        </thead>
        <tbody className='max-h-[500px] overflow-y-auto'>
        {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {heads.map((rowData, index) => (
                    <td key={index}
                    className="px-4 py-2 capitalize text-[#6b6e72]"
                    > {rowData === 'checkIn' ? (
                        <button onClick={() => onCheckIn(rowIndex)}>{row[rowData]}</button>
                    ) : rowData === 'checkOut' ? (
                        <button onClick={() => onCheckOut(rowIndex)}>{row[rowData]}</button>
                    ) : (
                        row[rowData]
                    )}</td>
                ))}
            </tr>
        ))}
        </tbody>
    </table>
  )
}

export default Table