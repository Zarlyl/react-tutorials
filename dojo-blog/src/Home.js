import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8080/blogs')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBlogs(data);
			});
	}, []);

	return (
		<div className="home">
			{/* conditional output - JS evaluates what's on the left and if it's false then the right
            side is never evaluated. Therefore, it's not output since at load blogs is null which evaluates
            to false. */}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</div>
	);
};

export default Home;
