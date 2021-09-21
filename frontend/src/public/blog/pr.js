import React, { Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {
  Grid,
  Container,
  Card,
  Button,
  List,
  ListItem,
  
} from '@material-ui/core';
import Corporate from '../../containers/Templates/Corporate';
import AOS from "aos";
import 'aos/dist/aos.css';
import {
  getBlogs

} from '../../actions/blogs'
import { useHistory } from 'react-router-dom';



function LivePreviewExample(props) {
  const history = useHistory();

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  useEffect(() => {
    if(!props.fetched) {
        props.getBlogs();
    }
    console.log('mount it!');

  }, []);

  const handleClick = id =>{
    history.push(`/newsletter/${id}`)
  }


  return (
    <Corporate>
      <div className="py-5 bg-slick-carbon" data-aos="zoom-in-up">
        <div className="text-center my-5">
          <h1 className="display-4 text-white mb-3 font-weight-bold">
            TUNNEL LIGHT NEWSLETTER
          </h1>
          <p className="font-size-lg text-white-50">
            FOLLOW OUR MONTHLY NEWSLETTER.
          </p>
        </div>
        <Container>
          <Grid container spacing={6}>
            { props.records.map((blog) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={blog.id}>
                  <div className="card card-transparent mb-4">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <span className="mr-2 badge badge-success badge-pill">
                          {blog.category}
                        </span>
                        <span className="text-info badge badge-neutral-info badge-pill">
                          {blog.published_date}
                        </span>
                      </div>
                      <img
                        src={blog.image}
                        className="card-img-top rounded"
                        alt="..."
                      />
                    </div>
                    <div className="card-body text-white text-center">
                      <h5 className="card-title">{blog.title}</h5>
                      <h5 className="card-title">{blog.author}</h5>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className="mt-1"
                        onClick={() => handleClick(blog.id)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Grid>
              );
            })
          }     
        </Grid>
        </Container>
      </div>
    </Corporate>
  );
}


const mapStateToProps = state =>({
  records: state.blogs.blogs,
})

export default connect(
  mapStateToProps,
  {getBlogs} )
(LivePreviewExample);

