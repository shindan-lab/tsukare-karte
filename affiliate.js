// ===================================================
// 疲れのカルテ — アフィリエイト管理ファイル
// ===================================================
// url に楽天アフィリエイトの「商品ページURL」のみを入力してください。
// 楽天が発行するHTMLバナーコード（<a href="..."><img...>）をそのまま
// 貼り付けると二重引用符の構文エラーになります。
// 正しい例: url: "https://hb.afl.rakuten.co.jp/ichiba/xxx/?pc=..."
//           → <a href="...">の href= の値だけを抜き出して貼り付け
// url が空（""）のタイプは表示されません。
// ===================================================

const affiliateData = {
  A: {
    title: "頭の「オフ」を作る習慣の本",
    desc: "常に段取りを考えてしまう人が、脳を意図的に休ませるための具体的な方法について。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/51fd3272.d39c70a0.51fd3273.a7b41a9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16644402%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  B: {
    title: "「繊細さん」の本",
    desc: "気遣いが得意すぎて消耗してしまうHSP気質の人に向けた、等身大のやさしい一冊。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/51fd3272.d39c70a0.51fd3273.a7b41a9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F15535301%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  C: {
    title: "「ていねいにやらない」練習",
    desc: "完璧主義をゆるめて、「これでいい」と思えるようになるためのヒント集。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/5267e569.7152b9b5.5267e56a.9a2b754e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F573c140a9d1c3f65ac270a7891d3e2fe%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  D: {
    title: "心配ごとを「書いて手放す」本",
    desc: "先の不安が止まらない人のための、不安を紙に出してコントロールする方法。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/51fd3272.d39c70a0.51fd3273.a7b41a9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18286823%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  E: {
    title: "「一人でやらない」という選択肢",
    desc: "複数の役割を担う人が、少しだけ手を分散させるための考え方とヒント。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/5267e569.7152b9b5.5267e56a.9a2b754e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F54e0d2c864413cea8caee1282378e5f4%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  F: {
    title: "気持ちを「言葉にする」練習帳",
    desc: "「疲れた」「つらい」が言い出せない人のための、感情を言葉にするワーク集。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/51fd3272.d39c70a0.51fd3273.a7b41a9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18371092%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  G: {
    title: "「比べない」を習慣にする本",
    desc: "SNSを見るたびに誰かと比べてしまう人へ。自分軸を育てるヒントが詰まった一冊。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/5267e569.7152b9b5.5267e56a.9a2b754e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F9f7f9b4aa3c636e6ab1f3072c8c49e17%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  H: {
    title: "睡眠の質を上げるグッズ",
    desc: "寝ているのに疲れが取れないとき、まず試したい手軽なアイテムを楽天でチェック。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/5267ea22.a16a5b70.5267ea23.872ba130/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhibiwa%2Fsuyamee-000%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  I: {
    title: "「任せる」を学ぶ一冊",
    desc: "「自分でやった方が早い」をやめて、もう少し楽に生きるための思考法について。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/5267eae6.c174f5a2.5267eae7.a9aba3ca/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbookfan%2Fbk-4866677503%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  },
  J: {
    title: "理由もなく疲れた日に読む本",
    desc: "説明できないしんどさのそばにいてくれる、軽くてゆるいエッセイや読み物。",
    url: "https://hb.afl.rakuten.co.jp/ichiba/51fd3272.d39c70a0.51fd3273.a7b41a9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17531882%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
  }
};
