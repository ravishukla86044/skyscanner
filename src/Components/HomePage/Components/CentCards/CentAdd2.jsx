import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import styledd from "./CentCard.module.css"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border:"1px solid gray"
  },
  media: {
    height: 300,
  },
    indvCard: {
    },
    indvCardOuter: {
        padding: "15px 0",
    },
    typoEdit: {
        fontWeight:"bold"
    },
});

export default function CardAdd2() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={styledd.centCardAddv}>
      <Card className={classes.root}>
        <CardActionArea className={classes.indvCardOuter}>
          <CardMedia
            className={classes.media}
            image="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/SeeItAll.2e3de3cc.svg"
            title="Card"
          />
          <CardContent className={classes.indvCard}>
            <Typography gutterBottom variant="h5" className={classes.typoEdit}>
              See it all
            </Typography>
            <Typography variant="body2"  component="p">
              From local hotels to global brands, discover millions of rooms all around the world.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea className={classes.indvCardOuter}>
          <CardMedia
            className={classes.media}
            image="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/CompareRightHere.ec416fd1.svg"
            title="Card2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" className={classes.typoEdit}>
              Compare right here
            </Typography>
            <Typography variant="body2"  component="p">
              No need to search anywhere else. The biggest names in travel are right here.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea className={classes.indvCardOuter}>
          <CardMedia
            className={classes.media}
            image="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/GetExclusiveRates.422b28cf.svg"
            title="Card3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" className={classes.typoEdit}>
              Rates
            </Typography>
            <Typography variant="body2"  component="p">
              We’ve special deals with the world's leading hotels – and we share these savings with you.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
