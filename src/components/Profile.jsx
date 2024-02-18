import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const BlogItem = styled.div`
  margin: 15px 0px;
  border-bottom: 1px solid #bfc0c1;
  padding-bottom: 10px;
`;
const Subheading = styled.h2`
  margin: 0px 0px 5px 0px;
  height: fit-content;
  max-height: 60px;
`;
const BlogContent = styled.h3`
  margin: 0px 0px 5px 0px;
  font-weight: 400;
  height: fit-content;
  overflow: hidden;
  max-height: 80px;
`;
const Author = styled.h4`
  margin: 0px 10px 0px 0px;
  font-size: 14px;
  font-weight: 400;
`;
const Btn2 = styled.div`
  width: fit-content;
  padding: 2px 10px 5px;
  margin: 5px 10px 5px 0px;
  height: 22px;
  border-radius: 10px;
  text-decoration: none;
  border: none;
  background-color: #e3e4e6;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Icons = styled.span`
  font-size: 16px;
  display: flex;
  margin-left: 20px;
`;
const Btn = styled.button`
  width: fit-content;
  padding: 10px;
  margin: 5px 5px;
  height: 33px;
  border-radius: 8px;
  text-decoration: none;
  border: none;
  background-color: #e3e4e6;
  cursor: pointer;
`;

export const Profile = (props) => {
  const location = useLocation();
  const user_id = location.pathname.split("/")[2];
  console.log(user_id);
  var user_details;

  props.users.map(function (item) {
    if (item.id == user_id) {
      user_details = { ...item };
    }
  });

  var user_blogs = new Array(0);
  props.blogs.map(function (item) {
    if (item.author_id == user_id) {
      user_blogs.push(item);
    }
  });

  console.log(user_blogs);

  //here id is id of blog currentuser wants to delete
  const deleteBlog = (id) => {
    for (var i = 0; i < props.blogs.length; i++) {
      if (props.blogs[i].id == id) {
        props.setBlogs([
          ...props.blogs.splice(0, i),
          ...props.blogs.splice(i + 1),
        ]);
      }
    }
  };

  return (
    <>
      <h2>Profile Details</h2>
      <Btn onClick={() => props.setCurrentuser(null)}>Logout</Btn>
      <div class="detail_section">
        <div class="each_row">
          <div class="row_name">Name</div>
          <div class="row_content">{user_details.name}</div>
        </div>
        <div class="each_row">
          <div class="row_name">Email</div>
          <div class="row_content">{user_details.email}</div>
        </div>
        <div class="each_row">
          <div class="row_name">Followers</div>
          <div class="row_content">{user_details.number_followers}</div>
        </div>
        <div class="each_row">
          <div class="row_name">Following</div>
          <div class="row_content">{user_details.number_following}</div>
        </div>
      </div>

      <div>
        <h2>My Posts</h2>
        {user_blogs.map(function (item) {
          return (
            <>
              <BlogItem>
                <div>
                  <Link
                    to={`/blog/${item.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Subheading id={item.id}>{item.input}</Subheading>
                    <BlogContent>{item.content}</BlogContent>
                  </Link>
                </div>
                <div class="c3">
                  <Btn2>
                    <span>{item.category}</span>
                  </Btn2>
                  <div class="c4">
                    <Icons>
                      <span class="view_icon material-symbols-outlined">
                        visibility
                      </span>
                      {item.number_views}
                    </Icons>
                    <Icons>
                      <span class="heart_icon material-symbols-outlined">
                        favorite
                      </span>
                      {item.number_likes}
                    </Icons>
                    <Icons>
                      <span class=" save_icon material-symbols-outlined">
                        bookmark
                      </span>
                      {item.number_saves}
                    </Icons>
                  </div>
                </div>
                <div class="c5 c8">
                  <Author>July 30</Author>
                  <div>
                    {props.currentuser.id == item.author_id ? (
                      <>
                        <Btn>
                          <Link
                            to={`/edit/${item.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Edit
                          </Link>
                        </Btn>
                        <Btn
                          onClick={() => {
                            deleteBlog(item.id);
                          }}
                        >
                          Delete
                        </Btn>
                      </>
                    ) : null}
                  </div>
                </div>
              </BlogItem>
            </>
          );
        })}
      </div>
    </>
  );
};
