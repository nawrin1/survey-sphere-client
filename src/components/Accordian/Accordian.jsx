import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordian() {
  return (
    <div className='max-w-6xl mx-auto mb-40'>
        
      <Accordion style={{backgroundColor:'#daf0ff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontFamily:'Sora',fontWeight:'bold'}}>How can I create a new survey on your platform?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          To create a new survey, you have to be a surveyor, navigate to the dashboard, and click on the "Create Survey" button. Follow the intuitive steps to set up your survey, including adding questions, choosing response formats, and customizing the design. Once you're satisfied, save and launch your survey to start collecting valuable insights.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#f2f2f2'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  style={{fontFamily:'Sora',fontWeight:'bold'}}>Can participants see the results of the survey?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By default, survey results are not visible to participants in real-time to avoid influencing their responses. However, you can access real-time analytics and results from your dashboard as soon as participants start submitting their answers. Monitor trends, view response rates, and gain actionable insights to make informed decisions.
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion style={{backgroundColor:'#daf0ff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  style={{fontFamily:'Sora',fontWeight:'bold'}}>What measures are in place to ensure the privacy and security of survey responses?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We take privacy and security seriously. All survey responses are stored securely, and access is restricted to authorized personnel only. We use encryption protocols to protect data during transmission, and you have the option to make your survey responses anonymous
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion style={{backgroundColor:'#f2f2f2'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  style={{fontFamily:'Sora',fontWeight:'bold'}}>What types of surveys are most effective for different purposes, and how can I choose the right survey format?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The effectiveness of a survey depends on your specific goals. For employee feedback, consider using engagement surveys, while product feedback might benefit from Net Promoter Score (NPS) surveys. Choose from various formats such as multiple-choice, open-ended, or Likert scales based on the information you want to gather.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#daf0ff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  style={{fontFamily:'Sora',fontWeight:'bold'}}>How can I encourage higher survey participation rates among my target audience?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Boosting survey participation involves a combination of strategies. Start by clearly communicating the survey's purpose, assuring participants of data confidentiality, and keeping the survey concise.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}