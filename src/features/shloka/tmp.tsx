import React, { useRef, useLayoutEffect, useState } from 'react'

export type Word = {
  text: string
  translation: string
  startIndex: number
  endIndex: number
}

export type Syllable = {
  text: string
  startIndex: number
  endIndex: number
  wordIndices: number[]
}

export const LineDisplay: React.FC = () => {
  const text = 'тр̣н̣а̄д апи'

  const words: Word[] = [
    { text: 'тр̣н̣а̄д', translation: 'трава', startIndex: 0, endIndex: 7 },
    { text: 'апи', translation: 'даже', startIndex: 8, endIndex: 11 },
  ]

  const syllables: Syllable[] = [
    { text: 'тр̣', startIndex: 0, endIndex: 2, wordIndices: [0] },
    { text: 'н̣а̄', startIndex: 2, endIndex: 5, wordIndices: [0] },
    { text: 'д а', startIndex: 5, endIndex: 8, wordIndices: [0, 1] },
    { text: 'пи', startIndex: 9, endIndex: 11, wordIndices: [1] },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [wordPositions, setWordPositions] = useState<number[]>([])
  const [wordWidths, setWordWidths] = useState<number[]>([])

  useLayoutEffect(() => {
    if (!containerRef.current) return
    const containerLeft = containerRef.current.getBoundingClientRect().left
    const positions: number[] = []
    const widths: number[] = []
    wordRefs.current.forEach((el) => {
      if (el) {
        const rect = el.getBoundingClientRect()
        positions.push(rect.left - containerLeft)
        widths.push(rect.width)
      } else {
        positions.push(0)
        widths.push(0)
      }
    })
    setWordPositions(positions)
    setWordWidths(widths)
  }, [])

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Верхняя строка: текст в слогах */}
      <div className="flex flex-row text-[32px] font-bold relative z-10">
        {syllables.map((syllable, i) => (
          <span
            key={i}
            className="px-1 mx-[1px] rounded"
            style={{
              backgroundColor: `hsl(${i * 60}, 70%, 80%)`,
              whiteSpace: 'pre',
            }}
          >
            {syllable.text}
          </span>
        ))}
      </div>

      {/* Прозрачный слой со span'ами слов для точного позиционирования */}
      <div className="absolute top-0 left-0 flex text-[32px] font-bold text-transparent pointer-events-none z-0">
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            className="px-1 mx-[1px]"
          >
            {word.text}
          </span>
        ))}
      </div>

      {/* Подписи (переводы) под словами */}
      <div className="absolute top-[100%] mt-1 text-sm text-gray-600">
        {words.map((word, i) => (
          <span
            key={i}
            className="absolute"
            style={{
              left: wordPositions[i] ?? 0,
              width: wordWidths[i],
              textAlign: 'left',
            }}
          >
            {word.translation}
          </span>
        ))}
      </div>
    </div>
  )
}
