import React, { useEffect, useState } from "react";

const AllNews = () => {
  const [news, setNews] = useState([]);
  //   const api = "a01ff290a44346318c62f9e2adcc20a3";
  useEffect(() => {
    // fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`)
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2022-09-12&to=2022-09-12&sortBy=popularity&apiKey=a01ff290a44346318c62f9e2adcc20a3"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Title</th>
            <th>Author</th>
            <th>Content </th>
            <th>Description </th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {news?.map((newo) => (
            <tr key={newo.id} newo={newo}>
              <td>
                <div class="avatar">
                  <div class="w-24 rounded">
                    <img src={newo?.urlToImage} alt="news" />
                  </div>
                </div>
              </td>
              <td>{newo?.source?.name}</td>

              <td>{newo?.title}</td>
              <td>{newo?.author}</td>
              <td>{newo?.content}</td>
              <td>{newo?.description}</td>
              <td>{newo?.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllNews;
