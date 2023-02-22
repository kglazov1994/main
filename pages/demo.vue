<template>
    <!-- TODO: описать лоадер -->
    <!-- TODO: доабвить описание табов -->
    <div class="demo">
        <div class="container">
            <h1>Справочник</h1>
            <p>
                Сборка даёт базовые компоненты, сетку, иконки, кнопки, формы, модалки, минимальная стилизация и базовый
                функционал позволяют кастомизировать её как угодно
            </p>
            <ul>
                <li><a href="#obshee">Общее</a></li>
                <li><a href="#seo">SEO</a></li>
                <li><a href="#perehody">Переходы</a></li>
                <li><a href="#direkivy">Директивы</a></li>
                <li><a href="#peremennye">Переменные</a></li>
                <li><a href="#conainer">Контейнер</a></li>
                <li><a href="#setka">Сетка</a></li>
                <li><a href="#ikonki">Иконки</a></li>
                <li><a href="#knopki">Кнопки</a></li>
                <li><a href="#formy">Формы</a></li>
                <li><a href="#slider">Слайдер</a></li>
                <li><a href="#modalnoe-okno">Модальное окно</a></li>
            </ul>

            <h2 id="obshee">Общее</h2>
            <p><code>.site</code> - обертка разметки, содержит в себе:</p>
            <ul>
                <li>Header - <code>~/components/Header.vue</code></li>
                <li>
                    Main - содержимое страницы, обёрнуто в
                    <code>.site__content</code>, по умолчания растягивется на всю высоту страницы прижимая футер книзу
                    экрана
                </li>
                <li>Footer - <code>~/components/Footer.vue</code></li>
            </ul>
            <p><code>.flex</code> - класс для флекс блока</p>
            <p><code>.flex-с</code> - класс для флекс блока с align-items: center</p>
            <p>
                <code>.like-link</code> -
                <span class="like-link">добавляет блоку стилизацию ссылки</span>
            </p>
            <p>
                Шрифты грузятся в папку <code>~/assets/fonts</code> и подключаются в файле
                <code>~/assets/less/fonts</code>, там же прописываются шрифтовые классы
            </p>
            <p>
                <code>$device</code> -
                <a href="https://github.com/nuxt-community/device-module" target="_blank" rel="noopener noreferrer">
                    Справка по модулю </a
                >, служит для определения устройства пользователя, не работает с ssr
            </p>
            <p>
                <code>$global</code> - доступ к глобальным методам, можно ыбло бы подключать миксины, но я не хочу, все
                методы описываются в файле <code>~/plugins/global.js</code> путем добавления новых свойств в объект
                <code>global</code>
            </p>
            <p>При желании можно разнести методы по разным глобальным переменным</p>
            <h2 id="seo">SEO</h2>
            <p>
                Установлен модуль <code>@nuxtjs/sitemap</code>
                <a href="https://github.com/nuxt-community/sitemap-module" target="_blank" rel="noopener noreferrer">
                    Справка по модулю
                </a>
            </p>
            <p>Добавлен файл <code>./static/robots.txt</code> с деолтным содержимым</p>
            <p>Не забудте поменять адрес сайта в настроках sitemap и в robots.txt</p>
            <h2 id="perehody">Переходы</h2>
            <p><code>fade</code> - выход из прозрачности</p>
            <div class="example">
                <pre
                    v-text="
                        `
                    <transition name='fade'></transition>
                `
                    "
                ></pre>
            </div>
            <h2 id="direktivy">Директивы</h2>
            <p>
                <code>v-bsl</code> - блокировка прокрутки сайта,
                <a href="https://github.com/BramHoningh/vue-body-scroll-lock" target="_blank" rel="noopener noreferrer"
                    >документация</a
                >
            </p>
            <p>
                <code>v-click-outside</code> - обработка клика вне элемента,
                <a href="https://github.com/ndelvalle/v-click-outside" target="_blank" rel="noopener noreferrer"
                    >документация</a
                >
            </p>
            <h2 id="peremennye">Переменные</h2>
            <ul>
                <li><code>Переменная: значение по умолчанию</code> - описание</li>

                <li><code>@spacer: 16px;</code> - отступ между колонок сетки</li>
                <li><code>@spacerMd: 10px;</code> - отступ между колонок сетки для планшетов</li>
                <li><code>@spacerSm: 10px;</code> - отступ между колонок сетки для мобильных</li>
                <li><code>@columnCount: 12;</code> - количество колонок</li>
                <li><code>@baseWidth: 100% / @columnCount;</code> - ширина колонки в процентах</li>
                <li><code>@siteWidth: 1280px;</code> - ширина сайта/контейнера</li>
                <li><code>@containerPadding: 64px;</code> - отступы контейнера</li>
                <li><code>@containerPaddingMd: 32px;</code> - отступы контейнера для планшетов</li>
                <li><code>@containerPaddingSm: 16px;</code> - отступы контейнера для мобильных</li>
                <li><code>@large: 1600px;</code> - ширина десктопа до</li>
                <li><code>@largeStart: @medium + 1px;</code> - ширина десктопа от</li>
                <li><code>@medium: 768px;</code> - ширина планшета до</li>
                <li><code>@mediumStart: @small + 1px;</code> - ширина планшета от</li>
                <li><code>@small: 414px;</code> - ширина мобильного до</li>
                <li><code>@sm: ~'screen and (max-width: @{small} )';</code> - @media для мобильных</li>
                <li><code>@md: ~'screen and (max-width: @{medium} )';</code> - @media для планшетов</li>
                <li>
                    <code>@notsm: ~'screen and (min-width: @{mediumStart} )';</code>- @media для планшетов и десктопов
                </li>
                <li><code>@supersm: ~'screen and (max-width: 320px )';</code> - @media для маленьких мобильных</li>
                <li><code>@mainZ: 10;</code> - базовый z-index</li>
                <li><code>@baseFont: 'Circe', 'Arial', serif;</code> - основной шрифт</li>
                <li><code>@baseFontSize: 14px;</code> - основной размер шрифта</li>
                <li><code>@headerFont: 'Circe', 'Arial', serif;</code> - шрифт заголовков</li>
                <li><code>@primary: #000;</code> - основной цвет</li>
                <li><code>@secondary: #ddd;</code> - дополнительный цвет</li>
                <li><code>@accent: red;</code> - цвет акцента</li>
            </ul>
            <h2 id="media">Работа с медиа-запросами</h2>
            <div class="example">
                После настройки брейкпойнтов медиа-запросы можно прописывать прямо в стилях селектора
                <pre>

                    .foo{
                        display: block; // на больших (от 769px) - блок
                        @media @md{
                            display: inline; // на средних (от 415px до 768px) инлайн
                            .bar{
                                display: block;
                            }
                        }
                        @media @sm{
                            display: none; // на малых (до 414px) скрыто
                        }
                        @media @notsm{
                            background: #ccc // не на малых экранах (от 415px) - серый фон
                        }
                        @media @supersm{
                            display: flex; // на очень маленьких экранах (до 320px)  - флекс, и без фона
                        }
                    }
                </pre>
            </div>
            <h2 id="contianer">Контейнер</h2>
            <p>
                <code>.container</code> - органичение ширины сайта, максимальная ширина указывается в
                <code>~/assets/less/vars.less</code>
            </p>
            <p>
                <code>.container-ignore</code> - служит для вписывания блока внутрь контейнера игнорируя отступы
                контейнера
            </p>
            <h2 id="setka">Сетка</h2>
            <p><code>GridRow</code> - компонент сетки, отвечает за количество колонок, атрибуты:</p>
            <ul>
                <li>
                    <code>fullwidth: Boolean (false)</code>
                    - ряд строго вписывается в родительский блок, не компенсируя отступы колонок
                </li>
                <li>
                    <code>size: Number (12)</code> - указывает на количество колонок в ряду, по умолчанию 12, для смены
                    нужно <code>@columnCount</code> в <code>~/assets/less/vars.less</code> и значение атрибута по
                    умолчанию в файле компонента
                    <code>~/components/grid/Row.vue</code>
                </li>
            </ul>
            <p><code>GridCol</code> - компонент сетки, отвечает за колонку, атрибуты:</p>
            <ul>
                <li>
                    <code>size: String ('12,12,12')</code> - указывает на ширину колонки в ряду, по синтаксис -
                    'lg,md,sm' - ширина колонки для десктопа, планшета и мобилки, число не может быть больше текущего
                    количествва колонок у ряда
                </li>
                <li><code>size: Boolean (false)</code> - центрует колонку посередине ряда</li>
                <li><code>end: Boolean (false)</code> - прижимает колонку к правому краю ряда</li>
                <li><code>padding-left: Boolean (false)</code> - оставляет только левый отступ колонки</li>
                <li><code>padding-right: Boolean (false)</code> - оставляет только правый отступ колонки</li>
                <li><code>no-padding: Boolean (false)</code> - убирает отступы колонки, полезно для fullwidth ряда</li>
            </ul>
            <div class="example">
                Пример - ряд из трёх колонок, есть компенсация отступов колонок, поэтому содержимое колонки упирается в
                край контейнера
                <pre
                    v-text="
                        `
                    <GridRow>
                        <GridCol no-padding size='4,6,12'>1</GridCol>
                        <GridCol padding-left size='4,6,12'>lorem</GridCol>
                        <GridCol size='4,6,12'>3</GridCol>
                        <GridCol size='4,6,12'>4</GridCol>
                        <GridCol padding-right size='4,6,12'>ipsum</GridCol>
                        <GridCol size='4,6,12'>6</GridCol>
                    </GridRow>`
                    "
                ></pre>
                <GridRow>
                    <GridCol no-padding size="4,6,12">1</GridCol>
                    <GridCol padding-left size="4,6,12"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati ad et omnis
                        exercitationem aliquam enim quidem iste minima fuga, deleniti laudantium doloremque magnam
                        cumque quibusdam repellat nulla veritatis nam.</GridCol
                    >
                    <GridCol size="4,6,12">3</GridCol>
                    <GridCol size="4,6,12">4</GridCol>
                    <GridCol padding-right size="4,6,12"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati ad et omnis
                        exercitationem aliquam enim quidem iste minima fuga, deleniti laudantium doloremque magnam
                        cumque quibusdam repellat nulla veritatis nam.</GridCol
                    >
                    <GridCol size="4,6,12">6</GridCol>
                </GridRow>
            </div>
            <div class="example">
                Пример - ряд из трёх колонок без компенсации отступов колонок
                <pre
                    v-text="
                        `
                    <GridRow fullwidth :size='3'>
                        GridCol size='1,2,3'>1</GridCol>
                        <GridCol size='2,2,3'>2</GridCol>
                        <GridCol size='3'>3</GridCol>
                    </GridRow>
                `
                    "
                ></pre>
                <GridRow fullwidth :size="3">
                    <GridCol size="1,2,3">1</GridCol>
                    <GridCol size="2,2,3">2</GridCol>
                    <GridCol size="3">3</GridCol>
                </GridRow>
            </div>
            <br />
            <div class="example">
                Пример - ряд из трёх колонок без компенсации отступов колонок и с игнорированием отступов контейнера
                <pre
                    v-text="
                        `
                    <div class='container-ignore'>
                        <GridRow fullwidth>
                            <GridCol size='4,6,12'>1</GridCol>
                            <GridCol size='2,6,12'>2</GridCol>
                            <GridCol size='2,6,12'>3</GridCol>
                            <GridCol size='4,6,12'>4</GridCol>
                        </GridRow>
                    </div>`
                    "
                ></pre>

                <div class="container-ignore">
                    <GridRow fullwidth>
                        <GridCol size="4,6,12">1</GridCol>
                        <GridCol size="2,6,12">2</GridCol>
                        <GridCol size="2,6,12">3</GridCol>
                        <GridCol size="4,6,12">4</GridCol>
                    </GridRow>
                </div>
            </div>
            <h2 id="ikonki">Иконки</h2>
            <p>
                Для работы с конками используется модуль
                <code>@nuxtjs/svg-sprite</code>, cпрайт генерируется из иконок в папке
                <code>~/assets/icons</code>
            </p>
            <p>Компонент <code>svg-icon</code>, атрибуты:</p>
            <ul>
                <li>
                    <code>name: String ('')</code>
                    - название иконки, равно названию необходимого файла из
                    <code>~/assets/icons</code>
                </li>
                <li><code>width: String ('')</code> - желаемая ширина иконки</li>
                <li><code>height: String ('')</code> - желаемая высота иконки</li>
            </ul>
            <p>
                В коде иконки можно заменить цвета на
                <code>currentColor</code> и она начнет принимать цвет родтеля (см. пример с кнопками). Иконка
                вписывается в указанные размеры, либо использует встроенные.
            </p>
            <div class="example">
                <pre
                    v-text="
                        `
                        <div class='flex-c'>
                            Иконка с крестиком - <svg-icon name='close' width='24' height='24' />
                        </div>
                        `
                    "
                ></pre>
                <div class="flex-c">
                    Иконка с крестиком -
                    <svg-icon name="close" width="24" height="24" />
                </div>
            </div>
            <h2 id="knopki">Кнопки</h2>
            <p><code>UiButton</code> - компонент кнопки, атрибуты:</p>
            <ul>
                <li>
                    <code>to: String|Null (null)</code>
                    - адрес ссылки, если передать этот атрибут, то button заменится на nuxt-link
                </li>
                <li><code>wide: Boolean (false)</code> - растягивает конпку на всю ширину родителя</li>
                <li>
                    <code>centered: Boolean (false)</code> - центрует кнопку внутри родителя, можно применять во
                    flex-блоках
                </li>
                <li><code>disabled: Boolean (false)</code> - блокирует кнопку</li>
                <li><code>hollow: Boolean (false)</code> - кнопка без фона с обводкой</li>
                <li>
                    <code>dark: Boolean (false)</code> - устанавливает цвет фона из less-переименной
                    <code>@primary</code>
                </li>
                <li>
                    <code>[color]: Boolean (false)</code> - название цвета кнопки, при необходимости дописывается в
                    компоненте кнопки, генерирует класс .button--[color], который можно стилизовать
                </li>
            </ul>
            <div class="example">
                <pre
                    v-text="
                        `
                        <div class='flex'>
                            <UiButton>Базовая кнопка</UiButton>
                            <UiButton dark>Тёмная кнопка</UiButton>
                            <UiButton green>Зелёная кнопка</UiButton>
                            <UiButton hollow>Кнопка с обводкой</UiButton>
                            <UiButton disabled green>Зелёная заблокированная кнопка</UiButton>
                            <UiButton hollow>Кнопка с иконкой <svg-icon name='close' width='24' height='24' /></UiButton>
                        </div>
                        `
                    "
                ></pre>
                <div class="flex">
                    <UiButton>Базовая кнопка</UiButton>
                    <UiButton dark>Тёмная кнопка</UiButton>
                    <UiButton green>Зелёная кнопка</UiButton>
                    <UiButton hollow>Кнопка с обводкой</UiButton>
                    <UiButton disabled green> Зелёная заблокированная кнопка </UiButton>
                    <UiButton hollow>Кнопка с иконкой <svg-icon name="close" width="24" height="24" /></UiButton>
                </div>
            </div>
            <h2 id="formy">Формы</h2>
            <p>Все поля и настройки формы описываются в data компонента</p>
            <p><code>UiForm</code> - основной компонент формы, атрибуты:</p>
            <ul>
                <li>
                    <code>form: Object ({})</code>
                    - все параметры и свойства формы и её полей
                </li>
            </ul>
            <div class="example">
                <pre
                    v-text="
                        `
                        ...
                        data() {
                            return {
                                form: {
                                    hideSubmit: false                          // Скрывать или нет кнопку отправки
                                    submit: {                                  // Кнопка отправки формы
                                        label:'Отправить форму'                // подпись кнопки
                                        callback: () => {                      // функция выполняемая при отправке формы
                                            this.form.submit.label = this.form.fields.input1.value
                                        },
                                    },
                                    agree: {                                   // показыват чекбокс с согласием на обработку пд
                                        checked: false,                        // рядом с кнопкой отправки формы, кнопка заблокированная пока чекбокс не выбран
                                        type: 'checkbox',
                                        label: 'Даю согласие на обработку <a href='#' target='_blank'>персональных данных</a>',
                                    },
                                    fields: {                                  // список полей формы
                                        input1: {                              // одиночное поле формы
                                            value: 'Value',                    // значение поля
                                            label: 'input1 label',             // подпись поля
                                            placeholder: 'Placeholder',        // плейсхолдер поля
                                            type: 'email',                     // тип поля, любой из валидных типов
                                            required: true,                    // обязательное поле
                                            validationMessage: '',             // текст ошибки валидации (с сервера )
                                        },
                                        group1: {                              //группа полей формы
                                            childs: {                          //список полей группы
                                                input2: {
                                                    value: 'Value',
                                                    label: 'input2 label',
                                                    placeholder: 'Placeholder',
                                                    type: 'select',            // селект
                                                    hasSearch: true,           // фильтрация элементов селекта
                                                    options: {                 // элементы селекта
                                                        0: 'Option 1',
                                                        1: 'Option 2',
                                                    },
                                                },
                                                input3: {
                                                    value: 'Value',
                                                    label: 'input3 label',
                                                    placeholder: 'Placeholder',
                                                },
                                            },
                                        },
                                    },
                                },
                            }
                        },
                        ...`
                    "
                ></pre>
            </div>
            <div class="example">
                <pre
                    v-text="
                        `
                            <UiForm :form='form'></UiForm>

                        `
                    "
                ></pre>
                <UiForm :form="form"></UiForm>
            </div>
            <h2 id="slider">Слайдер</h2>
            <p>
                Используется компонент обортка для
                <a href="https://splidejs.com/integration-vue-splide/" target="_blank" rel="noopener noreferrer"
                    >Splide slider</a
                >
                <code>UiSlider</code>
                атрибуты:
            </p>
            <ul>
                <li>
                    <code>options: Object ({})</code>
                    - параметры слайдера
                </li>
            </ul>
            <div class="example">
                <pre
                    v-text="
                        `
                        ...
                        data(){
                            return {
                                sliderOptions: {
                                    perPage: 4,
                                    gap: '32px',
                                },
                            }
                        }
                        ...
                        `
                    "
                ></pre>
                <pre
                    v-text="
                        `
                        <UiSlider :options='sliderOptions'>
                            <splide-slide>
                                <img src='https://picsum.photos/200/300' />
                            </splide-slide>
                            <splide-slide>
                                <img src='https://picsum.photos/200/300' />
                            </splide-slide>
                            ...
                        </UiSlider>

                        `
                    "
                ></pre>
                <UiSlider :options="sliderOptions">
                    <splide-slide>
                        <img src="https://picsum.photos/200/300" />
                    </splide-slide>
                    <splide-slide>
                        <img src="https://picsum.photos/200/300" />
                    </splide-slide>
                    <splide-slide>
                        <img src="https://picsum.photos/200/300" />
                    </splide-slide>
                    <splide-slide>
                        <img src="https://picsum.photos/200/300" />
                    </splide-slide>
                    <splide-slide>
                        <img src="https://picsum.photos/200/300" />
                    </splide-slide>
                    <splide-slide>
                        <img src="https://picsum.photos/200/300" />
                    </splide-slide>
                </UiSlider>
            </div>
            <h2 id="modalnoe-okno">Модальное окно</h2>
            <p><code>UiModal</code> - отображает содержимое в модальном окне, атрибуты:</p>
            <ul>
                <li>
                    <code>open: Boolean (false)</code>
                    - состояние модалки, открыто/закрыто
                </li>
                <li>
                    <code>position: String ('')</code>
                    - Положение окна, писать через пробел нужное положение top / bottom, left / right, по умолчанию окно
                    находится по центру
                </li>
            </ul>
            <div class="example">
                <pre
                    v-text="
                        `
                        ...
                        data(){
                            return {
                                isModalOpen: false,
                            }
                        }
                        ...
                        `
                    "
                ></pre>
                <pre
                    v-text="
                        `
                        <UiButton dark @click.native='isModalOpen = true'
                            >Открыть модальное окно</UiButton
                        >
                        <UiModal
                            v-model='isModalOpen'
                            :open='isModalOpen'
                            position='top right'
                        >
                            <h3>Простое модальное окно</h3>
                        </UiModal>

                        `
                    "
                ></pre>
                <UiButton dark @click.native="isModalOpen = true">Открыть модальное окно</UiButton>
                <UiModal v-model="isModalOpen" :open="isModalOpen" position="top right">
                    <h3>Простое модальное окно</h3>
                </UiModal>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DemoPage',
    data() {
        return {
            isModalOpen: false,
            form: {
                submit: {
                    label: 'Отправить форму',
                    callback: () => {
                        this.form.submit.label = this.form.fields.input1.value
                    },
                },
                fields: {
                    input1: {
                        value: 'Value',
                        label: 'input1 label',
                        placeholder: 'Placeholder',
                        type: 'email',
                        disabled: true,
                    },
                    group1: {
                        childs: {
                            input2: {
                                value: 'Value',
                                label: 'input2 label',
                                placeholder: 'Placeholder',
                                type: 'select',
                                hasSearch: true,
                                options: {
                                    0: 'Option 1',
                                    1: 'Option 2',
                                },
                            },
                            input3: {
                                value: 'Value',
                                label: 'input3 label',
                                placeholder: 'Placeholder',
                            },
                        },
                    },
                },
            },
            sliderOptions: {
                perPage: 4,
                gap: '32px',
            },
        }
    },
}
</script>
<style lang="less" scoped>
.demo {
    *[class]:not(.example):not(.container):not(.modal) {
        position: relative;
        &:hover::before {
            content: attr(class);
            top: 2px;
            left: 2px;
            padding: 2px;
            background: #0008;
            color: #fff;
            position: absolute;
        }
    }
}
.container {
    background: #eee;
    margin: 50px auto;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        background: rgb(~'0 0 0 / 25%');
    }
    &::before {
        left: @containerPadding;
        @media @md {
            left: @containerPaddingMd;
        }
        @media @sm {
            left: @containerPaddingSm;
        }
    }
    &::after {
        right: @containerPadding;
        @media @md {
            right: @containerPaddingMd;
        }
        @media @sm {
            right: @containerPaddingSm;
        }
    }
}
.row {
    background: #ccc8;
    outline: 1px #ddd solid;
    padding-top: 30px;
    padding-bottom: 30px;
}
.col {
    padding-top: 20px;
    padding-bottom: 20px;
    background: #ccc8;
    outline: 1px #eee dashed;
}
code {
    background: #dfddff;
    padding: 3px 5px;
    border-radius: 2px;
    display: inline-block;
}
p {
    margin-bottom: 1.5em;
}
ul {
    margin: 1.5em 2em;
    li + li {
        margin-top: 4px;
    }
}
h1 {
    margin-bottom: 50px;
}
h2 {
    margin-top: 50px;
    margin-bottom: 20px;
}
a {
    text-decoration: underline;
}
.example {
    margin: 20px 0;
    pre {
        font-family: monospace;
        background: #e2ffdd;
        margin: 15px 0;
    }
}
.button {
    &::before {
        margin-top: -15px;
    }
}
.splide__slide img {
    width: 100%;
}
</style>
