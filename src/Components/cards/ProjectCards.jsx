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
import {projectComponenet} from "./CardItems";
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
    fontWeight: 'bold',
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
        <Grid container justify="center" style={{paddingTop:'0em', margin:'0', width:'100%'}} spacing={2}>
            {projectComponenet.map((pCard, index) => (
                <Grid item data-aos="fade-up" key={index}>
                    <Card className={classes.root} style={{width:"300px", backgroundColor:"white"}} elevation={5}>
                    <CardActionArea href={pCard.url3}>
                        <CardMedia
                        component="img"
                        alt="Project Image"
                        height="140"
                        image={pCard.imgName}
                        title="Project Image"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {pCard.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {pCard.content}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {pCard.urlName1 ? <Button size="small" className={classes.button} target="_blank" href={pCard.url1}>{pCard.urlName1}</Button> : null}
                        {pCard.urlName2 ? <Button size="small" className={classes.button} target="_blank" href={pCard.url2}>{pCard.urlName2}</Button> : null}
                        <Button size="small" className={classes.button} component={Link} to={pCard.url3}>Learn More</Button>
                    </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  );
}