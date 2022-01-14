import { Game } from "./game";
// import { grpcServer, grpcUrl } from "./grpcServer";
import * as grpc from "grpc";

import { IGameServer, GameService } from "./proto/oneCard_grpc_pb";
import { GameReply, GameRequest } from "./proto/oneCard_pb";
import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";

class GameServer implements IGameServer {
  gameStart(call: any, callback: any): void {
    const reply = new GameReply();
    const game = new Game();
    game.gameStart();

    reply.setMessage(
      "hello, " + call.request.getName() + ` your score is ${game.score}`
    );
    callback(null, reply);
  }
}

function startServer() {
  const server = new grpc.Server();
  server.addService<IGameServer>(GameService, new GameServer());
  // server.addService<IGameServer>(GameService, { GameReply: "temp" });

  console.log(`Listening on 50051`);
  server.bind(`localhost:50051`, grpc.ServerCredentials.createInsecure());
  server.start();
}

startServer();
