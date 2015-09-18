function collapsibleBlock(){function l(l,e,c){l.collapsed=!0,l.title=c.collapsibleTitle,l.collapsedIcon=c.collapsedIcon,l.expandedIcon=c.expandedIcon,l.toggle=function(e){e.preventDefault(),l.collapsed=!l.collapsed}}return{scope:{},transclude:!0,restrict:"E",replace:!0,template:'<section class="clps" ng-class="{\'clps--expanded\': collapsed}">\n                <a href="#" class="clps__title" ng-click="toggle($event)">\n                  <i class="{{collapsedIcon}}" ng-if="collapsedIcon && collapsed"></i>\n                  <i class="{{expandedIcon}}" ng-if="expandedIcon && !collapsed"></i>\n\n                  <span translate>{{title}}</span>\n                </a>\n\n                <ng-transclude class="clps__content" ng-show="!collapsed"></ng-transclude>\n              </section>',link:l}}angular.module("dm.collapsibleBlock",[]).directive("collapsible",collapsibleBlock);