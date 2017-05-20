const express = require('express');
const request = require('superagent');
const service = express();

require('dotenv').config();

const endpoints = require('./endpoints.json');
const authToken = process.env.API_AUTH_TOKEN;

service.get('/api', (req, res, next) => {
  res.json({ api: 'Hi from the api service' });
});

service.get('/api/movies', (req, res) => {
  request
     .get(endpoints.all)
     .type('json')
     .query({ authToken })
     .end((err, response) => {
       if (err) {
         res.status(500).send(err);
       }

       res.json(response.body);
     });
});

service.get('/api/movies/rank', (req, res) => {
  const { limit, start } = req.query;
  console.log(`numMovies ${limit}, startRankIndex ${start}`);

  request
     .get(endpoints.rank)
     .query({
       authToken,
       startRankIndex: start || 1,
       numMovies: limit || 10,
     })
     .end((err, response) => {
       res.json(response.body);
     });
});

service.get('/api/movies/details', (req, res) => {
  const movieIds = req.query.ids.split(',').map(Number) || [290,3];
  console.log('movieIds', movieIds, typeof movieIds);

  request
     .get(endpoints.details)
     .query({
       authToken,
       movieIds,
     })
     .end((err, response) => {
       res.json(response.body);
     });
});

module.exports = service;
