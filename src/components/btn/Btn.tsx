import Button from '@mui/material/Button';
import IBtn from './Btntypes';
import CircularProgress from '@mui/material/CircularProgress';

export default function Btn(props:IBtn) {
  const {children, variant, isloading, title} = props;
  return (
    <Button variant="contained">
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