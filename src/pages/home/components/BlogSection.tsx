import { useState } from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  date: string;
  tags: string[];
  platform: 'Note' | 'Blog';
}

export default function BlogSection() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
  const [showAll, setShowAll] = useState<boolean>(false);

  // 記事データ - ここに新しい記事を追加していく
  const articles: Article[] = [
    {
      title: 'VRでモノを掴むとどう感じる？～アバターと身体感覚の不思議な関係～',
      description: 'VR環境におけるアバター操作と身体感覚の関係について探索する研究を紹介',
      url: 'https://note.com/keitaro_shimizu/n/n0afd214eebe9',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/218981959/265d33e435e4a5b6774e266d7eac5efa.jpeg',
      date: '2025-10-25',
      tags: ['VR', 'HCI', '身体性'],
      platform: 'Note'
    },
    {
      title: 'ゲームで協調性は育める！～幼い子ども向けデジタルツール研究の驚きの結論～',
      description: 'ストーリーテリング技術を通じて子どもたちの協調性を育成する研究',
      url: 'https://note.com/keitaro_shimizu/n/n2f3692110820',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/221290643/0054acab24ac4c9afa584730fb9a7e3a.jpeg',
      date: '2025-10-19',
      tags: ['EdTech', 'デザイン', '研究紹介'],
      platform: 'Note'
    },
    {
      title: 'アバターが持つ力～VRで他者の視点を体験し、無意識の偏見を乗り越える～',
      description: 'VRを使った職場での無意識のジェンダー偏見を減らす研究について',
      url: 'https://note.com/keitaro_shimizu/n/n40b45c9f0a72',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/219003973/rectangle_large_type_2_0cb57521ffb020bd0e45b40760f82530.jpeg?width=1200',
      date: '2025-10-05',
      tags: ['VR', 'HCI', '研究紹介'],
      platform: 'Note'
    },
    {
      title: 'Augmented Realityが切り拓く、ライトペインティングの未来',
      description: 'ARを活用してライトペインティング写真撮影を支援するシステムを紹介',
      url: 'https://note.com/keitaro_shimizu/n/n791f2452809c',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/214184086/d31a41d6d2b132e6d5ea2da7a9322902.jpeg',
      date: '2025-09-21',
      tags: ['AR', 'デザイン', '研究紹介'],
      platform: 'Note'
    },
    {
      title: 'スマホ画面に魔法をかける！新しい3Dプリント技術「Itsy-Bits」がもたらす未来',
      description: '静電式タッチスクリーン上に小型の3Dプリント物体を認識する革新的技術',
      url: 'https://note.com/keitaro_shimizu/n/n3f59afcbc85a',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/209604904/eca6fe8439487b2119419d29996f0b16.jpeg',
      date: '2025-08-31',
      tags: ['HCI', '技術', '研究紹介'],
      platform: 'Note'
    },
    {
      title: 'メンタルヘルスアプリの「パーソナライズ」って本当に効果ある？',
      description: 'ユーザーの本音と実際の行動のギャップを探る研究',
      url: 'https://note.com/keitaro_shimizu/n/n17c7442c023a',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/202713818/0b5b3de7bc52f6da35132a60e591b1a3.jpeg',
      date: '2025-07-31',
      tags: ['HCI', 'データ', '研究紹介'],
      platform: 'Note'
    },
    {
      title: '長時間労働者の健康は「Fitbit」と「パートナー」で守れる？',
      description: 'ソーシャルセンシング技術を活用した健康管理の最新研究',
      url: 'https://note.com/keitaro_shimizu/n/n16d0a6607d2f',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/201144613/57ea7a6e8fa17a04ba8a86ea84505ff7.jpeg',
      date: '2025-07-12',
      tags: ['HCI', 'データ', '研究紹介'],
      platform: 'Note'
    },
    {
      title: '"Good Enough!"で目標達成！～「マージン」があなたの努力を報われるものにする理由～',
      description: 'マージンという概念を活用した柔軟な目標達成アプローチ',
      url: 'https://note.com/keitaro_shimizu/n/n40c5ee2c0efd',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/199240649/8cc108e27715fd94a54232baf6e35803.jpeg',
      date: '2025-06-30',
      tags: ['ゲーミフィケーション', 'HCI', '研究紹介'],
      platform: 'Note'
    },
    {
      title: '子どもたちはどのようにアバターを作るのか？──オンラインゲームと自己表現の関係',
      description: 'RobloxやMinecraft、Fortniteでのアバター作成における子どもの動機と行動パターン',
      url: 'https://note.com/keitaro_shimizu/n/nc14243edc874',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/187252598/ffb3a6fde20db637da8bda4a04f6ee01.png',
      date: '2025-05-01',
      tags: ['ゲーミフィケーション', 'HCI', '研究紹介'],
      platform: 'Note'
    },
    {
      title: '技術ではなく"問い"が研究をつくる─CHI 2025参加から考える研究の価値',
      description: 'HCI分野のトップ国際学会CHI 2025参加から得た気づき',
      url: 'https://note.com/keitaro_shimizu/n/n5cfdc8d6a5fc',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/187244664/cbd06d06f7132dfb9ff491ad4058ae3c.jpeg',
      date: '2025-04-30',
      tags: ['HCI', '研究', 'キャリア'],
      platform: 'Note'
    },
    {
      title: '社会人博士を続けてわかった苦労とあらかじめ理解しておくべきこと',
      description: '研究における課題への対応方法、ピボットする力と損切り力の重要性',
      url: 'https://note.com/keitaro_shimizu/n/n7681aab7e83c',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/171128917/c06df4bfb75b5d4cb28d14bd385a7cdc.jpeg',
      date: '2025-01-22',
      tags: ['研究', 'キャリア', '博士課程'],
      platform: 'Note'
    },
    {
      title: 'デジタルツイン開発を続ける際のプロジェクトマネジメント・推進手法 Part2',
      description: 'リスクマネジメント、協力体制構築、スケーラビリティと品質管理の最適化',
      url: 'https://note.com/keitaro_shimizu/n/nc4d1bd381126',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/169679084/43a78ad5f2b68d67190760dc1e7035a5.jpeg',
      date: '2025-01-12',
      tags: ['プロジェクトマネジメント', 'デジタルツイン', '開発'],
      platform: 'Note'
    },
    {
      title: 'デジタルツイン開発を続ける際のプロジェクトマネジメント・推進手法 Part1',
      description: 'DX推進におけるデジタルツインの段階的かつ着実な導入・拡張方法',
      url: 'https://note.com/keitaro_shimizu/n/n9275ca3d5be6',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/169628772/9e193eefcae15c98ee334ea2ab50c6af.jpeg',
      date: '2025-01-11',
      tags: ['プロジェクトマネジメント', 'デジタルツイン', '開発'],
      platform: 'Note'
    },
    {
      title: 'Unityのプロジェクト構成と管理 - Unity開発PMのための知識-',
      description: 'Unityプロジェクト管理の基礎知識とフォルダ構成の解説',
      url: 'https://note.com/keitaro_shimizu/n/n192f541b0b90',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/168795029/3c2178e2fc13fb42e135c1e49e79ed23.png',
      date: '2025-01-05',
      tags: ['Unity', 'プロジェクトマネジメント', '開発'],
      platform: 'Note'
    },
    {
      title: 'UnityEditorとプログラムの役割と必要なチームメンバー - Unity開発PMのための知識-',
      description: 'プログラミング経験がない管理者向けのUnity基礎知識',
      url: 'https://note.com/keitaro_shimizu/n/nfad10c2d26ed',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/168795286/76d122578fd5ec7a20bc613a756506a5.png',
      date: '2024-12-30',
      tags: ['Unity', 'プロジェクトマネジメント', '開発'],
      platform: 'Note'
    },
  ];

  // すべてのタグを抽出
  const allTags = ['All', ...Array.from(new Set(articles.flatMap(article => article.tags)))];

  // フィルタリングとソート
  const filteredArticles = articles
    .filter(article => selectedTag === 'All' || article.tags.includes(selectedTag))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
    });

  // 表示する記事（初期表示は6件、フィルタリング時は全件表示）
  const displayedArticles = (showAll || selectedTag !== 'All') ? filteredArticles : filteredArticles.slice(0, 6);
  const hasMore = filteredArticles.length > 6 && selectedTag === 'All' && !showAll;

  // 日付をフォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog &
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-3">
              Articles
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            研究やテクノロジーに関する記事・ブログ
          </p>
        </div>

        {/* フィルター・ソートコントロール */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            {/* タグフィルター */}
            <div className="flex-1 w-full md:w-auto">
              <label className="text-sm font-medium text-gray-400 mb-3 block">
                <i className="ri-filter-line mr-2"></i>
                タグで絞り込み
              </label>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                      selectedTag === tag
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* ソート */}
            <div className="w-full md:w-auto">
              <label className="text-sm font-medium text-gray-400 mb-3 block">
                <i className="ri-sort-desc mr-2"></i>
                並び替え
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSortOrder('latest')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center ${
                    sortOrder === 'latest'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                  }`}
                >
                  <i className="ri-arrow-down-line mr-1"></i>
                  最新順
                </button>
                <button
                  onClick={() => setSortOrder('oldest')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center ${
                    sortOrder === 'oldest'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                  }`}
                >
                  <i className="ri-arrow-up-line mr-1"></i>
                  古い順
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedArticles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* サムネイル */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                {/* プラットフォームバッジ */}
                <span className="absolute top-4 right-4 text-xs font-medium text-white/90 bg-orange-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  <i className="ri-article-line mr-1"></i>
                  {article.platform}
                </span>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                {/* 日付 */}
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  {formatDate(article.date)}
                </div>

                {/* タイトル */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200 leading-tight line-clamp-2">
                  {article.title}
                </h3>

                {/* 説明 */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.description}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded-md text-xs text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* リンクアイコン */}
                <div className="flex items-center justify-end">
                  <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors duration-200 flex items-center">
                    記事を読む
                    <i className="ri-arrow-right-line ml-2"></i>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 記事が見つからない場合 */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-file-search-line text-4xl text-gray-600"></i>
            </div>
            <p className="text-gray-400 text-lg">該当する記事が見つかりませんでした</p>
          </div>
        )}

        {/* もっと見るボタン */}
        {hasMore && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer"
            >
              <i className="ri-arrow-down-line mr-2"></i>
              もっと見る ({filteredArticles.length - 6}件の記事)
            </button>
          </div>
        )}

        {/* noteへのCTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-article-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              もっと記事を読む
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              noteで研究やテクノロジーに関する記事を定期的に投稿しています
            </p>
            <a
              href="https://note.com/keitaro_shimizu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-200 cursor-pointer shadow-lg shadow-orange-500/25"
            >
              <i className="ri-external-link-line mr-2"></i>
              noteで全ての記事を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
