import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <h2>This is blog page</h2>
        </div>
    );
};

export default Blogs;