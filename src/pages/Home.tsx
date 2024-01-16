import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import '../assets/Home.css'
import image5 from '../assets/image5.png'
import Artboard from '../assets/Artboard.webp'
import '@mui/material/colors';
import rahimi from '../assets/miss-rahimi.mp4';
import rezayat from '../assets/rezayat-site-main.mp4';
import satisfy from '../assets/Satisfy.mp4';
import doreh from '../assets/دوره-جامع-min.webp';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

import { makeStyles } from '@mui/styles';
import Courses from './Courses';
import Articles from './Articels';
import ContactUs from './ContactUs';
import Btn from '../components/btn/Btn';


const useStyles = makeStyles({
    btn: {
        display: 'flex !important',
        margin: '2px !important',
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
        marginBottom: '15px !important',
        marginTop: '15px !important',
        backgroundColor: '#11B9CD !important',
        maxWidth: 500,
        height: 50
    },
    btn_contact: {
        backgroundColor: '#11B9CD !important',
        height: 50
    },
    input_label: {
        color: 'white !important',
        transformOrigin: 'right !important'
    },
    textfield: {
        backgroundColor: 'white !important',
    }
});

const Home = () => {

    const classes = useStyles();

    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl' disableGutters>
                <main className='main'>
                    <section className='section-one'>
                        <h2>آکادمی آموزش زبان روان</h2>
                        <p>
                            آکادمی روان وب سایت تخصصی  <a href=""> آموزش زبان انگلیسی </a>
                            است و در این زمینه بهترین دوره‌ها و آموزش‌ها را برای شما قرار داده است. سعی ما بر این است که به بهترین و راحت‌ترین شکل ممکن زبان انگلیسی را به شما آموزش دهیم. آکادمی روان صاحب بهترین پکیج آموزش زبان انگلیسی در خانه است و در این دوره به روش موازی ترکیبی زبان انگلیسی را به شما آموزش می‌دهد

                        </p>
                    </section>
                    <section className='section-two'>
                        <a href="" className='a-img'>
                            <img src={doreh} alt="" />
                        </a>
                        <div>
                            <p>دوره جامع آموزش زبان انگلیسی</p>
                            <a href="">با استاد محمد کریمی</a>
                            <Btn variant='contained' title='مشاهده و ثبت نام دوره' />
                            {/* <Button variant="contained" disableElevation className={classes.btn} >
                                مشاهده و ثبت‌نام دوره
                            </Button> */}
                        </div>
                    </section>
                    <Courses />
                    <section className='section-foure'>
                        <a href="">
                            <img src={image5} alt="" />
                        </a>
                    </section>
                    <Articles />

                    <section className='section-seven'>
                        <div>
                            <img src={Artboard} alt="۵۰ لغت ضروری" />
                        </div>
                        <div>
                            <a>دوره ۵۰ لغت ضروری زبان انگلیسی</a>
                            <p>در این دوره ۵۰ تا از کاربردی‌ترین لغات زبان انگلیسی که کاربردی در مکالمات روزمره و یا مطالعات انگلیسی که دارید هستند. این لغات در دل مثال‌ها و جملات به شما آموزش داده می‌شود. که در دل این جملات ۱۵۰ لغت دیگر هم یاد خواهید گرفت.</p>
                            <Button variant="contained" disableElevation className={classes.btn}>
                                مشاهده و ثبت نام
                            </Button>
                        </div>
                    </section>
                    <section className='video'>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                                marginTop: 20,
                                marginBottom: 10,
                                '& > :not(style)': {
                                    m: 1,
                                    width: 370,
                                    height: 170,
                                    borderRadius: 2.5,
                                },
                            }}
                        >

                            <video src={rahimi} controls />
                            <video src={satisfy} controls />
                            <video src={rezayat} controls />
                        </Box>
                    </section>
                    <section className='result'>
                        <Button variant="contained" disableElevation className={classes.btn}>
                            مشاهده نتایج دانشجویان آکادمی روان
                        </Button>
                    </section>
                    <section className='title-contact'>
                        <p>دریافت مشاوره رایگان و تهیه دوره، اطلاعات زیر را تکمیل کنید.</p>
                        <div className='icon'>
                            <PanToolAltOutlinedIcon />
                        </div>
                    </section>
                    <ContactUs />
                </main>

            </Container>
        </React.Fragment>

    )
}
export default Home