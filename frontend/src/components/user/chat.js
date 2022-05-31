import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import app_config from "../../config";
import "./chat.css";

const Chat = () => {
  // backend url
  const url = app_config.backend_url;

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [loading, setLoading] = useState(true);
  const [selExpert, setSelExpert] = useState(null);
  const [msgList, setMsgList] = useState([]);

  //   intialize socket.io-client
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));

  const [text, setText] = useState("");
  const [expert, expertOnline] = useState("");

  const fetchExpert = () => {
    fetch(url + "/expert/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setSelExpert(data[0]);
          setLoading(false);
          online(data);
        });
      }
    });
  };

  const online = (data) => {
    socket.emit("checkexpert", data._id);
  };

  useEffect(() => {
    //   connect with the backend
    socket.connect();
    fetchExpert();
    // online();
  }, []);

  socket.on("recmsg", (data) => {
    // console.log(data);

    // to add newly recieved message on screen
    console.log(data);
    const newList = [...msgList, data];
    setMsgList(newList);
  });

  const sendMessage = () => {
    let obj = { message: text, sent: true };

    // for sending the event on backend
    socket.emit("sendstudent", obj);

    // to add newly sent message on screen
    const newList = [...msgList, obj];
    setMsgList(newList);

    setText("");
  };

  const displayMessages = () => {
    return msgList.map((msgobj) => (
      <div
        className={
          msgobj.sent ? "sent-msg message-body" : "rec-msg message-body"
        }
      >
        <p>{msgobj.message}</p>
      </div>
    ));
  };

  const showExpert = () => {
    if (!loading) {
      return (
        <div className="card">
          <div className="card-body">
            <h6>Expert Name : </h6>
            <Typography variant="h4">{selExpert.name}</Typography>
          </div>
        </div>
      );
    }
  };

  return (
<div>
      <body>

    <div id="wrapper" class="toggled">

        {/* <!-- Sidebar --> */}
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                       User Panel
                    </a>
                </li>
                <li>
                    <a href="/user/profile">Profile</a>
                </li>
                <li>
                    <a href="/user/manageOrder">Manage Order</a>
                </li>
                <li>
                    <a href="/user/chat">Chat With Expert</a>
                </li>
                <li>
                    <a href="/main/browseEquipment">Explore Products</a>
                </li>
            </ul>
        </div>
        {/* <!-- /#sidebar-wrapper -->

        <!-- Page Content --> */}
        
        <div>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-md-3">{showExpert()}</div>
          <div className="col-md-9">
            <div className="card ">
              <div className="card-body-chat">
                <div className="msg-area">{displayMessages()}</div>
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Type Your Message Here...."
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-success h-100"
                      onClick={sendMessage}
                    >
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
       {/*  <!-- /#page-content-wrapper --> */}

    </div>
   {/*  <!-- /#wrapper -->

    <!-- Menu Toggle Script --> */}
   

  
</body>
    
   
    </div>




    
  );
};

export default Chat;
