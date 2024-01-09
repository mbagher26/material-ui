import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'



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

});
const Courses = () => {

    const classes = useStyles();
    return(
        <>
                            <section className='section-three'>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
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
                            <Button variant="contained" disableElevation className={classes.btn} >
                                مشاهده همه دوره‌ها
                            </Button>
                        </section>
                    </section>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 90" preserveAspectRatio="none">
                        <path style={{ fill: '#7C57E6' }} className="svg" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                    </svg>
        </>
    )
}
export default Courses