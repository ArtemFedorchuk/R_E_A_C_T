let state = {

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
            { id: 1, message: 'sdfsdgsfdgsg', likeCount: 23, author: 'Artem Fedorchuk' },
            { id: 1, message: postMessage, likeCount: 121, author: 'Igor Shilov' },
            { id: 1, message: postMessage, likeCount: 16, author: 'Alexandr Zelensky' },
            { id: 1, message: postMessage, likeCount: 133, author: 'Vitalino Tarantino' }
        ]
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
        // content news
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

}

export let addPost = (postMessage) => {
    // debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 45
    }
    state.profilePage.posts.push(newPost)
}
// export default addPost;
export default state;