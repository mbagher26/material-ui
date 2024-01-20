import Button from '@mui/material/Button';
import IBtn from './Btntypes';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  btn: {
      display: 'flex !important',
      margin: '2px !important',
      justifyContent: 'center !important',
      marginBottom: '15px !important',
      marginTop: '15px !important',
      backgroundColor: '#11B9CD !important',
      minWidth:200,
      maxWidth:250,
      height: 50
  },

});

const Btn = (props:IBtn) => {
  const classes = useStyles();

  const {children, variant, isloading, title} = props;
  
  return (
    <Button variant={variant} className={classes.btn}>
      {
        isloading ? 
        (
          <CircularProgress />
        ):(
          children ? children : title
        )
      }
    </Button>
  );
}
export default Btn