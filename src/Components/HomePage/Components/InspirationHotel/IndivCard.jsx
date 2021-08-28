import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
        height: 280,
    },
    headRoot: {
        fontFamily: ["Skyscanner Relative", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"].join(','),
        fontSize: "24px",
        margin:"-5px 5px",
        color: "white",
    },
    contentCard:{
        backgroundColor: "rgb(17,18,54)"
    },
    SubHeadRoot: {
        color: "rgb(255,123,89)",
        fontFamily: ["Skyscanner Relative", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"].join(','),
        fontSize: "18px",
        margin:"5px"
    }, nxtArr: {
        margin:"-5px 0"
    }
});

export default function IndivCard({el}) {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          width="328"
          image={el.imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.contentCard}>
          <Typography className={classes.headRoot}>
            {el.city}
          </Typography>
          <Typography className={classes.SubHeadRoot}>
            {el.count} <span ><NavigateNextIcon className={classes.nxtArr}/></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
