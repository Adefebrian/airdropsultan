/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/uptodate.svg';
import Partnership from 'assets/member.svg';
import Subscription from 'assets/beda.svg';
import Support from 'assets/research.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Always Up-To-Date',
    title: 'Always Up-To-Date',
    text:
      'We always provide the latest airdrop, testnet, bounty, etc.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Very Active Members',
    title: 'Very Active Members',
    text:
      'All of airdrop sultan members is real human and very active.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Different from others',
    title: 'Different from others',
    text:
      'We always deliver something different and very early.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Very Reliable',
    title: 'Very Reliable',
    text:
      'We always do research to provide legit airdrops.',
  },
];

export default function KeyFeature() {
  return (
   <section id='feature' sx={{variant: 'section.keyFeature'}}>
     <Container>
       <SectionHeader slogan="About us" title="Why should you join Airdrop Sultan?" />
       <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText} 
              title={item.title}
              text={item.text}/>
          ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
