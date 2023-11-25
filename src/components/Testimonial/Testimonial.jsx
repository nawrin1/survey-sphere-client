import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import av1 from "../../assets/av1.jpg"
import { LuBadgeCheck } from "react-icons/lu";

const card = (
  <React.Fragment>
    <CardContent style={{backgroundColor:'#dbf0f9'}}>
      <div className="avatar flex justify-center">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={av1}
           alt="Avatar" />
        </div>
      </div>

      <Typography sx={{ fontSize: 24, fontFamily: 'Sora', fontWeight: 'bold', textAlign: 'center' }} color="text.secondary" gutterBottom>
      Sarah Thompson 
      

      </Typography>

      <Typography variant="body2">
      "I am incredibly impressed with the user-friendly interface and powerful features of this survey platform. It has made collecting and analyzing responses a breeze. The customization options allowed me to create surveys that truly reflect my brand. Highly recommended for anyone looking to gather valuable insights effortlessly!"
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
