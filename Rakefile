require 'html-proofer'

task :test do
  sh 'bundle exec jekyll clean && bundle exec jekyll build'
  HTMLProofer.check_directory('./_site',
                              empty_alt_ignore: true,
                              check_html: true,
                              only_4xx: true,
                              url_ignore: [
                                'https://indieauth.com/auth',
                                'https://micropubs.herokuapp.com/micropub/main'
                              ]).run
end

task default: [:test]
