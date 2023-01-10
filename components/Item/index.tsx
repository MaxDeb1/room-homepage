import { Box, Button, Paper, Typography } from "@mui/material";
import Image, { StaticImageData } from 'next/image'

type SlideType = {
  desktop: StaticImageData
  mobile: StaticImageData
  alt: string
  title: string
  paragraph: string
}

interface SlideProps {
  slide: SlideType,
}

function Item(props: SlideProps) {
  return (
    <Paper sx={{display: {xs: 'block', md: 'flex'},}}>
      <Box
        sx={{
          display: {xs: 'block', md: 'none'},
          width: '100vw',
          height: '360px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Image 
          src={props.slide.mobile} 
          alt={props.slide.alt}
        />
      </Box>
      <Box
        sx={{
          display: {xs: 'none', md: 'block'},
          width: '58.2vw',
          height: '534px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Image 
          src={props.slide.desktop} 
          alt={props.slide.alt}
        />
      </Box>
      <Box
        sx={{
          width:{xs: '100vw', md: '420px'},
          height: {xs: '410px'},
          margin: {xs: '4.5em auto', md: '7.52em auto 0'},
          paddingInline: {xs: '28px', md: '8px'},
          transform: 'translateX(5px)',
          position: 'relative',
        }}
      >
        <Typography 
          variant="h1"
          sx={{
            fontFamily: 'League Spartan, sans-serif',
            fontSize: {xs: '2.3rem', md: '3.2rem'},
            fontWeight: '500',
            letterSpacing: '-1px',
            wordSpacing: '-3px',
            lineHeight: {xs: '1.95rem', md: '2.7rem'},
            marginBottom: '0.5em'
          }}
        >
          {props.slide.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'League Spartan, sans-serif',
            fontSize: '1.01rem',
            letterSpacing: '-0.5px',
            wordSpacing: '-0.8px',
            lineHeight: {xs: '1.23rem', md: '1.25rem'},
            color: 'var(--DarkGray)',
          }}
        >
          {props.slide.paragraph}
        </Typography>
        <Button 
          variant="text"
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            width: '230px',
            fontSize: '0.9rem',
            letterSpacing: '9px',
            wordSpacing: '2px',
            color: 'var(--Black)',
            paddingInline: '0',
            bottom: {xs: '32.5%', md: '34.5%'},
            left: {xs: '1.7rem', md: '0.45rem'},
            '&:hover': {
              color: 'var(--DarkGray)',
              backgroundColor: 'transparent',
            }
          }}
        >
          SHOP NOW
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="currentColor" fill-rule="nonzero"/></svg>
        </Button>
      </Box>
    </Paper>
  );
}

export default Item;
