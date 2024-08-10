// import React, { useEffect, useState } from "react";
// import { FaTrash, FaEdit } from 'react-icons/fa';
// import './Table.css';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BASE_URL } from "./componats/const";
// import { Card, ModalTitle } from "react-bootstrap";
// import { Modal,ModalBody, ModalFooter, ModalHeader } from "reactstrap";

// const Table = () => {
//     const [data, setData] = useState([]);
//     const [data2, setData2] = useState([]);
//     const [data3, setData3] = useState([]);
//     const [data4, setData4] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [suggestions, setSuggestions] = useState([]);
//     const [show, setShow] = useState(false);
//     const [user, serUser] = useState("");
//     const [showmodal, setShowmodal] = useState(false);

//     const [userId, setUserId] = useState('');
//     const [username, setUsername] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');



//     const [id, setId] = useState('');
//     const [fname, setFname] = useState('');
//     const [lname, setLname] = useState('');
//     const [uname, setUname] = useState('');
//     const [emailid, seteEmailid] = useState('');
//     const [mobailphone, setMobaliphone] = useState('');


//     const changeuserid = (e) => {
//         setId(e.target.value);
//     }

//     const changename = (e) => {
//         setFname(e.target.value)
//     }

//     const changelastname = (e) => {
//         setLname(e.target.value);
//     }

//     const changeusername = (e) => {
//         setUname(e.target.value)
//     }

//     const changeemail = (e) => {
//         seteEmailid(e.target.value)
//     }

//     const changemobali = (e) => {
//         setMobaliphone(e.target.value)
//     }
//     const handleClose = () => {
//         setShow(false);
//         console.log(`userId:${userId}, Username:${username}, FirstName:${firstName}, LastName:${lastName}, Email:${email}, Mobile:${mobile}`);
//     };

//     const handleShow = () => {
//         setShow(true);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch(`${BASE_URL}/getAllUsers`);
//             if (!response.ok) {
//                 throw new Error('Data does not respond..!!');
//             }
//             const result = await response.json();
//             setData(result);
//             setLoading(false);
//         } catch (error) {
//             console.log('Getting error', error);
//             setLoading(false);
//         }
//     };


//     const result2 = {
//         "username": username,
//         "email": email,
//         "LastName": lastName,
//         "FirstName": firstName,
//         "mobile": mobile
//     }

//     const result3 = {
//         "username": username,
//         "email": email,
//         "LastName": lastName,
//         "FirstName": firstName,
//         "mobile": mobile
//     }

//     const result4 = {
//         "username": username,
//         "email": email,
//         "LastName": lastName,
//         "FirstName": firstName,
//         "mobile": mobile
//     }

//     const result5 = {
//         "username": username,
//         "email": email,
//         "LastName": lastName,
//         "FirstName": firstName,
//         "mobile": mobile
//     }




//     const fetchData2 = async () => {
//         setShow(false);
//         try {
//             const response = await fetch(`${BASE_URL}/AddNewUser`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(result2)
//             });

//             if (!response.ok) {
//                 throw new Error('Data was not fetched successfully');
//             }

//             const result = await response.json();
//             console.log(result);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };




//     const fetchData3 = async (userId) => {
//         try {
//             const response = await fetch(`${BASE_URL}/${userId}`,
//                 {
//                     method: 'DELETE',
//                     headers: {

//                     },

//                 }
//             );

//             if (!response.ok) {
//                 throw new Error('data dose not recive');
//             }
//             console.log('user deleted succesfully');
//             // fetchData();
//         } catch (error) {
//             console.log('server issue', error);
//         }

//     };

//     const fetchData4 = async () => {
//         try {
//             const response = await fetch(`${BASE_URL}/${userId}`,
//                 {
//                     method: 'PUT',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(result5)
//                 }


//             );
//             if (!response.ok) {
//                 throw new Error('data dose not recive');
//             }
//             console.log('user updated succesfully');
//         }
//         catch (error) {
//             console.log('server issue', error);
//         }
//     };

//     const modal_update = () => {
//         setUserId(user.userId);
//         setUsername(user.username);
//         setFirstName(user.FirstName);
//         setLastName(user.LastName);
//         setEmail(user.email);
//         setMobile(user.mobile);
//     }




//     const deleteRow = (index) => {
//         // const updatedData = data.filter((_, i) => i !== index);
//         const updatedData = [
//             ...data.slice(0, index),
//             ...data.slice(index + 1)
//         ];

//         // const updatedData=[
//         //      data.splice(0,data.length),
//         //      ...data.slice(index + 1) 
//         // ];

//         setData(updatedData);
//     };

//     const handleSearchChange = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//         if (value) {
//             const filteredSuggestions = data.filter(user =>
//                 user.username.toLowerCase().includes(value.toLowerCase())
//             );
//             setSuggestions(filteredSuggestions);
//         } else {
//             setSuggestions([]);
//         }
//     };

//     const handleAddUser = () => {
//         const newUser = {
//             userId,
//             username,
//             firstName,
//             lastName,
//             email,
//             mobail: mobile,
//         };

//         // setData([...data, newUser]);
//         //insted this function we used for add new data PUSH function:
//         data.push(newUser);
//         setData(data);
//         handleClose(true);
//     };

//     const handlechose2 = () => {
//         setShowmodal(false);


//     }
//     const handleShow2 = (user) => {
//         const updateuser ={
//         userId,
//         fname,
//         lname,
//         uname,
//         emailid,
//         mobailphone
//         }
//         setShowmodal(true)
//     }


//     return (
//         <>
//             <Card>
//                 <div>
//                     <h2>Create table for using button Delete, update, post and get</h2>
//                     <input
//                         type="search"
//                         value={searchTerm}
//                         onChange={handleSearchChange}
//                         placeholder="Search by username..."
//                         className="search-input"
//                     />
//                     <button onClick={fetchData}>Search</button>
//                     <button className="btn btn-outline-primary" onClick={handleShow}>AddUser</button>
//                     <br />&nbsp;
//                     <div>
//                         <table className="compact-table">
//                             <thead>
//                                 <tr>
//                                     <th>userId</th>
//                                     <th>FirstName</th>
//                                     <th>LastName</th>
//                                     <th>Username</th>
//                                     <th>Email</th>
//                                     <th>Mobile</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {loading ?
//                                     (<tr><td colSpan="7">Loading...</td></tr>) :
//                                     data.length === 0 ?
//                                         (<tr><td colSpan="7">No data</td></tr>) :
//                                         data.map((user, index) => (
//                                             <tr key={index}>
//                                                 <td>{user.userId}</td>
//                                                 <td>{user.FirstName}</td>
//                                                 <td>{user.LastName}</td>
//                                                 <td>{user.username}</td>
//                                                 <td>{user.email}</td>
//                                                 <td>{user.mobail}</td>
//                                                 <td>
//                                                     <button className="btn" style={{ background: 'red', marginRight: '5px' }} onClick={handleShow2}>
//                                                         <FaEdit/> Update
//                                                     </button>

//                                                     <button onClick={
//                                                         () => fetchData3(user.userId)
//                                                     } style={{ background: 'red' }} >
//                                                         <FaTrash /> Delete
//                                                     </button>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <Modal isOpen={show} toggle={()=>setShow(!show)}>
//                     <ModalHeader closeButton>
//                         <ModalTitle>Add User</ModalTitle>
//                     </ModalHeader>
//                     <ModalBody>
//                         <form onSubmit={e => e.preventDefault()}>
//                             <div style={{ width: '100%' }}>
//                                 <label>ID</label><br />
//                                 <input type='text' style={{ width: '100%' }} placeholder="Enter the ID" onChange={e => setUserId(e.target.value)} required /><br /><br />
//                                 <label>FirstName</label><br />
//                                 <input type='text' style={{ width: '100%' }} placeholder="Enter the FirstName" onChange={e => setFirstName(e.target.value)} required /><br /><br />
//                                 <label>LastName</label><br />
//                                 <input type='text' style={{ width: '100%' }} placeholder="Enter the LastName" onChange={e => setLastName(e.target.value)} required /><br /><br />
//                                 <label>Username</label><br />
//                                 <input type='text' style={{ width: '100%' }} placeholder="Enter the Username" onChange={e => setUsername(e.target.value)} required /><br /><br />
//                                 <label>Email</label><br />
//                                 <input type="email" style={{ width: '100%' }} placeholder="Enter the Email" onChange={e => setEmail(e.target.value)} required /><br /><br />
//                                 <label>Mobile</label><br />
//                                 <input type='tel' style={{ width: '100%' }} placeholder="Enter the Mobile" onChange={e => setMobile(e.target.value)} required /><br /><br />
//                             </div>
//                         </form>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button variant="secondary" onClick={handleClose}>
//                             Close
//                         </Button>
//                         <Button variant="primary" onClick={fetchData2}>
//                             Add
//                         </Button>
//                     </ModalFooter>
//                 </Modal>
//             </Card>


//             <Modal isOpen={showmodal} toggle={()=>setShowmodal(!showmodal)}>
//                 <ModalHeader>
//                     <ModalTitle>Update Api</ModalTitle>
//                 </ModalHeader>
//                 <ModalBody>
//                     <input type="text" placeholder="Enter the id" onChange={changeuserid} value={id}  style={{width:'100%'}}/><br /><br />
//                     <input type="text" placeholder="Enter the FristName" onChange={changename} value={fname}   style={{width:'100%'}}/><br /><br />
//                     <input type="text" placeholder="Enter the LastName" onChange={changelastname} value={lname}  style={{width:'100%'}} /><br /><br />
//                     <input type="text" placeholder="Enter the Username" onChange={changeusername} value={uname}  style={{width:'100%'}} /><br /><br />
//                     <input type="text" placeholder="Enter the Email" onChange={changeemail} value={emailid}   style={{width:'100%'}}/><br /><br />
//                     <input type="text" placeholder="Enter the Mobile" onChange={changemobali} value={mobailphone}   style={{width:'100%'}}/><br /><br />
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button variant="danger" onClick={handlechose2}>close</Button>
                    
//                 </ModalFooter>
//             </Modal>
//         </>
//     );
// };

// export default Table;



import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from 'react-icons/fa';
import './Table.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from "./componats/const";
import { Card, ModalTitle } from "react-bootstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Table = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [show, setShow] = useState(false);
    const [showmodal, setShowmodal] = useState(false);

    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/getAllUsers`);
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

    useEffect(() => {
        fetchData();
    }, []);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleUpdateShow = (user) => {
        setUserId(user.userId);
        setUsername(user.username);
        setFirstName(user.FirstName);
        setLastName(user.LastName);
        setEmail(user.email);
        setMobile(user.mobile);
        setShowmodal(true);
    };

    const handleUpdateClose = () => {
        setShowmodal(false);
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

    const handleAddUser = async () => {
        const newUser = {
            userId,
            username,
            FirstName: firstName,
            LastName: lastName,
            email,
            mobile,
        };
        data.push(newUser);
         setData(data);
        try {
            const response = await fetch(`${BASE_URL}/AddNewUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result2)
            });

            if (!response.ok) {
                throw new Error('Failed to add new user');
            }

            const result = await response.json();
            console.log('New user added:', result);

            // Add the newly added user to the local data state
            setData(prevData => [...prevData, result]);

            // Clear the form fields after adding the user
            setUserId('');
            setUsername('');
            setFirstName('');
            setLastName('');
            setEmail('');
            setMobile('');

            handleClose();
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleUpdateUser = async () => {
        const updatedUser = {
            userId,
            username,
            FirstName: firstName,
            LastName: lastName,
            email,
            mobile,
        };

        data.push(updatedUser);
        setData(data);

        try {
            const response = await fetch(`${BASE_URL}/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });

            if (!response.ok) {
                throw new Error('Data was not fetched successfully');
            }

            const result = await response.json();
            console.log(result);
            const updatedData = data.map(user => user.userId === userId ? result : user);
            setData(updatedData);
            handleUpdateClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/${userId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Data was not deleted successfully');
            }

            console.log('User deleted successfully');
            const updatedData = data.filter(user => user.userId !== userId);
            setData(updatedData);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const result2 = {
                "username": username,
                 "email": email,
                 "LastName": lastName,
                 "FirstName": firstName,
                 "mobile": mobile
            }

    return (
        <>
            <Card>
                <div>
                    <h2>Create table for using button Delete, update, post and get</h2>
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search by username..."
                        className="search-input"
                    />
                    <button onClick={fetchData}>Search</button>
                    <button className="btn btn-outline-primary" onClick={handleShow}>Add User</button>
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
                                                <td>{user.mobile}</td>
                                                <td>
                                                    <button className="btn" style={{ background: 'red', marginRight: '5px' }} onClick={() => handleUpdateShow(user)}>
                                                        <FaEdit /> Update
                                                    </button>
                                                    <button onClick={() => handleDeleteUser(user.userId)} style={{ background: 'red' }}>
                                                        <FaTrash /> Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal isOpen={show} toggle={() => setShow(!show)}>
                    <ModalHeader closeButton>
                        <ModalTitle>Add User</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={e => e.preventDefault()}>
                            <div style={{ width: '100%' }}>
                                <label>ID</label><br />
                                <input type='text' style={{ width: '100%' }} placeholder="Enter the ID" value={userId} onChange={e => setUserId(e.target.value)} required /><br /><br />
                                <label>FirstName</label><br />
                                <input type='text' style={{ width: '100%' }} placeholder="Enter the FirstName" value={firstName} onChange={e => setFirstName(e.target.value)} required /><br /><br />
                                <label>LastName</label><br />
                                <input type='text' style={{ width: '100%' }} placeholder="Enter the LastName" value={lastName} onChange={e => setLastName(e.target.value)} required /><br /><br />
                                <label>Username</label><br />
                                <input type='text' style={{ width: '100%' }} placeholder="Enter the Username" value={username} onChange={e => setUsername(e.target.value)} required /><br /><br />
                                <label>Email</label><br />
                                <input type="email" style={{ width: '100%' }} placeholder="Enter the Email" value={email} onChange={e => setEmail(e.target.value)} required /><br /><br />
                                <label>Mobile</label><br />
                                <input type='tel' style={{ width: '100%' }} placeholder="Enter the Mobile" value={mobile} onChange={e => setMobile(e.target.value)} required /><br /><br />
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAddUser}>
                            Add
                        </Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={showmodal} toggle={() => setShowmodal(!showmodal)}>
                    <ModalHeader closeButton>
                        <ModalTitle>Update User</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={e => e.preventDefault()}>
                            <div style={{ width: '100%' }}>
                                <label>ID</label><br />
                                <input type='text' style={{ width: '100%' }} placeholder="Enter the ID" value={userId} onChange={e => setUserId(e.target.value)} required /><br /><br />
                                <label>FirstName</label><br />
                                <input type='text' style={{ width: '100%' }} placeholder="Enter the FirstName" value={firstName} onChange={e => setFirstName(e.target.value)} required /><br /><br />
                                <label>LastName</label><br />
                                <input type='text' style={{ width: '100%' }} placeholder="Enter the LastName" value={lastName} onChange={e => setLastName(e.target.value)} required /><br /><br />
                                <label>Username</label><br />
                                <input type='text' style={{ width: '100%' }} placeholder="Enter the Username" value={username} onChange={e => setUsername(e.target.value)} required /><br /><br />
                                <label>Email</label><br />
                                <input type="email" style={{ width: '100%' }} placeholder="Enter the Email" value={email} onChange={e => setEmail(e.target.value)} required /><br /><br />
                                <label>Mobile</label><br />
                                <input type='tel' style={{ width: '100%' }} placeholder="Enter the Mobile" value={mobile} onChange={e => setMobile(e.target.value)} required /><br /><br />
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onClick={handleUpdateClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdateUser}>
                            Update
                        </Button>
                    </ModalFooter>
                </Modal>
            </Card>
        </>
    );
};

export default Table;













