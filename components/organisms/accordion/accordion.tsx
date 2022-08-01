import React, { useState } from 'react';
import { styled } from '@stitches/react';
import { blackA, mauve } from '@radix-ui/colors';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import AccordionTrigger from './accordionTrigger';
import AccordionContent from './accordionContent';



export const Accordion = (props) => {
  console.log('ARTICLES IN ACCRDION', props.posts)
  const { allPosts } = props;
  const [opened, setOpened] = useState<Array<string>>([]);
 console.log('OPENED', opened);
  return (
    <StyledAccordion type="multiple" onValueChange={(items)=>{setOpened(items || []) }}>
    
      <StyledAccordionItem value="item-1">
        <StyledFolder>
        <AccordionTrigger
        title=''
        subtitle='RECIPE FOR A SUSTAINABLE CHRISTMAS'
        footer=''
        theme='white'
        open={opened.includes('item-1')}
        ></AccordionTrigger>
        <AccordionContent theme='white'>
          Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.
        </AccordionContent>
        </StyledFolder>
      </StyledAccordionItem>

      <StyledAccordionItem value="item-2">
        <AccordionTrigger
        title='Beauty'
        subtitle='RECIPE FOR BEING YOURSELF'
        footer='By Marc Jacobs'
        theme='green'
        open={opened.includes('item-2')}
        >
        </AccordionTrigger>
        <AccordionContent theme='green'>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </StyledAccordionItem>

      <StyledAccordionItem value="item-3">
        <AccordionTrigger
        title='Homewear'
        subtitle='TOP 10 SUSTAINABLE GIFTS'
        footer='Project Earth'
        theme='pink'
        open={opened.includes('item-3')}
        >
        </AccordionTrigger>
        <AccordionContent theme='pink'>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </StyledAccordionItem>
    </StyledAccordion>
  )
};

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  margin: 20,
  backgroundColor: mauve.mauve6,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});
const StyledFolder = styled('div', {
  width: 'auto',
  height: 'auto',
  margin: '0 auto',
  marginTop: '50px',
  position: 'relative',
  backgroundColor: '#708090',
  borderRadius: '0 6px 6px 6px',
  boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.59)',
  '&::before': {
      content: 'Womenswear',
      width: '35%',
      height: '30px',
      borderRadius: '0 30px 0 0',
      backgroundColor: 'rgb(240 238 232)',
      color: '#556a0b',
      position: 'absolute',
      top: '-20px',
      left: '0px',
      padding: '10px 0px 0px 20px',
      fontSize: '14px'
  }
})

const StyledAccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    //marginTop: 0,
    // borderTopLeftRadius: 4,
    // borderTopRightRadius: 4,
    
  },

  '&:last-child': {
    // borderBottomLeftRadius: 4,
    // borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px ${mauve.mauve12}`,
  },
});



export default Accordion;

