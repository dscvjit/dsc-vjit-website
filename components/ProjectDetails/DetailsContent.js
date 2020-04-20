import React, {Component} from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import dscLogoProjectImage from "../../images/dsc-logo-project.png"

const images = [
    dscLogoProjectImage, dscLogoProjectImage, dscLogoProjectImage, dscLogoProjectImage
]

class DetailsContent extends Component {

    state = {
        isOpen: false,
        photoIndex: 0,
        isOpenImage: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        const {photoIndex, isOpenImage} = this.state;
        return (
            <section className="project-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={dscLogoProjectImage} alt="work"/>

                                <Link href="#">
                                    <a
                                        className="popup-btn"
                                        onClick={e => {
                                            e.preventDefault();
                                            this.setState({isOpenImage: true})
                                        }}
                                    >
                                        <i className="icofont-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={dscLogoProjectImage} alt="work"/>

                                <Link href="#">
                                    <a
                                        className="popup-btn"
                                        onClick={e => {
                                            e.preventDefault();
                                            this.setState({isOpenImage: true})
                                        }}
                                    >
                                        <i className="icofont-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={dscLogoProjectImage} alt="work"/>

                                <Link href="#">
                                    <a
                                        className="popup-btn"
                                        onClick={e => {
                                            e.preventDefault();
                                            this.setState({isOpenImage: true})
                                        }}
                                    >
                                        <i className="icofont-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={dscLogoProjectImage} alt="work"/>

                                <Link href="#">
                                    <a
                                        className="popup-btn"
                                        onClick={e => {
                                            e.preventDefault();
                                            this.setState({isOpenImage: true})
                                        }}
                                    >
                                        <i className="icofont-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({isOpenImage: false})}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length,
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>Adani Invoicing</h3>
                                <p>Beauty ho! burn to be robed. Sunny, jolly golds smartly break a wet, misty girl.
                                    Wave loudly like a cloudy sea-dog. Lads are the seashells of the small madness.
                                    Bucaneers stutter on passion at madagascar! Addled, golden sharks greedily loot a scurvy, clear wind.
                                    Doubloons wave with desolation at the rainy cabo rojo! All rums blow real, misty planks.
                                    Lively, rainy sailors quietly lead a big, swashbuckling sea-dog. All cannons command lively, scurvy lubbers.
                                    Jolly roger, ye evil parrot- set sails for riddle! Fall fast like a clear woodchuck.
                                    Sons die with yellow fever at the wet pantano river! All sea-dogs command heavy-hearted, black ships.
                                    How warm. You burn like a captain. Pants are the ales of the misty punishment.
                                    big, real shores quirky love a cloudy, weird freebooter.</p>

                                <p>The sun fights with amnesty, scrape the bahamas before it hobbles. Punishment is a mighty gibbet.
                                    Wenchs rise on yellow fever at rummage island! The old bilge rat darkly breaks the scabbard.
                                    Booty is a rough skull. The sail vandalizes with urchin, break the cook islands until it falls.
                                    Hornpipes scream from endurances like rough dubloons. Weird, coal-black shores swiftly drink a dark, shiny seashell.
                                    Why does the comrade stutter? Heavy-hearted, stormy peglegs greedily endure a salty, misty breeze.
                                    Where is the cloudy moon? The comrade drinks with urchin, hail the quarter-deck until it dies.
                                    Crush me ship, ye golden plank! Salty, heavy-hearted shores begrudgingly scrape a shiny, sunny plunder.
                                    The plank blows with strength, hail the fortress before it rises.
                                    addled, golden swabbies oppressively endure a scurvy, fine yardarm.</p>

                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <h4>Developed By</h4>
                                        <p>Ashfaq Nisar</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <p>Dashboard</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <p>19-04-2020</p>
                                    </div>

                                    <div className="single-info-box">
                                        <Link href="#">
                                            <a className="btn btn-primary">Github Link</a>
                                        </Link>
                                    </div>

                                    <div className="single-info-box">
                                        <Link href="#">
                                            <a className="btn btn-primary">Demo</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContent;
