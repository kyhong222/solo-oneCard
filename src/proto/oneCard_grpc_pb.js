// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var oneCard_pb = require('./oneCard_pb.js');

function serialize_GameReply(arg) {
  if (!(arg instanceof oneCard_pb.GameReply)) {
    throw new Error('Expected argument of type GameReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GameReply(buffer_arg) {
  return oneCard_pb.GameReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GameRequest(arg) {
  if (!(arg instanceof oneCard_pb.GameRequest)) {
    throw new Error('Expected argument of type GameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GameRequest(buffer_arg) {
  return oneCard_pb.GameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GameService = exports.GameService = {
  gameStart: {
    path: '/Game/GameStart',
    requestStream: false,
    responseStream: false,
    requestType: oneCard_pb.GameRequest,
    responseType: oneCard_pb.GameReply,
    requestSerialize: serialize_GameRequest,
    requestDeserialize: deserialize_GameRequest,
    responseSerialize: serialize_GameReply,
    responseDeserialize: deserialize_GameReply,
  },
};

exports.GameClient = grpc.makeGenericClientConstructor(GameService);
