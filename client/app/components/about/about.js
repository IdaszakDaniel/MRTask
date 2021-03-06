import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import GetJson from '../../services/services';

let aboutModule = angular.module('about', [
  uiRouter,
  GetJson.name
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})

.component('about', aboutComponent)
  
.name;

export default aboutModule;
