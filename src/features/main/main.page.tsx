import { cn } from '@/shared/lib/utils'

type AksharaState = 'l' | 'g1' | 'g2' // laghu, guru1, guru2
type Pada = 'first' | 'second' | 'third' | 'fourth'

const currentShloka: Record<Pada, { akshara: string; state: AksharaState }[]> = {
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
    { akshara: 'кӣ', state: 'g1' },
    { akshara: 'рта', state: 'l' },
    { akshara: 'нӣ', state: 'g1' },
    { akshara: 'йа', state: 'g2' },
    { akshara: 'х̣ са', state: 'l' },
    { akshara: 'да̄', state: 'g1' },
    { akshara: ' ха', state: 'l' },
    { akshara: 'рих̣', state: 'g2' },
  ],
  //fourth: [
  //  { akshara: 'kī', state: 'g1' },
  //  { akshara: 'rta', state: 'l' },
  //  { akshara: 'nī', state: 'g1' },
  //  { akshara: 'ya', state: 'g2' },
  //  { akshara: 'ḥ sa', state: 'l' },
  //  { akshara: 'dā', state: 'g1' },
  //  { akshara: ' ha', state: 'l' },
  //  { akshara: 'riḥ', state: 'g2' },
  //],
}

//тр̣н̣а̄д апи сунӣчена
//тарор ива сахишн̣уна̄
//ама̄нина̄ ма̄надена
//

// TODO
// - [ ] Добавить шрифт, чтобы корректно отображал совмещенные кириллические символы
// - [ ] Добавить переключатель: обычный просмотр, и разобранный
// - [ ] Добавить режим теста, когда я навожу на слоги - и выбираю их стейт (l по дефолту, 1 раз кликнул - g1, второй раз - g2)
// - [ ] Добавить режим проверки, когда то, что ты накликал сравнивается с образцом и выдает тебе результат

const MainPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      Шри Чайтанья-чаритамрита А̄дӣ-лӣла̄ 17.31
      {Object.values(currentShloka).map((pada, rowIndex) => (
        <div key={rowIndex} className="flex flex-row text-5xl whitespace-pre">
          {pada.map(({ akshara, state }, cellIndex) => {
            const borderColorClass =
              state === 'g1'
                ? 'border-red-500'
                : state === 'g2'
                  ? 'border-green-500'
                  : 'border-gray-200'
            return (
              <div key={cellIndex} className={cn('border pb-2', borderColorClass)}>
                {akshara}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export const Component = MainPage
