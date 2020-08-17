import React, { FC } from 'react';
import { Page } from '../../../atoms';
import { ICvTypes } from '../Cv.types';

export const BasicData: FC<IBasicDataProps> = ({
  studentStatus = '',
  workingHours = '',
  sanitationBook = '',
  drivingLicences = [],
}) => {
  const isEmpty = !(studentStatus || workingHours || sanitationBook || drivingLicences.length);
  return isEmpty ? (
    <></>
  ) : (
    <>
      <Page.Heading>Informacje podstawowe:</Page.Heading>
      {studentStatus && (
        <Page.Element label="Status ucznia/studenta: ">{studentStatus}</Page.Element>
      )}
      {workingHours && <Page.Element label="Dostępność: ">{workingHours}</Page.Element>}
      {sanitationBook && (
        <Page.Element label="Książeczka Sanepidu: ">{sanitationBook} </Page.Element>
      )}
      {drivingLicences?.length ? (
        <Page.Element label="Prawo Jazdy: ">{drivingLicences?.join(', ')}</Page.Element>
      ) : null}
    </>
  );
};

interface IBasicDataProps
  extends Pick<ICvTypes, 'studentStatus' | 'workingHours' | 'sanitationBook' | 'drivingLicences'> {}
