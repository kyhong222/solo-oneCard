import { Game, gameStart } from "./game";
// import { grpcServer, grpcUrl } from "./grpcServer";
import * as grpc from "grpc";

function startServer() {
  const server = new grpc.Server();

  const game = new Game();
  server.addService(Game, gameStart());
}

grpcServer.start();

console.log(`gRPC server is listening at ${grpcUrl}`);

game();
