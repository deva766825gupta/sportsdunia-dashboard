const ArticleCard = ({ article }) => {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-1">Author: {article.author}</p>
      <p className="text-gray-600 mb-1">Date: {article.date}</p>
      <p className="text-gray-600 italic">Type: {article.type}</p>
    </div>
  );
};

export default ArticleCard;
