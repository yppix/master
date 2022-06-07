import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {db} from "../firebase"
import {Button, TextField} from "@material-ui/core";
import {toast} from "react-toastify";
import {Link} from "@mui/material";
import CustomLink from "../components/CustomLink";

const Profile = () => {
    const initialState = {
            name: '',
            email: '',
            contact: ''
    }
    const [state, setState] = useState(initialState);
    const {name, email, contact} = state;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({});
    let btnMsg;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error('Fill all fields')
        } else {
            if (!id) {
                db.child('profile').push(state, (err) => {
                    if (err) {
                        toast.error(err)
                    } else {
                        toast.success('Profile added')
                    }
                })
            } else {
                db.child(`profile/${id}`).set(state, (err) => {
                    if (err) {
                        toast.error(err)
                    } else {
                        toast.success('Profile updated')
                    }
                })
            }
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    useEffect(()=>{
        db.child('profile').on('value', (snapshot) => {
            if(snapshot.val() !== null) {
                setData({...snapshot.val()})
            } else {
                setData({})
            }
        })
        return () => {
            setData({})
        }
    }, [])

    const onDelete = (id) => {
        if(window.confirm('Sure?')){
            db.child(`profile/${id}`).remove((err)=>{
                if(err) {
                    toast.error(err)
                } else {
                    toast.success('Profile deleted')
                }
            })
        }
    }

    if(id){
        btnMsg = 'Update profile id: ' + data[id].email
    } else {
        btnMsg = 'Add profile'
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                <TextField id="name" label="Login" variant="outlined" name="name"
                           onChange={handleInputChange} value={name || ''}
                           margin="normal"/>
                <TextField id="email" label="Email" variant="outlined" name="email"
                           onChange={handleInputChange} value={email || ''}
                           margin="normal"/>
                <TextField id="contact" label="Contact" variant="outlined" name="contact"
                           onChange={handleInputChange} value={contact || ''}
                           margin="normal"/>
                <Button type="submit" variant="outlined" color="primary" sx={{mt: 10}}>{btnMsg}</Button>
            </form>
            <div style={{marginTop:'20px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <h3>Added profiles</h3>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(data).map((id,index) => {
                            return (
                                <tr key={id}>
                                    <th scope={'row'}>{index+1}</th>
                                    <td> {data[id].email}</td>
                                    <td>{data[id].contact}</td>
                                    <td>{data[id].name}</td>
                                    <td>
                                        <CustomLink  to={`/update/${id}`} className="link-btn">Update</CustomLink>
                                        <CustomLink  to={`/pages/view/${id}`} className="link-btn">View</CustomLink>
                                        <button className="delete-btn" onClick={()=>onDelete(id)}>Delete</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Profile;