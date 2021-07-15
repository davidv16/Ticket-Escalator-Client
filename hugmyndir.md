## user view

notandi loggar sig inn í kerfið
hann sér dashboard sem inniheldur helstu tölur
   
# dashboard
  - hve margar beiðnir eru opnar
  - hve margar beiðnir eru assignaðar á notandann
  - meðal svartími beiðna áður en tæknimaður tekur við þeim
  - meðal líftími beiðna.
  - verkbeiðna kóngur (viðskiptavinur)
  - verkbeiðna köngur (tæknimaður)
  - nýjustu beiðnir

á vinstri hönd er navigation
# navigation
  1. Dashboard
  2. Verkbeiðnir
  3. Viðskiptavinir
  4. Vörur
  5. Reikningur

# Allar verkbeiðnir:
hann ýtir á verkbeiðnir
þar sér hann 
   - töflu með öllum sínum verkbeiðnum
   - leit vinstra meginn fyrir ofan töflu
   - "skrá verkbeiðni" í hægra horninu fyrir ofan töflu
fyrir ofan töflu eru fliparnir
  - mín verk
  - opin verk
  - lokuð verk
  - öll verk
  - og sortering á öllum dálkum
Hver verkbeiðnaröð inniheldur
  - id
  - Stutta lýsingu
  - viðskiptavin
  - tæknimann
  - stofndagsetningu
  - hve gömul í dögum með grænum, gulum eða rauðum lit
Hann ýtir á verkbeiðnina og fær upp síðu fyrir verkbeiðnina.

# Single verkbeiðna síða:
þar eru upplýsingar um beiðnina
  - id beiðnar (óbreytanlegt)
  - stofndagur (óbreytanlegt)
  - stofnandi (auto populate eftir þeim sem er loggaður inn)(óbreytanlegt)
  - tæknimaður (ekki assignað endilega strax)
  - vara
    - serial númer
  - bilanalýsing
  - viðskiptavinur
    - staðsetning
    - tengiliður
      - símanúmer
      - email
Fyrir neðan þetta er tafla af viðgerðar aðgerðum, hver röð er ein aðgerð.
Hver röð inniheldur
   - dagsetningu
   - hvað var gert
   - tæknimann/notanda
   - dagvinnutíma
   - yfirvinnutíma
   - akstur
Fyrir neðan töfluna neðst undir dálkunum eru samtölur fyrir 
  - dagvinnu 
  - yfirvinnu
  - akstur

Fyrir ofan beiðnina í hægra horninu er takki sem stendur á "loka beiðni", þá poppar upp modalgluggi með dagsetningu þar sem maður velur dagsetningu lokunar.
Svo eftir það kemur spurning, viltu láta viðskiptavin vita með tölvupósti? Þar getur maður valið já eða nei(ég hringi í hann). Eftir það er manni stýrt aftur á dashboard.
Eftir að beiðni er lokað breytist "loka beiðni" takkinn í "opna beiðni" því ekki er hægt að breyta beiðni eftir að henni hefur verið lokað.

Fyrir neðan viðgerðar töfluna kemur tafla af smáefni, í henni er:
  -  fjöldi
  -  part númer
  -  parta nafn/lýsing
  -  verð án vsk (reiknar sjálfkrafa)
  -  verð með vsk (reiknar sjálfkrafa)
  
Neðst á síðunni er "vista" takki


# stofna beiðni: (single verkbeiðnasíða með óútfylltum reitum)
- Beiðni getur átt einn viðskiptavin en viðskiptavinur getur átt margar beiðnir
- Beiðni getur átt margar viðgerðar aðgerðir en hver viðgerðar aðgerð getur bara átt eina beiðni
- Beiðni getur átt marga varahluti og varahlutir geta átt margar beiðnir
inni í "verkbeiðnir velur notandinn "stofna beiðni" uppi í hægra horninu
honum er stýrt inn á single verkbeiðna gluggann og þar blasir við honum
Single verkbeiðna síða:
þar eru upplýsingar um beiðnina
  - id beiðnar (óbreytanlegt)(sjálfvirk tala)
  - stofndagur (óbreytanlegt)(sjálfvirk dagsetning)
  - stofnandi (auto populate eftir þeim sem er loggaður inn)(óbreytanlegt)
  - tæknimaður (ekki assignað endilega strax)
  - vara
    - serial númer
undir vöru er hægt að ýta á leitartakka og fá upp modal glugga þar sem hægt er að slá inn leit af vörum eða serial númerum

  - bilanalýsing

  - viðskiptavinur
    - staðsetning
    - tengiliður
      - símanúmer
      - email
Undir viðskiptavin er takkinn "leita", þá poppar upp módal gluggi þar sem hægt er að leita að viðskiptavin. 
  - Hann leitar að viðskiptavin og velur hann. Þá fyllist í reitina
    - Viðskiptavinur
    - Vara (dropdown listi)
    - Serial númer (fylgir vöru vali)
    - staðsetning
      - tengiliður (dropdown listi)
        - símanúmer (fylgir tengilið)
        - email (fylgir tengilið)
   - Fyrir neðan þetta sett er tafla af tengiliðum sem hægt er að velja úr til að populeita tengiliða reitina
- Ef viðskiptavinur er ekki til getur hann fyllt út í reitina handvirkt og ýtt á "stofna viðskiptavin" og er honum þá beint aftur á verkbeiðnasíðu og er þá viðskiptavinur útfylltur.

Fyrir neðan þetta er tafla af viðgerðar aðgerðum, hver röð er ein aðgerð.
Hver röð inniheldur
   - dagsetningu
   - hvað var gert
   - tæknimann/notanda
   - dagvinnutíma
   - yfirvinnutíma
   - akstur
Fyrir neðan töfluna neðst undir dálkunum eru samtölur fyrir 
  - dagvinnu (reiknar sjálfkrafa)
  - yfirvinnu (reiknar sjálfkrafa)
  - akstur (reiknar sjálfkrafa)

Fyrir neðan viðgerðar töfluna kemur tafla af smáefni, í henni er:
  -  part númer
  -  parta nafn/lýsing
  -  verð án vsk (reiknar sjálfkrafa)
  -  verð með vsk (reiknar sjálfkrafa)
  
Hægt er að fylla í viðgerða töfluna og smáefnis töfluna strax

Neðst á síðunni er "vista" takki


# Viðskiptavinur síða:
Þar birtist tafla af viðskiptavinum, leit í vinstra horninu og "búa til nýjann" í hægra horninu
hver röð í töflu inniheldur
  - viðskiptavin
  - tengilið
  - símanúmer
  - email
hægt er að ýta á viðskiptavin og fá þá single viðskiptavina síðu til að breyta honum

# single viðskiptavinasíða
- Viðskiptavinur
    - Vara (dropdown listi)
    - Serial númer (fylgir vöru vali)
- staðsetning
- tengiliður
  - símanúmer
  - email
- Fyrir neðan þetta sett er tafla af tengiliðum sem hægt er að velja úr til að populeita tengiliða reitina. Í þeirri töflu er:
  - fornafn
  - eftirnafn
  - símanúmer
  - email
  - breyta takki
- Ef ýtt er á breyta takkann birtist modal síða með upplýsingum um tengilið sem maður getur breytt.
Ef enginn tengiliður er til er hægt að ýta á takka undir töflu sem heitir "bæta við tengilið" sem opnar þá modal glugga með:
  - fornafni
  - eftirnafni
  - símanúmeri
  - emaili

Neðst á síðunni er "vista" takki

Ef ýtt er á "búa til nýjann" viðskiptavin opnast single viðskiptavinur síðan
# single viðskiptavinasíða (sama síða og fyrir ofan nema bara tóm)
- Viðskiptavinur
- Vara 
  - Serial númer
- staðsetning
- tengiliður
  - símanúmer
  - email

Neðst á síðunni er "vista" takki

# vöru síða
vörusíða er með sama formi og viðskitavinasíða.
vörusíða inniheldur tæki og hugbúnað. Lista af:
- Tæki/hugbúnaði
- Viðskiptavin
- Serial númeri
- takki í enda raðar sem heitir "breyta"
Ef ýtt er á breyta takkann opnast modal gluggi með breytingum og "vista" eða "hætta" tökkum

# varahluta síða
varahlutasíða er með sama formi og vöru síða.
varahlutasíða inniheldur tæki og hugbúnað. Lista af:
- part númeri
- varahlut
- takki í enda raðar sem heitir "breyta"
Ef ýtt er á breyta takkann opnast modal gluggi með breytingum og "vista" eða "hætta" tökkum

# Notandasíða
Þar er hægt að laga til upplýsingar um: 
- nafn, 
- eftirnafn, 
- password 
- en ekki email.


# Notendahópar
Admin
- admin á að geta stofnað og eytt notendum
user
- user á að geta allt nema stofna og eyða notendum


## admin view
Búa til notanda
- maður setur inn
  - Fornafn
  - eftirnafn
  - símanúmer
  - email
  - password
Síðan sendir kerfið email á notandann og býður honum að logga sig inn og breyta passwordinu.




## relations
# beiðni
- Beiðni getur átt einn viðskiptavin en viðskiptavinur getur átt margar beiðnir
- Beiðni getur átt margar viðgerðar aðgerðir en hver viðgerðar aðgerð getur bara átt eina beiðni
- Beiðni getur átt marga varahluti og varahlutir geta átt margar beiðnir
# Viðskiptavinur
- viðskiptavinur getur átt marga tengiliði og tengiliður getur átt einn viðskiptavin
- viðskiptavinur getur átt margar vörur og vörur geta átt marga viðskiptavini
# vörur
- vörur geta átt marga varahluti og varahlutir geta átt margar vörur.
