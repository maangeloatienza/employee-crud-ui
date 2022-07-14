import React, {useState, useEffect} from 'react'
import {getEmployees,addEmployee, updateEmployee, deleteEmployee} from './../API/employee'
import UserTable from '../Components/UserTable';
import FormModal from '../Components/modals/formModal'
import UpdateModal from '../Components/modals/updateModal';
import DeleteModal from '../Components/modals/confirmDeleteModal';

export default function Home(){
    let [employees,setEmployees] = useState([]);
    let [employee,setEmployee] = useState({})
    let [show,setShow] = useState(false)
    let [showUpdate,setShowUpdate] = useState(false)
    let [showDelete,setShowDelete] = useState(false)

    function closeModal(){
        setShow(false)
    }

    function showUpdateModal(){
        setShowUpdate(true)
    }

    function closeUpdateModal(){
        setShowUpdate(false)
    }

    function showDeleteModal(){
        setShowDelete(true)
    }

    function closeDeleteModal(){
        setShowDelete(false)
    }

    async function fetchUsers(){
    
        await getEmployees().then(response=> {

            setEmployees(response.data);

        });
        
    }

    async function handleAddEmployee(e,body){
        e.preventDefault()
        await addEmployee(body).then(response=>{
            
            closeModal()
            fetchUsers()

        })
    }

    async function handleUpdateEmployee(e,body){
        e.preventDefault()
        await updateEmployee(body.id,body).then(response=>{
            
            closeUpdateModal()
            fetchUsers()

        })
    }

    async function handleDeleteEmployee(e,body){
        e.preventDefault()
        
        await deleteEmployee(body.id).then(response=>{
            
            closeDeleteModal()
            fetchUsers()

        })
    }

    function getEmployeeDetails(e,data){
        e.preventDefault()
        setEmployee(data)
    }

    useEffect(()=>{
        fetchUsers()
    },[])


    return (
        <div className="px-4 sm:px-6 lg:px-8 sm:m-2 lg:m-4">
            <div className='sm:flex sm:items-center'>
                <div className='sm:flex-auto'>
                    <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
                </div>
                <div className='mt-5 sm:mt-0 sm:ml-16 sm:flex-none'>
                <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"  data-modal-toggle="add-user-modal" onClick={()=>{setShow(true)}}>Add user</button>
                </div>
                
            </div>
            <UserTable 
                employees={employees}
                getEmployeeDetails={getEmployeeDetails}
                showUpdateModal={showUpdateModal}
                showDeleteModal={showDeleteModal}
            />
            <FormModal 
                show={show} 
                closeModal={closeModal} 
                employee={employee}
                handleAddEmployee={handleAddEmployee}
            />
            <UpdateModal
                show={showUpdate}
                closeModal={closeUpdateModal}
                key={employee.id}
                employee={employee}
                handleUpdateEmployee={handleUpdateEmployee}
            />
            <DeleteModal
                show={showDelete}
                closeModal={closeDeleteModal}
                key={`${employee.id}-delete`}
                employee={employee}
                handleDeleteEmployee={handleDeleteEmployee}
            />
 
        </div>
    )
}