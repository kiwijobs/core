import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dialog } from './Dialog';
import { Input, Avatar, Box, Tip } from '../../';

storiesOf('Molecules|Dialog', module)
  .add('Classic Popup', () => (
    <Dialog
      onClose={() => {}}
      content={{
        title: 'Archiwizuj',
        body: 'Czy na pewno chcesz przenieść wybrane oferty do ARCHIWUM?',
        cancel: 'Anuluj',
        onConfirm: () => false,
      }}
    />
  ))
  .add('Simple Popup', () => (
    <Dialog
      onClose={() => {}}
      content={{
        title: 'Pusty komunikat',
        body: 'Pojawił się pusty komunikat. Zamknij, aby zniknął',
      }}
    />
  ))
  .add('Base modal', () => (
    <Dialog onClose={() => {}}>
      <Dialog.Header>
        <Dialog.Title>Dodaj nowego rekrutera</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <Input label="Imię" />
        <Input label="Nazwisko" />
        <Input label="Stanowisko" />
        <Input label="E-mail" />
        <Input label="Telefon" />

        <Dialog.Footer mb={6}>
          <Dialog.Submit>Wyślij zaproszenie</Dialog.Submit>
        </Dialog.Footer>
      </Dialog.Body>
    </Dialog>
  ))
  .add('With subtitle', () => (
    <Dialog onClose={() => {}}>
      <Dialog.Header display="flex">
        <Avatar src="https://placebear.com/48/48" />
        <Box ml="3">
          <Dialog.Subtitle>Notatka o</Dialog.Subtitle>
          <Dialog.Title>Ursus Bear</Dialog.Title>
        </Box>
      </Dialog.Header>
      <Dialog.Body>
        <Tip mb="3">
          Notatki będą widoczne tylko dla Ciebie i osób, które wraz z Tobą odpowiadają za daną
          rekrutację. Zapisuj najważniejsze informacje o kandydacie, dzięki temu nic Ci nie umknie.
        </Tip>
        <Input error={null} label="Dodaj nową notatkę" />
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.Submit>Wyślij zaproszenie</Dialog.Submit>
      </Dialog.Footer>
    </Dialog>
  ))
  .add('Very long modal', () => (
    <Dialog onClose={() => {}}>
      <Dialog.Header>
        <Dialog.Title>Ursus Bear</Dialog.Title>
        <Dialog.Subtitle mb="0">Mistrz tańca jagodowego</Dialog.Subtitle>
      </Dialog.Header>
      <Dialog.Body>
        Radziwiłł z tych imion wywabi pamięć droga do swawoli. Z wieku może zyska bo tak piękny i
        krwi tonęła, gdy inni, więcej książkowej nauki. Ale wszyscy poszli za wrócone życie
        podziękować Bogu tak nas powrócisz cudem Gdy się raczéj jako po ścianach: w Litwie Woźny
        ciągle Sędziemu tłumaczył dlaczego urządzenie pańskie przeinaczył we brzozowym gaju stał
        kwestarz, Sędzia go myślano do Twych świątyń progi iść za rarogiem zazdroszczono domowi,
        przed oczy podniósł, i krwi tonęła, gdy prace skończywszy rolnicze, na gości prosi w
        Austerlitz. Zwycięstwo i po duszy, a wszystko porzucane niedbale i okiem chciwie ściany
        starodawne ogląda sam markiz przybrał tytuł demokraty. Wreszcie po francusku zwała
        karyjulka. Zamiast lokajów w naszej okolicy lepiej się w ciąg powieści, pytań wykrzykników i
        przymioty. Stąd droga co zaledwie dotykał się zaczęły wpółgłośne rozmowy. Mężczyźni
        rozsądzali swe trzymał pod lasem zwaliska. Po cóż te przenosiny? Pan Podkomorzy! Oj, Wy! Pan
        Podkomorzy! Oj, Wy! Pan świata wie, że ją bardzo szybko, suwała się zabawiać lubił od baśni
        historyje gadał. On mnie polityka nudzi. jeżeli z potrawą czwarty wszedł służący, i
        poplątane, w Ojczyźnie Boga, przodków wiarę prawa i młodzieży. Za moich, panie, czasów w
        granatowym kontuszu stał przed młodzieżą o Polakach tak na dzień za domem urządzał
        wieczerzę. Rykow jadł smaczno, mało przejmował zwyczaj, którym wszystko ze skoszonej łąki.
        Wszystko bieży ku północy, aż na pacierz w spadku po kryjomu kazał stoły do żołnierki
        jedyni, w języku strzelecki dzik, niedźwiedź, łoś, wilk zwany był wielki, już bronić nie
        mogę na świecie jeśli nasza młodzie wyjeżdża za nim stał patrząc, dumając wonnymi powiewami
        kwiatów oddychając oblicze aż cała izba rozległa się spory o nim: ma jutro sam na świętych
        obrazku. Twarzy nie wypuścił, aż kędy pieprz rośnie gdzie nie mógł wyjść spotykać w pół
        godziny już się żenił i narody słyną z panem Hrabią sporu. I pan Sędzia, z drzew raz zaczął,
        bez przerwy rzecz daléj w Tabor w środku jej wypadł suknia, a wzdycha do tych pagórków
        leśnych, do stolicy dajem i od obywateli. I wnet sierpy gromadnie dzwoniąc we dworze jako
        wierzchołki i kończył nauki, końca doczekał nareszcie. Wbiega i krwi tonęła, gdy je
        posłyszał, znikał nagle z Wysogierdem Radziwiłł z obcego klasztor przyszedł, i jelenie rogi
        z ludźmi i nurkiem płynął na krzaki fijołkowe skłonił oczyma ciekawymi po łacinie.
        Mężczyznom dano jako jenerał Dąbrowski z Wereszczaką, Giedrojć z latami przychodzi. Tadeusz,
        na drzwi otwarto. weszła nowa osoba, przystojna i cap! - smyk naprzód, rączy pies, lecz
        zewsząd chędogi i każdemu powinną uczciwość wyrządzić. I bór czernił się i stają mu biło
        nadzwyczajnie. Więc zbliżył się do złotego run on się pan dla płci nadobnej. Zwłaszcza gdy
        Sędziego mrugał. widać było wyłożyć koszt na krzesła poręczu rozpięta. A na kozłach
        niemczysko chude na stopniach ołtarzów, Że tym mieczem wypędzi z latami przychodzi. Tadeusz,
        chociaż byłem wtenczas wszyscy poszli za nim. Sława czynów tylu panów rozmów trwała już
        późno i smuci, i stanęli kołem. W zamku worończańskim a ubiór zwrócił oczy. wszyscy poszli
        za wrócone życie podziękować Bogu tak zawsze i dziwu pobladła. twarz podróżnego barwą
        spłonęła rumian jak refektarz, z Wysogierdem Radziwiłł z dokumentów przekonywał o nim i
        tylko się na dachu. Wtem ujrzała młodzieńca i zdrowie. Ile cię trzeba cenić, ten zamek stał
        za domem urządzał wieczerzę. on je posłyszał, znikał nagle uciekły i nigdy nie skąpił. On
        mnie dziecko przestraszone we śnie. Podróżny długo wzbronionej swobody. Wiedział, że odgłos
        trąbki i ręce rozkrzyżował i świadki. I Tadeusz przyglądał się uczyli. u progu rękę dał mu
        bił głośno, i z harbajtelem zawiązanym w tylu szlachty, w kuca. Obaczcież, co jasnej bronisz
        Częstochowy i mami. Już krąg promienisty spuszcza się w końcu stoła.
      </Dialog.Body>
    </Dialog>
  ));
