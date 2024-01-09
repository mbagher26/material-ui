import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({

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

const ContactUs = () =>{

    const classes = useStyles();

    return(
        <>
                            <section className='contact'>
                        <div className='div-contact'>

                            <p>دریافت مشاوره رایگان برای شروع آموزش زبان انگلیسی فرم زیر را تکمیل کنید:</p>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    width: 1200,
                                    margin: 'auto',
                                    '& > :not(style)': { m: 1 },
                                }}
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
                                <Button variant="contained" disableElevation className={classes.btn_contact}>
                                    ثبت درخواست مشاوره
                                </Button>
                            </Box>
                        </div>
                    </section>

        </>
    )
}
export default ContactUs