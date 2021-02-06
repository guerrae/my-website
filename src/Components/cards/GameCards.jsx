import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {gameComponenet} from "./CardItems";
import Grid from "@material-ui/core/Grid";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    button: {
      //backgroundColor: 'black',
      color: 'black',
      '&:hover': {
          backgroundColor: '#FFD700',
          color: 'black'
      }
    }
});

export default function ImgMediaCard() {
  const classes = useStyles();
  
  useEffect(() => {
    AOS.init({
        delay: 100,
        duration: 2000,
        mirror: false,
    });
  }, []);

  return (
    <div>
        <Grid container justify="center" style={{paddingTop:'0em', margin:'0', width:'100%'}} spacing={4}>
            {gameComponenet.map((gCard, index) => (
                <Grid item data-aos="fade-up" key={index}>
                    <Card className={classes.root} style={{width:"300px", backgroundColor:"white"}} elevation={4}>
                    <CardActionArea href={gCard.url2}>
                        <CardMedia
                        component="img"
                        alt="Project Image"
                        height="140"
                        image={gCard.imgName}
                        title="Project Image"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {gCard.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {gCard.content}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {gCard.urlName !== "" ? <Button size="small" className={classes.button} target="_blank" href={gCard.url}>{gCard.urlName}</Button> : null}
                        <Button size="small" className={classes.button} component={Link} to={gCard.url2}>
                            Learn More
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  );
}