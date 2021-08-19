import React, { useEffect, useState } from 'react'
import SignupService from '../services/Signup'

const Signup = (props) => {
    const [phone, setPhone] = useState("");
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        async function getData() {
            const ourUsers = await SignupService.getUsers();
            setUsers(ourUsers);
        }
        getData();
    }, [])

    const CheckIfExist = async () => {
        const ourUser = users.find(user => user.phone === phone);
        if (ourUser) {
            alert("user with this PHONE is already exists!!!");
        }
        else {
            const user = { firstname: firstName, lastname: lastName, password: password, phone: phone };
            await SignupService.addUser(user);
            const newUsers = users.concat(user);
            setUsers(newUsers);
            alert(firstName + " " + lastName + " was successfully signed up!");
        }
    }

    return (<div>
        <div className="signup_box">
            <p className="space">
                <input placeholder="Enter Your Phone Number" className="phone_text_Signup" type="text" onChange={(e) => setPhone(e.target.value)} /><br />
                <input placeholder="Enter Your First Name" className="first_text_Signup" type="text" onChange={(e) => setFirstName(e.target.value)} /><br />
                <input placeholder="Enter Your Last Name" className="last_text_Signup" type="text" onChange={(e) => setLastName(e.target.value)} /><br />
                <input placeholder="Enter Your Password" className="pass_text_Signup" type="text" onChange={(e) => setPassword(e.target.value)} /><br />
                <a href="/#Signin"><input className="signup_button" type="button" value="sign up" onClick={CheckIfExist} /></a>
            </p>
        </div>
    </div>)
}

export default Signup;