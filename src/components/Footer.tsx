import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import logo from '../assets/logo.webp';
import enamad from '../assets/enamad.png'
import { Button } from '@mui/material';

const Footer = () => {

    return (
        <section className='footer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
            </svg>
            <Box
                className=''
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',
                    '& > :not(style)': {
                        m: 2,
                        maxWidth: 300,
                        height: 250,
                        backgroundColor: '#E6F4FF'
                    },
                }}
            >
                <Paper elevation={0} className='paper'>
                    <h3>درباره آکادمی روان</h3>
                    <p>آکادمی روان یکی از پرتلاش‌ترین و بروزترین وبسایت‌های آموزشی در سطح ایران است که همیشه تلاش کرده تا بتواند بروزترین مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان به یادگیری زبان انگلیسی قرار دهد.</p>
                </Paper>
                <Paper elevation={0} className='paper'>
                    <h3>دسترسی سریع</h3>
                    <a>مقالات</a>
                    <a>دوره های آموزشی</a>
                    <a>قوانین و مقررات</a>
                    <a>ارتباط با </a>
                    <a>سیاست حریم خصووصی</a>
                </Paper>
                <Paper elevation={0} className='paper'>
                    <h3>ارتباط باما</h3>
                    <p>پشتیبانی: 36297355-035</p>
                    <p>ثبت‌نام و پشتیبانی دوره‌ها:</p>
                    <p>09130013252</p>
                    <p>ایمیل:</p>
                    <p>academi.karimi@gmail.com</p>
                </Paper>
                <Paper elevation={0} className='paper'>
                    <h3>اطلاع از فروش ویژه</h3>
                    <label htmlFor="">ایمیل خود را وارد کنید!</label>
                    <input type="text" />
                    <Button variant="contained" disableElevation sx={{ bgcolor: '#11B9CD', height: 50, borderRadius: 2 }}>
                        به من اطلاع دهید!    
                    </Button>
                </Paper>
                <Paper elevation={0} className='paper'>
                    <img src={logo} alt="Logo" />
                    <img src={enamad} alt="Enamad" />
                </Paper>
            </Box>
        </section>
    )
}
export default Footer