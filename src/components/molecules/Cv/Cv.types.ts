export interface ICvTypes {
  id: string;
  avatar: {
    default: string;
  };
  name: string;
  lastname: string;
  fullname: string;
  birthDate: string | null;
  phoneNumber: string;
  email: string;
  applicationsCount: number;
  languages: (ICvLanguage | null)[];
  aboutMe: string | null;
  employeeDetails: {
    student: boolean | null;
    fulltimeAvailability: boolean | null;
    sanitationBook: boolean | null;
    noExperience: boolean | null;
    noDrivingLicences: boolean | null;
    educationLevel: string | null;
  };
  drivingLicences: (string | null)[];
  studentStatus: string | null;
  workingHours: string | null;
  sanitationBook: string | null;
  educationLevel: string | null;
  experiences: (ICvExperience | null)[];
  educations: (ICvEducation | null)[];
}

export interface ICvLanguage {
  id: number;
  name: string;
  level: string;
}

export interface ICvExperience {
  id: number;
  position: string;
  companyName: string;
  startDate: string;
  endDate: string | null;
}

export interface ICvEducation {
  id: number;
  fieldOfStudy: string;
  universityName: string;
  startDate: string;
  endDate: string | null;
}
