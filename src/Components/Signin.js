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
import { Link, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { deepOrange } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'


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

const Signin = (props) => {
    let history = useHistory();
    const [user, setUser] = useState("");
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
        try {
            const user = await loginService.login({
                phone: data.phone,
                password: data.password
            });
            dispatch({ type: "LOGIN", payload: user });
            appService.setToken(user.token)
            setUser(user)
            Toast.fire({
                icon: 'success',
                title: '!ההתחברות בוצעה בהצלחה'
            })
            history.push("/");
        } catch (exception) {
            Toast.fire({
                icon: 'error',
                title: '!ההתחברות נכשלה'
            })
        }
    }

    return (<section id="signin">
        <div className={classes.root}>
            <form onSubmit={handleSubmit((data => handleLogin(data)))}>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel style={{ fontSize: 'medium', left: 25 }} htmlFor="outlined-adornment-password">פלאפון</InputLabel>
                    <OutlinedInput style={{ width: '200%', fontSize: 'large', left: 25 }}
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
                        {...register("password", { required: { value: true, message: "הכנס סיסמה" } })}
                    />
                </FormControl>
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                <ThemeProvider theme={theme}>
                    <Button style={{ width: '300%', left: 85 }} type="submit" variant="contained" color="primary" className={classes.margin}>
                        <span style={{ fontSize: "large" }}>התחבר</span>
                    </Button>
                </ThemeProvider>
            </form>
            <hr style={{ border: '1px solid grey', width: '98%' }} />
            <Link style={{ display: "flex", flexDirection: "column", alignItems: "center" }} to='/signup' >
                <ThemeProvider theme={theme}>
                    <Button style={{ width: '220%', fontSize: "small" }} variant="contained" color="primary" className={classes.margin}>
                        אין לך עדיין משתמש?
                        הרשם עכשיו
                    </Button>
                </ThemeProvider>
            </Link>
        </div>
    </section >)
}

export default Signin;
