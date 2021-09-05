import React from 'react'
import './Header.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import './Resume.css'
import Signin from './Signin';
import Signup from './Signup';
import { Route, Switch, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const Header = (props) => {
    const classes = useStyles();
    const [logged, setLogged] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [open, setOpen] = useState(false);
    const [username, setUserName] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const storeData = useSelector(state => state);
    const [openError, setOpenError] = React.useState(false);

    const handleClickError = () => {
        setOpenError(true);
    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        if (storeData.AuthReducer.user) {
            setUserName(storeData.AuthReducer.user.name);
        }
        setLogged(storeData.AuthReducer.user ? true : false);
        setAdmin(storeData.AuthReducer.user?.phone === "0523679033" ? true : false);
    }, [storeData.AuthReducer.user])

    const logout = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        handleClose();
    }

    let name = " ";
    if (props.data) {
        name = props.data.name;
    }

    return (
        <header id="home">
            <div id="wrapper">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <h2><li className="current"><a className="smoothscroll" href="#home">בית</a></li>
                            <li><a className="smoothscroll" href="#about">קצת על עצמי</a></li>
                            <li><a className="smoothscroll" href={logged ? "#appointment" : "#login"} onClick={logged ? null : handleClickError}>קבע פגישה</a></li>
                            <li><a className="smoothscroll" href="#Gallery">גלריה</a></li>
                            <li><a className="smoothscroll" href="#price">מחירים</a></li>
                            <li><a className="smoothscroll" href="#shop">חנות</a></li>
                            <li><a className="smoothscroll" href="#contact">צור קשר</a></li>
                            <Snackbar open={openError} autoHideDuration={2000} onClose={handleCloseError}>
                                <Alert onClose={handleCloseError} severity="error">
                                    <h6 style={{ marginTop: '-3.5px' }}>!אתה צריך להתחבר קודם</h6>
                                </Alert>
                            </Snackbar>
                            {logged ?
                                <li><a className="smoothscroll" href="#home" onClick={logout}>התנתק ,{username}</a></li>
                                :
                                <li><Link onClick={handleOpen} to="/signin">התחבר</Link>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box style={{ background: 'whitesmoke', borderRadius: '15px' }} sx={style}>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                <Switch>
                                                    <Route path="/signin" component={Signin} />
                                                    <Route path="/signup" component={Signup} />
                                                </Switch>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </li>
                            }
                        </h2>
                    </ul>
                </nav>
                <video class="fullscreen-bg" loop muted autoPlay>
                    <source src="images/sample.mp4" type="video/mp4" />
                </video>
                {/* <h2 className="titleForSmallMobile"><p className="font">BARBER&nbsp;SHOP&nbsp;SNIR</p></h2> */}
                <div className="title">
                    <a className="smoothscroll" href="#about">
                        <h1 className="font">
                            SNIR&nbsp;BARBER&nbsp;SHOP
                        </h1>
                    </a>
                </div>
                {
                    logged ? <div className="appointment"><a className="smoothscroll" href="#portfolio"><Button variant="outlined" className="appointment" startIcon={<CalendarTodayIcon fontSize="large" />}>
                        קבע תור
                    </Button >
                    </a ></div> :
                        <div className="appointment"><Link onClick={handleOpen} to="/signin"><Button className="appointment" variant="outlined" startIcon={<CalendarTodayIcon fontSize="large" />}>
                            קבע תור
                        </Button >
                        </Link></div>
                }
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </div>

        </header >
    )

}

export default Header;
