export default {
    name: 'home',
    data () {
        return {
            headers: headersArr,
            books: booksArr,
            tiles: tilesArr
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
            image: '../../assets/images/logo.png',
            title: 'Boojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjk_1',
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
        { text: 'Stars', value: 'stars'},
        { text: 'Location', value: 'location' },
        { text: 'Count', value: 'count' },
        { text: 'Description', value: 'description', sortable: false },
        { text: 'Status', value: 'status' }
    ];