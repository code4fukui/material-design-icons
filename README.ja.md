# Material Design Icons

このリポジトリには、Googleが提供する公式の[Material Design Icons](https://fonts.google.com/icons)が含まれています。アイコンはすべて[Material Designのガイドライン](https://material.io/guidelines/)に基づいて設計されています。

## デモ

ライブデモを利用して、このコレクションに含まれるすべてのアイコンを検索・閲覧できます:

**[https://code4fukui.github.io/material-design-icons/](https://code4fukui.github.io/material-design-icons/)**

## 特徴

*   **完全なアイコンセット:** 個別のSVGファイルとして、Material Designアイコンライブラリ全体を提供します。
*   **5つのスタイル:** 各アイコンは5つの公式テーマで利用可能です:
    *   Filled (デフォルト)
    *   Outlined
    *   Round
    *   Sharp
    *   Two-Tone
*   **SVG形式:** すべてのアイコンは24x24pxのSVG形式で、ウェブおよびモバイル用途に最適化されています。
*   **整理された構造:** カテゴリごとにアイコンが分類されており、簡単に閲覧できます（例: `maps`, `navigation`, `action`）。

## 使い方

### ウェブ用 (推奨)

ウェブでこれらのアイコンを使用する最も簡単な方法は、Google Fontsのウェブフォントをリンクすることです。これにより、常に最新のアイコンを、高度に最適化された状態で利用できます。

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```

詳細については、公式の[Material Icons Developer Guide](https://google.github.io/material-design-icons/)を参照してください。

### 個別のSVGファイルを使用する

このリポジトリのSVGファイルを直接使用することもできます。ファイルからSVGコードをコピーしてHTMLに埋め込むか、プロジェクトのアセットとしてファイルを参照してください。

ファイルは `src/<category>/<icon_name>/<style_name>/24px.svg` のように整理されています。

たとえば、"filled" スタイルの `arrow_forward` アイコンは以下の場所にあります:
`src/navigation/arrow_forward/materialicons/24px.svg`

## ライセンス

アイコンは[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)の下でリリースされています。

---

Material DesignアイコンはGoogleの製品です。このリポジトリおよびデモは[Code for Fukui](https://github.com/code4fukui)によってメンテナンスされています。
