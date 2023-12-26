import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl'>
                <section className='content'>
                    <p>آکادمی آورزش زبان روان</p>
                   <p>
                   آکادمی روان وب سایت تخصصی
                   <a href="">آموزش زبان انگلیسی </a>
                    است و در این زمینه بهترین دوره‌ها و آموزش‌ها را برای شما قرار داده است. سعی ما بر این است که به بهترین و راحت‌ترین شکل ممکن زبان انگلیسی را به شما آموزش دهیم. آکادمی روان صاحب بهترین پکیج آموزش زبان انگلیسی در خانه است و در این دوره به روش موازی ترکیبی زبان انگلیسی را به شما آموزش می‌دهد

                   </p>
                </section>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </React.Fragment>
    )
}
export default Home