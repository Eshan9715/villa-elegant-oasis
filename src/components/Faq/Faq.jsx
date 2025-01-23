import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const faqs = [
  {
    question: "What Villa Elegant Oasis offers?",
    answer:
          "The villa offers total 4 Lounge, 12 Luxury air-conditioned bedrooms each with private rooms and 4 fully equipped modern kitchen with laundry facilities.",
  },
  {
    question: "What Villa Elegant Can be booked for?",
    answer:
          "The villa can be booked for Parties & Events, Retreat, Day outing, Get together.",
  },
  {
    question: "What time is check-in & check-out at Villa Elegant Oasis?",
    answer:
      "Check-in time for Villa Elegant Oasis starts counting from 2:00 PM and check-out is until 11:00 AM. However, early check-in or late check-out can sometimes be negotiated between the guest and the owner or the manager of this property.",
  },
  {
    question: "Is this Villa Elegant Oasis pet-friendly for guests?",
    answer:
      "No, pets are not allowed at this property. Check the guest reviews to learn what guests had to share.",
  },
  {
    question: "Is Villa Elegant Oasis a family-friendly place to stay?",
    answer:
      "This is considered to be a family-friendly property. Families have rated this villa Good or guests have recommended them suitable for families.the villa has specified that children are welcome.",
  },
];

const FAQPage = () =>{
  return (
    <div className='container my-16' id="Faq">
      <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-2xl md:text-4xl font-bold font-serif text-center mb-8 text-gray-500"
            >
           Frequently Asked Questions
          
     </motion.h1>
      <motion.div
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView={"animate"}
      >
     <div className=''>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ borderRadius: '4px', borderColor: 'error.main' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <p className='font-semibold text-[15px] md:text-[17px] font-serif text-gray-600'>{faq.question}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className='text-[13px] md:text-base font-serif'>{faq.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
      </div>
      </motion.div>

    </div>
  );
}

export default FAQPage;