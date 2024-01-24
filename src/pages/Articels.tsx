import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import image1 from '../assets/images/image1.png'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Btn from '../components/btn/Btn';
import life from '../assets/images/life.png';
import thanksgood from '../assets/images/thanksgood.png';
import course from '../assets/images/course.png';
import property from '../assets/images/property.png';





const Articles = () => {
    

    return (
        <>
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
                        },
                    }}
                >
                    <Paper elevation={0} className="article-paper">
                        <a href="">
                            <img src={image1} alt="دوره فونتیک پلاس" />
                            <div className='div-title'>
                                <p>دوره فونتیک پلاس</p>
                                <ArrowCircleLeftIcon sx={{ color: 'rgb(17,185,205)', width: 330, height: 60 }} />
                            </div>
                        </a>
                    </Paper>
                    <Paper elevation={0} className="article-paper">
                        <a href="">
                            <img src={image1} alt="دوره فونتیک پلاس" />
                            <div className='div-title'>
                                <p>دوره فونتیک پلاس</p>
                                <ArrowCircleLeftIcon sx={{ color: 'rgb(17,185,205)', width: 330, height: 60 }} />
                            </div>
                        </a>
                    </Paper>
                    <Paper elevation={0} className="article-paper">
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
                <Btn variant='contained' title=' مشاهده همه مقالات'/>
                
            </section>
        </>
    )
}
export default Articles