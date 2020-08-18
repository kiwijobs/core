import React, { FC } from 'react';
import { Text, BoxProps } from '../../../quarks';
import { Page, Timeline } from '../../../atoms';

export const Skills: FC<ISkillsProps> = ({ skills, heading, educationDescription }) => (
  <>
    <Page.Heading>{heading}</Page.Heading>
    {educationDescription}
    <Timeline>
      {typeof skills === 'object' ? (
        skills?.map(item => (
          <Timeline.Point key={item.id}>
            <Text fontWeight="bold" as="p" color="1">
              {item.title}
            </Text>
            <Text as="p">{item.subtitle}</Text>
            <Text as="p">{item.range}</Text>
          </Timeline.Point>
        ))
      ) : (
        <Timeline.Point>{skills}</Timeline.Point>
      )}
    </Timeline>
  </>
);

interface ISkillsProps extends BoxProps {
  heading: string;
  skills: { id: number; title: string; subtitle: string; range: string | null }[] | string | null;
  educationDescription?: JSX.Element;
}
