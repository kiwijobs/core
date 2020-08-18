import React, { FC } from 'react';
import { Box, BoxProps } from '../../quarks';
import { AboutMe, BasicData, DateDescription, Languages, PersonalCard, Skills } from './components';

export const Cv: TCv = props => <Box bg="white" fontScale={2} {...props} />;

Cv.AboutMe = AboutMe;
Cv.BasicData = BasicData;
Cv.DateDescription = DateDescription;
Cv.Languages = Languages;
Cv.PersonalCard = PersonalCard;
Cv.Skills = Skills;

type TCv = FC<BoxProps> & {
  AboutMe: typeof AboutMe;
  BasicData: typeof BasicData;
  DateDescription: typeof DateDescription;
  Languages: typeof Languages;
  PersonalCard: typeof PersonalCard;
  Skills: typeof Skills;
};
