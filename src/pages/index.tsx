import React from 'react';
import { HeadFC, PageProps, HeadProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '@/components/Common/Layout';
import { SEO } from '@/components/Common/Seo';
import { ReferencesSlider } from '@/components/HomePage/ReferencesSlider';
import { PriceSection } from '@/components/HomePage/PriceSection';
import * as styles from '@/pages/index.styles';
import { OfferSection } from '@/components/HomePage/OfferSection';
import { Flags } from '@/components/Flags';
import { PromotionsSection } from '@/components/HomePage/PromotionsSection';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const IndexPage: React.FC<PageProps> = () => {

  return (
    <main className={styles.mainSectionStyles}>
      <Layout>
        <section className={styles.heroSectionStyles}>
          <div className={styles.heroWrapperStyles}>
            <StaticImage
              src="../assets/svg/perfectText.svg"
              alt="perfectText"
              quality={100}
              className={styles.heroPerfectTextImageStyles}
            />
            <h2 className={styles.heroTitleStyles}>Perfekcyjna nauka języków obcych</h2>
            <div className={styles.heroTitleEndStyles}>od 2008 roku</div>
            <div className={styles.heroInfoTextStyles}>Czy wiesz, że dzieli Cię tylko kilka kroków od profesjonalnej nauki języka obcego? Zadzwoń lub napisz już dzisiaj, przedstaw swoje oczekiwania, umów termin pierwszej lekcji (bez zobowiązań) i oczekuj na lektora w wybranym miejscu (Twój dom, a może miejsce pracy?). Od tej chwili poczuj się pewniej i posługuj się językiem obcym swobodniej!</div>
            <button className={styles.heroButtonStyles}>
              <AnchorLink
                to={'/#contact'}
                title='Wykonaj pierszy krok'
              />
            </button>
          </div>
          <StaticImage
            src="../assets/images/london.jpg"
            alt="london"
            quality={100}
            className={styles.heroBackgroundImageStyles}
          />
        </section>

        <section className={styles.flagsSectionStyles}>
          <Flags />
        </section>

        <section id="offer" className={styles.offerSectionStyles}>
          <OfferSection />
        </section>

        <section id="pricing" className={styles.pricingSectionStyles}>
          <PriceSection />
        </section>

        <section id="references" className={styles.referencesSliderSectionStyles}>
          <ReferencesSlider />
        </section>

        <section id="promotions" className={styles.promotionsSectionStyles}>
          <PromotionsSection />
        </section>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ location }: HeadProps) => (
  <SEO
    title="Perfekcyjna nauka języków obcych od 2008 roku"
    description="Czy wiesz, że dzieli Cię tylko kilka kroków od profesjonalnej nauki języka obcego? Zadzwoń lub napisz już dzisiaj, przedstaw swoje oczekiwania, umów termin pierwszej lekcji (bez zobowiązań) i oczekuj na lektora w wybranym miejscu (Twój dom, a może miejsce pracy?). Od tej chwili poczuj się pewniej i posługuj się językiem obcym swobodniej!"
    pathname={location.pathname}
  />
);
