import {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type FaqItem = {
  question: string;
  answer: ReactNode;
};

type WorkStep = {
  title: string;
  description: ReactNode;
};

const workSteps: WorkStep[] = [
  {
    title: 'Install a code editor and Hackatime',
    description: <>Set up VS Code and track your time with Hackatime to stay eligible for prizes.</>,
  },
  
  {
    title: 'Follow the guide',
    description: <>Work through the beginner-friendly guide and learn the basics step by step.</>,
  },
  {
    title: 'Add features on your own',
    description: <>Make it yours by adding a new idea, mechanic, or tweak beyond the tutorial. Make a real mod that you'd like people to use.</>,
  },
  {
    title: "Submit your project and claim prizes!",
    description:" Once you're done, submit your mod for review. If you're eligible, you'll receive a deck of Balatro Playing Cards and a custom keychain as rewards for your awesome project!",
  }
];

const faqItems: FaqItem[] = [
  {
    question: 'Who can join?',
    answer: (
      <>
        Anyone between 13 and 18 years old can join the program.
      </>
    ),
  },
  {
    question: 'Do I need modding experience?',
    answer: (
      <>
        No. The program is built to help beginners learn the basics of Balatro modding step by step.
      </>
    ),
  },
  {
    question: 'What do I get for participating?',
    answer: (
      <>
        Eligible participants can learn how to make a mod and receive a deck of Balatro Playing Cards and a custom keychain.
      </>
    ),
  },
  {
    question: 'How do I sign up?',
    answer: (
      <>
        Enter your email address on the homepage and choose the registration option that fits you best.
      </>
    ),
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.heading)}>
          Make a Mod:
        </Heading>
        {/* <div className='hero'>

        <ul className="pills pills--block">
  <li className="pills__item pills__item--active">Balatro</li>
</ul>
        </div> */}

        <p className="hero__subtitle">
          <img src='https://www.playbalatro.com/press-kit/Logos/Balatro%20logo.png' height={200}/>
        </p>
        <p className='hero__subtitle'>
          Create a Joker, get a deck!
        </p>

        <div className={clsx(styles.buttons)}>
          <div style={{display: "flex", gap:"15px"}}>
          <input
          className={clsx('button button--lg', styles.input)}
          placeholder='Your email address'
          ></input>

          <Link
            className="button button--secondary button--lg"
            to="/register">
            Count me in!
          </Link>
        </div>
          <Link
          className="button button--secondary button--lg "
          style={{display: "flex", verticalAlign:"middle", gap: "10px", backgroundColor:"rgb(236, 55, 80)"}} 
          to={"/register"}>

            <img loading="lazy" src="https://assets.hackclub.com/icon-square.svg" alt="Hack Club logo" height="30" width="30"></img>
            Count me in with HCA!
          </Link>
        </div>


        
      </div>
    </header>
  );
}

function FaqSection(): ReactNode {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faqHeader}>
          <Heading as="h2" className={styles.faqTitle}>
            FAQ
          </Heading>
          <p className={styles.faqSubtitle}>
            Quick answers to questions you may have.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{item.question}</summary>
              <div className={styles.faqAnswer}>{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection(): ReactNode {
  return (
    <section className={styles.howItWorksSection}>
      <div className="container">
        <div className={styles.faqHeader}>
          <Heading as="h2" className={styles.faqTitle}>
            How does it work?
          </Heading>
          <p className={styles.faqSubtitle}>
            Create your custom Balatro mod.
          </p>
        </div>

        <div className={styles.stepsList}>
          {workSteps.map((step, index) => (
            <article key={step.title} className={styles.stepCard}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <Heading as="h3" className={styles.stepTitle}>
                {step.title}
              </Heading>
              <p className={styles.stepDescription}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Make a mod: Balatro`}
      description="Create a Joker, get a deck!">
      <HomepageHeader />
      <main>

        <CardsSection/>
        <HowItWorksSection />
        <FaqSection />

      </main>
    </Layout>
  );
}

export function CardsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      key: 'rewards',
      title: 'Ages 13-18: Learn Balatro modding, get rewards',
      body: (
        <>
          Build your own Balatro mod and earn a deck of{' '}
          <a href='https://www.fangamer.com/products/balatro-playing-cards' target='_blank' rel='noreferrer'>
            Balatro Playing Cards
          </a>
          {' '}plus a <b>custom keychain</b>.
        </>
      ),
      content: (
        <div className="row row--align-center">
          <div className="col col--5" style={{maxHeight: "100%"}}>
            <img
              src="/img/playing-cards-no-bg-16-9.png"
              alt="Balatro playing cards"
              className={clsx("img-fluid", styles.cardsimg)}
              loading="lazy"
              style={{maxWidth: "100%",
                height: "100%"

              }}
            />
          </div>
          <div className="col col--7">
            <h3 className="margin-bottom--sm">Ages 13-18: Learn Balatro modding, get rewards</h3>
            <p className="margin-bottom--md">
              Build your own Balatro mod and earn a deck of{' '}
              <a href='https://www.fangamer.com/products/balatro-playing-cards' target='_blank' rel='noreferrer'>
                Balatro Playing Cards
              </a>
              {' '}plus a <b>custom keychain</b>.
            </p>
            <Link className="button button--primary" to="/docs/intro">
              Read the guide!
            </Link>
          </div>
        </div>
      ),
    },
    ...ExistingMods.map((mods) => ({
      key: mods.toString(),
      title: 'Build stuff like this',
      body: (
        <>
          Learn the basics, then put your own spin on it. You can! <br/> These are some mods built by the Balatro community
        </>
      ),
      content: mods.map((mod) => (
        <a href={mod.url} target="_blank" rel="noreferrer" className={styles.modSpotlight}>
          <img src={mod.image} alt={mod.name} loading="lazy" className={styles.modSpotlightImage} />
          <div>
            <p className={styles.modSpotlightName}>{mod.name}</p>
            <p className={styles.modSpotlightAuthor}>by {mod.author}</p>
          </div>
        </a>
      )),
    })),
  ];
  const totalSlides = slides.length;

  const getRelativePosition = (index: number): number => {
    const raw = index - activeSlide;
    if (raw > totalSlides / 2) {
      return raw - totalSlides;
    }
    if (raw < -totalSlides / 2) {
      return raw + totalSlides;
    }
    return raw;
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % totalSlides);
    }, 6500*4);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="margin-vert--lg">
      <div className="container">
        <div className="card shadow--md">
          <div className="card__body">
            <div className={styles.carouselHeader}>
              <p className="text--uppercase text--bold margin-bottom--none"></p>
              <div className={styles.carouselControls}>
                <button
                  type="button"
                  className="button button--sm button--secondary"
                  onClick={() => setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides)}
                  aria-label="Previous slide"
                >
                  {"<"}
                </button>
                <button
                  type="button"
                  className="button button--sm button--secondary"
                  onClick={() => setActiveSlide((activeSlide + 1) % totalSlides)}
                  aria-label="Next slide"
                >
                  {">"}
                </button>
              </div>
            </div>

            <div className={styles.carouselViewport3d}>
              <div className={styles.carouselTrack3d}>
                {slides.map((slide, index) => {
                  const position = getRelativePosition(index);
                  const isVisible = Math.abs(position) <= 1;
                  const transform =
                    position === 0
                      ? 'translateX(0) translateZ(36px) rotateY(0deg) scale(1)'
                      : position < 0
                        ? 'translateX(-58%) translateZ(-70px) rotateY(22deg) scale(0.88)'
                        : 'translateX(58%) translateZ(-70px) rotateY(-22deg) scale(0.88)';

                  return (
                    <article
                      key={slide.key}
                      className={styles.carouselSlide3d}
                      style={{
                        transform,
                        opacity: isVisible ? 1 : 0,
                        zIndex: position === 0 ? 3 : 2,
                        pointerEvents: position === 0 ? 'auto' : 'none',
                      }}
                      aria-hidden={position !== 0}
                    >
                      <h3 className="margin-bottom--sm">{slide.title}</h3>
                      <p className="margin-bottom--md">{slide.body}</p>
                      {slide.content}
                    </article>
                  );
                })}
              </div>
            </div>

            <div className={styles.carouselDots}>
              {slides.map((slide, index) => (
                <button
                  key={slide.key}
                  type="button"
                  className={clsx(styles.carouselDot, index === activeSlide && styles.carouselDotActive)}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const ExistingMods = [[
  {
    url: "https://thunderstore.io/c/balatro/p/JoStro/Parrot_Joker/",
    name: "Parrot Joker",
    image:"https://thunderstore.io/thumbnail-serve/repository/icons/JoStro-Parrot_Joker-0.3.3.png/?width=128&height=128",
    author:"JoStro"
  },
  {
    url: "https://thunderstore.io/c/balatro/p/SirMaiquis/Baldatro/",
    name:"Baldatro",
    image:"https://thunderstore.io/thumbnail-serve/repository/icons/SirMaiquis-Baldatro-1.2.0.png/?width=128&height=128",
    author: "SirMaiquis"
  }
]]