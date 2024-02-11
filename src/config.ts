// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = 'Yuting';
export const SITE_DESCRIPTION =
  'I\'m Yuting, welcome to my corner of the internet.';
export const MY_NAME = 'Yuting';
export const TWITTER_HANDLE = '@wyuting2011';

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
