import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import av2 from "../../assets/av2.webp"
const card = (
  <React.Fragment>
    <CardContent style={{backgroundColor:'#dbf0f9'}}>
      <div className="avatar flex justify-center">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={av2} alt="Avatar" />
        </div>
      </div>

      <Typography sx={{ fontSize: 24, fontFamily: 'Sora', fontWeight: 'bold', textAlign: 'center' }} color="text.secondary" gutterBottom>
      Alex Rodriguez
      </Typography>

      <Typography variant="body2">
      "As a business owner, understanding my customers is vital. This survey platform has been a game-changer for us. The real-time analytics and detailed reports have given us actionable data to make informed decisions. The team's support is top-notch, always ready to assist. Thanks to this platform, we now have a deeper connection with our audience."
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Testimonial3() {
  return (
    <Box sx={{ minWidth: 275,boxShadow:2  }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
