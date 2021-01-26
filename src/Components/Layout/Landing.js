import React, {Component} from "react";

class Landing extends Component {
    render() {
        return (
            <div className={"landing-div"}>
                <section className={"colored-section"} id="title">
                    <div className={"container-fluid"}>
                        <div className="landing row justify-content-center">
                            <div className={"col-lg-6 "} id={"left"}>
                                <h1 className={"big-heading"}>Give someone the gift of life.</h1>
                            </div>
                            <div className={"col-lg-6 landing-nearby-div"} id={"right"}>
                                <form>
                                    <legend>Find Nearby Blood Banks</legend>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="form-location"
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

const searchCity = async searchBox => {
    const res = await fetch("");
    const cities = await res.json();

    //Get & Filter Through Entered Data
    let fits = cities.filter(city => {
        const regex = new RegExp(`^${searchBox}`, 'gi');
        return city.name.match(regex) || city.abbr.match(regex);
    });

    //Clears Data If Search Input Field Is Empty
    if (searchBox.length === 0) {
        fits = [];
        citiesList.innerHTML = '';
    }
    return (fits);
};
export default Landing;
