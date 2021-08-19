import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Price = () => {
    return (<section id="price">
        <h1><AttachMoneyIcon fontSize="large" color="disabled" />המחירים אצלנו במספרה<AttachMoneyIcon fontSize="large" color="disabled" /></h1>
        תספורת: 50 שקלים <CheckCircleIcon color="primary" /><br />
        תספורת וזקן: 60 שקלים <CheckCircleIcon color="primary" /><br />
        צבע: 60 שקלים <CheckCircleIcon color="primary" /><br />
        תספורת וצבע: 100 שקלים <CheckCircleIcon color="primary" /><br />
    </section>)
}

export default Price;