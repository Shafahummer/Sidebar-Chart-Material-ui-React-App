import React from 'react';
import './ProjectStatus.css';

const ProjectStatus = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-4">
                        <h6>Projects of the Month</h6>
                        <div className="mb-4">Overview of Latest Month</div>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col-3">Team Lead</th>
                                        <th scope="col-3">Project</th>
                                        <th scope="col-2">Status</th>
                                        <th scope="col-2">Weeks</th>
                                        <th scope="col-2">Budget</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row col-3">John</th>
                                        <td scope="col-3">Project1</td>
                                        <td scope="col-2">Inprogress</td>
                                        <td scope="col-2">24</td>
                                        <td scope="col-2">$2000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row col-3">Rahul</th>
                                        <td scope="col-3">Project2</td>
                                        <td scope="col-2">Completed</td>
                                        <td scope="col-2">45</td>
                                        <td scope="col-2">$5000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row col-3">Sam</th>
                                        <td scope="col-3">Project3</td>
                                        <td scope="col-2">Pending</td>
                                        <td scope="col-2">5</td>
                                        <td scope="col-2">$1000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                        <img className="card-img-top" src="https://images.pexels.com/photos/5485967/pexels-photo-5485967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-4">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
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