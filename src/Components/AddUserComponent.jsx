import React, {useState, useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import UserService from '../Services/UserService'

const AddUserComponent = () => {

    //Creating states / Properties for AddUserComponent using useState hook
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    //useHistory() gives you access to the history instance that you use to navigate
    const history = useHistory();
    //useParams() will be used to retrieve ID from url - Provides objects that contains key value points from url 
    const {id} = useParams();


    // SAVE or UPATE
    // Getting data from properties onclicking save btn
    const saveorUpdateUser = (e) =>{
        //Prevents refreshing of the page on submit
        e.preventDefault();

        const user = {firstName, lastName, emailId }

        //Condition for adding and updating user
        if(id){ //Update
            UserService.updateUser(id, user).then( (response) =>{
                history.push('/users');
            }).catch(error =>{
                console.log(error);
            }) 
        }else{ //Save
            //Parsing User to addUser() to send  User data to Rest API 
        UserService.addUser(user).then (response =>{

            console.log(response.data);

            history.push('/users');

        }).catch(error =>{
            console.log(error);
        })
       
    }   
}

    //Having user object to populate form for editing.
     //Making Rest API Call to get user details by id and setting them to state variables
     useEffect(() => {
        UserService.getUserById(id).then( (response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error =>{
            console.log(error);
        })
        
     }, [])


    //Adding Condition to change page title dynamically
    const title = () =>{

        if(id){
            return <h3 className="text-center">Update User</h3>
        } 
        else {
            return <h3 className="text-center">Add User</h3>

        }
        
    }

    return (
        <div>
                <br />
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {
                                title()
                            }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name: </label>
                                        <input placeholder='First Name' name="firstName" className="form-control"
                                            value={firstName} 
                                            // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                            onChange={(e) =>setFirstName(e.target.value)}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label>Last Name: </label>
                                        <input placeholder='Last Name' name="lastName" className="form-control"
                                            value={lastName} 
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>

                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                   value={emailId} 
                                                   onChange={(e) => setEmailId(e.target.value)}
                                            />
                                    </div>
                                    <br/>

                                    <button className='btn btn-success' onClick={(e) => saveorUpdateUser(e)}>Save</button>
                                    <Link to="/users" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
                                </form>       
                            </div>
                        </div>
                    </div>      
                </div> 
            </div>
    )
}


export default AddUserComponent
