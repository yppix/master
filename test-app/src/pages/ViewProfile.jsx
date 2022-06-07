import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {db as firebaseDB} from "../firebase"


const ViewProfile = () => {
    const [user, setUser] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        firebaseDB.child(`profile/${id}`)
            .get()
            .then((data)=>{
                if(data.exists()){
                    setUser({...data.val()})
                } else {
                    setUser({})
                }
            })
    }, [id])

    return (
        <div>
            <div style={{marginTop:'20px', display: 'flex', flexDirection: 'row', textAlign: 'center'}}>
                <div style={{marginRight:'30px', display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <strong>ID</strong>
                    <span>{id}</span>
                </div>
                <div  style={{marginRight:'30px', display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <strong>Name</strong>
                    <span>{user.name}</span>
                </div>
                <div  style={{marginRight:'30px', display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <strong>Email</strong>
                    <span>{user.email}</span>
                </div>
                <div  style={{marginRight:'30px', display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <strong>Contact</strong>
                <span>{user.contact}</span>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;