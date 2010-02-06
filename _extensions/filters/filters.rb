module Jekyll
  module Filters
    def localized_date(date, string)
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

      date = date.strftime(string)

      months.each { |pattern, replacement| date.gsub!(pattern, replacement) }
      
      date
    end
  end
end