const fetch = require('node-fetch');

/* eslint-disable no-unused-vars */
exports.Upload = class Upload {
  constructor(options, app) {
    this.options = options || {};
    this.app = app;
  }

  async create(data) {
    const headers = {
      Authorization: `Client-ID ${this.app.get('imgur')}`,
      'Content-Type': 'application/json',
    };
    const response = await fetch('https://api.imgur.com/3/upload', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        image: data.image,
        type: 'base64',
      }),
    });
    const json = await response.json();
    return json;
  }
};
