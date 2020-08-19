export const mapLanguageLevelToDots = (languageLevel: string) => {
  switch (languageLevel) {
    case 'Ojczysty':
      return 6;
    case 'Zaawansowany':
      return 6;
    case 'Średnio zaawansowany':
      return 4;
    case 'Podstawowy':
      return 2;
    default:
      return 0;
  }
};

export const formatNumber = (number: string) => `+48 ${number?.match(/\d{3}/g)?.join(' ')}`;
