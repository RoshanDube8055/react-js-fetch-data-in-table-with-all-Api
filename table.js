import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from 'react-icons/fa';
import './Table.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

const Table = () => {
    const [data, setData] = useState([]);
    const[data2,setData2]=useState([]);
    const[data3,setData3]=useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [show, setShow] = useState(false);

    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleClose = () => {
        setShow(false);
        console.log(`userId:${userId}, Username:${username}, FirstName:${firstName}, LastName:${lastName}, Email:${email}, Mobile:${mobile}`);
    };
    
    const handleShow = () => {
        setShow(true);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://192.168.1.5:5000/getAllUsers');
            if (!response.ok) {
                throw new Error('Data does not respond..!!');
            }
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.log('Getting error', error);
            setLoading(false);
        }
    };


    const result2={
        "username": username,
        "email": email,
        "LastName":lastName,
        "FirstName": firstName,
        "mobile": mobile
    }

    const fetchData2 = async () => {
        try {
            const response = await fetch('http://192.168.1.5:5000/AddNewUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result2)
            });
    
            if (!response.ok) {
                throw new Error('Data was not fetched successfully');
            }
    
            const result = await response.json();
            console.log(result);
            // setData2(result2);
        } catch (error) {
            console.error('Error:', error);
        }
      
    };



    // const fetchData3 = async ()=>{
    //     try{
    //         const response=await fetch('http://192.168.1.5:5000/AddNewUser',
    //             {
    //                method:'DELETE',
    //                headers:{

    //                },
                   
    //             }
    //         );
            
    //         if(!response.ok){
    //             throw new Error('data dose not recive');
    //         }
    //         const result3= await response.json();
    //         setData3(result3);
    //         console.log(result3);
    //     }catch(error){
    //       console.log('server issue',error);
    //     }
    
    // };
    

    const deleteRow = (index) => {
        // const updatedData = data.filter((_, i) => i !== index);
        const updatedData = [
            ...data.slice(0, index), 
            ...data.slice(index + 1) 
        ];

        // const updatedData=[
        //      data.splice(0,data.length),
        //      ...data.slice(index + 1) 
        // ];
        
        setData(updatedData);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value) {
            const filteredSuggestions = data.filter(user =>
                user.username.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleAddUser = () => {
        const newUser = {
            userId,
            username,
            firstName,
            lastName,
            email,
            phone: mobile,
        };
        if(newUser ==''){
            setData2(false);
        }
        // setData([...data, newUser]);
        //insted this function we used for add new data PUSH function:
        data.push(newUser);
        setData(data);
        handleClose(true);
    };

    return (
        <>
            <div>
                <h2>Create table for using button Delete, update, post</h2>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by username..."
                    className="search-input"
                />
                <button onClick={fetchData}>Search</button>
                <button className="btn btn-outline-primary" onClick={handleShow}>AddUser</button>
                <br />&nbsp;
                <div>
                    <table className="compact-table">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ?
                                (<tr><td colSpan="7">Loading...</td></tr>) :
                                data.length === 0 ?
                                    (<tr><td colSpan="7">No data</td></tr>) :
                                    data.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.userId}</td>
                                            <td>{user.FirstName}</td>
                                            <td>{user.LastName}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <button style={{ background: 'red', marginRight: '5px' }}>
                                                    <FaEdit /> Update
                                                </button>
                                                <button onClick={() => deleteRow(index)} style={{ background: 'red' }}>
                                                    <FaTrash /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={e => e.preventDefault()}>
                        <div style={{ width: '100%' }}>
                            <label>ID</label><br />
                            <input type='text' style={{ width: '100%' }} placeholder="Enter the ID" onChange={e => setUserId(e.target.value)}required /><br /><br />
                            <label>FirstName</label><br />
                            <input type='text' style={{ width: '100%' }} placeholder="Enter the FirstName" onChange={e => setFirstName(e.target.value)} required/><br /><br />
                            <label>LastName</label><br />
                            <input type='text' style={{ width: '100%' }} placeholder="Enter the LastName" onChange={e => setLastName(e.target.value)}required /><br /><br />
                            <label>Username</label><br />
                            <input type='text' style={{ width: '100%' }} placeholder="Enter the Username" onChange={e => setUsername(e.target.value)} required/><br /><br />
                            <label>Email</label><br />
                            <input type="email" style={{ width: '100%' }} placeholder="Enter the Email" onChange={e => setEmail(e.target.value)} required/><br /><br />
                            <label>Mobile</label><br />
                            <input type='tel' style={{ width: '100%' }} placeholder="Enter the Mobile" onChange={e => setMobile(e.target.value)} required/><br /><br />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={fetchData2}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Table;














