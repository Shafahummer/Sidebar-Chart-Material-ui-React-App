import React from 'react';
import './ProjectStatus.css';

const ProjectStatus = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-4">
                        <h6>Projects of the Month</h6>
                        <div>Overview of Latest Month</div>
                        <div className="row">
                            <div className="col-3">Team Lead</div>
                            <div className="col-3">Project</div>
                            <div className="col-2">Status</div>
                            <div className="col-2">Weeks</div>
                            <div className="col-2">Budget</div>
                        </div>
                        <div className="hr"></div>
                        <div className="row">
                            <div className="col-3">John</div>
                            <div className="col-3">Project1</div>
                            <div className="col-2">Inprogress</div>
                            <div className="col-2">30</div>
                            <div className="col-2">2000$</div>
                        </div>
                        <div className="hr"></div>
                        <div className="row">
                            <div className="col-3">Rahul</div>
                            <div className="col-3">Project2</div>
                            <div className="col-2">completed</div>
                            <div className="col-2">40</div>
                            <div className="col-2">4000$</div>
                        </div>
                        <div className="hr"></div>
                    </div>
                </div>
            </div>

            <div className="row mt-4 justify-content-center">
                <div className="col-md-4 my-4">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/5596125/pexels-photo-5596125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-4">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/5512749/pexels-photo-5512749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-4">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/5512749/pexels-photo-5512749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-4">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/5512749/pexels-photo-5512749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 my-4">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/5020995/pexels-photo-5020995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* <Card className="mb-4 my-4 col-md-4 my-card">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5650041/pexels-photo-5650041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}

                {/* <Card className="mb-4 col-md-4 my-card">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5650041/pexels-photo-5650041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="mb-4 col-md-4 my-card">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5650041/pexels-photo-5650041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}
            </div>
        </div>
    )
}

export default ProjectStatus;