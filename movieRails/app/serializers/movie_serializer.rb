class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :description, :year, :director, :stars, :image
end
