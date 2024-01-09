import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import Topcourse from '../components/icon/Topcourse';



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
    return (
        <>
            <section className='section-three'>
               <Topcourse backgroundColor='#7C57E6' color='#fff'/>


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
                <Topcourse backgroundColor='#fff' color='#7C57E6'/>
        </>
    )
}
export default Courses