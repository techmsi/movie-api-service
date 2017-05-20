# movie-api-service
* Movie API service

## Endpoints
### Get all movies

`/api/movies`

### Get all movies by rank
`/api/movies/rank`

#### Specify starting rank and limit
`/api/movies/rank?start=2&limit=4`

* start defaults to 1
* limit defaults to 10

### Get movies by Id
`/api/movies/details/?ids=563,577`
