import React, { useEffect, useState } from 'react';
import './News.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f'
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-center my-3">Enjoy Daily Top - Headlines</h1>

      <div className="mainDiv">
        {mynews.map((ele) => {
          console.log(ele);
          return (
            <>
              <div
                class="card"
                style={{
                  marginTop: '2rem',
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }}
              >
                <img
                  src={
                    ele.urlToImage == null
                      ? 'https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*'
                      : ele.urlToImage
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {ele.author === '' ? 'Janelle Ash' : ele.author}
                  </h5>
                  <p className="card-text">{ele.title}</p>
                  <a
                    href={ele.url}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default News;
