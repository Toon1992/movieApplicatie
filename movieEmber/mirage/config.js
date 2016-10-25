export default function() {
  this.namespace = '/api';

  let movies = [
    {
        type: 'movies',
        id: '1',
        attributes: {
          title:'Shawshank redemption',
          rating:9.2,
          description:'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          year:1994,
          director:'Frank Darabont',
          stars: 'Tim Robbins, Morgan Freeman, Bob Gunton',
          image:'Shawshank redemption'
        }
      }, {
        type: 'movies',
        id: '2',
        attributes: {
          title:'The Godfather',
          rating:9.2,
          description:'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
          year:1972,
          director:'Francis Ford Coppola',
          stars: 'Marlon Brando, Al Pacino, James Caan',
          image:'The Godfather'
        }
      }, {
        type: 'movies',
        id: '3',
        attributes: {
          title:'The Godfather II',
          rating:9.0,
          description:'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
          year:1974,
          director:'Francis Ford Coppola',
          stars: ' Al Pacino, Robert De Niro, Robert Duvall',
          image:'The Godfather II'
        }
      }
    ];

  this.get('/movies/:id', function (db, request) {
   return { data: movies.find((movie) => request.params.id === movie.id) };
 });

}

/*let movies =  [{
    id:1,
    title:'Shawshank redemption',
    rating:9.2,
    description:'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    year:1994,
    director:'Frank Darabont',
    stars: 'Tim Robbins, Morgan Freeman, Bob Gunton',
    image:'Shawshank redemption'
  }, {
    id:2,
    title:'The Godfather',
    rating:9.2,
    description:'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    year:1972,
    director:'Francis Ford Coppola',
    stars: 'Marlon Brando, Al Pacino, James Caan',
    image:'The Godfather'
  }, {
    id:3,
    title:'The Godfather II',
    rating:9.0,
    description:'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
    year:1974,
    director:'Francis Ford Coppola',
    stars: ' Al Pacino, Robert De Niro, Robert Duvall',
    image:'The Godfather II'
  }];*/
