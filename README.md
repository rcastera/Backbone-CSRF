#Backbone CSRF
A small, easy-to-use backbone module to apppend a csrf token to xhr requests.


## Installation
```
bower install backbone-csrf
```

## Usage
In your html header, include a meta tag that contains a unique generated identifier.
```
<meta name="csrf-token" content="<?php echo $csrftoken; ?>">
```

When starting your backbone app, make sure to call initialize.
```
CSRF.initialize();
```
