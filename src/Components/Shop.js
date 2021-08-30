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
        maxWidth: 345,
        borderRadius: '50px'
    },
});

const Shop = () => {
    const classes = useStyles();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const images = [{
        url: "/images/all.png",
        name: "all",
        price: "60 Shekel"
    },
    {
        url: "/images/body-cream.png",
        name: "body Cream",
        price: "45 Shekel"
    },
    {
        url: "/images/bodyWash2.png",
        name: "body Wash",
        price: "19.90 Shekel"
    },
    {
        url: "/images/bread-Wash.png",
        name: "bread-Wash",
        price: "30 Shekel"
    },
    {
        url: "/images/Cleaner.png",
        name: "Cleaner",
        price: "200 Shekel"
    },
    {
        url: "/images/oil.png",
        name: "oil",
        price: "100 Shekel"
    }]

    return (
        <section id="shop">
            <Carousel centerMode={true} responsive={responsive}>
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
                                        <h1>{image.name}</h1>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <h3>{image.price}</h3>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card>
                    })
                }
            </Carousel>
            <body>
                <div class="sign">
                    <span class="fast-flicker">!</span>בחנות<span class="flicker">המוצרים</span>כל
                </div>
            </body>

        </section>
    );
}
export default Shop;