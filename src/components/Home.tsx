import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import '../assets/Home.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import Artboard from '../assets/Artboard.webp'
import '@mui/material/colors';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import life from '../assets/life.png';
import thanksgood from '../assets/thanksgood.png';
import course from '../assets/course.png';
import property from '../assets/property.png';


const Home = () => {



    return (
        
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl' disableGutters>
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


                    <section className='section-three'>

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
                                <Paper elevation={3}>
                                    <img src={image2} alt="" />
                                    <div>
                                        <p>دوره ۵۰۴ واژه ضروری در انگلیسی</p>
                                    </div>
                                    <div>
                                        <p className='div-p'>
                                            <span className='bold'>۱,۵۸۰,۰۰۰ </span>تومان
                                        </p>
                                    </div>
                                    <div className='div-a'>
                                        <a href="">
                                            <span>اطلاعات بیشتر</span>
                                            <ChevronLeftIcon />

                                        </a>
                                    </div>
                                </Paper>
                                <Paper elevation={3}>
                                    <img src={image1} alt="" />
                                    <div>
                                        <p>دوره آموزش فونتیک پلاس</p>
                                    </div>
                                    <div>
                                        <p className='div-p'>
                                            <span className='bold'>۸۹۰,۰۰۰ </span>تومان
                                        </p>
                                    </div>
                                    <div className='div-a'>
                                        <a href="">
                                            <span>اطلاعات بیشتر</span>
                                            <ChevronLeftIcon />

                                        </a>
                                    </div>
                                </Paper>

                                <Paper elevation={3}>
                                    <img src={image4} alt="" />
                                    <div>
                                        <p>دوره جامع فرزند دو زبانه</p>
                                    </div>
                                    <div>
                                        <p className='div-p'>
                                            <span className='bold'>۳۱۵۰,۰۰۰ </span>تومان
                                        </p>
                                    </div>
                                    <div className='div-a'>
                                        <a href="">
                                            <span>اطلاعات بیشتر</span>
                                            <ChevronLeftIcon />

                                        </a>
                                    </div>
                                </Paper>


                                <Paper elevation={3}>
                                    <img src={image3} alt="" />

                                    <div>
                                        <p>دوره آموزش استپ آپ</p>
                                    </div>
                                    <div>
                                        <p className='div-p'>
                                            <span className='bold'>۹۰۰,۰۰۰ </span>تومان
                                        </p>
                                    </div>
                                    <div className='div-a'>
                                        <a href="">
                                            <span>اطلاعات بیشتر</span>

                                            <ChevronLeftIcon />

                                        </a>
                                    </div>
                                </Paper>
                            </Box>
                        </section>
                        <section>
                            <Button variant="contained" disableElevation  sx={{
                                color: '#03AEC6', display: 'flex',
                                margin: 'auto'
                                
                            }}>
                                مشاهده همه دوره‌ها
                            </Button>
                        </section>
                    </section>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 90" preserveAspectRatio="none">
                        <path style={{ fill: '#7C57E6' }} className="svg" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                    </svg>
                    <section className='section-foure'>
                        <a href="">
                            <img src={image5} alt="" />
                        </a>
                    </section>
                    <section className='section-five'>
                        <div className='articles'>
                            <p>مقالات</p>
                            <div></div>
                        </div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',

                                '& > :not(style)': {
                                    m: 1,
                                    width: 333,
                                    height: 320,
                                    borderRadius: 5,
                                    border: 0,
                                    boxShadow: 109
                                },
                            }}
                        >
                            <Paper>
                                <a href="">
                                    <img src={image1} alt="دوره فونتیک پلاس" />
                                    <div className='div-title'>
                                        <p>دوره فونتیک پلاس</p>
                                        <ArrowCircleLeftIcon sx={{ color: 'rgb(17,185,205)', width: 330, height: 60 }} />
                                    </div>
                                </a>
                            </Paper>
                            <Paper>
                                <a href="">
                                    <img src={image1} alt="دوره فونتیک پلاس" />
                                    <div className='div-title'>
                                        <p>دوره فونتیک پلاس</p>
                                        <ArrowCircleLeftIcon sx={{ color: 'rgb(17,185,205)', width: 330, height: 60 }} />
                                    </div>
                                </a>
                            </Paper>
                            <Paper>
                                <a href="">
                                    <img src={image1} alt="دوره فونتیک پلاس" />
                                    <div className='div-title'>
                                        <p>دوره فونتیک پلاس</p>
                                        <ArrowCircleLeftIcon sx={{ color: 'rgb(17,185,205)', width: 330, height: 60 }} />
                                    </div>
                                </a>
                            </Paper>
                        </Box>
                    </section>
                    <div className='top-articles'>
                                <p>بروزترین مقالات</p>
                            </div>
                    <section className='section-six'>
                                        
                           
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    marginTop: 10,
                                    marginBottom: 7,
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 330,
                                        height: 150,
                                        borderRadius: 10,
                                    },
                                }}
                            >
                                <Paper elevation={3}>
                                    <a href="">
                                        <img src={life} alt="" />
                                    </a>
                                </Paper>
                                <Paper elevation={3}>
                                    <a href="">
                                        <img src={property} alt="" />
                                    </a>
                                </Paper>
                                <Paper elevation={3}>
                                    <a href="">
                                        <img src={course} alt="" />
                                    </a>
                                </Paper>
                                <Paper elevation={3}>
                                    <a href="">
                                        <img src={thanksgood} alt="" />
                                    </a>
                                </Paper>

                            </Box>
                            <Button variant="contained" disableElevation sx={{ bgcolor: '#11B9CD', marginBottom:5}}>
                                مشاهده همه مقالات
                            </Button>
                    </section>
                    <section className='section-seven'>
                        <div>
                            <img src={Artboard} alt="۵۰ لغت ضروری" />
                        </div>
                        <div>
                            <a>دوره ۵۰ لغت ضروری زبان انگلیسی</a>
                            <p>در این دوره ۵۰ تا از کاربردی‌ترین لغات زبان انگلیسی که کاربردی در مکالمات روزمره و یا مطالعات انگلیسی که دارید هستند. این لغات در دل مثال‌ها و جملات به شما آموزش داده می‌شود. که در دل این جملات ۱۵۰ لغت دیگر هم یاد خواهید گرفت.</p>
                            <Button variant="contained" disableElevation sx={{ bgcolor: '#11B9CD', width: 180, height: 50}}>
                                مشاهده و ثبت نام                            
                            </Button>
                        </div>
                    </section>
                       
                </main>

            </Container>
        </React.Fragment>
        
    )
}
export default Home