import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import logo from '../assets/logo.webp';
import enamad from '../assets/enamad.png'
import Footersvg from '../assets/svg/Footersvg';
import Btn from './btn/Btn';


const Footer = () => {

    return (
        <section className='footer'>
           <Footersvg color='#fff' backgroundcolor='#fff'/>
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
                    <Btn variant='contained' title='به من اطلاع دهید!'/>
                    
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