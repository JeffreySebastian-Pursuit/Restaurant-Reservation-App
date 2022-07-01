import restaurant1 from './images/restaurant1.jpeg'
import restaurant2 from './images/restaurant2.jpeg'
import restaurant3 from './images/restaurant3.jpeg'
// import restaurant4 from './images/restaurant4.jpeg'
import restaurant5 from './images/restaurant5.jpeg'
import restaurant6 from './images/restaurant6.jpeg'
import restaurant7 from './images/restaurant7.jpeg'
import restaurant8 from './images/restaurant8.jpeg'
// import restaurant9 from './images/restaurant9.jpeg'
import restaurant10 from './images/restaurant10.jpeg'

const imageArr = [
    restaurant1,
    restaurant2,
    restaurant3,
    // restaurant4,
    restaurant5,
    restaurant6,
    restaurant7,
    restaurant8,
    // restaurant9, 
    restaurant10
]
export const randomImg = imageArr[Math.floor(Math.random() * imageArr.length)];