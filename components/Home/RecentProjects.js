import React, {Component} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Router from 'next/router'
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    autoplay: false,
    nav: true,
    loop: true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 4,
        }
    }
}


class RecentProjects extends Component {

    state = {
        display: false,
        photoIndex: 0,
        isOpenImage: false,
    }

    componentDidMount() {
        this.setState({display: true})
    }

    render() {
        return (
            <React.Fragment>
                <section className="project-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Recent Projects</h2>
                            <div className="bar"></div>
                            <p>Catchy sub content for the recent projects - These are the different projects for
                                developed</p>
                        </div>
                    </div>

                    <div className="row m-0">
                        {this.state.display ? <OwlCarousel
                            className="project-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {this.props.projects.map(project =>(
                                <div className="col-lg-12" key={project.id}>
                                    <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{Router.push(`/projects/${project.id}`)}}>
                                        <div className="project-image">
                                            <img src={project.image} alt="work"/>
                                        </div>

                                        <div className="project-content">
                                            <span>{project.category}</span>
                                            <h3>
                                                <Link href={`/projects/${project.id}`}>
                                                    <a>{project.name}</a>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                    <canvas id="canvas"></canvas>
                </section>
            </React.Fragment>
        );
    }
}

export default RecentProjects;
