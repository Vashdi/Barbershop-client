import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Price = () => {
    return (<section id="price">
        <h2><AttachMoneyIcon fontSize="large" color="disabled" />המחירים אצלנו במספרה<AttachMoneyIcon fontSize="large" color="disabled" /></h2>
        <CheckCircleIcon color="primary" />תספורת: 50 שקלים <br />
        <CheckCircleIcon color="primary" />תספורת וזקן: 60 שקלים <br />
        <CheckCircleIcon color="primary" />צבע: 60 שקלים <br />
        <CheckCircleIcon color="primary" />תספורת וצבע: 100 שקלים<br />
    </section>)
}

export default Price;