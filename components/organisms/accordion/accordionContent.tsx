import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { mauve } from '@radix-ui/colors';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const AccordionContent = React.forwardRef<any, any>(({ children, ...props }, forwardedRef) => {
    
    return (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
    )
});
  AccordionContent.displayName = 'Accordion Content';


  const slideDown = keyframes({
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' },
  });
  
  const slideUp = keyframes({
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 },
  });
  
  const StyledContent = styled(AccordionPrimitive.Content, {
    overflow: 'hidden',
    fontSize: 15,
    color: mauve.mauve11,
    backgroundColor: mauve.mauve2,
  
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
    },
    variants: {
        theme: {
            white: {
                '&[data-state="closed"]': { 
                    backgroundColor: 'rgb(240 238 232)',
                    color: '#556a0b'
                },
                '&[data-state="open"]': { 
                    backgroundColor: 'rgb(240 238 232)',
                    color: '#556a0b'
                },
                '&:hover': { backgroundColor: mauve.mauve2, color: 'black' },
            },
            green: {
                '&[data-state="closed"]': { 
                    backgroundColor: '#556a0b',
                    color: 'rgb(240 238 232)'
                },
                '&[data-state="open"]': { 
                    backgroundColor: '#556a0b',
                    color: 'rgb(240 238 232)'
                },
                '&:hover': { backgroundColor: mauve.mauve2, color: 'black' },
            },
            pink: {
                '&[data-state="closed"]': { 
                    backgroundColor: 'rgb(246 167 208)',
                    color: 'red'
                },
                '&[data-state="open"]': { 
                    backgroundColor: 'rgb(246 167 208)',
                    color: 'red'
                },
                '&:hover': { backgroundColor: mauve.mauve2, color: 'black' },
            }
        } 
    },
  });
  
  const StyledContentText = styled('div', {
    padding: '15px 20px',
  });



  export default AccordionContent;