## Documentation

You can see below the API reference of this module.

### `smartForeground(bgColor, fgColors)`
Get a good foreground color based on a backgorund color.

#### Params

- **String** `bgColor`: The backgorund color (supports hex, rgb etc).
- **Array** `fgColors`: An optional array of *ordered* foreground color codes (default: `[black, white]`). The lighter colors should be the first ones.

#### Return
- **String** The best foregorund color to use (e.g. for a black background, by default it will return white).

