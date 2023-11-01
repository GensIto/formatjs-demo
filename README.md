.ts でも.json でもいい

## 自動出力

`npm i -D @formatjs/cli`

```
{
  "scripts": {
    "extract": "formatjs extract"
  }
}
```

`npm run extract -- 'src/**/*.ts*' --ignore='**/*.d.ts' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'`

lang/\*\*json として出力されるので chatGTP などで翻訳にかけれるので多言語対応するときに口数が激減しそう
