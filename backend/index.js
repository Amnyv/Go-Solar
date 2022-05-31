const express = require("express");
const UserRouter = require("./routers/UserRouter");
const equipmentRouter = require("./routers/equipmentRouter");
const addequipmentRouter = require("./routers/addequipmentRouter");
const chatRouter = require("./routers/chatRouter");
const sellerRouter = require("./routers/sellerRouter");
const expertRouter = require("./routers/expertRouter");
const utilRouter = require("./routers/util");
const orderRouter = require("./routers/orderRouter");
const contactRouter = require("./routers/contactusRouter");
const cors = require("cors");
// const ProductRouter = require("./routers/ProductRouter")

const app = express();
const port = 5000;

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});
const connectedExperts = {};

io.on("connection", (socket) => {
  console.log("client connected ");
  socket.on("addexpert", (id) => {
    connectedExperts[id] = socket.id;
    console.log(connectedExperts);
  });

  socket.on("checkexpert", (id) => {
    socket.emit("checkexpertfromserver", {
      status: "online",
      socketId: connectedExperts[id],
    });
  });

  socket.on("sendstudent", (data) => {
    // console.log(data);
    data.sent = false;
    socket.broadcast.emit("recmsg", data);
  });
  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    socket.to(data.socketId).emit("recmsg", data);
  });
});

// for reading json data
app.use(express.json());

// for allowing frontend
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/user", UserRouter);
app.use("/equip", addequipmentRouter);
// app.use("/product" , ProductRouter);
app.use("/chat", chatRouter);

app.use("/equipment", equipmentRouter);

app.use("/seller", sellerRouter);
app.use("/util", utilRouter);
app.use("/order", orderRouter);
app.use("/contact", contactRouter);

app.use("/expert", expertRouter);
app.use(express.static("./static"));
app.get("/", (req, res) => {
  res.send("you have got a response");
});

const stripe_sk =
  "sk_test_51L4QZaSAo6VRyLQAjsRmBefkUrFzwm80tx1ytFx7ABjQ4g50mQEvyXLEvspl7aHS1gwsz7fFJ4RI2RlqeyeWaDU100uA5wdtSc";
const stripe = require("stripe")(stripe_sk);
app.post("/create-payment-intent", async (req, res) => {
  const data = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount,
    currency: "inr",
  });
  res.status(200).json(paymentIntent);
});

app.get("/home", (req, res) => {
  res.send("you have reached home");
});

app.get("*", (req, res) => {
  res.send("404");
});
httpServer.listen(port, () => {
  console.log("server started on 5000");
});
