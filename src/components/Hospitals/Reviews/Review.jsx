import React from "react";
import { three_dots_menu, user_profile_1 } from "../../imagepath";

function Review() {
  const reviews = [
    {
      id: 1,
      name: "Sonu Sam",
      profilePicture: user_profile_1,
      stars: 3,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facilis aliquam aut quae fugiat pariatur quaerat corrupti nemo temporibus. Earum error, sit consequatur placeat qui unde delectus sequi tempora dicta.",
    },
    {
        id: 1,
        name: "Sonu Sam",
        profilePicture: user_profile_1,
        stars: 3,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facilis aliquam aut quae fugiat pariatur quaerat corrupti nemo temporibus. Earum error, sit consequatur placeat qui unde delectus sequi tempora dicta.",
      },{
        id: 1,
        name: "Sonu Sam",
        profilePicture: user_profile_1,
        stars: 3,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facilis aliquam aut quae fugiat pariatur quaerat corrupti nemo temporibus. Earum error, sit consequatur placeat qui unde delectus sequi tempora dicta.",
      },{
        id: 1,
        name: "Sonu Sam",
        profilePicture: user_profile_1,
        stars: 3,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facilis aliquam aut quae fugiat pariatur quaerat corrupti nemo temporibus. Earum error, sit consequatur placeat qui unde delectus sequi tempora dicta.",
      },{
        id: 2,
        name: "Sonu Sam",
        profilePicture: user_profile_1,
        stars: 3,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facilis aliquam aut quae fugiat pariatur quaerat corrupti nemo temporibus. Earum error, sit consequatur placeat qui unde delectus sequi tempora dicta.",
      },{
        id: 3,
        name: "Sonu Sam",
        profilePicture: user_profile_1,
        stars: 3,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facilis aliquam aut quae fugiat pariatur quaerat corrupti nemo temporibus. Earum error, sit consequatur placeat qui unde delectus sequi tempora dicta.",
      },
  ];
  return (
    <div className="row mt-3">
      {reviews.map((review) => {
        return (
          <div className="col-md-6 col-sm-6 col-lg-4 col-xl-4" key={review.id}>
            <div className="dash-widget review-card">
              <div className="dash-content dash-count flex-grow-1">
                <div className="row">
                  <div className="col-2 mt-1">
                    <img src={review.profilePicture} alt="profile_picture" />
                  </div>
                  <div className="col-9 mt-2">
                    <p>{review.name}</p>
                    <div>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <div className="col-1 mt-2">
                    <img src={three_dots_menu} alt="menu" />
                  </div>
                </div>
                <div className="review-description pt-3 pb-3">
                    <p>{review.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Review;
