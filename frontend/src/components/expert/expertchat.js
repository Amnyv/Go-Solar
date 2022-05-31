import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import app_config from "../../config";
import "./chat.css";

const ExpertChat = () => {
  // backend url
  const url = app_config.backend_url;

  const [currentExpert, setCurrentExpert] = useState(
    JSON.parse(sessionStorage.getItem("expert"))
  );

  const [msgList, setMsgList] = useState([]);

  //   intialize socket.io-client
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));

  const [text, setText] = useState("");

  const online = () => {
    socket.emit("addexpert", currentExpert._id);
  };

  useEffect(() => {
    //   connect with the backend
    socket.connect();
    online();
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

  return (
    <div style={{ paddingTop: "2rem" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="text-muted mb-0">Loggedin as</p>
                <h3>{currentExpert.name}</h3>
                <h5>{currentExpert.email}</h5>
                <h4>{currentExpert.mainareaofexperience}</h4>
                <p>Qualification</p>
                <h4>{currentExpert.qualification}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <div className="msg-area">{displayMessages()}</div>
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Type Your Message Here...."
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-success" onClick={sendMessage}>
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertChat;
