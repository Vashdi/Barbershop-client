import React, { useEffect, useState } from 'react'
import SignupService from '../services/register'
import FormControl from '@material-ui/core/FormControl';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createTheme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import appService from '../services/appointment'
import { Link, useHistory } from 'react-router-dom';


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

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-left',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const Signup = (props) => {
    let history = useHistory();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const dispatch = useDispatch();
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const send = async (data) => {
        try {
            const user = await SignupService.register({
                firstname: data.firstName,
                lastname: data.lastName,
                phone: data.phone,
                password: data.password,
            });
            dispatch({ type: "LOGIN", payload: user });
            appService.setToken(user.token)
            Toast.fire({
                icon: 'success',
                title: '!ההרשמה בוצעה בהצלחה'
            })
            history.push('/');
        } catch (exception) {
            console.log(exception)
            Toast.fire({
                icon: 'error',
                title: exception
            })
        }
    }

    return (<section id="signup">
        <div className={classes.root}>
            <form onSubmit={handleSubmit((data => send(data)))}>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium', left: 25 }} htmlFor="outlined-adornment-password">מספר פלאפון</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large', left: 25 }}
                        id="outlined-adornment-password"
                        type='text'
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                        labelWidth={50}
                        {...register("phone", {
                            required: { value: true, message: "הכנס מספר פלאפון" },
                            maxLength: { value: 10, message: "מספר הפלאפון ארוך מדי" },
                            minLength: { value: 10, message: "מספר הפלאפון קצר מדי" },
                            pattern: { value: /^[0-9]*$/i, message: "מספר פלאפון יכול להכיל רק מספרים" }
                        })}
                    />
                </FormControl>
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium', left: 25 }} htmlFor="outlined-adornment-password">שם פרטי</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large', left: 25 }}
                        id="outlined-adornment-password"
                        type='text'
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                        labelWidth={50}
                        {...register("firstName", {
                            required: { value: true, message: "הכנס שם פרטי" },
                            maxLength: { value: 20, message: "שם ארוך מדי" },
                            minLength: { value: 2, message: "שם קצר מדי" },
                            pattern: { value: /^[a-z\u0590-\u05fe]+$/i, message: "שם פרטי לא יכול להכיל מספרים או תווים מיוחדים" }
                        })}
                    />
                </FormControl>
                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium', left: 25 }} htmlFor="outlined-adornment-password">שם משפחה</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large', left: 25 }}
                        id="outlined-adornment-password"
                        type='text'
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                        labelWidth={50}
                        {...register("lastName", {
                            required: { value: true, message: "הכנס שם משפחה" },
                            maxLength: { value: 20, message: "שם ארוך מדי" },
                            minLength: { value: 2, message: "שם קצר מדי" },
                            pattern: { value: /^[a-z\u0590-\u05fe]+$/i, message: "שם משפחה לא יכול להכיל מספרים או תווים מיוחדים" }
                        })}
                    />
                </FormControl>
                {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium', left: 25 }} htmlFor="outlined-adornment-password">סיסמא</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large', left: 25 }}
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
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
                        {...register("password", {
                            required: { value: true, message: "הכנס סיסמה" },
                            maxLength: { value: 25, message: "סיסמה ארוכה מדי" },
                            minLength: { value: 6, message: "סיסמה קצרה מדי" },
                        })}
                    />
                </FormControl>
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                <ThemeProvider theme={theme}>
                    <Button style={{ width: '300%', left: 85 }} type="submit" variant="contained" color="primary" className={classes.margin}>
                        <span style={{ fontSize: "large" }}>הרשם עכשיו</span>
                    </Button>
                </ThemeProvider>
            </form>
            <hr style={{ border: '1px solid grey', width: '98%' }} />
            <Link style={{ display: "flex", flexDirection: "column", alignItems: "center" }} to='/signin' >
                <ThemeProvider theme={theme}>
                    <Button style={{ width: '220%', fontSize: "small" }} variant="contained" color="primary" className={classes.margin}>
                        יש לך כבר משתמש?
                        עבור למסך ההתחברות
                    </Button>
                </ThemeProvider>
            </Link>
        </div>
    </section>)
}

export default Signup;

