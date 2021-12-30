import React, { useState, useEffect } from "react";
import { getArticle } from "../../service/api";
import Article from "./Article";
import AddArticle from "./AddArticle";

import InfiniteScroll from "react-infinite-scroll-component";

function Articles() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const dailyNews = async () => {
      const response = await getArticle(page);
      setNews([...news, ...response.data]);
    };
    dailyNews();
  }, [page]);

  function deleteNews(id) {
    console.log("id = ", id);
  }

  return (
    <>
      <AddArticle></AddArticle>

      <InfiniteScroll
        dataLength={news.length}
        next={() => setPage((page) => page + 1)}
        hasMore={true}
      >
        {news.map((article, index) => {
          return (
            <div key={index} onClick={() => deleteNews(article._id)}>
              <Article article={article} />
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
}

export default Articles;
