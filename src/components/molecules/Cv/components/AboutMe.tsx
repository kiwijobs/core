import React, { FC } from 'react';
import { Text } from '../../../quarks';
import { ICvTypes } from '../Cv.types';
import { Page } from '../../../atoms';

export const AboutMe: FC<IAboutMe> = ({ aboutMe }) => (
  <>
    <Page.Heading>O mnie</Page.Heading>
    <Text fontScale={2}>{aboutMe}</Text>
  </>
);

interface IAboutMe extends Pick<ICvTypes, 'aboutMe'> {}
