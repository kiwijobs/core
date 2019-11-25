export interface IBreakpoints extends Array<string> {
  [key: string]: any;
}
export const breakpoints: IBreakpoints = ['576px', '992px', '1200px'];
breakpoints.sm = '576px';
breakpoints.md = '992px';
breakpoints.lg = '1200px';
