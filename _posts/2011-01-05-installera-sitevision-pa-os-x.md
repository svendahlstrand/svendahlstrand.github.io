---
layout: post
title: Installera SiteVision på OS X
---
![](/images/sitevision.png)

Som utvecklare i [SiteVision] [1] är det nästan nödvändigt att ha en lokal server som du kan labba fritt med. Här guidar jag dig genom en installation av SiteVision 2.6 på en Mac som kör OS X 10.6 Snow Leopard.

## Vad du behöver

* SiteVision-installation (sitevision-2.6.xxxxx.zip)
* Utvecklarlicens (SiteVision-Utveckling-License-xxxxxxxxx.license.zip)

SiteVision-installation och licens bör du redan ha i din ägo. I annat fall tar du [kontakt med SiteVision] [2].

## Installation

SiteVision kan du lägga var du vill men för enkelhetens skull installerar jag i min hemkatalog _/Users/Sven_ i denna guide. Öppna Terminal.app, ställ dig i den katalog där du lagt installationsfilen och packa upp zip-arkivet.

{% highlight bash %}
$ cd /Users/Sven/Downloads
$ unzip sitevision-2.6.xxxxx.zip -d /Users/Sven/sitevision
{% endhighlight %}

Gå till katalogen där du packade upp SiteVision och gör filerna i bin körbara.

{% highlight bash %}
$ cd /Users/Sven/sitevision
$ chmod +x bin/*
{% endhighlight %}

## Konfiguration

Det finns en operativsystemsspecifik konfigurationsfil som SiteVision läser in när servern startar. Den innehåller sökvägar till data- och loggfiler. Skapa upp en konfigurationsfil för Mac genom att kopiera den som finns för GNU/Linux.

{% highlight bash %}
$ cp custom/conf/linux.properties custom/conf/mac.properties
{% endhighlight %}

Öppna _mac.properties_ i en textredigerare och ändra sökvägarna till din SiteVision-installation.

{% highlight bash %}
$ nano custom/conf/mac.properties

# Location of /data
sitevision.data=/Users/Sven/sitevision/data

#Location of /data/log
sitevision.log=/Users/Sven/sitevision/data/log

#Location of  htmlexport
sitevision.export.html=/Users/Sven/sitevision/data/export/html
{% endhighlight %}

Öppna även *sitevision_linux.conf* och se till att sökvägen är rätt där.

{% highlight bash %}
$ nano custom/conf/service/sitevision_linux.conf

wrapper.java.additional.4=-Djava.io.tmpdir=/Users/Sven/sitevision/data/temp
{% endhighlight %}

## Starta upp SiteVision

Installationen är färdig - nu är det bara att starta upp SiteVision.

{% highlight bash %}
$ cd /Users/Sven/sitevision/bin
$ sudo ./sitevision console
{% endhighlight %}

Om allt fungerar kommer det att rassla till en hel del i loggen. Servern är igång när du ser _Server startup in xxxxx ms_. För att stoppa SiteVision trycker du _Ctrl + c_.

Nu kan du styra din webbläsare mot [http://localhost/editor] [3] och logga in som systemanvändare med _system/system_.

## Lägg till licens

Att lägga till din utvecklarlicens är lätt:

1. Högerklicka på _Serverobjektet_ och välj _Egenskaper > Serverinställningar_.
2. Gå till fliken _Licens_ och ladda upp din fil genom att klicka på plusknappen.
3. Starta om din webbläsare för att installera licensen och se de moduler som du har tillgång till.

[1]: http://www.sitevision.se
[2]: http://sitevision.se/Om-foretaget/Kontakta-oss.html
[3]: http://localhost/editor
