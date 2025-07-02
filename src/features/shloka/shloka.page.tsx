import { cn } from '@/shared/lib/utils'
import { currentShloka, DIACRITIC_SYMBOLS } from './stubs'
import { useReducer, useState } from 'react'
import { Button } from '@/shared/components/ui/button'

type Language = 'ru' | 'en'

type Config = {
  lang: Language
  isExtendedView: boolean
}

const CONFIG: Config = {
  lang: 'ru',
  isExtendedView: false,
}

const ShlokaPage = () => {
  const { title, ru, en } = currentShloka

  const [language, setLanguage] = useState<Language>(CONFIG.lang)
  const [isExtendedView, toggleExtendedView] = useReducer(
    (prev) => !prev,
    CONFIG.isExtendedView
  )

  const shlokaData = language === 'ru' ? ru : en

  return (
    <div className="flex flex-col p-4 gap-4">
      <h3>{title}</h3>
      <div className="flex flex-row gap-2">
        <Button variant="outline" onClick={() => setLanguage('ru')}>
          RU
        </Button>
        <Button variant="outline" onClick={() => setLanguage('en')}>
          EN
        </Button>
      </div>
      <div className="flex flex-row gap-2">
        <Button
          variant={isExtendedView ? 'default' : 'outline'}
          onClick={toggleExtendedView}
        >
          Разобрать
        </Button>
      </div>
      {Object.values(shlokaData).map((pada, rowIndex) => (
        <div key={rowIndex} className="flex flex-row text-5xl whitespace-pre">
          {pada.map(({ akshara, state }, cellIndex) => {
            const borderColorClass =
              state === 'g1'
                ? 'border-red-500'
                : state === 'g2'
                  ? 'border-green-500'
                  : 'border-gray-200'
            return (
              <div
                key={cellIndex}
                className={cn(isExtendedView && ['border pb-2', borderColorClass])}
              >
                {akshara}
              </div>
            )
          })}
        </div>
      ))}
      символы для проверки
      <div className="text-5xl">
        {DIACRITIC_SYMBOLS.map((el) => (
          <>{el} </>
        ))}
      </div>
    </div>
  )
}

export const Component = ShlokaPage
