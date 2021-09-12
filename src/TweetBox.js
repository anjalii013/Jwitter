import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  function sendTweet(e) {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Anjali Upadhyay",
      username: "anjalii013",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
    });
    setTweetImage("");
    setTweetMessage("");
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__image"
          placeholder="Optional:Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweet">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
