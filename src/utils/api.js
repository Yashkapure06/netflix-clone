// import path from 'path';
// import qs from 'query-string';
import URLSearchParams from 'url-search-params';

class Api {
  constructor({ baseUrl, searchParams }) {
    this._baseUrl = baseUrl;
    this._baseSearchParams = searchParams || {};
  }

  async get(endpoint, params) {
    const hitUrl = this._generateUrl(endpoint, params);
    const response = await fetch(hitUrl, {
      method: 'GET',
    });

    return this._parseJsonResponse(response);
  }

  async _parseJsonResponse(response) {
    let json = null;
    try {
      json = await response.json();
    } catch (e) {
      console.log(e);
    }

    if (response.ok) {
      return json;
    } else {
      const error = new Error(response.statusText);
      error.isFromServer = true;
      error.response = response;
      error.responseJson = json;

      throw error;
    }
  }

  _generateUrl(endpoint, params) {
    const search = new URLSearchParams(this._baseSearchParams);
    // const search = qs.stringify({ ...this._baseSearchParams, ...params });
    // const url = path.join(this._baseUrl, endpoint);
    const url = `${this._baseUrl}${endpoint}`;
    return `${url}?${search}`;
    // return [url, search].join('?');
  }
}

export default Api;
