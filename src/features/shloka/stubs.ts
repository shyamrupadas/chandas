import { ShlokaData } from '../main'

const currentShlokaDataEn: ShlokaData = {
  first: [
    { akshara: 'tṛ', state: 'l' },
    { akshara: 'ṇā', state: 'g1' },
    { akshara: 'd a', state: 'l' },
    { akshara: 'pi', state: 'l' },
    { akshara: ' su', state: 'l' },
    { akshara: '-nī', state: 'g1' },
    { akshara: 'ce', state: 'g1' },
    { akshara: 'na', state: 'g2' },
  ],
  second: [
    { akshara: 'ta', state: 'l' },
    { akshara: 'ro', state: 'g1' },
    { akshara: 'r i', state: 'l' },
    { akshara: 'va', state: 'l' },
    { akshara: ' sa', state: 'l' },
    { akshara: 'hi', state: 'g2' },
    { akshara: 'ṣṇu', state: 'l' },
    { akshara: 'nā', state: 'g1' },
  ],
  third: [
    { akshara: 'a', state: 'l' },
    { akshara: 'mā', state: 'g1' },
    { akshara: 'ni', state: 'l' },
    { akshara: 'nā', state: 'g1' },
    { akshara: ' mā', state: 'g1' },
    { akshara: 'na', state: 'l' },
    { akshara: '-de', state: 'g1' },
    { akshara: 'na', state: 'g2' },
  ],
  fourth: [
    { akshara: 'kī', state: 'g1' },
    { akshara: 'rta', state: 'l' },
    { akshara: 'nī', state: 'g1' },
    { akshara: 'ya', state: 'g2' },
    { akshara: 'ḥ sa', state: 'l' },
    { akshara: 'dā', state: 'g1' },
    { akshara: ' ha', state: 'l' },
    { akshara: 'riḥ', state: 'g2' },
  ],
}

const currentShlokaDataRu: ShlokaData = {
  first: [
    { akshara: 'тр̣', state: 'l' },
    { akshara: 'н̣а̄', state: 'g1' },
    { akshara: 'д а', state: 'l' },
    { akshara: 'пи', state: 'l' },
    { akshara: ' су', state: 'l' },
    { akshara: 'нӣ', state: 'g1' },
    { akshara: 'че', state: 'g1' },
    { akshara: 'на', state: 'g2' },
  ],

  second: [
    { akshara: 'та', state: 'l' },
    { akshara: 'ро', state: 'g1' },
    { akshara: 'р и', state: 'l' },
    { akshara: 'ва', state: 'l' },
    { akshara: ' са', state: 'l' },
    { akshara: 'хи', state: 'g2' },
    { akshara: 'шн̣у', state: 'l' },
    { akshara: 'на̄', state: 'g1' },
  ],
  third: [
    { akshara: 'а', state: 'l' },
    { akshara: 'ма̄', state: 'g1' },
    { akshara: 'ни', state: 'l' },
    { akshara: 'на̄', state: 'g1' },
    { akshara: ' ма̄', state: 'g1' },
    { akshara: 'на', state: 'l' },
    { akshara: 'де', state: 'g1' },
    { akshara: 'на', state: 'g2' },
  ],
  fourth: [
    { akshara: 'кӣ', state: 'g1' },
    { akshara: 'рта', state: 'l' },
    { akshara: 'нӣ', state: 'g1' },
    { akshara: 'йа', state: 'g2' },
    { akshara: 'х̣ са', state: 'l' },
    { akshara: 'да̄', state: 'g1' },
    { akshara: ' ха', state: 'l' },
    { akshara: 'рих̣', state: 'g2' },
  ],
}

export const currentShloka = {
  title: 'Шри Чайтанья-чаритамрита А̄дӣ-лӣла̄ 17.31',
  ru: currentShlokaDataRu,
  en: currentShlokaDataEn,
}

export const DIACRITIC_SYMBOLS = ['р̣', 'т̣', 'д̣', 'н̣', 'н̇', 'н̃', 'ā', 'ӣ', 'х̣', 'м̇', 'ш́']
