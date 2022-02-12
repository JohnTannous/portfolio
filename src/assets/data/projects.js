import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Wiboo',
    desc:
      'An application that allows you to connect to the world of Anime and discover new shows,',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Logo',
    desc:
      'Used creative cloud to develop not only my logo but many other small businesses',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Baking Soft',
    desc:
      'A bakery website that will show the hardwork and art of the bakers and their website. ',
    img: ProjectImg,
  },
];

export default projects;
