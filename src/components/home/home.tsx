import React from 'react';
import { Link, PageProps } from 'gatsby';
import resume from '../../images/resume.pdf';
import "./home.css";
import BlogPostList from '../bloglist/bloglist';

const Home = ({ data }: any) => {
	return(
		<div id="home-container">
      <h1>Recent Articles</h1>
			<div className="section">
        <BlogPostList data={data} max={5} />
			</div>

			<div className="section">
				<h1>Check out my Resume!</h1>
				<small><Link to="/resume"><span>website link</span></Link> | <a href={resume} download><span>pdf download</span></a></small>
				<p>
					I have experience in backend development with TypeScript and Golang at a professional level working with for LaunchDarkly working on their Terraform integration, 
          frontend development with React working at Fisher PHX, a branding and design firm based in Arizona, and 
					teaching experience with programming (C/C++/Scheme/Bash/Prolog). If you think my skills and I would be a good fit feel free to...
				</p>
			</div>

			<div className="section">
				<h1>Contact Me!</h1>
				<p>
					I'm always looking to make new connections and explore new opportunities to both demonstrate and expand my skills. 
					If you think I'd be a good fit for a team or project after taking a look at my resume and/or a few of my posts, 
          click <Link to="/contact"><span>here </span></Link> and leave your name, a return email, and some information. 
          I'll respond as soon as I'm able.
				</p>
			</div>	

		</div>
	)
}

export default Home;
