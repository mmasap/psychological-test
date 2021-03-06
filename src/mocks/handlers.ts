// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.post('/contents', (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200));
  }),
  rest.get('/contents', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          testTitle:
            '選んだもので今あなたにとってのラッキーパーソンがわかります。',
          question:
            '自動販売機で飲み物を買おうとしたあなた。一つだけ品切れのものがありました。\nそれは次のうちどれだと思いますか？',
          answers: [
            {
              choice: 'いつも飲んでいるもの',
              result: '好きなものや興味のあるものが同じ人',
              resultDetail:
                'いつもの定番飲み物が売り切れていたと思ったあなたは、\n潜在意識の中で「今の自分はツイていないから物事が思いどおりにいかないだろう」と感じているようです。\nそんなあなたのラッキーパーソンは、好きなものや興味のあるものが同じ人。\nたとえば共通の趣味を持つ、あるいは、好きなタレントが一緒といった相手でしょう。\n一緒に楽しく語り合ったり何気ないおしゃべりをしたり……。\nいつの間にか嫌なことを忘れて、前向きな気持ちになれるはずです。',
            },
            {
              choice: '時々飲んでいるもの',
              result: '揺るぎない価値観をもっている人',
              resultDetail:
                '時々買うぐらいの頻度の飲み物が売り切れていたと思ったあなたは、潜在意識の中で「今の自分には良いことや悪いことが同時に起こりそうだ」と感じているようです。\nそんなあなたのラッキーパーソンは、揺るぎない価値観をもっている人。\nたとえば、非常時にもあせることなく冷静に行動する、あるいは感情に流されないアドバイスをくれる相手でしょう。\nそんな人を密かに師匠と仰ぎ、日常生活でその言動を見習えば、気持ちも徐々に落ち着くはずです。',
            },
            {
              choice: '初めて見る商品',
              result: '確かな成果を出している人',
              resultDetail:
                '初めて見る商品が売り切れていると思ったあなたは、潜在意識の中で「今の自分は仕事や恋愛のチャンスを逃しているのでは」と感じているようです。\nそんなあなたのラッキーパーソンは、確かな成果を出している人。\nたとえば、普段はあまり交流のない仕事のデキる同僚、あるいは特定の技術を持っていて尊敬されているような相手でしょう。\nきっと新しい目標を決めるヒントを与えてくれたり、自分磨きのモチベーションをアップさせてくれるはずです。',
            },
            {
              choice: 'あまり飲まないもの',
              result: 'どんなときでも変わらず応援してくれる人',
              resultDetail:
                'ほとんど買うことのない飲み物が売れ切れていたと思ったあなたは、潜在意識の中で「今の自分はツイている」と感じているようです。\nそんなあなたのラッキーパーソンは、どんなときでも変わらず応援してくれる人。\nたとえばそれは家族だったり、親友や恋人のようないつもそばにいてくれる大切な相手でしょう。\n互いのことを思う気持ちが、さらにあなたのやる気をアップさせてくれるのは間違いありません。\nただし、感謝の気持ちを忘れないことが必要です。',
            },
          ],
        },
        {
          testTitle: '選んだもので心の年齢を診断します。',
          question:
            'お天気の良いお休みの日。スマホの電源を切り、一日のんびりと読書をしようと思います。\nあなたならどんな場所で本を読みますか？',
          answers: [
            {
              choice: '街中のレンタル書斎',
              result: '実年齢よりも高い',
              resultDetail:
                'レンタル書斎は一人になれるだけでなく、読書に集中しやすい環境です。\nそれを選ぶあなたの心の年齢は実年齢よりも高いようです。\nただし成熟しているとはいっても、若い感性に対する理解もあります。\n物事に対する賢明な判断や行動ができ、新しいことへの関心を失っていないのは間違いありません。\nそれでも若さが前面に出て失敗したり、大人の一面が出て臆病になったりするときは、実用書や軽めのハウツー本のノウハウを、こっそり実践してみましょう。',
            },
            {
              choice: '自宅のリビングルーム',
              result: '理想的な年齢',
              resultDetail:
                '人がほどよく出入りするリビングルームは、読書には気が散るかもしれませんが、それを選ぶあなたの心は適度な若さと大人としての賢明さをほどよく備えた理想的な年齢だといえます。\n気持ちが穏やかなのでどんな場面でも強い自己主張をせず周囲に気を遣うことができるのは間違いありません。\nそれでも、周囲にただのいい人だと思われるのが嫌なら、たまにはハメを外してもいいかも。\n新進気鋭小説を参考に自分の個性を主張することを学んでみましょう。',
            },
            {
              choice: 'ガラス張りのカフェ',
              result: '青春真っ盛り',
              resultDetail:
                '多くの人が訪れるのが見え、その声や音が聞こえてくるようなカフェを読書に選ぶあなたは実年齢より若く、活発で好奇心が旺盛な上に、楽しいことやドキドキすることを求めています。\n実際の年齢に関係なく青春まっさかりなのは間違いないでしょう。\nただし思慮や落ち着きにかける一面もあり、周囲をハラハラさせることがあるかもしれません。\n生き生きとした魅力をキープしつつもテンションを抑えたいなら、シリアスな大人の恋愛小説を読んでみましょう。',
            },
            {
              choice: '緑に囲まれた森のテラス',
              result: '老成した部分あり',
              resultDetail:
                '部屋や建物など、密閉空間を飛び出して、読書をする場所として緑の中を選ぶあなたの心の年齢は、酸いも甘いもかみ分けた老人のようです。\n実際には若くても、ときどき老成した部分が顔をのぞかせるでしょう。\n常識があって賢く、さまざまな経験を積んでいることは間違いありません。\nただ、日々の生活の中でのストレスはあるはずなので、たまには児童向けの冒険小説や荒唐無稽なファンタジー小説などを読んで、少しだけ若い感性に触れるとよいでしょう。',
            },
          ],
        },
        {
          testTitle: '選んだものであの人の成功への近道がわかります。',
          question:
            'あなたの好きな人が選びそうな時計は次のうちのどれだと思いますか？　直接聞いてもかまいません。',
          answers: [
            {
              choice: 'シンプルな盤面のクォーツ時計',
              result: '上司や先輩にかわいがられる',
              resultDetail:
                '文字盤が見やすく機能性重視のシンプルな時計はあなたが感じるあの人のイメージと重なります。\nあの人は誰からも愛され、コツコツと努力を積み重ねて成功に近づくことができる人。\n普段から弱音を吐かないがんばり屋なので、地に足をつけた働き方ができます。\n一生懸命で謙虚な仕事ぶりが買われたり、上司や先輩にかわいがられたりして成功への道が開けることもありそう。\nパートナーや同僚の中に、刺激を受ける人を見つけられたら、さらに成功へと導かれるでしょう。',
            },
            {
              choice: '健康管理できるスマートウォッチ',
              result: '多くの仕事を効率よくこなす',
              resultDetail:
                'スケジュールや健康などの自己管理ができる時計はあなたが感じるあの人のイメージと重なります。\nあの人は普段から人望が厚く、誰からも信頼されている人なので、ほかの人たちと一緒になって、いくつもの案件を同時に進めていけるでしょう。\n忙しい状況になればなるほど効率がアップすることもありそう。\n職場でもひっぱりだこになり、誰にも代えがたい存在になれるはずです。\nさまざまな形で人と関わり、多くの仕事を効率よくこなして成功に近づくことができるでしょう。',
            },
            {
              choice: 'ストップウォッチ付き時計',
              result: '独特の感性と直感力を駆使',
              resultDetail:
                'ストップウォッチやカウントダウン機能のついた時計はあなたが感じるあの人のイメージと重なります。\nあの人は普段から限られた時間で臨機応変に対応できるのでどんな職種でも立派に活躍できるでしょう。\n自由な発想とアイデアを生かして仕事をすることも多そう。\nただ、ひとところにじっとしているのが苦手なようなので、いずれ独立してしまうかもしれません。\n自分の持ち味を発揮し、型にはまらない独特の感性と直感力を駆使して成功に近づくことができるでしょう。',
            },
            {
              choice: 'ソーラー充電式スポーツウォッチ',
              result: '得意分野で専門的な仕事に就く',
              resultDetail:
                '耐久性にすぐれ、スポーツ用に充電機能まで備えた時計はあなたが感じるあの人のイメージに重なります。\nあの人は普段から一匹狼のスタイルを通しているように見えますが、実際には多人数で仕事をするほうが向いていて、プロジェクトの中で人と人とをつなぐ役割を果たすことも多いかもしれません。\nいずれ自らの人脈だけで仕事ができる可能性もありそう。\n特に、スペシャリストとして得意分野で専門的な仕事に就くことができれば、より成功に近づくことができるでしょう。',
            },
          ],
        },
      ])
    );
  }),
];
