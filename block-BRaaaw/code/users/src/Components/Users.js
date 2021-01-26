import users from "../config/users.json";
import "./User.css";
function Users() {
  return users.map((user) => {
    return (
      <div className="user">
        <div
          className="card"
          style={{ backgroundColor: user.isActive ? "#A7F3D0" : "#FECACA" }}
        >
          <img src={user.picture} alt="Avatar" />
          <div className="container">
            <h4>
              <b>Name: {user.name}</b>
            </h4>
            <p>Gender: {user.gender == "female" ? "🤷‍♀️" : "🙋‍♂️"}</p>
            <p>Age: {user.age}</p>
            <p>EyeColor: {user.eyeColor}</p>
            <p>favoriteFruit: {user.favoriteFruit}</p>
            <p>Company: {user.company}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>{" "}
      </div>
    );
  });
}

export default Users;
