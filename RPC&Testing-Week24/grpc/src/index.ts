import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './generated/a';
import { AddressBookServiceHandlers } from './generated/AddressBookService';
import { Status } from '@grpc/grpc-js/build/src/constants';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, '../src/a.proto'));

const personProto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

const PERSONS: any[] =  [];

const handler: AddressBookServiceHandlers =  {
  //req and res
  AddPerson: (call, callback) => {
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    PERSONS.push(person);
    //  //err , res
    callback(null, person)
  },
  GetPersonByName: (call, callback) => {
    let person = PERSONS.find(x => x.name === call.request.name);
    if (person) {
      callback(null, person)
    } else {
      callback({
        code: Status.NOT_FOUND,
        details: "not found"
      }, null);
    }
  }
}

//@ts-ignore , req and res
// function addPerson(call, callback) {
//   console.log(call)
//     let person = {
//       name: call.request.name,
//       age: call.request.age
//     }
//     PERSONS.push(person);
//     //err , res
//     callback(null, person)
// }

// //@ts-ignore
// function getPersonByName(call, callback) {
//   const name=call.request.name
//   const person=PERSONS.find(x=>x.name===name)
//   callback(null,person)
// }

const server = new grpc.Server();

//register these services with these methods
// server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { addPerson: addPerson , getPersonByName:getPersonByName});
//service,handler
server.addService((personProto.AddressBookService).service, handler);
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});