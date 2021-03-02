import './Profile.css';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const popeye = {
  name: "Popeye the Sailor",
  Location: "Las Vegas",
  foodType: "Spinach",
  age: 44,
  likes: "Sailing the seas of React!",
  TwitterUsername: "popeyeTheSailor",
  TwitterLink: "https://twitter.com/popeyethesailor",
  avatar:
    "https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432",
};



function Profile() {
    return(
        <>
        <div className="App">
            <Container className="container">
                <h2 className="profile-card">Profile-card(Task2)</h2>
                <Card style={{ width: '20rem'}} className="card">
                    <Card.Img variant="top" src={popeye.avatar} />
                    <Card.Body>
                        <Card.Title>{popeye.name}</Card.Title>
                        <Card.Text>
                            <h6>Location:{popeye.Location}</h6>
                            <h6>Age:{popeye.age}</h6>
                            <h6>FoodType:{popeye.foodType}</h6>
                            <h6>Likes:{popeye.likes}</h6>
                            <h6>TwitterUsername:{popeye.TwitterUsername}</h6>
                            <Button variant="outline-dark" href="https://twitter.com/popeyethesailor">TwitterLink</Button>{}
                            </Card.Text>
                            </Card.Body>
                                </Card>
                                </Container>
            
    
        </div>
        </>
    )
    
}
export default Profile;
