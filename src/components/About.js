import aboutImg from '../images/hills.png';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='Your' subTitle='Ideal Vacation' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Experience the ultimate mountain thrill! Navigate majestic peaks, discover hidden gems, and share the highs of mountain exploration. Your trail to awe-inspiring adventure begins here.
          </p>
          <p>
            Navigate diverse terrains, share triumphs, and elevate your adventure with us.
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
