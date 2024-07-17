import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SkillsAccordian = () => {
  return (
    <div className='w-3/4 mx-auto mt-16'>
      <Accordion className='bg-gray-800 text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Frontend
        </AccordionSummary>
        <AccordionDetails>
          React JS, Tailwind CSS, Bootstrap, Ajax, HTML, CSS & JavaScript
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gray-800 text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Backend
        </AccordionSummary>
        <AccordionDetails>
          Node JS, Express, Django & Django Rest Framework
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gray-800 text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Database
        </AccordionSummary>
        <AccordionDetails>
          MongoDB, MySQL, SQL Server & SQLite
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gray-800 text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Version Control
        </AccordionSummary>
        <AccordionDetails>
          Git & GitHub
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default SkillsAccordian