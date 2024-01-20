import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Btn from '../components/btn/Btn';


const useStyles = makeStyles({

    input_label: {
        color: 'white !important',
        transformOrigin: 'right !important',
        
    },
    textfield: {
        backgroundColor: 'white !important',
        borderRadius: 5
    }
});

const ContactUs = () => {

    const classes = useStyles();

    return (
        <>
            <section className='contact'>
                <div className='div-contact'>

                    <p>دریافت مشاوره رایگان برای شروع آموزش زبان انگلیسی فرم زیر را تکمیل کنید:</p>
                    <Box
                     
                    >
                        <InputLabel shrink htmlFor="نام و نام خانوادگی" className={classes.input_label}>
                            نام و نام خانوادگی:
                        </InputLabel>
                        <TextField
                            className={classes.textfield}
                            id="demo-helper-text-aligned"
                        />
                        <InputLabel shrink htmlFor="شماره تماس" className={classes.input_label}>
                            شماره تماس:
                        </InputLabel>
                        <TextField
                            className={classes.textfield}
                            id="demo-helper-text-aligned-no-helper"
                        />
                        <Btn variant='contained' title='ثبت درخواست مشاوره'/>
                       
                    </Box>
                </div>
            </section>

        </>
    )
}
export default ContactUs