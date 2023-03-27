interface KanaGroup{
  [key:string]: string[];
}
interface KanaMap{
  [key:string]: KanaGroup
}

const hiragana:KanaMap = {
  h_group1: { あ: ['a'], い: ['i'], う: ['u'], え: ['e'], お: ['o'] },
  h_group2: { か: ['ka'], き: ['ki'], く: ['ku'], け: ['ke'], こ: ['ko'] },
  h_group3: {
    さ: ['sa'],
    し: ['shi', 'si'],
    す: ['su'],
    せ: ['se'],
    そ: ['so'],
  },
  h_group4: {
    た: ['ta'],
    ち: ['chi', 'ti'],
    つ: ['tsu', 'tu'],
    て: ['te'],
    と: ['to'],
  },
  h_group5: { な: ['na'], に: ['ni'], ぬ: ['nu'], ね: ['ne'], の: ['no'] },
  h_group6: {
    は: ['ha'],
    ひ: ['hi'],
    ふ: ['fu', 'hu'],
    へ: ['he'],
    ほ: ['ho'],
  },
  h_group7: { ま: ['ma'], み: ['mi'], む: ['mu'], め: ['me'], も: ['mo'] },
  h_group8: { や: ['ya'], ゆ: ['yu'], よ: ['yo'] },
  h_group9: { ら: ['ra'], り: ['ri'], る: ['ru'], れ: ['re'], ろ: ['ro'] },
  h_group10: { わ: ['wa'], を: ['wo', 'o'], ん: ['n'] },
  h_group11_a: { が: ['ga'], ぎ: ['gi'], ぐ: ['gu'], げ: ['ge'], ご: ['go'] },
  h_group12_a: {
    ざ: ['za'],
    じ: ['ji', 'zi'],
    ず: ['zu', 'du'],
    ぜ: ['ze'],
    ぞ: ['zo'],
  },
  h_group13_a: {
    だ: ['da'],
    ぢ: ['ji', 'di', 'dzi'],
    づ: ['zu', 'dzu'],
    で: ['de'],
    ど: ['do'],
  },
  h_group14_a: { ば: ['ba'], び: ['bi'], ぶ: ['bu'], べ: ['be'], ぼ: ['bo'] },
  h_group15_a: { ぱ: ['pa'], ぴ: ['pi'], ぷ: ['pu'], ぺ: ['pe'], ぽ: ['po'] },
  h_group16_a: { きゃ: ['kya'], きゅ: ['kyu'], きょ: ['kyo'] },
  h_group17_a: {
    しゃ: ['sha', 'sya'],
    しゅ: ['shu', 'syu'],
    しょ: ['sho', 'syo'],
  },
  h_group18_a: {
    ちゃ: ['cha', 'cya', 'tya'],
    ちゅ: ['chu', 'cyu'],
    ちょ: ['cho', 'cyo'],
  },
  h_group19_a: { にゃ: ['nya'], にゅ: ['nyu'], にょ: ['nyo'] },
  h_group20_a: { ひゃ: ['hya'], ひゅ: ['hyu'], ひょ: ['hyo'] },
  h_group21_a: { みゃ: ['mya'], みゅ: ['myu'], みょ: ['myo'] },
  h_group22_a: { りゃ: ['rya'], りゅ: ['ryu'], りょ: ['ryo'] },
  h_group23_a: { ぎゃ: ['gya'], ぎゅ: ['gyu'], ぎょ: ['gyo'] },
  h_group24_a: {
    じゃ: ['ja', 'jya'],
    じゅ: ['ju', 'jyu'],
    じょ: ['jo', 'jyo'],
  },
  h_group25_a: { びゃ: ['bya'], びゅ: ['byu'], びょ: ['byo'] },
  h_group26_a: { ぴゃ: ['pya'], ぴゅ: ['pyu'], ぴょ: ['pyo'] },
}

const katakana:KanaMap = {
    k_group1: { 'ア': ['a'], 'イ': ['i'], 'ウ': ['u'], 'エ': ['e'], 'オ': ['o'] },
    k_group2: { 'カ': ['ka'], 'キ': ['ki'], 'ク': ['ku'], 'ケ': ['ke'], 'コ': ['ko'] },
    k_group3: { 'サ': ['sa'], 'シ': ['shi','si'], 'ス': ['su'], 'セ': ['se'], 'ソ': ['so'] },
    k_group4: { 'タ': ['ta'], 'チ': ['chi','ti'], 'ツ': ['tsu','tu'], 'テ': ['te'], 'ト': ['to'] },
    k_group5: { 'ナ': ['na'], 'ニ': ['ni'], 'ヌ': ['nu'], 'ネ': ['ne'], 'ノ': ['no'] },
    k_group6: { 'ハ': ['ha'], 'ヒ': ['hi'], 'フ': ['fu','hu'], 'ヘ': ['he'], 'ホ': ['ho'] },
    k_group7: { 'マ': ['ma'], 'ミ': ['mi'], 'ム': ['mu'], 'メ': ['me'], 'モ': ['mo'] },
    k_group8: { 'ヤ': ['ya'], 'ユ': ['yu'], 'ヨ': ['yo'] },
    k_group9: { 'ラ': ['ra'], 'リ': ['ri'], 'ル': ['ru'], 'レ': ['re'], 'ロ': ['ro'] },
    k_group10: { 'ワ': ['wa'], 'ヲ': ['wo','o'], 'ン': ['n'] },
    k_group11_s: { 'シ': ['shi','si'], 'ツ': ['tsu','tu'], 'ソ': ['so'], 'ン': ['n'], 'ノ': ['no']},
    k_group12_s: { 'ウ': ['u'], 'フ': ['fu','hu'], 'ワ': ['wa'], 'ラ': ['ra'], 'ス': ['su'], 'ヌ': ['nu'], 'ヲ': ['wo','o'] },
    k_group13_a: { 'ガ': ['ga'], 'ギ': ['gi'], 'グ': ['gu'], 'ゲ': ['ge'], 'ゴ': ['go'] },
    k_group14_a: { 'ザ': ['za'], 'ジ': ['ji','zi'], 'ズ': ['zu','du'], 'ゼ': ['ze'], 'ゾ': ['zo'] },
    k_group15_a: { 'ダ': ['da'], 'ヂ': ['ji','di','dzi'], 'ヅ': ['zu','dzu'], 'デ': ['de'], 'ド': ['do'] },
    k_group16_a: { 'バ': ['ba'], 'ビ': ['bi'], 'ブ': ['bu'], 'ベ': ['be'], 'ボ': ['bo'] },
    k_group17_a: { 'パ': ['pa'], 'ピ': ['pi'], 'プ': ['pu'], 'ペ': ['pe'], 'ポ': ['po'] },
    k_group18_a: { 'キャ': ['kya'], 'キュ': ['kyu'], 'キョ': ['kyo'] },
    k_group19_a: { 'シャ': ['sha','sya'], 'シュ': ['shu','syu'], 'ショ': ['sho','syo'] },
    k_group20_a: { 'チャ': ['cha','cya','tya'], 'チュ': ['chu','cyu'], 'チョ': ['cho','cyo'] },
    k_group21_a: { 'ニャ': ['nya'], 'ニュ': ['nyu'], 'ニョ': ['nyo'] },
    k_group22_a: { 'ヒャ': ['hya'], 'ヒュ': ['hyu'], 'ヒョ': ['hyo'] },
    k_group23_a: { 'ミャ': ['mya'], 'ミュ': ['myu'], 'ミョ': ['myo'] },
    k_group24_a: { 'リャ': ['rya'], 'リュ': ['ryu'], 'リョ': ['ryo'] },
    k_group25_a: { 'ギャ': ['gya'], 'ギュ': ['gyu'], 'ギョ': ['gyo'] },
    k_group26_a: { 'ジャ': ['ja','jya'], 'ジュ': ['ju','jyu'], 'ジョ': ['jo','jyo'] },
    k_group27_a: { 'ビャ': ['bya'], 'ビュ': ['byu'], 'ビョ': ['byo'] },
    k_group28_a: { 'ピャ': ['pya'], 'ピュ': ['pyu'], 'ピョ': ['pyo'] },
    k_group29_a: { 'ファ': ['fa'], 'フィ': ['fi'], 'フェ': ['fe'], 'フォ': ['fo'], 'フュ': ['fyu'] },
    k_group30_a: { 'ウィ': ['wi'], 'ウェ': ['we'], 'ウォ': ['wo'], 'ヴァ': ['va'], 'ヴィ': ['vi'], 'ヴェ': ['ve'], 'ヴォ': ['vo'] },
    k_group31_a: { 'ツァ': ['tsa'], 'ツィ': ['tsi'], 'ツェ': ['tse'], 'ツォ': ['tso'] },
    k_group32_a: { 'チェ': ['che'], 'シェ': ['she'], 'ジェ': ['je'] },
    k_group33_a: { 'ティ': ['ti'], 'ディ': ['di'], 'デュ': ['du'], 'トゥ': ['tu'] }
}

export const kana: KanaMap[] = [hiragana, katakana];
