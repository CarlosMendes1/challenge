import React, { useEffect, useState } from 'react';
import { getUsers } from '../../apis/users';

const UsersTable = () => {
  const startingPage = 1;
  const baseUrl = "https://reqres.in/api/users"
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [currentData, setCurrentData] = useState();

  const handlePageChange = async(pageNumber) => {
    await fetchUsers(pageNumber);
  };

  const fetchUsers = async(page) => {
    const url = page ? baseUrl + '?page=' + page : baseUrl + '?page=1';

    const response = await fetch(url);
    const usersData = await response.json();

    if(usersData)
    {
        const totalPages = usersData.total_pages;
        const currentData = usersData.data && usersData.data?.slice(0, usersData.per_page);

        setTotalPages(totalPages);
        setCurrentData(currentData);
        setCurrentPage(page);
    }
}

  useEffect(() => {
    fetchUsers(startingPage)
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
