import React from 'react';

type TableColumn = {
  header: string;
  accessor: string;
};

type TableProps = {
  data: any[];
  columns: TableColumn[];
};

export default function SMTable({ data, columns }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}



// usage

// import React from 'react';
// import DynamicTable from './DynamicTable';

// const columns = [
//   { header: 'Name', accessor: 'name' },
//   { header: 'Age', accessor: 'age' },
//   { header: 'Country', accessor: 'country' },
// ];

// const data = [
//   { name: 'John', age: 30, country: 'USA' },
//   { name: 'Alice', age: 25, country: 'Canada' },
//   { name: 'Bob', age: 35, country: 'UK' },
// ];

// function App() {
//   return (
//     <div>
//       <h1>Dynamic Table Example</h1>
//       <DynamicTable data={data} columns={columns} />
//     </div>
//   );
// }

// export default App;

