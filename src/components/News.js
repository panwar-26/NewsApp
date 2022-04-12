import React, { useState,useEffect} from 'react';
import Newsitem from './Newsitem';
import Loader from "./Loader";
import InfiniteScroll from 'react-infinite-scroll-component';

const capitalizeFirstLetter= (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
}

const News = (props)=>{


    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    document.title = `${capitalizeFirstLetter(props.category)}-News`

    useEffect(async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        // let url = `https://newsapi.org/v2/top-headlines?country="in"&apiKey=448c3fc0202b4f0c9bb7d318ad145459&page=${page}&pageSize=${props.pageSize}`
        // let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=448c3fc0202b4f0c9bb7d318ad145459"
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData.articles);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false);
    }, [])

    const fetchMoreData = async () => {
            // this.setState({page:this.page + 1})
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
            // let url = `https://newsapi.org/v2/top-headlines?country="in"&apiKey=448c3fc0202b4f0c9bb7d318ad145459&page=${page}&pageSize=${props.pageSize}`
            // let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=448c3fc0202b4f0c9bb7d318ad145459"
            setloading(true);
            // this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData.articles);
            setarticles(articles.concat(parsedData.articles));
            setpage(page+1);
            settotalResults(parsedData.totalResults);
            setloading(false);
      };
    return ( 
        <>
        <h1 className="container text-center" style={{marginTop:"100px"}}>Today's {capitalizeFirstLetter(props.category)}'s News</h1>
        {loading&&<Loader />}
        <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={(articles.length !== totalResults)}
                        loader={<Loader/>}
                        >
        <div className="container">
        <div className="row my-3">
            {articles.map((element)=>{
                return(
                    <div className="col-md-4 my-3" key={element.url}>
                        <Newsitem title={element.title?element.title.split(0,10):""} author = {element.author} day = {new Date(element.publishedAt).toLocaleDateString()} time= {new Date(element.publishedAt).toLocaleTimeString()} description={element.description?element.description.split(0,2):""} imgurl={element.urlToImage?element.urlToImage:"data:image/png;base64,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"} newsurl={element.url}/>
                    </div>
                )
            })}
        </div>
        </div>
        </InfiniteScroll>
        </> 
    )
  }

export default News



















// spotPrev = async ()=>{
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=448c3fc0202b4f0c9bb7d318ad145459&page=${page-1}&pageSize=${props.pageSize}`
//     this.setState({loading:true});
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     // console.log(parsedData.articles);
//     this.setState({
//         articles: parsedData.articles,
//         page: page - 1,
//         loading: false
//     })
// }

// spotNext = async ()=>{
//     if(page < (totalResults/(props.pageSize))){
//         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=448c3fc0202b4f0c9bb7d318ad145459&page=${page+1}&pageSize=${props.pageSize}`
//         this.setState({loading: true})
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         // console.log(parsedData.articles);
//         this.setState({
//             articles: parsedData.articles,
//             page: page + 1,
//             loading: false
//         })
//     }
//     else{
        
//     }
// }