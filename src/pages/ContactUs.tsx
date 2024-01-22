
import Box from '@mui/material/Box';
import Btn from '../components/btn/Btn';
import  Input  from '../components/input/Input';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const ContactUs = () => {

    

    return (
        <>
            <section className='contact'>
                <div className='div-contact'>

                    <p>دریافت مشاوره رایگان برای شروع آموزش زبان انگلیسی فرم زیر را تکمیل کنید:</p>
                    <Box>
                        <Input label='نام و نام خانوادگی:' icon={<PersonIcon/>}/>
                        <Input label='شماره تماس:' icon={<PhoneIphoneIcon/>}/>
                        <Btn variant='contained' title='ثبت درخواست مشاوره'/>
                    </Box>
                </div>
            </section>

        </>
    )
}
export default ContactUs