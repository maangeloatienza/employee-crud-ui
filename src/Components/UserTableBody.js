import React from 'react'

export default function TableBody({employees,getEmployeeDetails,showUpdateModal,showDeleteModal}){
   
    return (
        <tbody className='bg-white'>
        
            {
                employees ?
                employees.map(emp=>{
                    return (
                        <tr key={emp.id}>
                            <td className="border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 ">
                                {emp.first_name+' '+emp.last_name}
                            </td>
                            <td className="border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                                {emp.title}
                            </td>
                            <td className="border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                                {emp.email}
                            </td>
                            <td className="border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                                {emp.role}
                            </td>
                            <td className="relative border-b border-gray-200 py-4 pr-4 pl-3 text-center text-sm font-medium">
                                <button className="text-indigo-600 hover:text-indigo-900 px-2" 
                                onClick={(e)=>{
                                    getEmployeeDetails(e,emp)
                                    showUpdateModal()
                                    }}>Edit</button>
                                <button className="text-red-600 hover:text-red-900 px-2"
                                onClick={(e)=>{
                                    getEmployeeDetails(e,emp)
                                    showDeleteModal()
                                    }}
                                    >Delete</button>
                            </td>
                        </tr>
                    )
                }) : 'No employee data'
            }
        </tbody>
    )
}