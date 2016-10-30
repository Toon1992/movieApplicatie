# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movie1 = Movie.create(
  title:'Shawshank redemption',
  rating:9.2,
  description:'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  year:1994,
  director:'Frank Darabont',
  stars: 'Tim Robbins, Morgan Freeman, Bob Gunton',
  image:'Shawshank redemption'
)

movie2 = Movie.create(
    title:'The Godfather',
    rating:9.2,
    description:'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    year:1972,
    director:'Francis Ford Coppola',
    stars: 'Marlon Brando, Al Pacino, James Caan',
    image:'The Godfather'
)

movie3 = Movie.create(
    title:'The Godfather II',
    rating:9.0,
    description:'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
    year:1974,
    director:'Francis Ford Coppola',
    stars: 'Al Pacino, Robert De Niro, Robert Duvall',
    image:'The Godfather II'
)

movie4 = Movie.create(
    title:'The Dark Knight',
    rating:8.9,
    description:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    year:2008,
    director:'Christopher Nolan',
    stars: 'Christian Bale, Heath Ledger, Aaron Eckhart',
    image:'The Dark Knight'
)

movie5 = Movie.create(
    title:'12 Angry Men',
    rating:8.9,
    description:'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    year:1957,
    director:'Sidney Lumet',
    stars: 'Henry Fonda, Lee J. Cobb, Martin Balsam',
    image:'12 Angry Men'
)
