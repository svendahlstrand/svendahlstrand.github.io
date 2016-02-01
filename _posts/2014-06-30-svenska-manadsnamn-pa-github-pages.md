---
layout: post
title: Svenska månadsnamn på GitHub Pages
---

Jag gillar datum med månadsnamnet utskrivet: 30 juni 2014. Men jag har fått brottas med Liquid-mallar för att få dem att lira med Jekyll och GitHub Pages.

Denna Liquid-snutt gör nästan det jag vill men med resultatet "30 June 2014" i stället för "30 *juni* 2014":

{% highlight liquid %}
{% raw %}
{{ page.date | date: "%-d %B %Y" }}
{% endraw %}
{% endhighlight %}

Så jag har kavlat upp ärmarna och kommit fram till följande lösning:

{% highlight liquid %}
{% raw %}
{% comment %} Skapa en array med svenska månadsnamn. {% endcomment %}
{% assign month_names = "januari,februari,mars,april,maj,juni,juli,augusti,september,oktober,november,december" | split: "," %}

{% comment %} Konvertera från månadsnummer till array-index. {% endcomment %}
{% assign i = page.date | date: "%-m" | minus: 1 %}

{% comment %} Skriv ut sidans datum på formen 30 juni 2014. {% endcomment %}
{{ page.date | date: "%-d month %Y" | replace: 'month', month_names[i] }}
{% endraw %}
{% endhighlight %}

Du hittar även en [mindre pratig variant på GitHub] [1].

[1]: https://github.com/svendahlstrand/svendahlstrand.github.io/blob/master/_includes/localized-date.liquid
