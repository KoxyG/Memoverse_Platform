import {GrBucket, GrGift, GrHome} from "react-icons/gr"
import { IoIosArrowRoundForward, IoIosPerson} from "react-icons/io"
import {GoHome} from "react-icons/go"
import { FaArrowRightLong} from "react-icons/fa6"


// IMAGES FOR BLOG POST
import FirstImage from "../../public/B-frame1.png"
import SecondImage from "../../public/B-frame2.png"
import ThirdImage from "../../public/B-frame3.png"
import FourthImage from "../../public/B-frame4.png"

const BlogDummy = [
  {
    imgSrc: FirstImage,
    id: 1,
    // more: <IoIosArrowRoundForward />,
    more: <FaArrowRightLong />,
    title: "Journey through Time: My UnforgettableAdventures Around the World",
    content:
      "From the majestic peaks of snow-capped mountains to the sun-kissed beaches with turquoise waters, each photograph becomes a window to a new world, inviting you to explore and dream",
  },
  {
    imgSrc: SecondImage,
    id: 2,
    title:
      "Memoirs of a Dreamer: Embracing Creativity and Artistry in Everyday Life",
    // more: <IoIosArrowRoundForward />,
    more: <FaArrowRightLong />,

    content:
      "Through the ups and downs, I've found solace in expressing myself through art, and I can't wait to hear your thoughts and connect with kindred spirits. Let's celebrate the magic of imagination together! 🌈 💫",
  },
  {
    imgSrc: ThirdImage,
    id: 3,
    title: "Life Lessons and Growth: Reflections on Overcoming Challenges",
    // more: <IoIosArrowRoundForward />,
    more: <FaArrowRightLong />,

    content:
      "In this safe space, let's embrace vulnerability and wisdom as we connect through shared experiences. May my stories inspire you on your own path of growth and self-discovery. 🌿🌼",
  },
  {
    imgSrc: FourthImage,
    id: 4,
    // more: <IoIosArrowRoundForward />,
    more: <FaArrowRightLong />,

    title:
      "Embracing Wellness: My Journey to Mindfulness, Meditation, Yoga, and Self-Care",
    content:
      "In this soul-nourishing post, I open my heart to inspire and uplift each one of you on your path to well-being. Through mindfulness practices, yoga serenity, and self-care rituals, I've found profound peace and balance.",
  },
];
   export default BlogDummy;

   export const NavObject = [
    {id:"1", name:"Home", icon:<GoHome size={24}/>, to:"/dashboard"},
    {id:"2", name:"Profile", icon:<IoIosPerson size={24}/>, to:"/dashboard/profile"},
    {id:"3", name:"Explore", icon:<GrGift size={24}/>, to:"/dashboard/explore"},
    {id:"4", name:"Your Posts", icon:<GrBucket size={24}/>, to:"/dashboard/your-posts"},
   ]