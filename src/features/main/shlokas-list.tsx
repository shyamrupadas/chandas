import { Link } from 'react-router'

type AksharaState = 'l' | 'g1' | 'g2' // laghu, guru1, guru2
type Pada = 'first' | 'second' | 'third' | 'fourth'

export type ShlokaData = Record<Pada, { akshara: string; state: AksharaState }[]>

type ShlokaListItem = {
  id: string
  label: string
  description: string
  status: 'initial' | 'inProgress' | 'finish'
}

type ShlokasList = ShlokaListItem[]

const shlokasListStub: ShlokasList = [
  {
    id: '01',
    label: 'ЧЧ 17.31',
    description: 'Шри Чайтанья-чаритамрита А̄дӣ-лӣла̄ 17.31',
    status: 'initial',
  },
  {
    id: '02',
    label: 'БГ 1.1',
    description: 'Бхагавад-гита как она есть 1.1',
    status: 'initial',
  },
]

export const ShlokasList = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>Все шлоки</div>
      {shlokasListStub.map(({ id, label, description }) => (
        <Link key={id} to={`shloka/${id}`}>
          <div title={description}>{label}</div>
        </Link>
      ))}
    </div>
  )
}
