import React from 'react'
import Banner from '../component/banner/Banner'
import Header from '../component/common/header/Header'
import Post from '../component/posts/Post'
import PostLists from '../component/postLists/PostLists'
import Footer from '../component/common/footer/Footer'

const HomePage = () => {
  return (
    <div><Header /> <Banner/> <Post /><PostLists /> <Footer/> </div>
  )
}

export default HomePage