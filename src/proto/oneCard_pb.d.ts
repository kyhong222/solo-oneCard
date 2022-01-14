// package: 
// file: oneCard.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GameRequest): GameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameRequest;
    static deserializeBinaryFromReader(message: GameRequest, reader: jspb.BinaryReader): GameRequest;
}

export namespace GameRequest {
    export type AsObject = {
        name: string,
    }
}

export class GameReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): GameReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameReply.AsObject;
    static toObject(includeInstance: boolean, msg: GameReply): GameReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameReply;
    static deserializeBinaryFromReader(message: GameReply, reader: jspb.BinaryReader): GameReply;
}

export namespace GameReply {
    export type AsObject = {
        message: string,
    }
}
