import {React,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Webdevimg from '../Image/Webdev.jpg'
import MLimg from '../Image/MLimg.jpg'
import Graphicimg from '../Image/Graphicimg.jpg'
import Compiimg from '../Image/Compiimg.jpg'
import Appimg from '../Image/Appimg.jpg'
import AOS from "aos"
import 'aos/dist/aos.css'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Media from 'react-media';


const Mainsection = () => {
	useEffect(() => {
		AOS.init({duration:3000});
	}, [])
		return (
			<div>
			<Media query={{maxWidth: 1400}}>
			{matches => matches ? (
		<div className="container py-4">
		<NavLink to="/webdev">
		<article className="postcard dark red"  data-aos={"fade-right"}>
				<img className="postcard__img img-fluid" src={Webdevimg} alt="Webdevimg" />	
			<div className="postcard__text">
				<h1 className="postcard__title red space1"><span className="badge bg-primary" style={{borderRadius:'5px',boxShadow:'6px 6px 6px silver'}}>Web Development</span></h1>

				<div className="postcard__preview-txt space1">Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</div>
				
				<button type="button" className="btn btn-primary space1">Roadmap</button>
			</div>
		</article>
		</NavLink>
			
			
		<NavLink to='/ml'>
	   <article className="postcard dark red" data-aos={"fade-left"}>
	   <img className="postcard__img img-fluid" src={MLimg} alt="MLimg" />
			<div className="postcard__text">
				<h1 className="postcard__title red space1"><span className="badge bg-success" style={{borderRadius:'5px',boxShadow:'6px 6px 6px silver'}}>Machine Learning</span></h1>
				<div className="postcard__preview-txt space1">Machine learning (ML) is the study of computer algorithms that can improve automatically through experience and by the use of data.It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to do so.Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech recognition, and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks</div>
                <button type="button" className="btn btn-success space1">Roadmap</button>			
			</div>
					
		</article>
	   </NavLink>
			
	   <NavLink to='/compi'>
		<article className="postcard dark red"  data-aos={"fade-right"}>
				<img className="postcard__img img-fluid" src={Compiimg} alt="Compiimg" />	
			<div className="postcard__text">
				<h1 className="postcard__title red space1"><span className="badge bg-danger" style={{borderRadius:'5px',boxShadow:'6px 6px 6px silver'}}>Competitive Programming</span></h1>
				<div className="postcard__pr eview-txt space1">Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers. Competitive programming is recognized and supported by several multinational software and Internet companies, such as Google and Facebook.There are several organizations who host programming competitions on a regular basis.</div>
				<button type="button" className="btn btn-danger space1">Roadmap</button>
			</div>
		</article>
		</NavLink>
			
		<NavLink to='/appde'>
		<article className="postcard dark red"  data-aos={"fade-left"}>
		<img className="postcard__img img-fluid" src={Appimg} alt="Appimg" />	
			<div className="postcard__text">
				<h1 className="postcard__title red space1"><span className="badge bg-warning" style={{borderRadius:'5px',boxShadow:'6px 6px 6px silver'}}>App Development</span></h1>
				<div className="postcard__preview-txt space1">Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices, such as a smartphone or tablet computer. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a Web browser.</div>
		        <button type="button" className="btn btn-warning space1">Roadmap</button>	
			</div>
				
		</article>
		</NavLink>
			
		<NavLink to='/graphic'>
		<article className="postcard dark red"  data-aos={"fade-right"}>
				<img className="postcard__img img-fluid" src={Graphicimg} alt="Graphicimg" />	
			<div className="postcard__text">
				<h1 className="postcard__title red space1"><span className="badge bg-dark" style={{borderRadius:'5px',boxShadow:'6px 6px 6px silver'}}>Graphic Design</span></h1>
				<div className="postcard__preview-txt space1">Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Therefore, it is an interdisciplinary branch of design whose foundations and objectives revolve around the definition of problems and the determination of objectives for decision-making, through creativity, innovation and lateral thinking along with digital tools, transforming them for proper interpretation.</div>
			    <button type="button" className="btn btn-dark space1">Roadmap</button>	
			</div>
		</article>
		</NavLink>
			
			
		</div>
		):(
			<div className="container py-4" style={{fontWeight:'bold'}}>
		<NavLink to="/webdev">
		<article className="postcard dark red"  data-aos={"fade-right"}>
				<img className="postcard__img img-fluid" src={Webdevimg} alt="Webdevimg" />	
			<div className="postcard__text">
				<h1 className="postcard__title red space2"><span className="badge bg-primary" style={{borderRadius:'5px',boxShadow:'6px 6px 6px sliver'}}>Web Development</span></h1>

				<div className="postcard__preview-txt space2">Web development is the work involved in developing a Web site for the Internet(World Wide Web) or an intranet(a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses,and social network services.May include Web engineering,Web design,Web content development,client-side/server-side scripting,Web server and network security configuration,and e-commerce development.</div>
				
				<button type="button" className="btn btn-primary space2">Roadmap</button>
			</div>
		</article>
		</NavLink>
		
		
       <NavLink to='/ml'>
	   <article className="postcard dark red" data-aos={"fade-left"}>
			
			<div className="postcard__text">
				<h1 className="postcard__title red space2"><span className="badge bg-success" style={{borderRadius:'5px',boxShadow:'6px 6px 6px sliver'}}>Machine Learning</span></h1>
				<div className="postcard__preview-txt space2">Machine learning(ML) is the study of computer algorithms that can improve automatically through experience and by the use of data.It is seen as a part of artificial intelligence.Machine learning algorithms build a model based on sample data, known as "training data",in order to make predictions or decisions without being explicitly programmed to do so.Machine learning algorithms are used in a wide variety of applications,such as in medicine,email filtering, speech recognition,and computer vision,where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks.</div>
                <button type="button" className="btn btn-success space2">Roadmap</button>			
			</div>
				<img className="postcard__img img-fluid" src={MLimg} alt="MLimg" />	
		</article>
	   </NavLink>
		
	   <NavLink to='/compi'>
		<article className="postcard dark red"  data-aos={"fade-right"}>
				<img className="postcard__img img-fluid" src={Compiimg} alt="Compiimg" />	
			<div className="postcard__text">
				<h1 className="postcard__title red space2"><div className="badge bg-danger" style={{borderRadius:'5px',boxShadow:'6px 6px 6px sliver'}}>Competitive <div></div>Programming</div></h1>
				<div className="postcard__pr eview-txt space2">Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers. Competitive programming is recognized and supported by several multinational software and Internet companies, such as Google and Facebook.There are several organizations who host programming competitions on a regular basis.</div>
				<button type="button" className="btn btn-danger space2">Roadmap</button>
			</div>
		</article>
		</NavLink>
		
		<NavLink to='/appde'>
		<article className="postcard dark red"  data-aos={"fade-left"}>
			
			<div className="postcard__text">
				<h1 className="postcard__title red space2"><div className="badge bg-warning" style={{borderRadius:'5px',boxShadow:'6px 6px 6px sliver'}}>App <div></div>Development</div></h1>
				<div className="postcard__preview-txt space2">Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices, such as a smartphone or tablet computer. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a Web browser.</div>
		        <button type="button" className="btn btn-warning space2">Roadmap</button>	
			</div>
				<img className="postcard__img img-fluid" src={Appimg} alt="Appimg" />	
		</article>
		</NavLink>
		
		<NavLink to='/graphic'>
		<article className="postcard dark red"  data-aos={"fade-right"}>
				<img className="postcard__img img-fluid" src={Graphicimg} alt="Graphicimg" />	
			<div className="postcard__text">
				<h1 className="postcard__title red space2"><div className="badge bg-dark" style={{borderRadius:'5px',boxShadow:'6px 6px 6px sliver'}}>Graphic Design</div></h1>
				<div className="postcard__preview-txt space2">Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Therefore, it is an interdisciplinary branch of design whose foundations and objectives revolve around the definition of problems and the determination of objectives for decision-making, through creativity, innovation and lateral thinking along with digital tools, transforming them for proper interpretation.</div>
			    <button type="button" className="btn btn-dark space2">Roadmap</button>	
			</div>
		</article>
		</NavLink>
		</div>
		)
			}
		
		</Media>
	</div>
		)
}

export default Mainsection
