export enum rgb {
  coolGrey = 'rgba(154,158,175,1)',
  dark = 'rgba(40,50,56,1)',
  gunmetal = 'rgba(68,75,89,1)',
  slateGrey = 'rgba(90,100,114,1)',
  steel = 'rgba(133,136,149,1)',
  coolGreyTwo = 'rgba(187,189,202,1)',
  cloudyBlue = 'rgba(204,206,220,1)',
  paleGrey = 'rgba(228,230,237,1)',
  paleGreyTwo = 'rgba(242,243,247,1)',
  white = 'rgba(255,255,255,1)',
  turquoiseGreen = 'rgba(0,230,118,1)',
  viridian = 'rgba(35,132,113,1)',
  bluishGreen = 'rgba(21,162,122,1)',
  greenBlue = 'rgba(8,191,130,1)',
  greenTeal = 'rgba(16,184,116,1)',
  tealishGreen = 'rgba(4,210,124,1)',
  duckEggBlue = 'rgba(219,250,232,1)',
  pinkRed = 'rgba(245,0,87,1)',
  pinky = 'rgba(251,153,188,1)',
  lightPink = 'rgba(254,231,239,1)',
  marigold = 'rgba(255,193,7,1)',
  tangerine = 'rgba(255,151,23,1)',
  lightishBlue = 'rgba(83,109,254,1)',
  softBlue = 'rgba(109,118,229,1)',
  lightBlueGrey = 'rgba(222,226,245,1)',
  paleGreyThree = 'rgba(248,249,253,1)',
  periwinkleBlue = 'rgba(140,158,255,1)',
  red = 'rgba(255,0,0,1)',
  bahamaYellow = 'rgba(255,231,157,1)',
}

// Color = Color * alpha + 255 * (1 - alpha);
// function hexify(color) {
//   var values = color
//     .replace(/rgba?\(/, '')
//     .replace(/\)/, '')
//     .replace(/[\s+]/g, '')
//     .split(',');
//   var a = parseFloat(values[3] || 1),
//       r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
//       g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
//       b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
//   return `rgb(${r},${g},${b})`
// }
export const rgba = (alpha = 1) =>
  Object.entries(rgb).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value.replace(',1)', `,${alpha})`),
    }),
    {} as typeof rgb
  );

export type TColor = keyof typeof rgb | rgb;
