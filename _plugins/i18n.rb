require('json')

module Jekyll
  # Simple helper for translations. Example usage:
  #
  # {% t my_key %}
  class TranslateTag < Liquid::Tag
    def initialize(tag_name, key, tokens)
      super

      @key = key.strip
    end

    def render(context)
      i18n = context['site.data.i18n']
      language = context['page.language']

      i18n[language][@key] || 'missing_translation'
    end
  end
end

Liquid::Template.register_tag('t', Jekyll::TranslateTag)
