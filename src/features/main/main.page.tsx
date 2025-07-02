import { ShlokasList } from './shlokas-list'

// TODO
// - [ ] Добавить режим теста, когда я навожу на слоги - и выбираю их стейт (l по дефолту, 1 раз кликнул - g1, второй раз - g2)
// - [ ] Добавить режим проверки, когда то, что ты накликал сравнивается с образцом и выдает тебе результат

const MainPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <ShlokasList />
    </div>
  )
}

export const Component = MainPage
