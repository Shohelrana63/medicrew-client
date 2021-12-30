import React from 'react';

const BlogPost = (props) => {
    const { img, title, description } = props.data;
    return (

        <div className="mt-5 col-md-4 text-center">
                <img src={img} alt="" />
                <h5 className="text-primary style-color mt-2">{title}</h5>
                <p class="text-secondary">{description}</p>
        </div>

    );
};

export default BlogPost;