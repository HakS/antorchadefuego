import { NextRouter } from "next/router";

export const removeLastDot = (str: string) => {
  while(str.charAt(str.length-1) == '.') {
    str = str.substr(0, str.length-1);
  }
  return str;
}

export const currentDomain = process.env.URL || ''

export const getAbsUrl = (router?: NextRouter) => `${currentDomain}${router ? (router.asPath === "/" ? "": router.asPath) : ''}`.split('?')[0]
