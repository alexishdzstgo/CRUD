import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");


    useEffect(() =>{
        if( userSelected !== null){
            setFisrtName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }else{
            setFisrtName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setBirthday("")
        }
        
    },[ userSelected ])
    

    const submit = e =>{
        e.preventDefault()
        
        const user ={
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday
            
        }

        if(userSelected !== null){
            axios.put( `https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then( () => {
                getUsers()
                deselectUser()
            }) 
            
        }else{
            
            axios.post('https://users-crud1.herokuapp.com/users/',user)
            .then(() => getUsers())
            .catch(error => console.log(error.response))
            setFisrtName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setBirthday("")
        }
    }
    

    return (
        <div>
            
             <nav className="navbar bg-light">
                <div className="container-fluid">
                <a className="navbar-brand fs-1">Users</a>
                    <div className="d-flex" role="search">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        CREAR NUEVO USUARIO
                        </button>
                        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Nuevo Usuario</h5>
                                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">

                                        <form onSubmit={submit}>
                                            <div className="mb-3">
                                                <label htmlFor="first_tname" className="form-label">
                                                    First Name
                                                </label>
                                                
                                                <input
                                                 type="text"
                                                 className="form-control"
                                                 aria-describedby="emailHelp"
                                                 id="first_tname" 
                                                 onChange={ e => setFisrtName(e.target.value)}
                                                 value={firstName}
                                                 />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="last_name" className="form-label">
                                                    Last Name
                                                </label>
                                                <input
                                                 type="text"
                                                 className="form-control"
                                                 id="last_name" 
                                                 aria-describedby="emailHelp"
                                                 onChange={ e => setLastName(e.target.value)}
                                                 value={lastName}
                                                 />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                </label>
                                                <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                aria-describedby="emailHelp"
                                                onChange={ e => setEmail(e.target.value)}
                                                value={email}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">
                                                    Password
                                                </label>
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                id="password" 
                                                aria-describedby="emailHelp"
                                                onChange={ e => setPassword(e.target.value)}
                                                value={password}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="birthday" className="form-label">
                                                    Birthday
                                                </label>
                                                <input 
                                                type="date" 
                                                className="form-control" 
                                                id="birthday" 
                                                aria-describedby="emailHelp"
                                                onChange={ e => setBirthday(e.target.value)}
                                                />
                                            </div>
                                            <button type="" className="btn btn-primary">Submit</button>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="editUser"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar Usuario</h5>
                                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">

                                        <form onSubmit={submit}>
                                            <div className="mb-3">
                                                <label htmlFor="first_tname" className="form-label">
                                                    First Name
                                                </label>
                                                
                                                <input
                                                 type="text"
                                                 className="form-control"
                                                 aria-describedby="emailHelp"
                                                 id="first_tname" 
                                                 onChange={ e => setFisrtName(e.target.value)}
                                                 value={firstName}
                                                 />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="last_name" className="form-label">
                                                    Last Name
                                                </label>
                                                <input
                                                 type="text"
                                                 className="form-control"
                                                 id="last_name" 
                                                 aria-describedby="emailHelp"
                                                 onChange={ e => setLastName(e.target.value)}
                                                 value={lastName}
                                                 />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                </label>
                                                <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                aria-describedby="emailHelp"
                                                onChange={ e => setEmail(e.target.value)}
                                                value={email}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">
                                                    Password
                                                </label>
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                id="password" 
                                                aria-describedby="emailHelp"
                                                onChange={ e => setPassword(e.target.value)}
                                                value={password}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="birthday" className="form-label">
                                                    Birthday
                                                </label>
                                                <input 
                                                type="date" 
                                                className="form-control" 
                                                id="birthday" 
                                                aria-describedby="emailHelp"
                                                onChange={ e => setBirthday(e.target.value)}
                                                />
                                            </div>
                                            <button type="" className="btn btn-primary">Submit</button>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default UsersForm;