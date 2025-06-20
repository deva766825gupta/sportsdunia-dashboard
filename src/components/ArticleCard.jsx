import React from "react";

const ArticleCard = ({ article }) => {
return (
<div className="p-4 bg-white rounded-xl shadow hover:bg-blue-50 transition-all">
<h2 className="text-lg font-semibold">{article.title}</h2>
<p className="text-sm text-gray-600">
Author: {article.author} | {new Date(article.publishedAt).toDateString()}
</p>
<p className="text-xs text-gray-500 mt-1 italic">Type: {article.type}</p>
</div>
);
};

export default ArticleCard;