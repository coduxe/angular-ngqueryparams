/**
* angular-ngqueryparams
* @version v1.0.1
* @link https://github.com/coduxe/angular-ngqueryparams
* @author Coduxe, https://github.com/coduxe
* @license MIT License, http://www.opensource.org/licenses/MIT
*/

'use strict';

if (!angular) throw new TypeError("AngularJs is required");

angular.module("angular-ngqueryparams", [])

.provider('ngQueryParams', function() {

  this.$get = function() {

    var getParams = function() {
      var url = window.location.href;
      var search = url.substring(url.indexOf("?"), url.length);
      return (search ? search.substring(1).split("&").reduce(function(result, item) {
        var split = item.split("=");
        if (split[0].slice(-2) === '[]') {
          var key = split[0].replace('[]', '');
          result[key] ? result[key].push(split[1]) : result[key] = [split[1]];
        }
        else {
          result[split[0]] = split[1];
        }
        return result;
      }, {}) : {});
    }

    return {
      all: function() {
        return getParams();
      },
      get: function(attr) {
        return getParams()[attr];
      },
      exists: function(attr) {
        return (typeof getParams()[attr] !== 'undefined');
      }
    };
  }
});
