export default {
    name: 'home',
    data () {
        return {
            search: '',
            headers: headersArr,
            books: booksArr,
            bookOpenPopup: false,
            bookDeletePopup: false,
            bookCreatePopup: false,
            bookSetStatusPopup: false,
            bookCommentPopup: false,
            currentBook: {},
            commentFast: '',
            statuses: statusesArr,

        }
    },
    methods: {
        // changeStatus: function () {
        //     console.log(this.statusss.status.text);
        // }
        openPopup: function (book) {
            this.comment = '';
            this.currentBook = book;
        },
        addComment: function (book, comment, user) {

        }

    }
}

var tilesArr = [
    {
        title: '123'
    },
    {
        title: '14323424223'
    },
    {
        title: '54654'
    },
    {
        title: '1'
    },
    {
        title: '34'
    },
],
    booksArr = [
        {
            value: false,
            image: 'https://vuetifyjs.com/static/apple-touch-icon-180x180.png',
            title: 'JavaScript it\'s easy',
            author: 'Alexander Beichuk',
            stars: 4,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        },
        {
            value: false,
            image: '../../assets/images/logo.png',
            title: 'Starik Hotabich',
            author: 'Stiven King',
            stars: 3,
            description: 'description_1',
            location: 'Serdicha str. 6',
            count: 3,
            status: 'Zabronirovat\'',
        },
        {
            value: false,
            image: '../../assets/logo.png',
            title: 'Book_1',
            author: 'Author_1',
            stars: 4.5,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        },
        {
            value: false,
            image: '../../assets/logo.png',
            title: 'Book_1',
            author: 'Author_1',
            stars: 4.5,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        },
        {
            value: false,
            image: '../../assets/logo.png',
            title: 'Book_1',
            author: 'Author_1',
            stars: 4.5,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        },
        {
            value: false,
            image: '../../assets/logo.png',
            title: 'Book_1',
            author: 'Author_1',
            stars: 4.5,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        },
        {
            value: false,
            image: '../../assets/logo.png',
            title: 'Book_1',
            author: 'Author_1',
            stars: 4.5,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        },
        {
            value: false,
            image: '../../assets/logo.png',
            title: 'Book_1',
            author: 'Author_1',
            stars: 4.5,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        },
        {
            value: false,
            image: '../../assets/logo.png',
            title: 'Book_1',
            author: 'Author_1',
            stars: 4.5,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        },
        {
            value: false,
            image: '../../assets/logo.png',
            title: 'Book_1',
            author: 'Author_1',
            stars: 4.5,
            description: 'description_1',
            location: 'office_1',
            count: 3,
            status: 'want',
        }
    ],
    headersArr = [
        { text: '', value: 'image', sortable: false},
        { text: 'Title', value: 'title'},
        { text: 'Author', value: 'author'},
        // { text: 'Stars', align: 'center', value: 'stars'},
        { text: 'Location', value: 'location' },
        { text: 'Status', align: 'center', value: 'status' },
        { text: '', value: 'actions', sortable: false }
    ],
    statusesArr = [
        {text: '111'},
        {text: '222'},
        {text: '333'},
        {text: '444'},
        {text: 'Want'},
    ];