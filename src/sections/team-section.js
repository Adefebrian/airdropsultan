/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

import Member1 from 'assets/team/adefebrian.png';
import Member2 from 'assets/team/dexa.png';
import Member3 from 'assets/team/rizal.png';
import Member4 from 'assets/team/hanif.png';
import Member5 from 'assets/team/sultan.png';
import Member6 from 'assets/team/ryujin.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Ade Febrian',
    title: 'Ade Febrian',
    designation: 'Founder & Marketing Manager',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://facebook.com/adefebrianpro',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaTelegramPlane />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Dexa',
    title: 'Dexa',
    designation: 'Community Manager',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Dwi Rizaldy',
    title: 'Dwi Rizaldy',
    designation: 'Social Media Specialist',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Hanif Al-Irsyad',
    title: 'Hanif Al-Irsyad',
    designation: 'Grapich Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member5,
    altText: 'Brian',
    title: 'Brian',
    designation: 'Full Stack Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member6,
    altText: 'Ryujin',
    title: 'Ryujin',
    designation: 'Advertising Specialist',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader 
          slogan="our team"
          title="The most qualified and tallented individuals"
          />
          <Grid sx={styles.grid}>
            {data.map((item) => (
              <TeamCard 
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
                social={item.socialProfile}
              />
            ))}
          </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, 6, null, 4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
