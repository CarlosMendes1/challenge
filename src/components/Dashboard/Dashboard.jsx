import React from 'react'
import './Dashboard.css'
import { useLocation, useParams } from 'react-router-dom';
import UsersTable from './components/UsersTable';

const Dashboard = () => {

    const location = useLocation();
    const name = location?.state?.name;

    return(
        
        <div className='dashboard'>
            <div className='dashboard-header'>
                Bem Vindo
            </div>
            <UsersTable />
        </div>
        
    )
}



export default Dashboard