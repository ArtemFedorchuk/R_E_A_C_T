let state = {
    // Массив постов.
    posts: [
        { id: 1, message: 'sdfsdgsfdgsg', likeCount: 23, author:'Artem Fedorchuk' },
        { id: 1, message: postMessage, likeCount: 121, author:'Igor Shilov' },
        { id: 1, message: postMessage, likeCount: 16, author:'Alexandr Zelensky' },
        { id: 1, message: postMessage, likeCount: 133, author:'Vitalino Tarantino' }
    ],
    // Массив сообщений.
    messages: [
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus, deserunt unde impedit.' },
        { text: 'Hello my friend Artem.' },
        { text: 'Lomnis suscipit, fugit et earum quae neque necessitatibus velit magni?.' },00000
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
    ],
    // Массив диалогов.
    dialogs: [
        { id: 1, name: 'Vasso' },
        { id: 2, name: 'Murces' },
        { id: 3, name: 'Adriano' },
        { id: 4, name: 'Victor' }
    ]
}

export let addPost = (postMessage) => {
    // debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 45
    }
    state.posts.push(newPost)
}

export default state;