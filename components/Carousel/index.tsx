import Carousel from 'react-material-ui-carousel'
import Item from 'components/Item'
import desktopHero1 from 'public/images/desktop-image-hero-1.jpg'
import desktopHero2 from 'public/images/desktop-image-hero-2.jpg'
import desktopHero3 from 'public/images/desktop-image-hero-3.jpg'
import mobileHero1 from 'public/images/mobile-image-hero-1.jpg'
import mobileHero2 from 'public/images/mobile-image-hero-2.jpg'
import mobileHero3 from 'public/images/mobile-image-hero-3.jpg'
/* import slides from "helper/slides.json" */
import NavButton from 'components/NavButton'

function MUiCarousel() {
    var slides = [
        {
            desktop: desktopHero1,
            mobile: mobileHero1,
            alt: "image-hero-1",
            title: "Discover innovative ways to decorate",
            paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            desktop: desktopHero2,
            mobile: mobileHero2,
            alt: "image-hero-2",
            title: "We are available all across the globe",
            paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            desktop: desktopHero3,
            mobile: mobileHero3,
            alt: "image-hero-3",
            title: "Manufactured with the best materials",
            paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]

    return (
        <Carousel
            autoPlay={false}
            sx={{
                height: {xs: '770px', md: '534px'}
            }}
            
            indicatorContainerProps={{
                style : {
                    display: 'none'
                }
            }} 
            fullHeightHover={false}
/*             navButtonsWrapperProps={{
                style: {
                    height: '80px',
                    aspectRatio: 1/1,
                    bottom: '0',
                    top: 'unset'
                }
            }} */
/*             navButtonsNextProps={{
                style: {
                    right:'30px'
                }
            }} */
            navButtonsProps={{
                style: {
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--Black)',
                    borderRadius: 0,
                }
            }}
            NavButton={NavButton}
        >
            {
                slides.map( (slide, i) => <Item key={i} slide={slide} /> )
            }
        </Carousel>
    )
}

export default MUiCarousel