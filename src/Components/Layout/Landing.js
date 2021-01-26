import React, {Component} from "react";

class Landing extends Component {
    render() {
        return (
            <div className={"landing-div"}>
                <section className={"colored-section"} id="title">
                    <div className={"container-fluid"}>
                        <div className="landing row">
                            <div className={"col-lg-6 "}>
                                <h1 className={"big-heading"}>Give someone the gift of life.</h1>
                            </div>
                            <div className={"landing-nearby-div sliderFeatures"}>
                                <form className={"searchForm"}>
                                    <legend>Find Nearby Blood Banks</legend>
                                    <div className="form-group">
                                        <input type="text" className="form-control nearby-city-bank-form-search" id="form-location"
                                               placeholder="eg. Pune">
                                        </input>
                                        <button type="submit" className="btn btn-danger">Find Blood Banks</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>

                </section>

            </div>
        );
    }

}


export default Landing;
