import React from 'react';
import Container from "@material-ui/core/Container";
import styles from "./HotelGrid.module.css";
import Typography from '@material-ui/core/Typography';
import IndivCard from './IndivCard';


let data = [{
    city: "Dubai",
    count: "United Arab Emirates",
    imgUrl:"https://content.skyscnr.com/e87b304f10a700cae0d08ea920c8be32/GettyImages-470434611.jpg"
    },
    {
    city: "Mumbai",
    count: "India",
    imgUrl:"https://content.skyscnr.com/f165f33bbb0195fe8a2bc61800b2147e/GettyImages-486646673.jpg"
    },
    {
    city: "Singapore",
    count: "Singapore",
    imgUrl:"https://content.skyscnr.com/5359c305bbed8c4e18b252b159a67cfa/GettyImages-187011688.jpg"
    },
    {
    city: "Bangkok",
    count: "Thailand",
    imgUrl:"https://content.skyscnr.com/e0a42512a8f7baba699430c43d90e339/GettyImages-465582049.jpg"
    },
    {
    city: "New Delhi",
    count: "India",
    imgUrl:"https://content.skyscnr.com/e74a469df80618aad23161a93fe88fb4/GettyImages-471878489.jpg"
    },
    {
    city: "London",
    count: "United Kingdom",
    imgUrl:"https://content.skyscnr.com/1017dd4cef7a773021e1b335b3410d30/GettyImages-487828389.jpg"
    },{
    city: "Paris",
    count: "France",
    imgUrl:"https://content.skyscnr.com/c88da2b091534f7baf8536b3959ce83a/GettyImages-495057957.jpg"
    },
    {
    city: "New York",
    count: "United States",
    imgUrl:"https://content.skyscnr.com/12b715db2fe88a58ee57ae99b985b32a/GettyImages-153734070.jpg"
    },
    {
    city: "Amsterdam",
    count: "Netherlands",
    imgUrl:"https://content.skyscnr.com/ad69d6422f78bb52563685faad33e0c1/GettyImages-516036155.jpg"
    },
    
]
const HotelGrid = () => {
    return (
        <div className={styles.gridHotMainCont}>
            <Container maxWidth="lg" >
                <Typography  className={styles.gridBLine1}>Need Inspiration?
                </Typography>
                <Typography  color="textSecondary" className={styles.gridBLine2}>View our hand-picked hotel destinations
                </Typography>
            </Container>
            <div className={styles.hotelCardsGridCont}>
                {
                    data.map((el) => {
                        return <div><IndivCard el={el}/></div>
                    })
                }
            </div>
            
        </div>
    )
}

export default HotelGrid
