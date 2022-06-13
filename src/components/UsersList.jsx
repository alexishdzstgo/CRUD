import axios from 'axios';
import React from 'react';

const UsersList = ({users,selectUser,getUsers, deselectUser}) => {


      const removeProduct = id =>{

            axios.delete( `https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers())
            deselectUser()
    }
    return ( 
    
        <div>
            <div className="container">
                <div className="row ">       
                                {
                                    users.map(user => (
                                        <ul key={user.id} className='list-group col-xs-5  col-md-3 mt-2'>
                                            <li  className="list-group-item dos ">
                                                <p>{user.first_name} {user.last_name}</p>
                                                <p>Correo</p>
                                                <p> <b>{user.email}</b></p>
                                                <p>Cumpleaños</p>
                                                <p><i className="fa-solid fa-cake-candles"></i> <b> {user.birthday}</b></p>
                                                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                                                    <button onClick={()=> selectUser(user)} className="btn btn-primary me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#editUser"><i className="fa-solid fa-file-pen"></i></button>

                                                    <button onClick={() => removeProduct(user.id)} className="btn btn btn-danger" type="button"><i className="fa-solid fa-trash-can"></i></button>
                                                </div>
                                            </li>
                                        </ul>
                                    ))
                                }

                </div>
            
            </div>
            
      

        </div>

    
            
            
            
            
        
    );
};

export default UsersList;