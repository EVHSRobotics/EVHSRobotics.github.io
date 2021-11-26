import angular from 'angular';
import router from 'angular-new-router';
import {app} from '../module.js';
import '../components/home/home';
import '../components/navbar/navbar';
import '../components/footer/footer';
import '../components/header/header';
import '../components/minheader/minheader';
import '../components/blog/blog';
import '../components/blogeditor/blogeditor';
import '../components/bloghome/bloghome';
import '../components/prototypes/prototypes';
import '../components/kronos/kronos';
import '../components/artemis/artemis';

class AppController {
  constructor($router){
    $router.config([
      {path: '/home/:section', components: {
        'header': 'header',
        'main'  : 'home',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'home'},
      {path: '/bloghome', components: {
        'header': 'minheader',
        'main'  : 'bloghome',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'bloghome'},
      {path: '/prototypes', components: {
        'header': 'minheader',
        'main'  : 'prototypes',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'prototypes'},
      {path: '/kronos', components: {
        'header': 'minheader',
        'main'  : 'kronos',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'kronos'},
      {path: '/artemis', components: {
        'header': 'minheader',
        'main'  : 'artemis',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'artemis'},
      {path: '/athena', components: {
        'header': 'minheader',
        'main'  : 'athena',
        'nav'   : 'navbar',
        'footer': 'footer'
      }, as: 'athena'},
      {path: '/', redirectTo: '/home/landing'}
    ]);
  }
}
// app.config(['$locationProvider', function($locationProvider) {
//        $locationProvider.html5Mode(true);
//    }]); only for html5 route mode
app.controller('AppController', ['$router', AppController]);
