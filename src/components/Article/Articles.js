import React, { useState, useEffect } from "react";
import { getArticle } from "../../service/api";
import Article from "./Article";
import { CircularProgress, Box } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

function Articles() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadmore, SetLoadMore] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const response = await getArticle(page);
    setNews([...news, ...response.data]);
    setLoading(false);
  }, []);

  const Load = async () => {
    SetLoadMore(true);
    setPage(page + 1);
    const response = await getArticle(page);
    setNews([...news, ...response.data]);
    SetLoadMore(false);
  };

  return (
    <>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <InfiniteScroll dataLength={news.length} next={Load} hasMore={true}>
            {news.map((article, index) => (
              <Article article={article} key={index} />
            ))}
          </InfiniteScroll>
          {loadmore ? (
            <Box>
              <CircularProgress />
            </Box>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default Articles;
