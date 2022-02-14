import 'whatwg-fetch';
import {SERVER_URL, SERVER_PORT} from './../../utils/server/utils';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  url = `${SERVER_URL}/${url}`;
  console.log(url);
  console.log(options);
  var obj = {
    method: options.method,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip,deflate',
      apiKey: ' 20818ebe-9f0f-4492-8384-807df83dc6e4',
      Authorization: `Bearer ${options.token}`,
    },
    body: JSON.stringify(options.body),
  };

  return fetch(url, obj)
    .then(function (res) {
      return res.json();
    })
    .then(function (resJson) {
      return resJson;
    })
    .catch((err) => {
      console.log(err);
    });
}
