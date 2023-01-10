import {Button} from '@mui/material';
import Image from 'next/image';
import NextArrow from 'public/images/icon-angle-right.svg'
import PrevArrow from 'public/images/icon-angle-left.svg'

type NavButtonprops = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    style: React.CSSProperties;
    next: boolean;
    prev: boolean;
}


const NavButton = ({onClick, className, style, next, prev}: NavButtonprops) => {

    return (
        <Button onClick={onClick} className={className} style={style}>
            {next && <Image className= "arrowIcon" src={NextArrow} alt=""/>}
            {prev && <Image className= "arrowIcon" src={PrevArrow} alt=""/>}
        </Button>
    );
};

export default NavButton;