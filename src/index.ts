import { Game } from "./game";
// import { grpcServer, grpcUrl } from "./grpcServer";
import * as grpc from "grpc";

function startServer() {
  const game = new Game();
  game.gameStart();
}

startServer();
