import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}){
   const INIT_URL = "https://www.shutterstock.com/image-photo/dust-storm-australia-on-farm-600nw-561255439.jpg";
   const HOT_URL = "https://img.freepik.com/premium-vector/handsome-young-man-suffering-from-heat-wave-stoke-very-hot-weather-temperature_535862-729.jpg";
   const COLD_URL = "https://thumbs.dreamstime.com/z/freezing-shivering-young-girl-winter-cold-cartoon-style-illustration-winter-landscape-cold-weather-girl-115784832.jpg";
   const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
   return(
    <div className="InfoBox">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL
          : info.temp > 15
          ? HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>
             <p>Temperature = {info.temp}&deg;C</p>
             <p>Humidity = {info.humidity}</p>
             <p>Min Temp = {info.tempMin}&deg;C</p>
             <p>Max Temp = {info.tempMax}&deg;C</p>
             <p>
              The weather can be described as <i>{info.weather}</i> and feels like 
               { info.feelsLike}&deg;C
             </p>
          </div>
        </Typography>
      </CardContent>
      
    </Card>

    </div>
   );


}