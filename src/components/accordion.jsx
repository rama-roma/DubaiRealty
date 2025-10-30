import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div style={{ backgroundColor: '#272727', padding: '20px', border:"1px", borderColor:"white" }}>
      {[1,2,3,4,5,6,7].map((num) => (
        <Accordion key={num} style={{ backgroundColor: '#272727', color: '#fff' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
            aria-controls={`panel${num}-content`}
            id={`panel${num}-header`}
          >
            <Typography component="span">Accordion {num}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
