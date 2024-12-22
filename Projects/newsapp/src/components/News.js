import React, {useEffect, useState,useCallback} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=>{
  const [articles,setArticles]=useState([]); // eslint-disable-next-line
  const [loading,setLoading]=useState(true);  
  const [totalArticles,settotalArticles]=useState(0);
  const [page,setPage]=useState(1);

  

  const capatializeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }    
    const updateNews=useCallback(async(page)=>{   
      props.setProgress(0);  
      const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      setLoading(true);
      props.setProgress(25);  
      let data = await fetch(url);
      props.setProgress(50);  
      let ParsedData = await data.json();
      props.setProgress(75); 

      setArticles(ParsedData.articles);
      setLoading(false);
      settotalArticles(ParsedData.totalResults); 
      props.setProgress(100);
    },[props]);

    useEffect(()=>{
      document.title = `${capatializeFirstLetter(props.category)} - News Monkey`;
     updateNews(page); //componentDidMount
     // eslint-disable-next-line
    },[props.category, page]);

    const fetchMoreData = async () => {
        setTimeout( async () => {
          //console.log(.page);        
         
          //console.log('After', .page);
          const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
          await setPage(page+1);
          setLoading(true);
          let data = await fetch(url);
          let ParsedData = await data.json();

          setArticles(articles.concat(ParsedData.articles));
          setLoading(false);
          settotalArticles(ParsedData.totalResults); 
        },1000);      
    };


    /*const handlePrevClick= async ()=>{
      await setPage(page-1);
      this.updateNews();
    }

    const handleNextClick= async ()=>{
      await setPage(page+1);;
      updateNews();
    }*/
    return (
      /*<NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} Imageurl={element.urlToImage?element.urlToImage:""} newsUrl={element.url} />
      */
      <>
         <h2 className="text-center" style={{margin:'40px 0px'}}>Top News Monkey APP</h2>
         {/*.loading && <Spinner />*/}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalArticles}
            loader={<Spinner />}
          >
            <div className='container'>
              <div className='row'>
              {articles.map((element)=>{ //!.loading && 
                  return <div className='col-md-4' key={element.url} >
                  <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} Imageurl={element.urlToImage?element.urlToImage:""} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div> 
              })}                      
              </div>
            </div>
         </InfiniteScroll>
         {/*<div className="container d-flex justify-content-between">
          <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Prev</button>
          <button disabled={page+1 > Math.ceil(totalArticles/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
         </div>*/}
      </>
    )
}

/*News.defaultProps={
  country :'us',
  pageSize :3,
  category : 'science'
};*/

News.propTypes={
  country: PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
};

export default News
