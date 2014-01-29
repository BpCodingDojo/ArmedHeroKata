# ArmedHeroKata

Hozzunk létre egy fantasy világot, ahol hősök küzdhetnek meg egymással!

## 1. elvárás
Lehetnek hőseink, akik a következő tulajdonságokkal rendelkeznek:
- *HP (életerő):* hősönként változhat, de *max. 30*
- Támadás képesség: mikor használja, ellenfelét 1 HP-val sebzi
- A halál egyelőre nem definiált, az elesett hős ilyenkor elszállhat egy exception-nel :)

## 2. elvárás
Hőseink fegyvereket szerezhetnek:
- A fegyver növeli a támadási képesség sebzését
- *Fegyverek:* *Kard (damage 7)*, *Tőr (damage 5)*, *Varázsbot (damage 8)*

## 3. elvárás
A harcos mellett a csatában részt vehetnek *Papok*. A különleges képességük a gyógyítás, ekkor 3 HP-t növelhetnek bárkin, akár magukon is. A papok meglehetősen pacifisták, így ők nem támadhatnak vagy fegyverkezhetnek - de ez sajnos a harcosokat nem érdekli, így ők előszeretettel ütlegelik a nekik nem tetsző atyákat!

## 4. elvárás
A harcosok fegyvereikkel védekeznek is:
- Támadás esetén a fegyver védőértékét le kell vonni a viselőjére mért sebzésből
- *Védőértékek*: *Kard (defense 2)*, *Tőr (defense 4)*, *Varázsbot (defense 1)*

## 5. elvárás
A hősök megszerezhetik a rettegett fegyvert, a *Vámpírtőr*-t:
- Az általa okozott sebzésnek megfelelő HP-val gyógyítja viselőjét!
