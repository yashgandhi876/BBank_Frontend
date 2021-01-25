import React, {Component} from "react";

class Landing extends Component {
    render() {
        return (
            <div className={"landing-div"}>
                <section className={"colored-section"} id="title">
                    <div className={"container-fluid"}>
                        <div className="landing row justify-content-center">
                            <div className={"col-lg-6 "}>
                                <h1 className={"big-heading"}>Give someone the gift of life.</h1>
                            </div>
                            <div className={"col-lg-6 "}>
                                <div className={"justify-content-center nearby-city-bank-form"}>
                                    <form>
                                        <legend>Find Nearby Blood Banks</legend>
                                        <div className="form-group">

                                            <input type="text" className="form-control" id="form-location"
                                                   placeholder="Start typing your location">

                                            </input>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                <section className={"white-section"}>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque enim eros, dictum sed
                        nisl
                        nec,
                        cursus suscipit dolor. Quisque faucibus arcu et odio tristique ullamcorper. Nulla at mollis
                        lacus.
                        Integer
                        condimentum neque quis dui interdum egestas. Phasellus tincidunt orci a nisl interdum, sit amet
                        varius nulla
                        euismod. Nulla volutpat mauris neque, in sagittis purus sodales non. Nunc ut dictum odio.
                        Vestibulum
                        auctor
                        imperdiet purus ut aliquet. Quisque justo libero, porttitor at elementum ut, tincidunt eu ante.
                        Integer
                        porttitor, enim quis euismod commodo, felis lorem ultrices est, non rhoncus purus nisi sed dui.
                        Sed
                        eget est
                        euismod magna fringilla hendrerit. Sed pretium dui sed mauris elementum, non feugiat purus
                        ornare.
                        Mauris
                        tempus tristique diam ac fermentum. Quisque egestas, nulla eleifend egestas maximus, orci nunc
                        dictum
                        tellus, sed tempus nunc diam ac mi. Nullam malesuada ante ligula, sed congue augue mollis
                        laoreet.
                        Aliquam
                        bibendum consequat lacinia.

                        Mauris mollis velit eu urna scelerisque, eget maximus ligula facilisis. Sed iaculis auctor
                        pulvinar.
                        Sed
                        elementum neque non dolor congue, nec luctus metus ornare. Sed tempor dignissim dolor, quis
                        venenatis nisi
                        volutpat porta. Duis nibh lorem, posuere nec tincidunt et, ultricies eu ipsum. Vestibulum
                        efficitur
                        sapien
                        congue ullamcorper porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere
                        cubilia
                        curae; Nunc sit amet metus lorem. Duis viverra in lacus sit amet congue. Nulla rutrum sodales
                        nibh,
                        at
                        tempor enim feugiat ut. Nullam facilisis tempus ultrices.

                        Quisque interdum nibh risus, at convallis urna venenatis eget. Aliquam ut blandit urna. Vivamus
                        tristique
                        lectus at leo convallis, sit amet egestas massa venenatis. Nulla sed ornare neque. Fusce
                        vestibulum
                        ornare
                        nibh. Integer vulputate, nisl eget egestas rutrum, libero ex ornare turpis, vehicula congue
                        turpis
                        nulla
                        quis magna. Vivamus finibus cursus gravida. Fusce vel pharetra eros, scelerisque auctor ligula.

                        Vestibulum vitae odio pharetra, pretium est ac, ornare enim. Aenean a nulla ante. Sed luctus
                        vulputate nulla
                        nec dapibus. In mollis eleifend pharetra. Vivamus et arcu bibendum, bibendum ipsum id, aliquam
                        tellus.
                        Curabitur eget justo ac odio egestas venenatis. Pellentesque habitant morbi tristique senectus
                        et
                        netus et
                        malesuada fames ac turpis egestas. Maecenas varius dolor elementum laoreet molestie. Proin sit
                        amet
                        leo
                        metus. In sed turpis in elit scelerisque laoreet. Fusce non ipsum sit amet enim tincidunt
                        accumsan
                        ac vel
                        risus. Aliquam ut risus erat. Vivamus vitae magna at sapien eleifend venenatis. Nullam fringilla
                        auctor
                        vehicula. Donec tempor fringilla justo, in condimentum magna euismod sed. Donec faucibus a ex at
                        iaculis.

                    </p>
                    </div>
                </section>
                <section className={"colored-section"}>
                    Proin pharetra feugiat semper. Praesent et dignissim lectus, et iaculis ligula. Aenean tristique
                    mauris sit
                    amet nibh suscipit commodo. Ut lobortis dapibus odio a volutpat. Curabitur maximus enim ut nunc
                    convallis,
                    ut faucibus libero pellentesque. Nunc a aliquet ligula, ut aliquet augue. Etiam nec risus nibh.
                    Etiam
                    elementum vehicula sem, nec mollis orci sodales at. Nam dictum congue felis, eget semper est
                    hendrerit
                    lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                    egestas.
                    Suspendisse urna tellus, suscipit ac leo non, rhoncus elementum turpis. Nam laoreet tincidunt
                    nunc,
                    ac
                    volutpat nisi ultrices at. Etiam leo felis, blandit gravida purus vel, condimentum molestie
                    est.
                </section>
            </div>
        );
    }
}

export default Landing;
