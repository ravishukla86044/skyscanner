import React from 'react';
import Container from '@material-ui/core/Container';
import styledd from "./CentCard.module.css"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const CentCard = () => {
    return (
        <div>
            <Container maxWidth="lg" className={styledd.contCentHead}>
                <Typography variant="h6">The best prices from leading hotels</Typography>
            </Container>
            <Container maxWidth="lg" className={styledd.contCentCards}>
                <Paper>
                    <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_bc.c2993eda.svg" alt="" />
                </Paper>
                <Paper>
                    <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_oi.7da300df.svg" alt="" />
                </Paper>
                <Paper>
                    <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/d_ct.362b560f.svg" alt="" />
                </Paper>
                <Paper>
                    <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_xp.d77e55a8.svg" alt="" />
                    </Paper>
                <Paper>
                    <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_hc.6768436b.svg" alt="" />
                    </Paper>
                <Paper>
                    <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_ad.82c77978.svg" alt="" />
                </Paper>

            </Container>
        </div>
    )
}

export default CentCard
