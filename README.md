# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 多國語系 i18n

### 如何設定與指定語言

0. 初次使用，先執行 `ng add @angular/localize` 將 Angular 內建 i18n 工具導入專案

1. 在想要翻譯的地方加入標記，如 `src/app/dashboard/dashboard.component.html` 中，將 `<h1>` 加入標記:

    加入一個 i18n 的 ID 名為 `header`

    ```html
    <h1 i18n="@@header">Hello World!</h1>
    ```

2. `ng extract-i18n [project-name] --output-path [file-path]` 會將所有加入 i18n 的標記轉成 message 檔

3. 開始針對 message 檔進行翻譯：
    1. 複製一份，假設你需要的是繁體中文，就複製一份名為 `messages.zh-Hant.xlf`  (本專案放在 `src/locale` )
    2. 開始翻譯，打開 `messages.zh-Hant.xlf`，在 ID 名為 `header` 的環境中加入翻譯 `<target>`:

        ```xml
        <?xml version="1.0" encoding="UTF-8" ?>
        <xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
        <file source-language="en-US" datatype="plaintext" original="ng2.template">
            <body>
            <trans-unit id="header" datatype="html">
                <source>Hello World!</source>
                <target>你好，世界！</target> <!-- 加入這段 target 翻譯 -->
                <context-group purpose="location">
                <context context-type="sourcefile">src/app/dashboard/dashboard.component.html</context>
                <context context-type="linenumber">1</context>
                </context-group>
            </trans-unit>
            </body>
        </file>
        </xliff>
        ```

        漏掉（沒翻譯）的部分會使用 html 標籤中的原內容

4. 在 `angular.json` 中加入設定:
    1. 在 `projects.[project-name]` 加入:

        ```json
        "i18n": {
            "sourceLocale": "en",
            "locales": {
            "zh-Hant": "src/locale/messages.zh-Hant.xlf"
            }
        },
        ```

        在 i18n 加入我們做好的翻譯檔

    2. 在 `projects.[project-name].architect` 中新增:
        - 如果要使用 `ng build` 打包，就新增到 `build/configurations/`
        - 如果要使用 `ng serve` 打包，就新增到 `serve/configurations/`
        新增：

        ```json
        "zh-Hant": {
            "browserTarget": "[project-name]:build:zh-Hant"
        },
        ```

5. 執行
執行 `ng serve --open` ，打開頁面會看到 `Hello Wrold!` (為指定會使用原內容) 的字樣

執行 `ng serve --configuration=zh-Hant --open` (指定使用 `zh-Hant` 設定)，打開頁面會看到 `你好，世界！` 的字樣
