import React from 'react';
import { styled } from '@stitches/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { violet, mauve } from '@radix-ui/colors';

type AccordionTriggerType = {
    label: string;
    title: string;
    subtitle: string;
    footer: string;
    children: React.ReactNode;
    open: boolean;
};
const AccordionTrigger = React.forwardRef<AccordionTriggerType, any>(({
    children,
    ...props},
    ref) => {
    const { title, subtitle, footer, open = false} = props;
    return (
    <StyledHeader>
      <StyledTrigger ref={ref} {...props}>
        <Content>
            <Title>{title}</Title>
            {!open &&
            <><Subtitle>{subtitle}</Subtitle>
            <Footer>{footer}</Footer></>}
            {children}
        </Content>
      </StyledTrigger>
    </StyledHeader>
    )
});

AccordionTrigger.displayName = 'AccordionTrigger';
const Content = styled('div', {
    display: 'flex',
    flexDirection:'column',

});
const Title = styled('p', {
    fontSize: '12px',
});
const Subtitle = styled('p', {
   fotnSize: '24px'

});
const Footer = styled('p', {
   fontSize: '12px'

});

const StyledHeader = styled(AccordionPrimitive.Header, {
    all: 'unset',
    display: 'flex',
});
  
const StyledTrigger = styled(AccordionPrimitive.Trigger, {
    all: 'unset',
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    padding: '10px 20px',
    height: 'auto',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 1px 0 ${mauve.mauve6}`,
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
                //'&:hover': { backgroundColor: mauve.mauve2, color: 'black' },
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
                //'&:hover': { backgroundColor: mauve.mauve2, color: 'black' },
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
                //'&:hover': { backgroundColor: mauve.mauve2, color: 'black' },
            }
        } 
    },
    
    
  });

  
export default AccordionTrigger;