// package: 
// file: oneCard.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as oneCard_pb from "./oneCard_pb";

interface IGameService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    gameStart: IGameService_IGameStart;
}

interface IGameService_IGameStart extends grpc.MethodDefinition<oneCard_pb.GameRequest, oneCard_pb.GameReply> {
    path: "/Game/GameStart";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oneCard_pb.GameRequest>;
    requestDeserialize: grpc.deserialize<oneCard_pb.GameRequest>;
    responseSerialize: grpc.serialize<oneCard_pb.GameReply>;
    responseDeserialize: grpc.deserialize<oneCard_pb.GameReply>;
}

export const GameService: IGameService;

export interface IGameServer {
    gameStart: grpc.handleUnaryCall<oneCard_pb.GameRequest, oneCard_pb.GameReply>;
}

export interface IGameClient {
    gameStart(request: oneCard_pb.GameRequest, callback: (error: grpc.ServiceError | null, response: oneCard_pb.GameReply) => void): grpc.ClientUnaryCall;
    gameStart(request: oneCard_pb.GameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oneCard_pb.GameReply) => void): grpc.ClientUnaryCall;
    gameStart(request: oneCard_pb.GameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oneCard_pb.GameReply) => void): grpc.ClientUnaryCall;
}

export class GameClient extends grpc.Client implements IGameClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public gameStart(request: oneCard_pb.GameRequest, callback: (error: grpc.ServiceError | null, response: oneCard_pb.GameReply) => void): grpc.ClientUnaryCall;
    public gameStart(request: oneCard_pb.GameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oneCard_pb.GameReply) => void): grpc.ClientUnaryCall;
    public gameStart(request: oneCard_pb.GameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oneCard_pb.GameReply) => void): grpc.ClientUnaryCall;
}
