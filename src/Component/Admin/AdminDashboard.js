import React from 'react'
import AdminNav from '../nav/AdminNav';

const AdminDashboard= () =>{
    
    return (
        <div className="container-fluid">
            <div className="row">
               <div className="col-md-2">
                  <AdminNav/>
               </div>
                  <div className="col-md">
                     <h1>This is AdminDashboard</h1>
                 </div>
            </div>
        </div>
    )
}

export default AdminDashboard;