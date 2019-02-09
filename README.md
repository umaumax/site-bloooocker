# site bloooocker

useless site blocker chrome extension

## NOTE
* blockするURLのprotocolとhostは決め打ちのみ?
  * pathは'*'が使用可能

## how to update blacklist
```
./gen.sh
```

`chrome://extensions/`: push reload button (you can update without update manifest version)

## FYI
* [URL Blacklist filter format \- The Chromium Projects]( https://www.chromium.org/administrators/url-blacklist-filter-format )
* [Mac OSX Chromeで特定URLのみしかアクセスできなくする（ホワイトリスト） \- Qiita]( https://qiita.com/Maclog/items/222b5626a30dc8fd62df )
  * この方法では直接アクセスする場合のみblockとなり，あるページ内でそのurlを取得する際にはblockされないという問題がある
  * 下記のchrome extensionでも同様
    * [Blacklist \- Chrome ウェブストア]( https://chrome.google.com/webstore/detail/blacklist/jbpccandodannohfaoncogijbkfcmpgo )

```
defaults read com.google.Chrome URLBlacklist
```

```
defaults write com.google.Chrome URLBlacklist -array URLBlacklist advertising.com doubleclick.com doubleclick.net adsymptotic.com taboola.com facebook.net facebook.com adservice.google.com analytics.twitter.com smartnews-ads.com ads-twitter.com adservice.google.com googletagmanager.com google-analytics.com googletagmanager.com
```

```
defaults delete com.google.Chrome URLBlacklist
```

enable setting
```
chrome://policy/
```

* [Block Facebook \- Chrome ウェブストア]( https://chrome.google.com/webstore/detail/block-facebook/gebclbfnlcebcljmgblacllmjkfidoef )
  * これはページ内通信をblock可能
