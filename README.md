INSTALLATION
============

    npm install https://github.com/whtevn/jasmine-json-assess.git --save-dev

USAGE
=====

from npm script:

```js
scripts: {
  assess: "jasmine_json_assess path/to/json-file.json"
}
```

from code

```js
var assess = require 'jasmine_json_assess';

const suite_set   = require("path/to/json-file.json");

if(assess(suite_set)){
  console.log("ALL PASSING");
}else{
  console.log("SOME FAILING");
}
```


