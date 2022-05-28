import {
    Container,
    Grid,
    Pagination,
} from "@mui/material";
import FuzzySearch from 'fuzzy-search';

import { useState, useEffect } from 'react'
import CourseCard from "../../comps/CourseCard";
import FilterComp from "../../comps/FilterComp";

const CourseList = ({courses, handleAddItem, cartItems}) => {
    const [query, setQuery] = useState()
    const [category, setCategory] = useState([])
    const [level, setLevel] = useState([])
    const [price, setPrice] = useState([])

    const searcher = new FuzzySearch(courses, ['title', 'category', 'level', 'pricing'], {
        caseSensitive: false,
    });

    const result = searcher.search(query);

    console.log(query)

    return (
        <Container
            sx={{
                mt: 5
            }}
        >
            <Grid container spacing={3}>
                <Grid item sm={4} md={3}>
                    <FilterComp setQuery={setQuery}/>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <Grid container spacing={3}>
                        {result.map((course, i) => (
                            <Grid key={i} item sm={6} xs={12} md={4}>
                                <CourseCard cartItems={cartItems} handleAddItem={handleAddItem} course={course}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* <Pagination sx={{
                mt: 6,
                display: 'flex',
                justifyContent: 'center'
            }} count={3}/> */}
        </Container>
    );
}

export default CourseList;