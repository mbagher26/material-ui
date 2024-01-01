import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
interface itemProps {
    id: number,
    image: string,
    title: string
}

function Slider()
{
    var items: itemProps[] = [
        {
            "id": 1,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3eBGQVTpx9dzf5YPgItJrbzjnPmvEyJlAg&usqp=CAU',
            "title": 'image'
        },
        {
            "id": 2,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGRIEVUNM7sBmc1AxI3NMfCvhg53-0aw4dg&usqp=CAU',
            "title": 'image'
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
export default Slider


function Item({item}:{item: itemProps})
{
    return (
        <Paper sx={{boxShadow: 'unset'}}>
            <img src={item.image} alt={item.title} style={{width: '100%', height: '550px'}}/>
        </Paper>
    )
}