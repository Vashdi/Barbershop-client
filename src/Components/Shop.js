import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Shop.css'

const useStyles = makeStyles({
    root: {
        marginLeft: '5%',
        maxWidth: 345,
        borderRadius: '50px',
        border: '2px solid white',
        background: 'transparent'
    },

});

const Shop = () => {
    const classes = useStyles();
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 2500, min: 1500 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1500, min: 960 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 960, min: 450 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 450, min: 0 },
            items: 1
        }
    };
    const images = [{
        url: "/images/shop1.png",
        name: "מארז",
        price: "60₪"
    },
    {
        url: "/images/shop2.png",
        name: "קרם גוף",
        price: "45₪"
    },
    {
        url: "/images/shop3.png",
        name: "שוטף גוף",
        price: "19.90₪"
    },
    {
        url: "/images/shop4.png",
        name: "שוטף זקן",
        price: "30₪"
    },
    {
        url: "/images/shop5.png",
        name: "מנקה",
        price: "200₪"
    },
    {
        url: "/images/shop6.png",
        name: "שמן",
        price: "100₪"
    }]

    return (
        <section id="shop">
            <Carousel className="shopContainer" responsive={responsive}>
                {
                    images.map((image, index) => {
                        return <Card key={index} className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={image.url}
                                    title="Contemplative Reptile"
                                />
                                <CardContent style={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <h1 style={{ color: 'white' }} className="titleSize">{image.name}</h1>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <h3 style={{ color: 'white' }}>{image.price}</h3>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card>
                    })
                }
            </Carousel>
            <div class="sign">
                <span class="fast-flicker">!</span>בחנות<span class="flicker">המוצרים</span>כל
            </div>
        </section>
    );
}
export default Shop;