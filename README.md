
[![smart-foreground](http://i.imgur.com/qSwot88.png)](#)

# smart-foreground

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/smart-foreground.svg)](https://www.npmjs.com/package/smart-foreground) [![Downloads](https://img.shields.io/npm/dt/smart-foreground.svg)](https://www.npmjs.com/package/smart-foreground)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
