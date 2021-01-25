import React, {Component} from "react";

class Landing extends Component {
    render() {
        return (
            <section className={"colored-section"} id="title">
                <div className={"container-fluid"}>
                    <div className="landing row">
                        <div className={"col-lg-6 col-md-12"}>
                            <h1 className={"big-heading"}>Give someone the gift of life.</h1>
                        </div>

                        <div className={"container-search-bank-form col-lg-6 col-md-12"}>
                            <h3 className={"h3-temp"}>Find Nearby Blood Banks</h3>


                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;
