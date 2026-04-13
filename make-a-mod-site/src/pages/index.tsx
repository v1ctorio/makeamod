import type {ReactNode} from 'react';
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
    title: 'Install a code editor',
    description: <>Set up VS Code so you have a place to write and edit your mod files.</>,
  },
  {
    title: 'Install Hackatime',
    description: (
      <>
        Track your time with Hackatime to stay eligible for prizes.
      </>
    ),
  },
  {
    title: 'Follow the guide',
    description: <>Work through the beginner-friendly guide and learn the basics step by step.</>,
  },
  {
    title: 'Add features own your own',
    description: <>Make it yours by adding a new idea, mechanic, or tweak beyond the tutorial. Make a real mod that you'd like people to use.</>,
  },
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
          {siteConfig.title}
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
            A simple path from setup to your first custom mod.
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
        <HomepageFeatures />
        <HowItWorksSection />
        <FaqSection />

<header className='header'>
<div className='container'>
      <p>
      Are you between 13-18 years old? Learn how to make your own Balatro mod and get a deck of <a href='https://www.fangamer.com/products/balatro-playing-cards'>Balatro Playing Cards</a>
      </p>


</div>
</header>
      </main>
    </Layout>
  );
}
