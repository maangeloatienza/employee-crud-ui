import React from 'react'
import TableBody from './UserTableBody'
import TableHeader from './UserTableHeaderList'

export default function UserTable({employees,getEmployeeDetails,showUpdateModal,showDeleteModal}){
    
    return (
        <>
            <div className='mt-8 flex flex-col'>
                <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full border-separate" style={
                                {
                                    borderSpacing: 0
                                }
                            }>
                                <TableHeader />
                                <TableBody 
                                    employees={employees}
                                    getEmployeeDetails={getEmployeeDetails}
                                    showUpdateModal={showUpdateModal}
                                    showDeleteModal={showDeleteModal}
                                />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}