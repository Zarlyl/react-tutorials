import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8080/blogs');

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{/* conditional output - JS evaluates what's on the left and if it's false then the right
            side is never evaluated. Therefore, it's not output since at load blogs is null which evaluates
            to false. */}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</div>
	);
};

export default Home;
