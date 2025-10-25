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

  // 記事データ - ここに新しい記事を追加していく
  const articles: Article[] = [
    {
      title: 'アバターが持つ力~VRで他者の視点を体験し、無意識の偏見を乗り越える~',
      description: 'VRを使った職場での無意識のジェンダー偏見を減らす研究について',
      url: 'https://note.com/keitaro_shimizu/n/n40b45c9f0a72',
      thumbnail: 'https://assets.st-note.com/production/uploads/images/219003973/rectangle_large_type_2_0cb57521ffb020bd0e45b40760f82530.jpeg?width=1200',
      date: '2025-10-05',
      tags: ['VR', 'HCI', '研究紹介'],
      platform: 'Note'
    },
    // ここに新しい記事を追加していく
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
          {filteredArticles.map((article, index) => (
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
