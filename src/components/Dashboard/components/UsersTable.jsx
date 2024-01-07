import React, { useEffect, useState } from 'react';
import { getUsers } from '../../apis/users';

const UsersTable = () => {
  const pageSize = 4; 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();
  const [currentData, setCurrentData] = useState();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchUsers = async() => {
        const response = await getUsers(1);

        console.log(response.data);

        if(response)
        {
            const totalPages = Math.ceil(response.data.length / pageSize);
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const currentData = response.data && response.data?.slice(startIndex, endIndex);

            setTotalPages(totalPages);
            setStartIndex(startIndex);
            setEndIndex(endIndex);
            setCurrentData(currentData);
        }
    }

    fetchUsers()
  },[])

  return (
    <div className='users-table'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {currentData && currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td><img src={item.avatar}></img></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
