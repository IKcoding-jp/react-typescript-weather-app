# React TypeScript Weather App

React + TypeScript の学習用に作成した天気予報アプリです。
都市名を入力すると、[WeatherAPI](https://www.weatherapi.com/) から現在の天気・気温を取得して表示します。

> 📚 本リポジトリは書籍『はじめてつくるReactアプリ with TypeScript: たった2.5時間で「わかる！ できる！」最初に読みたかった本』のサンプルアプリを元に、学習目的で写経・改変したものです。

## 技術スタック

- React 19
- TypeScript
- Vite

## 学んだこと

- `useState<string>` などジェネリクスによる state の型指定
- props による親→子コンポーネントへの値・関数の受け渡し
- `fetch` + `.then()` による API からのデータ取得
- API キーを `.env`（`import.meta.env`）で管理し、リポジトリに含めない運用

## セットアップ

```bash
npm install
```

プロジェクト直下に `.env` を作成し、[WeatherAPI](https://www.weatherapi.com/) で取得した API キーを設定します。

```
VITE_WEATHER_API_KEY=あなたのAPIキー
```

## 起動

```bash
npm run dev
```
