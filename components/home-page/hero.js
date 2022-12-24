import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/porsche.jpg"
          alt="avatar"
          height="300"
          width="300"
        />
      </div>
      <h1>I'm David</h1>
      <p>Blog about web development</p>
    </section>
  );
};

export default Hero;
