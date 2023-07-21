import {createStore} from 'vuex'
export default createStore({
    state: {
        tiers: [
            {
                name: 'Базовый',
                id: 'tier-starter',
                href: '#',
                featured: false,
                description: 'All your essential business finances, taken care of.',
                price: { monthly: '1499*', old: '2000' },
                mainFeatures: ['Адаптивный сайт и SSl', 'Домен в зоне TJ и хостинг до 1-х ГБ', 'Статистика и SEO-оптимизация сайта', '5/7 техподдержка и мониторинг сайта', 'Безопасный сервер и мониторинг сайта', 'Многостраничность и мультиязычность', 'Форма обратной связи'],
            },
            {
                name: 'Оптимальный',
                id: 'tier-scale',
                href: '#',
                featured: true,
                description: 'The best financial services for your thriving business.',
                price: { monthly: '1999*', old: '2500' },
                mainFeatures: ['Адаптивный сайт и SSl', 'Домен в зоне TJ и хостинг до 2-х ГБ', 'Статистика и SEO-оптимизация сайта', '5/7 техподдержка и мониторинг сайта', 'Безопасный сервер и мониторинг сайта', 'Многостраничность и мультиязычность', 'Форма обратной связи', 'Обработка обращений', 'Размещение статьей (до 3 шт.)', 'Корпоративная почта в подарок'],
            },
            {
                name: 'Бизнес',
                id: 'tier-growth',
                href: '#',
                featured: false,
                description: 'Convenient features to take your business to the next level.',
                price: { monthly: '2499*', old: '3000' },
                mainFeatures: ['Адаптивный сайт и SSl', 'Домен в зоне TJ и хостинг до 3-х ГБ', 'Статистика и SEO-оптимизация сайта', '5/7 техподдержка и мониторинг сайта', 'Безопасный сервер и мониторинг сайта', 'Многостраничность и мультиязычность', 'Форма обратной связи', 'Обработка обращений', 'Размещение статьей (до 5 шт.)', 'SEO- продвижение раз в квартал', 'Корпоративная почта в подарок',],
            },
        ],
        form: {
            fullname: '',
            phone: '',
            service: 'Оптимальный'
        },
        alert: {
            isActive: false
        }
    },
    mutations: {
        CHANGE_STATE(state, payload) {
            state[payload.key] = payload.body
        }
    }
})
  