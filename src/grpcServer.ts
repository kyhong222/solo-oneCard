import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";

const packageDefinition = protoLoader.loadSync("../proto/oneCard.proto", {});
const proto = grpc.loadPackageDefinition(packageDefinition);

export const grpcServer = new grpc.Server();
grpcServer.addService(proto.ApiAuthorization, {});

export const grpcUrl: string = "0.0.0.0:50000";

grpcServer.bind(grpcUrl, grpc.ServerCredentials.createInsecure());

// module.exports = {
//   grpcServer,
//   grpcUrl,
// };
