# gulp-stylelint test with gulp 4

 - clone this repo
 - run `npm install`
 - run `npm run lint` or `npm run lint-live`

given:

```sh
$ node_modules/gulp/bin/gulp.js --version
[01:55:21] CLI version 1.2.2
[01:55:21] Local version 4.0.0-alpha.2
```

expected:

```sh
[01:53:53] Using gulpfile ~/repos/gulp-stylelint-test/gulpfile.js
[01:53:53] Starting 'lint'...
[01:53:55]

501 sources checked
 /Users/username/repos/gulp-stylelint-test/styles/basic.scss
 /Users/username/repos/gulp-stylelint-test/styles/basic-1.scss
 /Users/username/repos/gulp-stylelint-test/styles/basic-2.scss
 /Users/username/repos/gulp-stylelint-test/styles/basic-3.scss
 /Users/username/repos/gulp-stylelint-test/styles/basic-4.scss
 ...

0 problems found



[01:53:55] Finished 'lint' after 1.79 s
```
