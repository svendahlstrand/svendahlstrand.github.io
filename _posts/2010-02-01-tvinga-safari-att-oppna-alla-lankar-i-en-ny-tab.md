---
layout: post
title: Tvinga Safari att öppna alla länkar i en ny flik
tags: archived
language: sv
---

Jag väljer ofta Safari när jag surfar, bland annat för att den känns lite kvickare än Firefox. Det finns dock några grejer som irriterar mig och allra mest sättet Safari hanterar flikar på. Hur man än ställer inställningarna i webbläsaren finns det alltid några länkar som tycker det är roligt att öppnas i ett nytt fönster istället för i en ny flik.

Som tur är finns det en lätt lösning på problemet, det är bara att skriva in följande kommando i terminalen, men jag kan inte fatta varför det inte finns som en inställning istället. Det kanske är jag som letar dåligt?

{% highlight bash %}
defaults write com.apple.Safari TargetedClicksCreateTabs -bool true
{% endhighlight %}
