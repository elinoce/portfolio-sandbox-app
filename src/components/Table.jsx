import React from 'react';

export default function Table({ columns, rows, getRowKey }) {
  return (
    <div style={{ borderRadius: 8, border: '1px solid #e5e7eb', backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead style={{ backgroundColor: '#f9fafb' }}>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                style={{
                  textAlign: col.align || 'left',
                  padding: '8px 10px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: 500
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={getRowKey(row)} style={{ borderBottom: '1px solid #f3f4f6' }}>
              {columns.map(col => (
                <td
                  key={col.key}
                  style={{
                    textAlign: col.align || 'left',
                    padding: '8px 10px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
