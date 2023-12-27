import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import '../assets/Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl'>
                <main className='main'>
                    <section className='section-one'>
                        <h2>آکادمی آورزش زبان روان</h2>
                        <p>
                            آکادمی روان وب سایت تخصصی
                            <a href="">آموزش زبان انگلیسی </a>
                            است و در این زمینه بهترین دوره‌ها و آموزش‌ها را برای شما قرار داده است. سعی ما بر این است که به بهترین و راحت‌ترین شکل ممکن زبان انگلیسی را به شما آموزش دهیم. آکادمی روان صاحب بهترین پکیج آموزش زبان انگلیسی در خانه است و در این دوره به روش موازی ترکیبی زبان انگلیسی را به شما آموزش می‌دهد

                        </p>
                    </section>
                    <section className='section-two'>
                        <a href="">
                            <img src="https://www.ravaan.co/wp-content/uploads/2023/04/%D8%AF%D9%88%D8%B1%D9%87-%D8%AC%D8%A7%D9%85%D8%B9-min.webp" alt="" />
                        </a>
                        <div>
                            <p>دوره جامع آموزش زبان انگلیسی</p>
                            <a href="">با استاد محمد کریمی</a>
                            <a href="">مشاهده و ثبت نام دوره</a>
                        </div>
                    </section>


                    <section className='section-three' style={{ backgroundColor: 'blue' }}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 2 1000 95" preserveAspectRatio="none">
                            <path className='svg' d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>

                        <section className='section-three-one'>
                            <h1>دوره های آکادمی</h1>
                            <div></div>
                        </section>

                        <section className='section-three-two'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 330,
                                        height: 330,
                                    },
                                }}
                            >
                                <Paper elevation={3} />
                                <Paper elevation={3} />
                                <Paper elevation={3} />
                                <Paper elevation={3} />
                            </Box>
                        </section>
                    </section>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 90" preserveAspectRatio="none">
                        <path style={{ fill: 'blue' }} className="svg" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                    </svg>
                </main>

            </Container>
        </React.Fragment>
    )
}
export default Home