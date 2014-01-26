# ArmedHeroKata

Hozzunk létre egy fantasy világot, ahol hősök vívhatnak egymással!

## 1. elvárás
Hőseink a következőkkel rendelkeznek:
- **HP** (életerő)**:** hősönként változhat, de *max. 30*
- Támadás képesség: mikor használja, ellenfelét *1 HP*-val sebzi
- A halál egyelőre nem definiált, az elesett hős ilyenkor elszállhat egy exception-nel :)

## 2. elvárás
Hőseink fegyvereket szerezhetnek:
- A fegyver növeli a támadási képesség sebzését
- **Fegyverek:** *Kard (sebzés 7)*, *Tőr (sebzés 5)*, *Varázsbot (sebzés 8)*

## 3. elvárás
A fegyverekkel védekeznek is egyszerre:
- A fegyver védőértékét le kell vonni a viselőjére mért sebzésből
- **Védőértékek**: *Kard (2)*, *Tőr (4)*, *Varázsbot (1)*

## 4. elvárás
A **fegyverek sebzése függ az ellenfél fegyverétől**:
- A kard a tőr ellen 8-at sebez
- A varázsbot a kard és a tőr ellen 9-et sebez

## 5. elvárás
A hősök megszerezhetik a rettegett fegyvert, a **Vámpírtőr**-t:
- Az általa okozott sebzésnek megfelelő HP-val gyógyítja viselőjét!