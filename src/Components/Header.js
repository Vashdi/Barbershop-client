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

const Header = (props) => {
    const [logged, setLogged] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [open, setOpen] = useState(false);
    const [username, setUserName] = useState(" ");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const storeData = useSelector(state => state);

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
        if (storeData.user) {
            setUserName(storeData.user.name);
        }
        setLogged(storeData.user ? true : false);
        setAdmin(storeData.user?.phone === "0523679033" ? true : false);
    }, [storeData.user])

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
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <h2><li className="current"><a className="smoothscroll" href="#home">בית</a></li>
                        <li><a className="smoothscroll" href="#about">קצת על עצמי</a></li>
                        <li><a className="smoothscroll" href="#Gallery">גלריה</a></li>
                        <li><a className="smoothscroll" href="#price">מחירים</a></li>
                        <li><a className="smoothscroll" href="#about">קבע פגישה</a></li>
                        <li><a className="smoothscroll" href="#shop">חנות</a></li>
                        <li><a className="smoothscroll" href="#contact">צור קשר</a></li>
                        {logged ?
                            <li><a href="/" onClick={logout}>התנתק ,{username}</a></li>
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

            <div className="row banner">
                <div className="banner-text">
                    <a className="smoothscroll name" href="#about"><h1 className="responsive-headline">{name}<i style={{ transform: "rotate(270deg)" }} className="fa fa-cut"></i><br />
                        <i style={{ transform: "rotate(180deg)" }} className="fa fa-cut"></i><span> SNIR </span><i style={{ transform: "rotate(0deg)" }} className="fa fa-cut"></i><br /></h1></a>
                    <hr />
                </div>
            </div>
            <a className="smoothscroll" href="#portfolio"><Button className="appointment" variant="contained" startIcon={<CalendarTodayIcon fontSize="large" />}>
                <h3>קבע תור</h3>
            </Button>
            </a>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
        </header>
    )

}

export default Header;
