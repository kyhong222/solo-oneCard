import { GameReply } from "./proto/oneCard_pb";

var messages = require("./proto/oneCard_pb");
var services = require("./proto/oneCard_grpc_pb");

var grpc = require("grpc");

function main() {
  var client = new services.GameClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  var request = new messages.GameRequest();
  var user;

  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = "world";
  }

  request.setName(user);
  client.gameStart(request, function (err: any, response: any) {
    console.log("Greeting:", response.getMessage());
  });
}

main();
