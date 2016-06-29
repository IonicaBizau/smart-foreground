
[![smart-foreground](http://i.imgur.com/qSwot88.png)](#)

# smart-foreground

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/smart-foreground.svg)](https://www.npmjs.com/package/smart-foreground) [![Downloads](https://img.shields.io/npm/dt/smart-foreground.svg)](https://www.npmjs.com/package/smart-foreground) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Calculate matching foreground colors based on backgorund colors.

[![smart-foreground](http://i.imgur.com/2nx2Q0z.png)](#)

## :cloud: Installation

```sh
$ npm i --save smart-foreground
```


## :clipboard: Example



```js
const smartForeground = require("smart-foreground");

console.log(smartForeground("black"));
// => #fffff

console.log(smartForeground("white"));
// => #00000

console.log(smartForeground("yellow"));
// => #00000

console.log(smartForeground("brown"));
// => #fffff

console.log(smartForeground("#F82125"));
// => #fffff

console.log(smartForeground("#FFC966"));
// => #00000

console.log(smartForeground("darkred", ["yellow", "#FF0057", "darkred"]));
// => yellow

console.log(smartForeground("yellow", ["yellow", "#FF0057", "darkred"]));
// => darkred

console.log(smartForeground("rgb(255, 25, 255)", ["yellow", "#FF0057", "darkred"]));
// => #FF0057
```

## :memo: Documentation


### `smartForeground(bgColor, fgColors)`
Get a good foreground color based on a backgorund color.

#### Params
- **String** `bgColor`: The backgorund color (supports hex, rgb etc).
- **Array** `fgColors`: An optional array of *ordered* foreground color codes (default: `[black, white]`). The lighter colors should be the first ones.

#### Return
- **String** The best foregorund color to use (e.g. for a black background, by default it will return white).



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
