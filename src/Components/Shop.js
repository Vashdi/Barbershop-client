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
        url: "/images/shop/DeluxePomade.png",
        name: "Deluxe Pomade",
        price: "60₪"
    },
    {
        url: "/images/shop/MattClay.png",
        name: "Matt Clay",
        price: "60₪"
    },
    {
        url: "/images/shop/UltraMatteClay.png",
        name: "Ultra Matte Clay",
        price: "60₪"
    },
    {
        url: "/images/shop/MattPaste.png",
        name: "Matt Paste",
        price: "60₪"
    },
    {
        url: "/images/shop/HeavyHoldPomade.png",
        name: "Heavy Hold Pomade",
        price: "60₪"
    },
    {
        url: "/images/shop/FixingSpray.png",
        name: "Fixing Spray",
        price: "80₪"
    },
    {
        url: "/images/shop/GroomingTonic.png",
        name: "Grooming Tonic",
        price: "80₪"
    },
    {
        url: "/images/shop/SeaSaltSpray.png",
        name: "Sea Salt Spray",
        price: "80₪"
    },
    {
        url: "/images/shop/MatteCreme.png",
        name: "Matte Crème",
        price: "80₪"
    },
    {
        url: "/images/shop/UltraMatteTexturDust.png",
        name: "Ultra Matte Textur Dust",
        price: "80₪"
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
                                    <Typography className="titleSize" gutterBottom variant="h3" style={{ color: 'white' }}>
                                        {image.name}
                                    </Typography>
                                    <Typography variant="h4" color="textSecondary" style={{ color: 'white' }}>
                                        {image.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card>
                    })
                }
            </Carousel>
            <div className="sign">
                <span className="fast-flicker">!</span>בחנות<span className="flicker">המוצרים</span>כל
            </div>
        </section>
    );
}
export default Shop;