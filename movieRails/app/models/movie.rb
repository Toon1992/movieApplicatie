class Movie < ApplicationRecord
  require 'imdb'

#  movies = Imdb::Movie.new("0095016")
Movies = Imdb::Top250.new.movies
# MovieList = []
# # #  index = 0
# movies.each do |movie|
#      filmpie = {
#        title: movie.title,
#        rating: movie.rating,
#        id: 1,
#        stars:movie.cast_characters,
#        director:movie.director,
#        description: movie.plot_summary,
#        year:movie.year
#     }
#
#     MovieList.push(filmpie)
#   end

end
