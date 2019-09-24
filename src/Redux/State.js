export let store = {
    _state: {

        profilePage: {
            // Информация профиля
            profileInfo: [
                { name: 'Vasso Kolbasso' },
                { special: 'Doctor-reanimate' },
                { date: '27.08.1990' },
                { town: 'California' },
                { schoоl: 'Harvard' },
                { website: 'stroyukrinvest.com' }
            ],
            // Массив постов
            posts: [
                // { id: 1, message: 'sdfsdgsfdgsg', likeCount: 23, author: 'Artem Fedorchuk' },
                // { id: 1, message: postMessage, likeCount: 121, author: 'Igor Shilov' },
                // { id: 1, message: postMessage, likeCount: 16, author: 'Alexandr Zelensky' },
                // { id: 1, message: postMessage, likeCount: 133, author: 'Vitalino Tarantino' }
            ],
            newPostText: ''

        },

        messagesPage: {
            // Массив диалогов
            dialogs: [
                { id: 1, name: 'Vasso' },
                { id: 2, name: 'Murces' },
                { id: 3, name: 'Adriano' },
                { id: 4, name: 'Victor' }
            ],
            // Массив сообщений.
            messages: [
                { text: 'Hi my brother' },
                { text: 'Hello my friend Artem.' },
                { text: 'Lomnis suscipit, fugit et earum quae neque necessitatibus velit magni?.' }
                // { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
            ]
        },

        newsPage: {
            // news content
        },

        musicPage: {
            // content music
        },

        settingPage: {
            // setting
        },

        navbar: {
            friends: [
                { name: 'Artem' },
                { name: 'Victor' },
                { name: 'Lucas' },
                { name: 'Valera' },
                { name: 'Nicolas' },
                // {name : 'Duglas'},
                { name: 'Djo' }
            ]
        }

    },
    renderEntireTree () {
        console.log('hello')
    },
    addPost(postMessage) {
        let newPost = {
            id: 5,
            message: this.postMessage,
            likeCount: 45
        }
        this._state.profilePage.posts.push(newPost)
        this.renderEntireTree(this._state)
    },
    onChangeText(newText) {
        this._state.profilePage.newPostText = newText
        this.renderEntireTree(this._state)
    },
    subscribe(observer) {
        this.renderEntireTree = observer
    }
}

// let renderEntireTree = () => console.log('hello')
// let state = {

//     profilePage: {
//         // Информация профиля
//         profileInfo: [
//             { name: 'Vasso Kolbasso' },
//             { special: 'Doctor-reanimate' },
//             { date: '27.08.1990' },
//             { town: 'California' },
//             { schoоl: 'Harvard' },
//             { website: 'stroyukrinvest.com' }
//         ],
//         // Массив постов
//         posts: [
//             // { id: 1, message: 'sdfsdgsfdgsg', likeCount: 23, author: 'Artem Fedorchuk' },
//             // { id: 1, message: postMessage, likeCount: 121, author: 'Igor Shilov' },
//             // { id: 1, message: postMessage, likeCount: 16, author: 'Alexandr Zelensky' },
//             // { id: 1, message: postMessage, likeCount: 133, author: 'Vitalino Tarantino' }
//         ],
//         newPostText: ''

//     },

//     messagesPage: {
//         // Массив диалогов
//         dialogs: [
//             { id: 1, name: 'Vasso' },
//             { id: 2, name: 'Murces' },
//             { id: 3, name: 'Adriano' },
//             { id: 4, name: 'Victor' }
//         ],
//         // Массив сообщений.
//         messages: [
//             { text: 'Hi my brother' },
//             { text: 'Hello my friend Artem.' },
//             { text: 'Lomnis suscipit, fugit et earum quae neque necessitatibus velit magni?.' }
//             // { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
//         ]
//     },

//     newsPage: {
//         // news content
//     },

//     musicPage: {
//         // content music
//     },

//     settingPage: {
//         // setting
//     },

//     navbar: {
//         friends: [
//             { name: 'Artem' },
//             { name: 'Victor' },
//             { name: 'Lucas' },
//             { name: 'Valera' },
//             { name: 'Nicolas' },
//             // {name : 'Duglas'},
//             { name: 'Djo' }
//         ]
//     }

// }

// export let addPost = (postMessage) => {
//     // debugger
//     let newPost = {
//         id: 5,
//         message: postMessage,
//         likeCount: 45
//     }
//     state.profilePage.posts.push(newPost)
//     renderEntireTree(state)
// }

// export let onChangeText = (newText) => {
//     // debugger
//     state.profilePage.newPostText = newText
//     renderEntireTree(state)
// }

// export let subscribe = (subscriber) => {
//     renderEntireTree = subscriber
// }

// export default state;
export default store
window.store = store
