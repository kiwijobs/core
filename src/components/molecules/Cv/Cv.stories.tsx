import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text } from '../../quarks';
import { Container } from '../../atoms';
import { Cv } from './Cv';
const mockData = {
  personalData: {
    fullname: 'Pat Garret',
    avatar: {
      default: 'https://static.kiwijobs.pl/placeholder/company-logo-placeholder.png',
    },
    birthDate: '2000-10-10',
    email: 'pat.garret@kiwi.pl',
    phoneNumber: '123123123',
    studentStatus: 'Tak',
    workingHours: 'Pełen etat',
    sanitationBook: 'Tak',
    drivingLicences: ['A', 'B', 'C'],
  },
  aboutMe:
    'Ważne jest dla mnie robienie tego, co uwielbiam. Spontaniczność i chwytanie nieuchwytnego. Emocje i nieskrywana radość. Prawdziwość i bycie sobą. Robienie tego, co niekoniecznie poprawne politycznie, ale swoje i prosto z serca. Z charakterem, a jak trzeba – to i z pazurem.',
  educations: [
    {
      id: 1,
      fieldOfStudy: 'X',
      startDate: '2002-01-01',
      endDate: '2002-02-02',
      universityName: 'Y',
    },
    {
      id: 2,
      fieldOfStudy: 'ZZZZ',
      startDate: '2002-01-01',
      endDate: '2002-02-02',
      universityName: 'ŻŻŻŻŻŻ',
    },
  ],
  experiences: [],
  educationLevel: 'Podstawowe',
  languages: [
    {
      id: 1,
      name: 'Polski',
      level: 'Podstawowy',
    },
    {
      id: 2,
      name: 'Angielski',
      level: 'Zaawansowany',
    },
  ],
  createdAt: '2020-12-05 15:15:55',
};

const experience = mockData.experiences.length
  ? mockData.experiences.map(({ id, position, startDate, endDate, companyName }) => {
      return {
        id,
        title: position,
        subtitle: companyName,
        range: `${startDate} - ${endDate}`,
      };
    })
  : 'Szuka pierwszej pracy';

const education = mockData.educations.length
  ? mockData.educations.map(({ id, fieldOfStudy, startDate, endDate, universityName }) => {
      return {
        id,
        title: fieldOfStudy,
        subtitle: universityName,
        range: `${startDate} - ${endDate}`,
      };
    })
  : null;

storiesOf('Molecules|Cv', module).add('Skills edu', () => {
  storiesOf('Molecules|Cv', module).add('PersonalCard', () => (
    <Container m={3} bg="white" minHeight="50vh">
      <Box bg="white" width={[1, 0.5]}>
        <Cv>
          <Cv.PersonalCard {...mockData.personalData} />
        </Cv>
      </Box>
    </Container>
  ));

  storiesOf('Molecules|Cv', module).add('BasicData', () => (
    <Container m={3} bg="white" minHeight="50vh">
      <Box bg="white" width={[1, 0.5]}>
        <Cv>
          <Cv.BasicData {...mockData.personalData} />
        </Cv>
      </Box>
    </Container>
  ));

  return (
    <Container m={3} bg="white" minHeight="50vh">
      <Box bg="white" width={[1, 0.5]}>
        <Cv>
          <Cv.Skills
            skills={education}
            heading="Wykształcenie"
            educationDescription={
              <Text as="p" mb={2} mt={0} color="2">
                Poziom wykształcenia: <Text color="1">{mockData.educationLevel}</Text>
              </Text>
            }
          />
        </Cv>
      </Box>
    </Container>
  );
});

storiesOf('Molecules|Cv', module).add('Skills exp', () => {
  return (
    <Container m={3} bg="white" minHeight="50vh">
      <Box bg="white" width={[1, 0.5]}>
        <Cv>
          <Cv.Skills skills={experience} heading="Doświadczenie" />
        </Cv>
      </Box>
    </Container>
  );
});

storiesOf('Molecules|Cv', module).add('Skills languages', () => {
  return (
    <Container m={3} bg="white" minHeight="50vh">
      <Box bg="white" width={[1, 0.5]}>
        <Cv>
          <Cv.Languages languages={mockData.languages} />
        </Cv>
      </Box>
    </Container>
  );
});

storiesOf('Molecules|Cv', module).add('About me', () => {
  return (
    <Container m={3} bg="white" minHeight="50vh">
      <Box bg="white" width={[1, 0.5]}>
        <Cv>
          <Cv.AboutMe aboutMe={mockData.aboutMe} />
        </Cv>
      </Box>
    </Container>
  );
});

storiesOf('Molecules|Cv', module).add('CvCreate', () => {
  return (
    <Container m={3} bg="white" minHeight="50vh">
      <Box bg="white" width={[1, 0.5]}>
        <Cv>
          <Cv.DateDescription createdAt={mockData.createdAt} />
        </Cv>
      </Box>
    </Container>
  );
});

storiesOf('Molecules|Cv', module).add('CV', () => {
  return (
    <Container m={3} bg="white" minHeight="50vh">
      <Box bg="white" width={[1, 0.5]}>
        <Cv>
          <Cv.PersonalCard {...mockData.personalData} />
          <Cv.BasicData {...mockData.personalData} />
          <Cv.Skills skills={experience} heading="Doświadczenie" />
          <Cv.Skills
            skills={education}
            heading="Wykształcenie"
            educationDescription={
              <Text as="p" mb={2} mt={0} color="2" fontScale={2}>
                Poziom wykształcenia: <Text color="1">{mockData.educationLevel}</Text>
              </Text>
            }
          />
          <Cv.Languages languages={mockData.languages} />
          <Cv.AboutMe aboutMe={mockData.aboutMe} />
          <Cv.DateDescription createdAt={mockData.createdAt} />
        </Cv>
      </Box>
    </Container>
  );
});
