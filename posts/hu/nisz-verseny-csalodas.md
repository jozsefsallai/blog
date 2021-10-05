---
title: Milyen csalódás ért minket ezen a szoftverfejlesztői versenyen
description: Egy történet három fejlesztőről akik sok időt, erőfeszítést és odaadást pazaroltak egy komplex alkalmazás fejlesztésére és gyakorlatilag semmit se kaptak cserébe.
date: "2021-10-05T18:04:07.110Z"
tags:
  - development
  - story
  - competition
  - nisz
categories:
  - flow
image: nisz/title.png
---

_(A bejegyzés angol változata [itt](/nisz-competition-disappointment) olvasható)_

Ez egy olyan blogbejegyzés amit már régóta meg szerettem volna írni, hogy le tudjam az egészet venni a vállamról. Leginkább azért írom ezt a posztot, hogy felkeltsem a figyelmet a mi tapasztalatunkra egy magyar szoftverfejlesztői versennyel kapcsolatban.

## Kezdjük az elején - ki vagyok?

Lehet sokatok számára ez a blog poszt az első alkalom, hogy találkoztok velem, úgyhogy röviden bemutatkoznék. **Sallai József** vagyok, szoftvermérnök, több éves tapasztalattal rendelkezem skálázható, gyors és biztonságos alkalmazások fejlesztése terén. Jelenleg a Sapientia Erdélyi Magyar Tudományegyetem egyik hallgatója vagyok az egyetem informatika karán.

Ez a bejegyzés nem csak rólam szól, hanem két barátomról is, valamint egy, a kormány által támogatott cégről, akik a mi munkánkból húztak haszont teljesen ingyen.

## Miről is van szó pontosabban?

2020 nyarán egy hírbejegyzés került közzétételre az egyetemünk weboldalán egy [versenyről](https://verseny.nisz.hu/verseny-2021/felsooktatas), aminek keretén belül megmérhettük tudásunkat és tapasztalatunkat szoftverfejlesztés terén és nagy nyereményekben is részesülhetünk. Milyen nyereményekben?

![NISZ verseny nyeremények](images/nisz/01-prizes-hu.png)

Nagyon király és drága nyeremények, ugye? Buta lenne az, aki ilyen nyeremények láttára nem nevezne be erre a versenyre, főleg tudván azt, hogy a verseny szervezői ([NISZ, Nemzeti Infokommunikációs Szolgáltató](https://nisz.hu/)) a magyar állam által vannak támogatva, tehát nagy valószínűséggel megbízhatóak.

Legalábbis ez volt a gondolatmenetünk amikor [Dániellel](https://tohka.us) és [Lehellel](https://github.com/voidlord) beiratkoztunk erre a versenyre.

## Mit kellett tennünk

Amikor beneveztünk a versenyre, még nem tudtunk, mit fog kelleni csináljunk, de tekintettel arra, hogy mennyi időnk volt arra, hogy elkészüljünk a projekttel és hogy milyen nagy értékű nyeremények voltak az asztalon, tudtuk, hogy bonyolult projektről lesz szó. Ami igaz is volt, miután megtudtuk, milyen jellegű alkalmazást kellett lefejlesszünk.

Röviden összefoglalva, egy **webes platformot** kellett fejlesszünk, melyen keresztül az alkalmazás bármely két felhasználója **adásvételi szerződéseket** hozhat létre, kitöltheti a szerződésminta által elvárt információkat, digitálisan aláírhatja és letöltheti azt PDF formátumban. Ez egy nagyon felületes leírás, mivel még sok olyan részlet és funkció volt, amit figyelembe kellett tartanunk, de a blog bejegyzés kedvéért ez elegendő információ.

Benevezéskor természetesen el kellett fogadnunk a verseny szabályzatát is, melyben az állt, hogy **az általunk készített alkalmazás, valamint annak forráskódja a NISZ tulajdonába kerül**, tehát annak ellenére, hogy a verseny "nyílt forráskódú verseny"-ként volt hirdetve, minden amit csináltunk proprietary volt és a NISZ-nek volt licenszelve (igen, még akkor is ha nem nyertünk semmit). Mindezek mellett nem volt lehetőségünk arra, hogy saját szerverre töltsük fel az alkalmazást, mivel az automatikusan kizárt volna minket a versenyből. Ehelyett egy, a NISZ által biztosított szerveren kellett hostoljuk a projektet.

Ugyanebben a dokumentumban volt egy rész a nyereményekről is, amiket az első helyezett csapat kaphatott. A fentebb említett nyeremények mellett a nyertes csapat továbbá nyerhetett egy **magyar parlamenti látogatót, belátást a kormány rendszereinek a működésébe, valamint egy gyakornoki lehetőséget a NISZ-nél**.

Ezek az információk fontosak lesznek majd, úgyhogy jó észben tartani őket.

## Mit fejlesztettünk

Az alkalmazásunk neve **Project Raccoon** (ami eredetileg csak egy kódnév volt, de végül ránkragadt). Egy **Next.js** alkalmazás volt amit **TypeScript**-ben írtunk és ami **TypeORM**-ot használt arra, hogy egy tetszőleges adatbázissal kommunikáljon. A projekt kódjának megírása és strukturálása szempontjából a lehető legjobb fejlesztési praktikákat alkalmaztunk, amiket ismertünk. Összesen körülbelül **30000 sornyi kódot** írtunk a projekt megvalósításához több hónapon keresztül.

Szerintem fontos azt is megjegyezni, hogy az idő alatt, hogy mi az alkalmazáson dolgoztunk, sok egyéb kötelességeink is voltak, főleg tekintettel arra, hogy egyetemi hallgatók vagyunk. Legalább felét a mindennapjainknak az egyetem felé fordítottuk, néhányunk szabadúszóként is dolgozgatott, hogy egy kis pénzt tudjon szereni. Ezenkívül ebben az időszakban sofőriskolába is jártam, hogy megszerezzem a hajtási engedélyemet. Mindezek ellenére sikerült a legjobbat kihozni magunkból hogy a lehető legjobb alkalmazást lefejlesszük, amit csak fejleszteni tudtunk, még akkor is ha ez azt jelentette, hogy néhány órára nem mentünk be vagy a projekten dolgoztunk amíg a háttérben ment a Google Meet-es online óra. Sok munkámat el is kellett halasztanom ahhoz, hogy az appon tudjak dolgozni.

Ebből gondolom egyértelmű, hogy egy csomó erőfeszítést és odaadást fektettünk ebbe a projektbe. Szerintünk a projekt nagyon remek lett. Nem mondjuk ezt gyakran a dolgokról, amiket csinálunk, de nagyon büszkék voltunk arra, amit közösen meg tudtunk alkotni egy csapatként.

Valamikor a verseny határideje előtt, a verseny szervezői megkérdezték, mire van szükségünk ahhoz, hogy az alkalmazásunkat elérhetővé tehessük a világ számára. Mivelhogy ez egy Next.js app, simán lehetne egy serverless platformra is deployolni és cloud szolgáltatásokat igénybe venni, de hogy leegyszerűsítsük a dolgokat csak **egy sima web szervert kértünk, amelyen fut a Node.js és egy relációs adatbázis**. Semmi extra.

Néhány hét múlva kaptunk egy **megosztott VPS**-féleséget amihez korlátozott hozzáférésünk volt. A hozzáférés és a Node.js runtime hiánya mellett a domain, amin az alkalmazásunk létezett volna egy **PHP szerverre** mutatott.

## A határidő

A (legelső) határideje a projektnek **április 23**-a volt. Az alkalmazás megvolt az alapspecifikációnak megfelelően, viszont bevallom, hogy akkor még hiányzott néhány funkció belőle, amik elő voltak írva a verseny szabályzatában. Ugyanazon a napon egy vizsgánk is volt, tehát nagyon kellett vigyáznunk arra, hogyan osztottuk be az időnket. Reggel hozzáférést nyertünk a webszervehez és sok emailezés után (melyben kértük a rendszergazdákat, hogy kiegészítő szoftvereket telepítsenek vagy újrakonfiguráljanak dolgokat), sikerült deployolni az appot a NISZ által biztosított szerverre. Kis idővel miután végeztünk, a vizsga elkezdődött, tehát az a nap nagyon stresszes volt.

Megtudtuk, hogy **3 csapat** ellen versenyeztük, akik a verseny határidejének elérkeztekor még nem voltak készen a projektjükkel. Az alkalmazásuk vagy nem létezett egyáltalán vagy nem működött. Valószínüleg ez volt az oka annak, hogy a verseny szervezői **meghosszabbították a határidőt néhány nappal (április 27-ig)**, hogy minden csapat tudja rendesen deployolni az alkalmazást a szerveren.

Mi örültünk ennek a hírnek, mivel észrevettünk néhány hibát amit az új határidőnek köszönhetően korrigálni tudtunk.

Megérkezett április 27-e, az appot ismént deployoltuk és tovább folytattuk a mindennapjainkat, türelmesen várva a NISZ általi visszajelzéseket. Mindeközben a többi csapatnak is sikerült valamit deployolni a szerverre, még akkor is ha nem tartalmazták az összes szükséges funkciót.

## Május

A határidő kiterjesztése után síri csend volt a NISZ részéről. Semmilyen visszajelzés, nem sokminden változott az alkalmazásokon valamint azok tartalmán... kezdtünk már aggódni, hogy valami nincs rendben.

**Május 6-án** viszont válaszoltak, azt mondván, hogy **az alkalmazások egyike sem teljesítette a szabályzatban előírt követelmények összességét**, így ennek következtében minden csapatnak adnak **még egy hetet arra, hogy a hiányzó funkcionalitást implementálják**.

A NISZ-szel való levelezésünk közben **megdicsérték az alkalmazásunkat**, azt mondván, hogy látható, mennyi munka volt belefektetve és mennyire jó funkcionalitás és design szempontjából is. Ezek a megjegyzések megerősítették bennünk azt a gondolatot, hogy a mi alkalmazásunk lesz a győztes és a mi csapatunk nyeri meg a versenyt. Azt is mondták nekünk, hogy ha sikerül ez alatt az egy hét alatt implementálnunk a hiányzó funkciókat, **garantáltan első helyet nyerünk**. Viszont azt is mondták, hogy **nagy kételyeik vannak** azzal kapcsolatban, hogy sikerülni fog nekünk ez.

Röviden, a **hiányzó funkciók** a következők voltak:

- Egy **nyilvántartási rendszer**, amit mi úgy értelmeztünk, hogy egy olyan rendszer, melynek segítségével a felhasználók egy helyen tárolhatják tulajdonaikat, hogy azokhoz majd könnyen adásvételi szerződéseket tudjanak létrehozni. *)
- Egy **digitális aláírás rendszert** (nem voltunk biztosak abban, hogy itt PKCS 12 aláírásokról van-e szó PDF-ekhez vagy egy frontendhez amelyen keresztül kézzel alá lehet írni egy szerződést, így mindkettőt megcsináltuk).
- Egy **hitelesítési rendszert**, mely biztosítaná, hogy a generált dokumentumok hitelesek/törvényesek.
- **Csatolmányok** hozzáadásának lehetősége szerződésekhez.
- **Emelt szintű azonosítás** (amiről majd később beszélünk). \*\*)
- **Tanúk és ügyvédek** hozzáadása egy szerződéshez.
- Legalább egy **kiegészítő funkció**.

Az üzenetben említett elvárások közül néhány nem volt elég tiszta számunkra, így email-ben és telefonon is érdeklődtünk további részletek kapcsán. A következőkben nem voltunk biztosak:

- \*) "Központi nyilvántartó rendszer", ami alatt mi azt értettük, hogy minden felhasználónak lenne egy tulajdontára, amelyet felhasználhat szerződések generálásához. Megkérdeztük, hogy az elképzelésünk mennyire felel meg az elvárásnak és erre csak annyit mondtak, hogy "igen, jól hangzik" (parafrazálás).
- \*\*) "Emelt szintű azonosítás". Azt hittük ez alatt egy hitelesítési folyamatot kell fejlesztenünk (AVDH), melynek segítségével egy állampolgár személyes adatait lehet ellenőrizni azáltal, hogy egy belső API-n keresztül hitelesítjük az adatokat. Ezzel kapcsolatban is megkérdeztük a NISZ képviselőit, amire azt válaszolták, hogy "csináljátok úgy, ahogy a legjobbnak gondoljátok".

Lehet hogy sok munkának tűnik ez egy hétre, de nem mondtunk erre se nemet. Keményen megdolgoztunk az utolsó pillanatig és megcsináltuk azt, amire megkértek...

## ... vagy mégsem?

Elérkezett **május 12**-e és feltöltöttük **az alkalmazás végső változatát** a NISZ webszerverére, azt gondolván, hogy megcsináltunk mindent, amit a versenyszabályzat előírt. Kiegészítő funkcióként néhány **egyedi funkciót** is hozzáadtunk az apphoz, amik nem voltak benne az eredeti specifikációban:

- Egy **lokalizációs rendszert**, melynek segítségével külföldiek is köthetnek üzletet Magyarország területén.
- Egy **világos/sötét mód** switchert azoknak, akik félnek attól, hogy kiég a szemük.
- Egy **specifikációt és mock API**-t az azonosítási és hitelesítési API-hoz (AVDH).
- Egy **aláírás frontendet** azoknak, akik kézzel akarják aláírni szerződéseiket.
- ... és valószínüleg még néhány olyan funkció amit elfelejtettem megemlíteni.

Úgy gondoltuk, hogy amellett hogy befejeztük az appot úgy ahogy ők elvárták, túl is teljesítettünk felhasználói és fejlesztői élmény szempontjából is (amit a NISZ is megemlített egy későbbi email üzenetben).

Miután beküldtük az alkalmazást, a dokumentációt, valamint a forráskódját, megint síri csend... egészen **május 27**-ig, amikor is a NISZ azt tudatta velünk, hogy:

> A megadott kiegészítő hét ellenére még mindig **egyik csapatnak se sikerült teljesen befejeznie az alkalmazást az elvárásoknak megfelelően**. Viszont, mivel láttuk, hogy a ti projektetek nagyon sok időt és erőfeszítést vett igénybe, **különdíjban** részesültünk.

A megfogalmazási módjuk azt sugallta, hogy a különdíj egy teljesen más, titokzatos nyeremény, amiről eddig sehol se volt szó, NEM pedig a három nyeremény egyike.

Ugyanabban az üzenetben amit 17-én írtak nekünk, arra is megkértek, hogy egy **pitch videót készítsünk a projektünkhöz**, ami bemutatná a csapatot, az appot, valamint egy rövid demonstrációt tartalmazna az app működésével kapcsolatban. A videó határideje **május 20-a volt**. Igen, **kevesebb, mint 3 nap alatt** kellett forgatókönyvet írjunk, felvegyünk mindent és megszerkesszük a videót.

A nagyon rövid határidő ellenére mégis sikerült megcsinálnunk a videót is. A **teljes születésnapom** (május 19) ráment arra, hogy a videón dolgoztam, felvettem dolgokat, videót szerkesztettem, csak azért, hogy még éjfél előtt el tudjuk nekik küldeni a videót.

Miután ezt megtettük, egyszerűen megköszönték nekünk, hogy elküldtük nekik a videót, valamint azt is mondták, hogy hamarosan jelentkeznek további információkkal.

## A nyeremény?

Néhány hét telt el a pitch videó beküldése óta. További levelezésből megtudtuk, mi hiányzott az alkalmazásból:

> a központi nyilvántartó rendszer, az emelt szintű azonosítás, valamint a részletes dokumentáció

A felsoroltak közül kettőt könnyen implementálni tudhattunk volna, ha a köztünk és a NISZ közötti kommunikáció jobb lett volna és nem lettek volna ennyire pontatlanok az elvárásokkal kapcsolatban. A "központi nyilvántartó rendszer" alatt egy olyan oldalra gondoltak, amin keresztül **az app adminisztrátorai láthatnak mindent ami feltöltésre kerül**. A második dolog pedig úgy fest a kétlépcsős azonosításra (2FA vagy TOTP) utal... Meg kell jegyeznem, hogy én eddig egy magyar weboldalon vagy alkalmazáson se láttam 2FA-t úgy elnevezve, hogy "emelt szintű azonosítás". Kétlépcsős/kétfaktoros hitelesítésről hallottam eddig, de erről, ebben a formában, még soha.

Ha jobban beleásunk a homokba akkor egy egyszerű Google keresés az "emelt szintű azonosítás" kulcsszóra csak **kormányszervi weboldalakra és a nisz.hu**-ra fog találatokat adni. A legelső találat a nisz.hu-ról van és egy olyan rendszerre utal, mely **biztosítja egy felhasználó személyes adatainak a hitelességét**. Tehát szerintem az, hogy mi félreértettük, az ebben a helyzetben teljesen jogos.

Szó ami szó, ha úgy vesszük, akkor ezek a hiányzó dolgok a teljes projekt **2%-át** teszik ki, de kerekítsük 5%-ra, hogy legyek mértékletes.

Másszóval az app 95%-a be volt fejezve és teljesen működőképes állapotban volt.

**95%.**

Az az 5% volt az oka annak, hogy **semmit se nyertünk**, kivéve egy különdíjat, melyről később megtudtuk hogy egy "többszázezer forint értékű" **e-learning csomag**. Nekik ez csak egy egyszerű `UPDATE` lekérdezés egy adatbázisban. Azt is megjegyezném, hogy ez volt a **harmadik díj** a verseny középiskolásoknak szóló változatában.

Egy projekt, mely a specifikáció 95%-ának eleget tett, ~30000 sornyi kód, számos napnyi munka, elhalasztott órák és kötelességek, elhalasztott születésnap egy pitch videó elkészítéséhez ... és mindamellett, hogy a projekt licenszje jelenleg kérőjeles állapotban van, **nem kaptunk semmi értékeset cserébe**.

Oh, említettem-e azt, hogy a többi csapat **abszolút semmit se kapott**? Még akkor is ha az alkalmazásuk nem volt teljesen befejezve vagy nem működött megfelelően, még mindig úgy gondolom, hogy valamiben részesülniük kellett volna a munkájukért cserébe.

És természetesen, a projekt és annak forráskódja **a NISZ tulajdona**, ahogy abban megállapodtunk amikor feltöltöttük a projektet a szervereikre. Nem tudunk semmit se kezdeni vele (pl. nem tudjuk továbbfejleszteni és eladni) amíg nem kapjuk vissza a jogainkat a forráskódhoz. Viszont arról se gondolom hogy fair, hogy a saját szabályzatuknak ellent mondhatnak bármikor, ennek révén **még mindig vissza akarjuk kapni a forráskódhoz a jogainkat**.

## Az apróság

Néhány hétnyi csalódás után, **június 10**-én a NISZ egy újabb email-t küldött nekünk, melyben az állt, hogy:

> Meg szeretnénk titeket postai úton jutalmazni egy **aprósággal**, hogy kifejezzük hálánkat, hogy részt vettetek a versenyben.

Nem mondtak semmit se arról, hogy ez az apró ajándék miben állt, de mivel külön kiemelték azt, hogy egy apróságról van szó, úgy gondoltuk NISZ-es felsőről vagy bögréről van szó, esetleg egy részvételi oklevélről.

Elküldtük nekik a postai címünket, majd ők **megerősítették, hogy megkapták az adatokat** és biztosítottak arról, hogy minél hamarabb elpostázzák nekünk az ajándékot.

Természetesen, azóta **semmit se kaptunk a postán** és egy email-t se írtak nekünk.

## Végkifejlet

Mindenbizonnyal nagy mértékben csőbe húzott minket a NISZ, melyről azt hittük, hogy egy megbízható, kormány által támogatott cég. Hamarosan meghirdetik 2021-re is a "Kódolj határok nélkül" versenyt, de ezúttal **mindenkit arra ösztönzök, hogy minél távolabb álljon a NISZ-től és ettől a versenytől**. Ha nagyon meg akarod kockáztatni azt, hogy semmit sem fogsz kapni ha nem teljesíted 100%-osan a specifikációban leírtakat (bármit is jelentsen ez, hisz nagyon pontatlanok mindennel kapcsolatban), akkor sok sikert kívánok, de ez legyen egy figyelmeztetés arra, hogy milyen fába fogod beleütni a fejszédet. 99.9% nem lesz elég, feltétlenül 100%-nak kell lennie.

Ez tanulság volt számunkra. Nem számít az, hogy egy céget a kormány támogat, nem lesz sokkal megbízhatóbb, mint egy random no-name cég, ami kihirdetett egy versenyt. Mindig kell vigyázni arra, kivel kollaborálsz.
