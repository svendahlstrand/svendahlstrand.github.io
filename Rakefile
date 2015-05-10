require 'html/proofer'

HREFS_TO_IGNORE = [/.+svendahlstrand\.github\.io.+/, /.+localhost.+/]

task :test do
  sh 'bundle exec jekyll build'
  HTML::Proofer.new('./_site', empty_alt_ignore: true, check_html: true, href_ignore: HREFS_TO_IGNORE).run
end

task :default => [:test]
