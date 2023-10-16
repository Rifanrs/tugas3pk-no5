import React, { Component } from 'react';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, nama: 'Rifa Nurussalaamah K', deskripsi: 'Fisika 2021 Perempuan' },
        { id: 2, nama: 'Veranica', deskripsi: 'Fisika 2021 Perempuan' },
        { id: 3, nama: 'Vina Sylvia', deskripsi: 'Fisika 2021 Perempuan' },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Tabel Data</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.deskripsi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
