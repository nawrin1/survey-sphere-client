import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import av3 from "../../assets/av3.jpg"
const card = (
  <React.Fragment>
    <CardContent style={{backgroundColor:'#dbf0f9'}}>
      <div className="avatar flex justify-center">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={av3} alt="Avatar" />
        </div>
      </div>

      <Typography sx={{ fontSize: 24, fontFamily: 'Sora', fontWeight: 'bold', textAlign: 'center' }} color="text.secondary" gutterBottom>
        Emily Chen
      </Typography>

      <Typography variant="body2">
        "I've tried several survey tools, but none have matched the simplicity and effectiveness of this platform. Creating surveys is intuitive, and the diverse question formats provide flexibility. The ability to export data for further analysis has saved me a lot of time. This platform caters to all levels of expertise."
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Testimonial3() {
  return (
    <Box sx={{ minWidth: 275,boxShadow:2 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
