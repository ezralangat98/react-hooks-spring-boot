//rafc /rfc
import React, {useState, useEffect} from 'react'
import UserService from '../Services/UserService'
import { Link } from 'react-router-dom';

const ListUsersComponent = () => {
    
    //useState hook(function) allows having of state variables in functional components
    const [users, setUsers] = useState([])

 //LIST - Using useEffect hook to retrieve all users
    useEffect(() => {

       getAllUsers();

    }, [])

   //RETRIEVE 
   //Calling getAllUsers() to make Rest API Call and setting response data to users array.
    const getAllUsers = () =>{
        UserService.getAllUsers().then ( (response) => {
            setUsers(response.data)
            console.log(response.data);
           }).catch(error =>{
               console.log(error);
    
           })
    }

    const deleteUser = (userid) => {
        UserService.deleteUser(userid).then( (response) =>{
            getAllUsers();  

        }).catch(error =>{
            console.log(error);
        })
    }


    return (
        <div className='container'> 
                <h2 className='text-center'>User List</h2>  
                <Link to = 'add-user' className='btn btn-primary mb-2'>Add user</Link>
                <table className='table table-striped table-bordered'>
  
                <thead>
                        <th>User ID </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Actions</th>
                </thead>

                <tbody>

                    {
                        users.map (
                            user => 
                                <tr key = {user.id}>

                                    <td> {user.id} </td>
                                    <td> {user.firstName} </td>
                                    <td> {user.lastName} </td>
                                    <td> {user.emailId} </td>
                                    <td>
                                       <Link to = {`/edit-user/${user.id}`} className='btn btn-info'> Update</Link>
                                       <button className = "btn btn-danger" onClick = {() => deleteUser(user.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                    </td>
                      

                                </tr>
                            
                        )
                    }
                
                </tbody>
                </table>
                
            </div>
    )
}

export default ListUsersComponent


//React useState Hook allows us to track state(data or properites) in a function component

//The useEffect Hook allows you to perform side effects
//(e.g  fetching data, directly updating the DOM, and timers.) in your components.

//useHistory Hook gives you access to the history instance that you use to navigate.
//useParams Hook is used to retrieve ID from url - Provides objects that contains key value points from url 