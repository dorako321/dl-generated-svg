dl-generated-svg
====

## Description

Download a SVG element as SVG file.


dl-generated-svg はセレクタで指定したsvg要素の内容をブラウザで保存できるように
ダウンロードリンクを生成します。すべてJavaScriptで処理するためサーバサイドの処理は不要です。

## Demo

## VS. 

## Requirement

## Usage

```javascript
import DlSvg from "dl-generated-svg"

const dlSvg = new DlSvg(document.querySelector("#svg-elem"));
dlSvg.AsSvg("filename.svg");
```


## Install

yarn
```
$ yarn add dl-generated-svg
```

npm
```
$ npm i dl-generated-svg
```

## Contribution

1. Fork it ( http://github.com/dorako321/dl-generated-svg/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[dorako321](https://github.com/dorako321)