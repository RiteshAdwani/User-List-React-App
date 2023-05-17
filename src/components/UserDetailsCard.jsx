import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserDetailsCard = () => {
  const { singleUser, userID } = useSelector((state) => state);
  if (!singleUser) return null;

  return (
    userID && (
      <Card className="user-details-card d-flex align-items-center px-2 py-4 ">
        <Card.Img
          variant="top"
          src={singleUser.avatar}
          className="card-img rounded-circle"
        />
        <Card.Body className="text-center">
          <Card.Title
            className={`particular-user-name fw-bolder mb-1 ${
              singleUser.active ? " active-user" : " inactive-user"
            }`}
          >
            {singleUser.first_name} {singleUser.last_name}
          </Card.Title>
          <Card.Text className="mb-1">{singleUser.email}</Card.Text>
          <Card.Text className="fw-bolder mb-1">Your Plan: Standard</Card.Text>
          <Button variant="warning" className="text-white px-sm-5 px-4">
            {singleUser.active ? "Active" : "Inactive"} User
          </Button>

          <div className="text-start mt-3">
            <Card.Text className="fw-bolder">
              Plan Uses
              <progress className="progress-bar" value="70" max="100" />
            </Card.Text>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <Card.Text className="fs-4 fw-bolder mb-1">2,315</Card.Text>
                <Card.Text className="user-click-details">
                  Clicks reviewed
                </Card.Text>
              </div>
              <div className="vr mx-3" />
              <div className="d-flex flex-column">
                <Card.Text className="fs-4 fw-bolder mb-1">4120</Card.Text>
                <Card.Text className="user-click-details">
                  Monthly clicks
                </Card.Text>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  );
};

export default UserDetailsCard;
