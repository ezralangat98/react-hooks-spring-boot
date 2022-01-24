import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user"; 

class UserService{
    getAllUsers(){
        return axios.get(USER_API_BASE_URL)
    }

    // Making Rest API Call and senting user data to Rest API and Rest API will internally save user data
    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }
    //Get user by id
    getUserById(userid){
        return axios.get(USER_API_BASE_URL + '/' + userid);
    }

    //Update 
    updateUser(userid, user){
        return axios.put(USER_API_BASE_URL + '/' + userid, user);
    }
    //Delete
    deleteUser(userid){
        return axios.delete(USER_API_BASE_URL + '/' + userid);

    }

}

export default new UserService();