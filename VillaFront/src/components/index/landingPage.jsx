import { React, useState } from 'react'

// import bbq1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/bbq1.jpeg';
import parasol1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/parasol1.jpeg';
import portail from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/portail.jpeg';
import piscine1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/piscine1.jpeg';
import piscine2 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/piscine2.jpeg';
import piscine3 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/piscine3.jpeg';
import salamandre1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/salamandre1.jpeg';
import table1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/table1.jpeg';
import terrasse2 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/terrasse2.jpeg';
import bbq1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/bbq1.jpeg';
import iles1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/iles1.jpeg';
import welcome1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/welcome1.jpeg';
import transat1 from '/Users/samue/Desktop/Villa/VillaFront/src/IMG/imgVilla/transat1.jpeg';
 
 


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function LandingPage() {
  

 function WovenImageList() {
  return (
    <>
    <ImageList sx={{ width: 1 , height: 1  }} variant="woven" cols={3} gap={30}>
      {itemData.map((item) => (
        <ImageListItem 
        key={item.img}
        
        >
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

const itemData = [
  {
    img: bbq1,
    title: 'Bed',
  },
  {
    img: parasol1,
    title: 'Kitchen',
  },
  {
    img: transat1,    title: 'Sink',
  },
  {
    img: portail,    title: 'Books',
  },
  {
    img: salamandre1,    title: 'Chairs',
  },
  {
    img: table1,    title: 'Candle',
  },
  {
    img: iles1,    title: 'Laptop',
  },
  {
    img: welcome1,    title: 'Doors',
  },
  {
    img: terrasse2,    title: 'Coffee',
  },
  {
    img: piscine1,    title: 'Storage',
  },
  {
    img: piscine2,    title: 'Coffee table',
  },
  {
    img: piscine3,    title: 'Blinds',
  },
];


  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  return (
    <>
    {WovenImageList()}
    </>
  );
}


export default LandingPage