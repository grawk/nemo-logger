# nemo-logger

Nemo plugin which instantiates the [selenium-webdriver console logger](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/logging.html).

## Requirements

`nemo@2` and above, to get the versions of `selenium-webdriver` with logging support.

## Usage

1. `npm install --save-dev nemo-logger`
2. add to your nemo plugins config:

```
"logger": {
      "module": "nemo-logger",
      "arguments": ["ALL"] // optional
    }
```

If you include the single argument, make sure it matches one of the levels here:
http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/logging_exports_Level.html

If you don't include the argument, `ALL` is the default.