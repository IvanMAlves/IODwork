import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, Container, Grid, TextField, Typography, Button } from '@mui/material'
import Loading from "./Loading";
import axios from 'axios';

const POST_URL = "https://jsonplaceholder.typicode.com/users/1/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  //const getPosts = useCallback(async () => { //i don't think useCallback is achieving any performance improvements here
  //https://www.w3schools.com/react/react_usecallback.asp see this link for more info
  useEffect(() => { //you could just use useEffect directly and achieve the same purpose?
    async function getPosts() {
      try {
        setIsLoading(true);
        const response = await axios({
          method: 'get',
          url: POST_URL,
        });

        if (response.status === 200) {
          setTimeout(() => {
            setPosts(response.data);
            setIsLoading(false);
          }, 3000);
        } else {
          console.log(response);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setErrorMessage("Unable to fetch post list");
      }
    }
    getPosts();
  }, []);

  const handleCreatePost = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'post',
        url: `${POST_URL}`,
        data: {
          title: 'Post Title',
          body: postContent,
          userId: 1,
        }
      });

      if ((200 <= response.status) && (response.status < 300)) {
        setIsLoading(false);
        alert(`Post created successfully with id: ${response.data.id} `);
      } else {
        setIsLoading(false);
        alert("Error happened");
        console.log(response);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      setErrorMessage("Unable to create a new post");
    }
  }

  //useEffect(() => {
  //  getPosts();
  //}, [getPosts]);

  const renderPosts = (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            sx={{ width: '100%' }}
            id="postContent"
            placeholder="What are you thinking?"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" sx={{ margin: "5px" }} onClick={handleCreatePost}> Create Post </Button>
        </Grid>
      </Grid>
      {posts?.map(post => (
        <Card key={Math.random()} style={{ marginTop: 5 }}>
          <CardContent>
            <Typography style={{ fontSize: 14 }} gutterBottom>User {post.userId}</Typography>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  )

  return  (
    <div className="App">
      
      {isLoading ? <Loading /> : renderPosts} {/* nice and neat, i like it */}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}

export default Posts;