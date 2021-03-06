import { requester } from './services/authService.js';
import {
    homeViewHandler,
    profileHandler,
    loginHandler,
    registerViewHandler,
    logoutHandler,
    detailsHandler,
    editHandler,
    likesHandler,
    // joinTeamHandler,
    // leaveTeamHandler,
    deleteHandler,
    createTrekHandler
} from './handlers/index.js';

const apiKey = 'https://exam-e8076.firebaseio.com/';
requester.init(apiKey, sessionStorage.getItem('token'));


/**
 * Configure the application with all it's routes and the template engine that it uses
 */
const app = Sammy('#main', function () {
    /**
     * Setting handlebars as template engine
     */
    this.use('Handlebars', 'hbs');

    /**
     * Define routes to be used by the application
     */
    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
    /**
     * Register
     */
    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);
    /**
     * Logout
     */
    this.get('#/logout', logoutHandler);
    /**
     * Login
     */
    this.get('#/login', loginHandler);
    this.post('#/login', () => false);
    /**
     * Create trek
     */
    this.get('#/create', createTrekHandler);
    this.post('#/create', () => false);
    /**
     * Details
     */
    this.get('#/details/:id', detailsHandler);
    /**
     * Likes
     */
    this.get('#/likes/:currentLikes/:id', likesHandler);
    /**
     * Edit
     */
    this.get('#/edit/:id', editHandler);
    this.post('#/edit/:id', () => false);
    /**
     * Delete
     */
    this.get('#/delete/:id', deleteHandler);
    /**
     * Profile page
     */
    this.get('#/profile', profileHandler);
    // this.get('#/catalog', catalogueHandler);
    // this.post('#/catalog', () => false);
    // this.post('#/catalog', false);
    // this.get('#/join/:id', joinTeamHandler);
    // this.get('#/leave/:id', leaveTeamHandler);
});
/**
 * Start the application
 */
app.run('#/');
