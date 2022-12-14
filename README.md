# **[Online-zoo](https://pavel-troinich.github.io/online-zoo/online-zoo/pages/main/)**
Ссылка на выполненную работу: https://pavel-troinich.github.io/online-zoo/online-zoo/pages/main/

Online-zoo - это платформа, где собрана информация о животных из различных зоопарков, имеющих веб-камеры. Предполагается, что пользователь может открыть страницу с ресурсами зоопарка, понаблюдать за кем-либо из животных или сделать пожертвование, на которое будет закуплен корм. В рамках задания, нам предстоит сделать адаптивную верстку и интерактивность главной страницы, и страницы с донатами.

**[PetStory-online](https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks)**  
Текст ссылки: https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks

## Этапы выполнения задания

**[Неделя 1](#неделя-1)**: Фиксированная верстка страниц `desktop_petstory` и `desktop_donate`.
- на данном этапе вам предстоит создать фиксированную верстку двух страниц. При фиксированной верстке страницы выглядят одинаково при ширине окна в 1600px. Именно на такой ширине и проводим проверку. 

**[Неделя 2](#неделя-2)**: Добавление адаптивности верстки.
- на этом этапе вам предстоит адаптировать согласно макету ранее созданные страницы под различную ширину окна от максимальной до 320px включительно. При этом нужно будет адаптировать и декоративные элементы.

**[Неделя 3](#неделя-3)**: Добавление дополнительного функционала.
- на этом этапе на ранее сверстанные страницы добавляется дополнительный функционал: меню, слайдер, пагинация, попап.


## Технические требования

Расширение PerfectPixel для Google Chrome можно использовать для того, чтобы сверяться с изображением
*[Расширение PerfectPixel для Google Chrome](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)*

Поддержка браузеров: **Google Chrome, Mozilla Firefox**. В первую очередь мы разрабатываем для Google Chrome. Затем проверяем, не «рушит» ли Mozilla Firefox наши стили.

**Запрещается** использование CSS-фреймворков (bootstrap, foundation и т.д.).  
**Запрещается** использование JS-фреймворков (Angular, React, Vue и т.д.).  
**Запрещается** использование устаревших библиотек (jQuery и т.д.). 

**Разрешается** использование актуальных библиотек с набором вспомогательных функций (lodash). Lodash пользоваться можно, как и утилитами для создания слайдера, пагинации, попапов. Однако, рекомендуется пользоваться чистым, или *ванильным* JavaScript.  
**Разрешается** использование иконочных шрифтов, CSS препроцессоров (scss).  
**Рекомендуется** использование [normalize.css](https://necolas.github.io/normalize.css/).

Обратите внимание на следующие пункты:
- Основные блоки должны быть точно расположены на заданной ширине экрана так, как в макете Figma.
- Изображения, логотипы (если они есть) должны быть расположены в рамках логического контейнера с правильным подходом по центрированию и расположению. Допускается незначительное отклонение от макета в угоду сеточной или колоночной структуре.
- Иконки, картинки должны сохранять идеальное расстояние до начала соответствующего им текста.
- Иконки, картинки должны сохранять свои пропорции.
- Если использован правильный шрифт, проверьте высоту текста — он должен соответствовать исходнику. Ширина может варьироваться. Но общепринятой практикой является добавление свойства межбуквенного интервала (`letter-spacing`) тексту заголовков, девиза (motto) или цитат.
- Если в строке несколько объектов визуально одинаковой ширины, то ширина содержащих их блоков должна быть одинаковой. Разница размеров изображений не имеет значения, важно совпадение размеров блоков. Если в макете ширина блоков разная, то делать ее все равно нужно одинаковой.
- Некоторые элементы должны быть интерактивными. Макет содержит отдельно спроектированные блоки с описанием того, как выглядит кнопка или элемент с hover-эффектом и без него.

«Интерактивный» означает, что у кнопки или элемента появляется визуальный эффект или анимация (на ваше усмотрение и исходя из макета: анимация курсора, изменение цвета заднего фона, затемнение, нижнее подчеркивание, изменение шрифта) при каких-либо действиях пользователя, например, при наведении курсора. Использовать JavaScript для обработки пользовательских событий в данном задании не обязательно. Обычно, такой эффект реализуют при помощи псевдокласса `:hover` и следующих свойств:
- `cursor: pointer`,
- `background`,
- `text-decoration: underline`,
- `color`.



## Неделя 1

Выполняется создание всех страниц для ширины экрана **1600px**.


### Технические требования

Максимальный балл: **100**


#### Общие

Все фоновые элементы макета должны растягиваться на всю доступную ширину экрана, если ширина больше 1600px. При этом направляющие должны сохраняться в исходном размере, 1160px. Особенностью этого проекта являются:
- нестандартные размеры,
- дополнительные визуальные элементы.

Для создания вертикальных отступов лучше использовать вертикальные margin на блоках высшего порядка, насколько это возможно. При этом иметь ввиду, что вертикальные margin могут схлопнуться.

Для создания многоколоночных структур, или элементов имеющих относительное горизонтальное расположение, должно быть использовано одно из свойств:
- display: flex
- display: grid
- display: inline-block

❗ Соблюдение отступов между элементами важнее, чем размеры этих элементов. Часто можно увидеть некрасивые значения (вроде 369px х 548px), но это лишь значит, что размеры рассчитывались с учетом расстояния между направляющими и отступов между элементами.


#### Landing (70 баллов)

1. **Header** (`<header>` содержит только логотип, панель навигации)
- Логотип находится слева. Нажатие на логотип работает по принципу нажатия на `About`, перебрасывает нас на текущую страницу, на *petstory (Landing)*.
- Интерактивная панель навигации. Нажатия на элементы меню, для которых страниц не существует, могут ничего не делать.
- Должен быть подсвечен элемент `About`. И он должен перестать быть интерактивным.
- Нажатие на `Donate`перебрасывает нас на страницу *donate*.
- Нажатие на `Designed by ©` перебрасывает нас на оригинальную страницу [Figma](https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online).
- На странице обязательно должен присутствовать один элемент `<h1>`. В нем должен быть текст `PetStory Online`.
- Хедер "липким" делать не нужно. Т.е. при скролле он остается на своей позиции.

2. Блок **Watch your favorite animal online**
- Задний фон является картинкой.
- Кнопка `Watch online` должна быть интерактивной. При нажатии может ничего не происходить.

3. Блок **The Backstage**
- Картинка и текст - двухколоночный макет.

4. Блок **Pets**
- Кнопки влево и вправо должны быть интерактивными. При нажатии может ничего не происходить.
- Карточки животных должны быть интерактивными.
- ❗ При наведении курсора должна быть анимация выезда текста снизу картинки, где будет информация о названии животного и локации с затемненным задним фоном. Сама картинка, но не карточка, должна [увеличиваться на 10px в каждом направлении относительно центра](https://thoughtbot.com/blog/transitions-and-transforms).
- Кнопка `Choose your favorite` должна быть интерактивной. При нажатии может ничего не происходить.

5. Блок **Pick and feed a friend**
- Текст `Emergency support Fund` должна быть ссылкой. Нажатие перебрасывает нас на *donate*.
- Кнопка `Feed a friend now` должна быть интерактивной. Нажатие перебрасывает нас на *donate*.

6. Блок **Testimonials**
- Полоска прогресса должна быть интерактивной. Начинаем в крайней левой позиции. При нажатии может ничего не происходить.
- Кнопка `Leave feedback` должна быть интерактивной. При нажатии может ничего не происходить.

7. **Footer** (`<footer>` содержит меню, логотипы, кнопки доната и соц. сетей):
- Нажатие на логотип работает по принципу нажатия на About, перебрасывает нас на верх текущей страницы, на *petstory (Landing)*.
- Кнопка `Donate for volunteers` должна быть интерактивной. Нажатие перебрасывает нас на *donate*.
- Интерактивная панель соцсетей. Нажатия на соцсети (иконка + текст) могут вести просто на заглавные страницы соответствующих ресурсов.
- Email - поле `input` с типом `email`.
- Кнопка `submit` должна быть в положении *mistake*. Если поле `email` проходит валидацию, то переходит в состояние *default*.
- Интерактивная панель навигации. Нажатия на элементы меню, для которых страниц не существует, могут ничего не делать.
- Должен быть подсвечен элемент `About`. И он должен перестать быть интерактивным.
- ❗ Если нет возможности подобрать необходимую толщину текста, используйте близкие значения [насыщенности](https://developer.mozilla.org/ru/docs/Web/CSS/font-weight), +-100.


#### Donate (30 баллов)

1. **Header** (`<header>` содержит только логотип, панель навигации)
- Логотип находится слева. Нажатие на логотип работает по принципу нажатия на `About`, перебрасывает нас на текущую страницу, на *petstory (Landing)*.
- Интерактивная панель навигации. Нажатия на элементы меню, для которых страниц не существует, могут ничего не делать.
- Нажатие на `About` перебрасывает нас на *petstory (Landing)*.
- Нажатие на `Donate` может ничего не делать. Либо может переводить на страницу *donate*.
- Нажатие на `Designed by ©` перебрасывает нас на оригинальную страницу [Figma](https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online).
- На странице обязательно должен присутствовать один элемент `<h1>`. В нем должен быть текст `PetStory Online`.
- Хедер "липким" делать не нужно. Т.е. при скролле он остается на своей позиции.

2. Блок **Pick and feed a friend**
- Зона в радиусе 20px от желтой точки должна быть интерактивной. При нажатии может ничего не происходить.
- Another amount - поле `input` типа `number` со [cкрытыми стрелками](https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp). Знак $ должен всегда присутствовать внутри поля. Должно стоять ограничение в 4 символа.
- `Monthly` и `Once` - взаимоисключающие поля `input` типа `radio`.
- ❗ Поле `Once` должно быть активировано по умолчанию. Т.е. при открытии страницы, или перезагрузке.
- Кнопка `Feed a friend now` должна быть интерактивной. При нажатии может ничего не происходить.

3. **Footer** (`<footer>` содержит меню, логотипы, кнопки доната и соц. сетей):
- Нажатие на логотип работает по принципу нажатия на About, перебрасывает нас на верх текущей страницы, на *petstory (Landing)*.
- Кнопка `Donate for volunteers` должна быть интерактивной. Нажатие  может ничего не делать. Либо может переводить на страницу *donate*.
- Интерактивная панель соцсетей. Нажатия на соцсети (иконка + текст) могут вести просто на заглавные страницы соответствующих ресурсов.
- Email - поле `input` с типом `email`.
- Кнопка `submit` должна быть в положении *mistake*. Если поле `email` проходит валидацию, то переходит в состояние *default*.
- Интерактивная панель навигации. Нажатия на элементы меню, для которых страниц не существует, могут ничего не делать.
- Нажатие на `About` перебрасывает нас на *petstory (Landing)*.
- ❗ Если нет возможности подобрать необходимую толщину текста, используйте близкие значения [насыщенности](https://developer.mozilla.org/ru/docs/Web/CSS/font-weight), +-100.



## Неделя 2

Сверстанные страницы адаптируются под следующую ширину экрана устройства:
- 1600px (уже будет готово)
- 1000px
- 640px
- 320px

### Технические требования

Максимальный балл: **100**


#### Общие

Точки перехода могут быть произвольными. Оценивать, насколько правильно и удобно они подобраны, мы не будем. Ниже будут периведены рекомендации для тех, кто еще не выполнял задание:  
1. (max-width: 1600px) или (max-width: 1599px) - Переход между состояниями фиксированной колонки и отзывчивой.  
  
-- Опционально (max-width: 1599px) или (max-width: 1440px) или (max-width: 1280px) или (max-width: 1220px)  
2. (max-width: 1000px) - Изменение расположения кнопок врпаво/влево в блоке `Pets`. Обратите внимание, что карточки могут быть другие при изменеии ширины экрана, последовательность карточек (названия, картинки) - роли не играют. Изменение количества отзывов в блоке `Testimonials`, при этом сам текст в отзыве роли не играет, важен только размер.
  
-- Опционально (max-width: 999px) или (max-width: 980px) или (max-width: 768px)  
3. (max-width: 640px) - Замена меню в хедере на бургер меню. Хедер становится фиксированным. Потеря или преобразование некоторых элементов, и изменение расположения в блоках `The backstage`, `Pick and feed a friend`. Изменение количества, размера и отступов карточек животных в блоке `Pets`. Изменение расположения отзывов в блоке `Testimonials`.
  
-- Опционально (max-width: 639px) или (max-width: 600px)  
4. (max-width: 320px) - Потеря или преобразование некоторых элементов, и изменение расположения в блоках `The backstage`, `Pick and feed a friend`. Изменение количества, размера и отступов карточек животных в блоке `Pets`. Изменение расположения отзывов в блоке `Testimonials`.  
  
Общие обозначения:
1. **Указанные** элементы - это элементы, которые прописаны в требованиях, и для которых указаны штрафные баллы за такой тип ошибки. Помимо этого, если ошибку для элементов, например, хедера или футера, мы уже указывали, а она идентично повторяется для других размеров или страниц, повторно баллы не снимаем.
2. *Отступы* между элементами - это вертикальные и горизонтальные отступы между соседними элементами, как правило в одном списке или в одной сетке.
3. *Расположение* элементов - это обозначение отступов от элемента до краев экрана или других элементов. Для текста учитываются отступы слева и сверху первой строки (точка начала текста), если текст выровнен по левому краю, или в заголовках. Что касается перехода из положения, когда все элементы выравнены по левому краю, в центральное положение, то тут можно смотреть отступы самого блока, и наличие свойств позиционирования контента по центру.
4. *Вид* элементов - это обозначение внешнего вида элементов. Например, если происходит переход от маленькой круглой кнопки к большой квадратной, то акцентируется внимание на соотвествии внешнего вида тому, что приведен в дизайне.
5. *Количество* элементов - это требование соотвествия количества элементов в дизайне. Например, при переходе на меньший размер экрана количество элементов уменьшается с 6 до 4х. Количество элементов больше или меньше 4х, в таком случае, будет считаться ошибкой.  
  
❗ Обратите внимание на эти пункты:
1. Изменение элементов со сменой концепции лучше сделать через скрытие/отображение элементов. Например, замена картинок стрелок на другие в блоке `Pick and feed a friend`. Также, в некоторых случаях, будет проще работать с ними в js.
2. Бургер-меню может быть не активным. Т.е. если при нажатии на него ничего не проиходит, то баллы снимать не будем.
3. На странице *Donate*, поле `Another amount` может находиться по ценру страницы, это не ошибка, баллы не снимаем.

❗ Особенности проверки адаптивности в DevTools
1. Открываем инструменты разработчика
   - для этого нажимаем клавишу `F12` или кликаем правой кнопки мыши и выбираем в появившемся меню пункт `Посмотреть код`
   - в правом верхнем углу панели инструментов разработчика кликаем на иконку `Toggle device toolbar`
   - на верхней панели выбираем `Responsive`
2. Убедитесь, что в режиме `Responsive` нет вертикальной полосы прокрутки (она отсутствует по умолчанию). Если полоса прокрутки есть, её нужно убрать. Для этого
   - в верхней панели device toolbar переключите тип устройства с `Desktop` на `Mobile` 
   - если тип устройства не отображается, в верхней панели device toolbar нажмите на три точки справа и выберите `Add device type` 




   ## Неделя 3

Добавление JavaScript.

Максимальный балл: **100**

### Технические требования


#### Общие

Проверять и оценивать качество дизайна не будем. Орфографические ошибки также не учитываем. Некоторые термины:
1. Карусель (carousel) подразумавет плавное перелиствание элементов слева направо, или наоборот. Т.е. должна быть анимация.
2. Попап (pop-up) - модальное окно, которое выскакивает поверх экрана, и не дает пользователю возможности использовать остальное приложение, пока он его не закроет.
3. ❗Когда мы проверяем условия для разной ширины экрана, то мы не просто растягиваем экран на нужную ширину, а делаем при этом перезагрузку страницы!


#### Landing & Donate

1. **Меню** в `хедере`, как только панель навигации превращается в бургер-меню (для ширины экрана 640px или меньше).  
- Должно открываться по нажатию.  
- При открытии появляется меню, как в [макете](https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/). Однако, в макете не хватает кнопки закрытия (например, крестика, или другого визульного элемента) в правом верхнем углу, поэтому ее нужно добвать на свой вкус. Можно взять из дизайна попапа отзыва.  
- Область под открытым меню затемняется на всю доступную высоту экрана (накладывается полупрозрачный фон).  
- Нажатие на крестик или нажатие на затемненную область должны закрывать меню.  
- При закрытии, затемненная область под меню должна исчезнуть.  


#### Landing

1. **Карусель** в блоке `Pets` для ширины экрана 1600px, 1000px и 640px.
- Должно происходить перелистывание блоков вправо/влево по нажатию на соответствующую кнопку бесконечно. Т.е. последовательная генерация и удаление блоков, либо замена на уже существующие и перестановка их вперед и назад.  
- Порядок картинок генерируется в случайной последовательности! При этом, в одном слайде все картинки должны быть уникальными.  
- В блоке, где отображается 6 карточек животных, перелистывание должно происходить сразу по 6 элементов. При меньшем количестве, перелистываться будет меньшее количество элементов внутри.  
- Важно проверить условие на то, чтобы наши блоки выполняли ровно одно движение за раз. Имеется ввиду, что пока происходит анимация, и пользователь не может нажать на кнопку несколько раз подряд. А если такая возможность есть, то анимация случается единожды, и только при нажатии после завершения первой анимации, произойдет вторая.

2. **Карусель** в блоке `Testimonials` для ширины экрана 1600px и 1000px.
- Должны быть сгенерированы как минимум 11 отзывов. Они могут быть любым текстом, как и имена, и фотограии пользователей. В отличие от карусели в блоке *Pets*, отзывы генерируются только один раз. Либо у вас всегда будет одинаковый набор 
- Всего в интервалах будет 8 значений. Или диапазон значений от 0 до 7: 0, 1, 2, 3, 4, 5, 6, 7.  
- Полоса прогресса должна быть привязана к конкретному промежуточному интервалу.  
[Пример полосы прогресса](https://codepen.io/juanbrujo/pen/uIqaw)  
- Сдвиг на еденицу, будет означать пояление всего одного нового отзыва.
- Перелистывание отзывов также должно происходить путем движения ползунка на полосе прогресса. В самом крайнем левом положении ползунка будут видны первые отзывы. В крайнем правом положении ползунка будут видны последние отзывы. Рекомендуется уменьшить размер оранжевого ползунка до 1/8 (12,5%) от общей длины полосы. Можно оставить в таком виде, как он есть.
- При переходе с 1600px на 1000px количество интервалов может увелиться на 1. А может остаться в количестве 8 значений. Засчитываются об варианта. 

3. **Попап** при нажатии на отзыв в блоке `Testimonials` для ширины экрана 640px и 320px.
- Попап должен открываться по нажатию на отзыв.  
- При открытии появляется отзыв, как на дизайне, а также крестик в правом верхнем углу. Вокруг отзыва будет внешняя область, перекрывающая страницу. При этом, желательно, чтобы затемнение было сделано полупрозрачной тенью вокруг самого отзыва. Если используется непрозрачный белый фон, или частичный фон, перенесенный из дизайна вместе с размерами, ошибкой это считаться не будет.  
- Нажатие на крестик, или нажатие на заетмненную внешнюю область должны закрывать попап. Если отзыв показывается на фоне белого обрезанного прямоугольника (как в дизайне фигма), в котором находятся отзыв и крестик, и нажатие на белый блок вокруг отзыва не закрывает попап, то проверяем область вокруг белого блока. В таком случае она должна быть затемненной и закрывать попап по нажатию. Такое решение не является ошибкой.   
- При закрытии, затемненная область под попапом должна исчезнуть.  


#### Donate

1. **Панель Amount** в блоке `Pick and feed a friend` для ширины экрана 1600px, 1000px, 640px и менее.
- При нажатии на кружок поверх суммы, он должен стать подсвеченным, а предыдущий активный кружок стать неактивным.
- Указанная сумма при нажатии на кружочек должна быть записана в поле Another amount.
- Обязательное поле Another amount должно быть ограничено 4 символами типа number. 
- На старте отображения страницы должно быть введено число 100, и быть подсвечен соответствующий элемент (3й справа).
- Если в поле Another amount ввести число, которое совпадает с одной из сумм в полоске Amount сверху, соответствующий кружок должен стать подсвеченным.
- Анимцию в этом пункте можно не добавлять
