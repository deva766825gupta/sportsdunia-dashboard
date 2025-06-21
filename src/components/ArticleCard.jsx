import { useAuth } from "../context/AuthContext";

const ArticleCard = ({ article }) => {
  const { user, recordDownload } = useAuth();

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.author}</p>
      <button
        onClick={() => recordDownload(user.email, article.title)}
        className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
      >
        Download
      </button>
    </div>
  );
};

export default ArticleCard;
