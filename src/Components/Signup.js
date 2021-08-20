import React, { useEffect, useState } from 'react'
import SignupService from '../services/Signup'
import FormControl from '@material-ui/core/FormControl';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createTheme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: deepOrange,
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            flexWrap: 'wrap',
        }
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));


const Signup = (props) => {
    const [phone, setPhone] = useState("");
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const classes = useStyles();

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
            alert("כבר קיים משתמש עם מספר זה!");
        }
        else {
            if (phone.length < 10) {
                alert("מספר פלאפון שגוי!");
            }
            else {
                if (firstName === " " || lastName === " ") {
                    alert("חייב למלא את השם!");
                }
                else {
                    alert(firstName + " " + lastName + " נרשם בהצלחה!");
                    const user = { firstname: firstName, lastname: lastName, password: password, phone: phone };
                    await SignupService.addUser(user);
                    const newUsers = users.concat(user);
                    setUsers(newUsers);
                }
            }
        }
    }

    return (<section id="signup">
        <div className={classes.root}>
            <form onSubmit={CheckIfExist}>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium' }} htmlFor="outlined-adornment-password">מספר פלאפון</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large' }}
                        id="outlined-adornment-password"
                        type='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                        labelWidth={50}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium' }} htmlFor="outlined-adornment-password">שם פרטי</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large' }}
                        id="outlined-adornment-password"
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                        labelWidth={50}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium' }} htmlFor="outlined-adornment-password">שם משפחה</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large' }}
                        id="outlined-adornment-password"
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                        labelWidth={50}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium' }} htmlFor="outlined-adornment-password">סיסמא</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large' }}
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={75}
                    />
                </FormControl>
                <ThemeProvider theme={theme}>
                    <Button style={{ width: '100%', left: '-5%' }} type="submit" variant="contained" color="primary" className={classes.margin}>
                        <span style={{ fontSize: "large" }}>הרשם עכשיו</span>
                    </Button>
                </ThemeProvider>
            </form>
        </div>
    </section>)
}

export default Signup;

