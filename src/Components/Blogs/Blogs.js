import React from 'react';
import blogs from '../../Data/blogs';
import BlogPost from '../BlogPost/BlogPost';
import "./Blogs.css";

const Blogs = () => {
    const blogData = blogs;
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h3 className="text-primary heading-text text-uppercase">our blog</h3>
                    <h1 className="heading-text">From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;