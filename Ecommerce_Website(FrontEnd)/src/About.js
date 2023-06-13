import HeroSectionferi from './components/HeroSectionferi';
import { useProductContext } from './context/productcontex';

const About = () => {

  const { myname } = useProductContext();

  const data ={
    name: "WUEEE ECOMMERCE",
  };

  return (
  <>
  { myname}
  <HeroSectionferi myData={data} />
  </>);
};


export default About

