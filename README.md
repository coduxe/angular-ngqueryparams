# angular-ngqueryparams

This module allow you to get the query string params.

## Quick start

+ Install angular-ngqueryparams with [Bower](https://github.com/bower/bower).

>
```bash
$ bower install angular-ngqueryparams --save
```

+ Include the required libraries in your `index.html`:

>
``` html
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-ngqueryparams/dist/angular-ngqueryparams.min.js"></script>
```

+ Inject the `angular-ngqueryparams` module into your app:

>
``` js
angular.module('myApp', ['angular-ngqueryparams']);
```

## Use ngQueryParams Service

>
``` js
angular.module('myApp', ['angular-ngqueryparams'])
  .controller('DemoCtrl', ['ngQueryParams', function(ngQueryParams) {
    // Query --> http://domain.com?email=example@coduxe.com&token=1465488146870&list[]=a&list[]=b
    //
    ngQueryParams.all(); //Get all query params
    /* return {
    *   email: 'example@coduxe.com',
    *   token: '1465488146870',
    *   list: ["a", "b"]
    */ }
    ngQueryParams.get('list'); //Get 'list' query params --> return ["a", "b"]
    ngQueryParams.exists('someParam'); //Check if exists 'someParam' in the query --> return false
  }]);
```

## Running the demo

+ Keep in mind you need to serve the demo, for this example we are use php -S

>
``` sh
git clone https://github.com/coduxe/angular-ngqueryparams.git
cd angular-ngqueryparams
php -S localhost:9000 # go to http://localhost:9000/demo
```

## Authors

- [**Ibán Dominguez Noda**](https://github.com/ibandominguez)
- [**Dariel González Rodríguez**](https://github.com/DarielGonzalez)
- [**Óliver Grisha Lorenzo Felipe**](https://github.com/oliverGrisha)
- [**Ayoze Vera Arbelo**](https://github.com/AyozeVera)
