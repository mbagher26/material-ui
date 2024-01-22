import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/styles';
import IInput from './Inputtypes';
import { forwardRef } from 'react';

const useStyles = makeStyles({

    input_label: {
        color: 'white !important',
        transformOrigin: 'right !important',
        marginRight: 10
    },
    textfield: {
        backgroundColor: 'white !important',
        borderRadius: 5,
                
    },
    error: {
        color: 'red',
        marginRight: 10
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        maxWidth: 230,
        borderRadius: 5,
     
    }

});

const Input =forwardRef<HTMLImageElement, IInput>( (props: IInput, ref) => {
    const { label, error, icon } = props;
    const classes = useStyles();


    return (
        <>
            <InputLabel shrink htmlFor={label} className={classes.input_label}>
                {label}
            </InputLabel>
            <div className={classes.div}>
                {icon}
                <TextField
                    ref={ref}
                    variant='standard'
                    className={classes.textfield}
                    id="demo-helper-text-aligned"
                />
            </div>
            <p className={classes.error}>
            {error}
            </p>
        </>
    )
})
export default Input