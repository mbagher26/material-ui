import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl'>
                <section className='section-one'>
                    <p>آکادمی آورزش زبان روان</p>
                   <p>
                   آکادمی روان وب سایت تخصصی
                   <a href="">آموزش زبان انگلیسی </a>
                    است و در این زمینه بهترین دوره‌ها و آموزش‌ها را برای شما قرار داده است. سعی ما بر این است که به بهترین و راحت‌ترین شکل ممکن زبان انگلیسی را به شما آموزش دهیم. آکادمی روان صاحب بهترین پکیج آموزش زبان انگلیسی در خانه است و در این دوره به روش موازی ترکیبی زبان انگلیسی را به شما آموزش می‌دهد

                   </p>
                </section>
                <section>
                    <a href="">
                        <img src="https://www.ravaan.co/wp-content/uploads/2023/04/%D8%AF%D9%88%D8%B1%D9%87-%D8%AC%D8%A7%D9%85%D8%B9-min.webp" alt="" />
                    </a>
                    <div>
                        <p>دوره جامع آموزش زبان انگلیسی</p>
                        <a href="">با استاد محمد کریمی</a>
                        <a href="">مشاهده و ثبت نام دوره</a>
                    </div>
                </section>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </React.Fragment>
    )
}
export default Home