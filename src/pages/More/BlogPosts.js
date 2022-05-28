import Banner from '../../comps/Banner'
import { useState, useEffect } from 'react'
import { Grid, Container } from '@mui/material';
import BlogPost from '../../comps/BlogPost';

const BlogPosts = ({blogPost}) => {
    return (
       <>
       <Banner heading={'Blog Posts'}/>
       <Container>
           <Grid container>
               {blogPost.map((post, i) => (
                   <Grid key={i} sx={12} md={12}>
                        <BlogPost post={post}/>
                    </Grid>
               ))}
           </Grid>
       </Container>
       </>
    );
}
 
export default BlogPosts;