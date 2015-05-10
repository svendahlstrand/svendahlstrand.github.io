require 'html/proofer'

task :test do
  sh 'bundle exec jekyll build'
  HTML::Proofer.new('./_site', empty_alt_ignore: true, check_html: true).run
end

task :default => [:test]
