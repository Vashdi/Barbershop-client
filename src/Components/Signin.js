import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import loginService from '../services/login'
import appService from '../services/appointment'
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { deepOrange } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';


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

const Signin = (props) => {
    const [user, setUser] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [modal, setModal] = useState(false);
    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const { register, handleSubmit, formState: { errors } } = useForm();
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (storeData.user) {
            setUser(storeData);
            appService.setToken(user.token);
        }
    }, [])

    const handleLogin = async (data) => {
        // event.preventDefault()
        try {
            const user = await loginService.login({
                phone: data.phone,
                password: data.password
            });
            dispatch({ type: "LOGIN", payload: user });
            appService.setToken(user.token)
            setUser(user)
            // props.history.push('/Appointment');
        } catch (exception) {
            setTimeout(() => {
                setErrorMessage(null)
            }, 3500)
        }
    }

    return (<section id="signin">
        <div className={classes.root}>
            <form onSubmit={handleSubmit((data => handleLogin(data)))}>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium' }} htmlFor="outlined-adornment-password">Phone</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large' }}
                        id="outlined-adornment-password"
                        type='number'
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                        labelWidth={50}
                        {...register("phone", {
                            required: { value: true, message: "הכנס מספר פלאפון" },
                            pattern: { value: /^[0-9]*$/i, message: "מספר פלאפון יכול להכיל רק מספרים" }
                        })}
                    />
                </FormControl>
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium' }} htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large' }}
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
                        {...register("password", { required: { value: true, message: "הכנס סיסמה" } })}
                    />
                </FormControl>
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                <ThemeProvider theme={theme}>
                    <Button style={{ width: '300%', left: 70 }} type="submit" variant="contained" color="primary" className={classes.margin}>
                        <span style={{ fontSize: "large" }}>התחבר</span>
                    </Button>
                </ThemeProvider>
            </form>
            <hr style={{ border: '1px solid grey', width: '100%' }} />
            <Link to='/signup' > <ThemeProvider theme={theme}>
                <Button style={{ width: '100%', left: 70, top: 20 }} variant="contained" color="primary" className={classes.margin}>
                    <span style={{ fontSize: "large" }}>הרשם</span>
                </Button>
            </ThemeProvider></Link>
        </div>
    </section >)
}

export default Signin;
