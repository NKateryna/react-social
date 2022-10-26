import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => (
  <div className={classes.content}>
    <div>
      <img
        className={classes.content__img}
        src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/Primal-Beast-Dota-2.jpg"
      />
    </div>
    <div>ava+desc</div>
    <MyPosts />
  </div>
);

export default Profile;
