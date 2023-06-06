import Cookies from 'universal-cookie';
import Config from './apiURLs';

const cookies = new Cookies();

export default function SetCookies(response) {
  var cookie = JSON.stringify(response?.headers?.['set-cookie']);
  cookie = cookie.split(';');
  let cookieString = cookie[0].replace('"', ' ').split('=');
  let cookieName = cookieString[0].replace('[', '');
  let cookieValue = cookieString[1];
  var cookieDomain = cookie[1].split('=');
  var cookieExpiry = cookie[3].split('=');
  cookieDomain = cookieDomain[1];
  cookieExpiry = cookieExpiry[1];
  return cookies
    .set(
      `https://${Config.API_URL.split('/')[2]}/${cookieName}${cookieValue}`,
      {
        path: '/api',
        expires: cookieExpiry,
        cookieDomain,
      },
    )
    .then(done => {
      console.log('CookieManager.set =>', done);
    });
}
