import {images} from '../constants'

const goal1 = "A Középiskolások üzleti Tanácsadó Versenye magyar anyanyelvű középiskolás diákoknak szervezett gazdasági verseny, amit a Babes-Bolyai Tudományegyetem Közgazdaság- és Gazdálkodástudományi Karának magyar tagozata szervez. ";
const goal2 = "Célunk a közgazdász szakma rejtélyeibe betekintést nyújtani a pályaválasztás előtt álló fiatalok számára. Ennek megfelelőn, egyszerű, gyakorlatias és szórakoztató tanulási módszerek segítségével építettük fel a Középiskolások üzleti Tanácsadó Versenyét.";
const goal3 = "A verseny alatt a diákok megismerkedhetnek a piackutatás területével és egy esettanulmány megoldásának kihívásaival.";

const rules = [
    {
        one:"A versenyre magyar anyanyelvű középiskolás diákok jelentkezhetnek, 3 fős csapatokat alkotva.",
        two:"Iskolánként a jelentkező csapatok száma nincs korlátozva."
    },
    {
        one:"A versenyre való jelentkezés egy jelentkezési űrlap kitöltésével történik, ami elérhető a következő linken.",
        two:"A jelentkezési határidő minden csapat számára kötelező, utólagos jelentkezéseket nem áll módunkban elfogadni."
    },
    {
        one:"Mindkét forduló és a döntő is tartalmaz saját szabályzatot, a speciálisan arra a fordulóra jellemző problémákkal.",
        two:"Az egyes fordulók beküldési határidejének betartása kötelező minden csapat számára."
    },
    {
        one:"Az egyes fordulókra beküldött munkák kiértékelése és az eredmények közlése a mellékelt ütemterv szerint történik.",
        two:"A zsűri tagjai kizárólag gyakorlati szakemberek."
    },
    {
        one:"Az egyes fordulókon elért eredményről és a továbbjutásról a csapat kapcsolattartó személyét e-mailben értesítjük a jelentkezéskor megadott e-mail címen.",
        two:"A második fordulóban a csapatok először iskolán belül, majd az iskolák egymás között versenyeznek. Egy iskolából alapesetben csak egy csapat kerül a döntőbe, de kiemelkedő teljesítmény alapján a selejtező fordulók zsűrije dönthet maximum két csapat továbbjutásáról is egy adott iskolából. Nem kötelező minden iskolából bekerülnie csapatnak a döntőbe."
    },
    {
        one: "Ha egy iskolából közeli pontszámmal versengenek csapatok a döntőbe jutásért, a kiválasztásnál kikérjük a csapatokat irányító tanár(ok) véleményét.",
        two:" A szervezők a szabályzat változtatásának jogát fenntartják, a szabályzat esetleges változásairól a csapatokat értesítik (a változások csak a verseny zökkenőmentes lebonyolításának célját szolgálhatják és csak olyan változások történhetnek, amelyek nem érintik hátrányosan egyik csapatot sem)."
    }
    ]

    const miert1 = "A Középiskolások Üzleti Tanácsadó Versenye magyar anyanyelvű középiskolás diákoknak szervezett gazdasági verseny. Célunk a közgazdász szakma rejtélyeibe betekintést nyújtani a pályaválasztás előtt álló fiatalok számára. Ennek érdekében egyszerű, gyakorlatias és szórakoztató tanulási módszerek segítségével építettük fel a Középiskolások Üzleti Tanácsadó Versenyét. A verseny alatt a diákok megismerkedhetnek a piackutatás területével, majd az itt szerzett ismereteket egy esettanulmány megoldása közben hasznosíthatják."
    const miert2 = "Az előző évekhez hasonlóan a hagyományosan Kolozsváron megszervezett verseny képezi a döntő szakaszt, amelyet két online forduló előz meg. A verseny első két fordulóját egy piackutatási probléma képezi, a döntő forduló pedig egy összetettebb vállalatvezetői probléma megoldását feltételezi. A fordulókat úgy építettük fel, hogy felkészítsék a diákokat a döntőben sorra kerülő eset megoldására."

    const felepites1 = "A döntőben a két online forduló alapján legjobban teljesítő, egyenként 3 fős középiskolai csapatok vesznek részt. A döntőben dobogós helyezést elérő csapatok tagjai, a díjazás mellett, a Közgazdaság- és Gazdálkodástudományi Karra történő felvételi esetén plusz pontokat kapnak az érettségi átlagukhoz."
    const felepites2 = "A Középiskolások Üzleti Tanácsadó Versenyének döntőjével párhuzamosan zajlik a Kolozsvári Egyetemista Esettanulmány Verseny, melynek döntőjét a középiskolás diákok nézőként követhetik.."

    const feladat1 = "A jelentkező csapatoknak a feladata egy piackutatás elvégzése megadott mintavételi és módszertani kritériumok figyelembevételével. Azok a csapatok, amelyek sikeresen teljesítik az első fordulót, továbbjutnak a második fordulóba."
    const feladat2 = "A második fordulóban a csapatok által beküldött adatok és más, már meglévő, piaci információk alapján a csapatoknak egy elemzést kell készíteniük egy adott témában. A második forduló részletes leírását és az elemzés szempontjait a verseny ütemtervében megjelölt időpontban kiküldjük a csapatoknak."
    const feladat3 = "A második forduló során továbbjutott csapatok a döntőben mérik össze tudásukat és készségeiket egy valós vállalati esettanulmány megoldása és bemutatása során. Az egy hét alatt otthoni környezetben elkészített megoldást a döntősök Kolozsváron, a Babeş-Bolyai Tudományegyetem Közgazdaság- és Gazdálkodástudományi Karának székhelyén zajló döntő második napján gyakorló (nem oktató) szakemberekből álló zsűri előtt mutatják be."

const news = [
    {
        id : 0,
        title: "XIV. KÜTV 2022 - döntős csapatai",
        imageName: images.new0,
        html: `
        <h2 id="text" ><strong>Idén tizennegyedik alkalommal szervezi meg a kolozsvári Babeş–Bolyai Tudományegyetem (BBTE) Közgazdaság- és Gazdálkodástudományi Magyar Intézete a Középiskolások Üzleti Tanácsadó Versenyét. Idén újra élőben, Kolozsváron, a kar épületében mérhetik össze tudásukat a középiskolások.</strong></h2>
        <h2 id="text">A verseny a Kolozsvári Esettanulmány Napok rendezvénysorozat keretein belül kiemelt figyelmet kap, hiszen a jó eredményeket elérő csapatok a pénzjutalmak mellett plusz pontokat is kapnak az egyetemi felvételijükhöz, ha a BBTE Közgazdaság- és Gazdálkodástudományi Karát választják érettségi után. A középiskolások versenyével párhuzamosan zajlik a Kolozsvári Egyetemista Esettanulmány Verseny is. Az Esettanulmány Napok összdíjazása 23.500 lej, illetve a versenyzők a támogatók és cégek által felkínált ajándékokat is kapnak.</h2>
        <h2 id="text"><strong>A versenyről</strong></h2>
        <h2 id="text">A verseny három fordulós, amiből az első kettő online zajlott, a harmadikat, a döntőt idén Kolozsváron tartják meg. A közel 150 résztvevő középiskolás közül a 48 legjobb jutott be a kolozsvári döntőbe. A verseny első két fordulóját egy piackutatási probléma képezte, a döntő forduló pedig egy összetettebb vállalatvezetői probléma megoldását feltételezi. A fordulók úgy voltak felépítve, hogy felkészítsék a diákokat a döntőben sorra kerülő esettanulmány megoldására, ahol a két online forduló alapján legjobban teljesítő, egyenként 3 fős középiskolai csapatok vehetnek részt. A továbbjutók meghívást kaptak Kolozsvárra, a versenyen való részvétel mellett pedig az egyetem kiegészítő programokkal is készül az Erdély minden szegletéből érkező diákok számára.
        <em>„Örülünk, hogy az előző két online verseny után ismét a helyszínen szervezhetjük meg az idei Kolozsvári Esettanulmány Napok döntő fordulóit. A döntőbe jutott csapatok Kolozsvárra látogatnak, így már az egyetemre való beiratkozás előtt belekóstolhatnak a kolozsvári egyetemista életbe. Mindemellett kiemelten fontos, hogy betekintést kapnak a közgazdász szakma rejtélyeibe és megismerkedhetnek az esettanulmány-versenyek világával.”</em> - nyilatkozta dr. Rácz Béla-Gergely, intézetvezető, a verseny főszervezője.</h2>

        <img alt="chart" id="image"/>

        <h2 id="text"><strong>Az esetről</strong></h2>
        <h2 id="text"><em>„Az esetet felkínáló vállalatnak köszönhetően a diákok idén is egy valós, helyi gazdasági kihívásra kereshetnek megoldást, amit a vállalatvezetőkből és gazdasági szakemberekből álló zsűrinek mutathatnak be. Az eddigi évek tapasztalatai alapján a legjobb megoldásokat az adott vállalat valóban hasznosítani tudja a gyakorlatban is. Az esetet adó vállalat nevét és profilját még nem fedhetem fel, ez a verseny kezdetén derül ki minden résztvevő csapat számára. Annyit azonban már most elárulhatok róla, hogy a saját szakterületén Erdélyben, sőt egész Romániában piacvezetőnek számít.”</em> - mondta dr. Szász Levente, a kar magyar tagozatért felelős dékánhelyettese.
        A versenyzés mellett a középiskolások nézőként követhetik az egyetemisták versenyének döntőjét is, így jó gyakorlatokat leshetnek el a tapasztaltabb egyetemista társaiktól. Mindezek mellett a versenynek fontos előnye, hogy a versenyzők diákok, egyetemisták és középiskolások egyaránt, közvetlenül alakíthatnak ki kapcsolatokat a zsűriben helyet foglaló vállalatok vezetőivel, ami a későbbi munkaerőpiacon való elhelyezkedés szempontjából is nagy előny lehet.
        
        A Kolozsvári Esettanulmány Napok döntőjét idén április 8-9. között szervezik meg a BBTE Közgazdaság- és Gazdálkodástudományi Karának székhelyén. Minden érdeklődőt szívesen látnak a szervezők.
        
        </h2>

        `,
    },
    {
        id : 1,
        title: "Ők a 13. KÜTV döntős csapatai! (archív)",
        imageName: images.new1,
        html: `
           <h2 id="text">A 2021-es Középiskolások Üzleti Tanácsadó Versenyének második fordulójában a diákoknak egy részletes, de frappáns és lényegretörő elemzést kellett készíteniük.</h2> 
           <h2 id="text">A feladat az volt, hogy minden csapatnak legfennebb három oldalas összefoglalót kellett készítenie, amely (1) röviden bemutatja a romániai lakberendezési- és szaniter üzletek piacát, majd (2) részletesebben elemzi a kiküldött kutatási adatok összefoglalója alapján a megfelelő lakberendezési- és szaniter üzletekre ható tényezőket, valamint (3) javaslatokat tesz egy lehetséges lakberendezési- és szaniter üzlet számára arra vonatkozóan, hogy mit tartson fontosnak a vállalkozás működtetése során.</h2> 
           <h2 id="text">Gratulálunk a 20 továbbjutó csapatnak:</h2>
        <ul id="list">
            <li>A galaxis őrzői</li>
            <li>Aranyásók</li>
            <li>BanKings</li>
            <li>Böngészők</li>
            <li>Botswanai pula</li>
            <li>Corporate Kings</li>
            <li>Cryptoláz</li>
            <li>GazdÁSZok</li>
            <li>Kell egy név</li>
            <li>Leányvállalat</li>
            <li>Minerva</li>
            <li>MONEYMAKERS_HámJ</li>
            <li>MoneyMakers_MártonÁ</li>
            <li>Naptime at the finish line</li>
            <li>SakkMatt</li>
            <li>Señoritas</li>
            <li>Sic Mundus</li>
            <li>Sokan Mások</li>
            <li>Team SIC</li>
            <li>VIV CONSULTING</li>
        </ul>

        <h2 id="text">Sok sikert a döntőben!</h2> 
        `,
    },
    {
        id : 2,
        title: "II. Forduló - Piackutatás és elemzés",
        imageName: images.new2,
        html: `
        <h2 id="text"><strong>Leírás</strong></h2>
        <h2 id="text">
        Az első fordulóban egy kérdőíves kutatás által betekintést nyerhettetek abba, hogy hogyan választanak a fogyasztók lakberendezési üzleteket.

        <br><br>Tekintettel arra, hogy már némiképp beavatottak vagytok a témába, a második fordulóban egy magasabb sebességbe kapcsolunk.

        <br><br>A második forduló feladata abban fog állni, hogy egy részletes, de frappáns és lényegretörő elemzést kell készítsetek. Az elemzés tárgya az lesz, hogy egyrészt röviden megvizsgáljátok a lakberendezési- és szaniter üzletek romániai piacát az interneten fellelhető források alapján, másrészt meg a kutatási adatok összefoglalója segítségével elemezitek azt, hogy milyen tényezők és hogyan hatnak ezeknek az üzleteknek a piacára. Az elemzés során feldolgozott információk segítségével következtetéseket kell levonjatok a lakberendezési- és szaniter üzletek választását befolyásoló tényezőkről és javaslatot kell tegyetek egy lehetséges üzlet vagy üzlethálózat számára arra vonatkozóan, hogy hogyan fejlessze vállalkozását annak érdekében, hogy a lehető legtöbb ügyfelet tudja magához csábítani, és a lehető leghatékonyabban működjön.

        <br><br>Ebből fog állni a második forduló.
        </h2>
        <h2 id="text"><strong>Feladat</strong></h2>

        <h2 id="text">
        Készítsetek egy <strong>legfennebb három oldalas összefoglalót, </strong> amely (1) röviden bemutatja a romániai lakberendezési- és szaniter üzletek piacát (Az általatok talált legfrissebb adatok alapján), majd (2) részletesebben elemzi a kiküldött kutatási adatok összefoglalója alapján a megfelelő lakberendezési- és szaniter üzletekre ható tényezőket, valamint (3) javaslatokat tesz egy lehetséges lakberendezési- és szaniter üzlet számára arra vonatkozóan, hogy mit tartson fontosnak a vállalkozás működtetése során.
        
        <br><br>A három oldalon kívül melléklet is tartozhat az elemzéshez, melyben releváns táblázatokat és grafikonokat lehet bemutatni.

        <br><br>A rövid piacelemzéshez használjátok az interneten már fellelhető kapcsolódó információkat valamint a csatolt adattáblát. Röviden jellemezzétek a romániai lakberendezési üzletek piacát. Elemezzétek ki a csatolt kutatási adatokat, vonjátok le a fogyasztók üzletválasztására vonatkozó következtetéseket.
        </h2>

        <h2 id="text"><strong>Tartalmi követelmények és javaslatok</strong></h2>
        <ul id="list">
        <li>Az előző (Feladat) alpontban leírtak támpontot nyújtanak arra vonatkozóan, hogy mit kell belefoglalni az jelentésbe. A felsoroltak mellett lehet tárgyalni más kapcsolódó szempontokat is.</li>
        <li>A feladat első pontját a különböző internetes forrásokban (szakmai szervezetek statisztikái, piackutató vállalatok munkái, összefoglalói, szakemberek véleményei) már fellelhető információk alapján kell összeállítani, valamint legalább egy szempontot (de lehet többet is) a megadott adattábla alapján kell bemutatni. Használhattok Romániára vonatkozó külföldi forrásokat is (pl. Eurostat statisztikák). Legkevesebb <strong><em>négy különböző adatforrás</strong></em> használata kötelező.</li>
        <li>Az adatoknál <strong>kötelező hivatkozni az adatok forrására.</strong> Szöveges formában így: <em>„A Ziarul Financiar becslései szerint a következő évben a Romániában a lakásfelújítások száma 2%-kal nőni fog 2020- hoz képest”</em>. Amennyiben táblázatokat, grafikonokat vesztek át, a táblázat, grafikon alatt fel kell tüntetni az adatok forrását, a következő formában:<em> „Forrás: Ziarul Financiar, Evoluția Pieței, 2021”.</em> Ha az általatok gyűjtött adatokról beszéltek, akkor így hivatkozzatok: <em>„... a KÜTV 2021 piackutatás szerint...”.<em></li>
        <li>A három oldalon kívül melléklet is tartozhat az elemzéshez, melyben táblázatokat és grafikonokat lehet bemutatni. Ne felejtsetek el a szövegben hivatkozni ezekre a táblázatokra és grafikonokra, pl. így: <em>„A KÜTV 2021 piackutatásból kiderült, hogy az ügyfelek fontosnak tartják, hogy ... (lásd 1. melléklet).”</em></li>
        <li>A dolgozat végére tegyetek forrásjegyzéket, amelyben felsoroljátok a felhasznált adatok forrásának szerzőjét (személy vagy vállalat), a forrás címét, a közlés évét, a forrás közlésének helyét (újság, folyóirat, kiadó) és amennyiben az internetről származik, a dokumentumra mutató linket is.</li>
        <li>Figyeljetek arra, hogy amikor piaci számadatokról esik szó, mindig megjelenjen a mértékegység, illetve hogy melyik évre vonatkozik, területileg mit jellemez az adat, stb.</li>
        <li>A téma jellegéből adódóan javasolt táblázatok, ábrák használata. Ezeket a mellékletben tanácsos megjeleníteni és a szövegben kell hivatkozni rájuk. Gazdálkodjatok okosan a rendelkezésre álló oldalszámmal.</li>
        </ul>

        <h2 id="text"><strong>Értékelési szempontok</strong></h2>

        <h2 id="text">Az alább felsorolt négy szempont mindegyikét 0-tól 5-ig értékeljük, ahol 5 a kiválót jelenti. Zéró pontszám jár, amennyiben teljesen hiányzik vagy értékelhetetlen egy kritérium.</h2>
        <ol id="list">
            <li><strong>A romániai lakberendezési- és szaniter üzletek piacának rövid jellemzése:</strong> hogyan vezeti fel a problémát; használ-e viszonyítási pontokat az aktuális helyzet felvázolásához (pl. múltbeli adatok, más ország); milyen forrásokat, hányat és hogyan használ.</li>
            <li><strong>A boltválasztásra ható tényezők részletes elemzése a kiküldött kutatási adatok összefoglalója alapján</strong> (A lényeg nem a részleteken van, hanem a hasonlóságok és különbségek frappáns meghatározásán és bemutatásán.): hogyan használja fel a kutatási adatokat; mennyire körültekintően vonja le a következtetéseket; mennyire relevánsak és hasznosak a megfogalmazott következtetések.</li>
            <li><strong>Javaslatok megfogalmazása egy lehetséges lakberendezési- és szaniter üzlet (vagy üzlethálózat) számára arra vonatkozóan, hogy mit tartson fontosnak a leghatékonyabb működés érdekében:</strong> hogyan használja fel az előző két pont alapján bemutatott és megfogalmazott információkat; hogyan érvel a javaslat jelentősége és időszerűsége mellett; hogyan csoportosítja javaslatait; mennyire részletesek a javaslatok; mennyire relevánsak a javaslatok.</li>
            <li><strong>Általános értékelés:<strong> az elemzés felépítése mennyire logikus; hogyan osztja be a rendelkezésre álló felületet; az elemzés stílusa mennyire olvasható, tudományos jellegű; a szöveg és táblázatok szerkesztése esztétikus, a helyesírás kiváló.</li>
        </ol>
        <h2 id="text">
        A maximálisan elérhető pontszám 20 pont.

        <br><br>Másolás esetén (források megjelölése nélkül) a csapatot kizárjuk a versenyből.

        <br><br>Sok sikert!
        </h2>
        `,
    },
    {
        id : 3,
        title: "Ők a 13. KÜTV döntős csapatai! (archív)",
        imageName: images.new1,
        html: `
           <h2 id="text">A 2021-es Középiskolások Üzleti Tanácsadó Versenyének második fordulójában a diákoknak egy részletes, de frappáns és lényegretörő elemzést kellett készíteniük.</h2> 
           <h2 id="text">A feladat az volt, hogy minden csapatnak legfennebb három oldalas összefoglalót kellett készítenie, amely (1) röviden bemutatja a romániai lakberendezési- és szaniter üzletek piacát, majd (2) részletesebben elemzi a kiküldött kutatási adatok összefoglalója alapján a megfelelő lakberendezési- és szaniter üzletekre ható tényezőket, valamint (3) javaslatokat tesz egy lehetséges lakberendezési- és szaniter üzlet számára arra vonatkozóan, hogy mit tartson fontosnak a vállalkozás működtetése során.</h2> 
           <h2 id="text">Gratulálunk a 20 továbbjutó csapatnak:</h2>
        <ul id="list">
            <li>A galaxis őrzői</li>
            <li>Aranyásók</li>
            <li>BanKings</li>
            <li>Böngészők</li>
            <li>Botswanai pula</li>
            <li>Corporate Kings</li>
            <li>Cryptoláz</li>
            <li>GazdÁSZok</li>
            <li>Kell egy név</li>
            <li>Leányvállalat</li>
            <li>Minerva</li>
            <li>MONEYMAKERS_HámJ</li>
            <li>MoneyMakers_MártonÁ</li>
            <li>Naptime at the finish line</li>
            <li>SakkMatt</li>
            <li>Señoritas</li>
            <li>Sic Mundus</li>
            <li>Sokan Mások</li>
            <li>Team SIC</li>
            <li>VIV CONSULTING</li>
        </ul>

        <h2 id="text">Sok sikert a döntőben!</h2> 
        `,
    },
]

    export default {
    goal1,
    goal2,
    goal3,
    rules,
    miert1,
    miert2,
    feladat1,
    feladat2,
    feladat3,
    felepites1,
    felepites2,
    news
}