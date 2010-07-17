module Jekyll
  module Filters
    def date(input, format)
      months = {
        'January' => 'januari',
        'February' => 'februari',
        'Mars' => 'mars',
        'April' => 'april',
        'May' => 'maj',
        'June' => 'juni',
        'July' => 'juli',
        'August' => 'augusti',
        'September' => 'september',
        'Oktober' => 'oktober',
        'November' => 'november',
        'December' => 'december'
      }

      input = input.strftime(format)

      months.each { |pattern, replacement| input.gsub!(pattern, replacement) }

      return input
    end
  end
end