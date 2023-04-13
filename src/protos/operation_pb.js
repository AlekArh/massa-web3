// Copyright (c) 2023 MASSA LABS <info@massa.net>

// @generated by protoc-gen-es v1.2.0 with parameter "target=js+ts+dts"
// @generated from file operation.proto (package massa.api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { BytesMapFieldEntry } from "./common_pb.js";

/**
 * The operation as sent in the network
 *
 * @generated from message massa.api.v1.Operation
 */
export const Operation = proto3.makeMessageType(
  "massa.api.v1.Operation",
  () => [
    { no: 1, name: "fee", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 2, name: "expire_period", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 3, name: "op", kind: "message", T: OperationType },
  ],
);

/**
 * Type specific operation content
 *
 * @generated from message massa.api.v1.OperationType
 */
export const OperationType = proto3.makeMessageType(
  "massa.api.v1.OperationType",
  () => [
    { no: 1, name: "transaction", kind: "message", T: Transaction },
    { no: 2, name: "roll_buy", kind: "message", T: RollBuy },
    { no: 3, name: "roll_sell", kind: "message", T: RollSell },
    { no: 4, name: "execut_sc", kind: "message", T: ExecuteSC },
    { no: 5, name: "call_sc", kind: "message", T: CallSC },
  ],
);

/**
 * Transfer coins from sender to recipient
 *
 * @generated from message massa.api.v1.Transaction
 */
export const Transaction = proto3.makeMessageType(
  "massa.api.v1.Transaction",
  () => [
    { no: 1, name: "recipient_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
  ],
);

/**
 * The sender buys `roll_count` rolls. Roll price is defined in configuration
 *
 * @generated from message massa.api.v1.RollBuy
 */
export const RollBuy = proto3.makeMessageType(
  "massa.api.v1.RollBuy",
  () => [
    { no: 1, name: "roll_count", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
  ],
);

/**
 * The sender sells `roll_count` rolls. Roll price is defined in configuration
 *
 * @generated from message massa.api.v1.RollSell
 */
export const RollSell = proto3.makeMessageType(
  "massa.api.v1.RollSell",
  () => [
    { no: 1, name: "roll_count", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
  ],
);

/**
 * Execute a smart contract
 *
 * @generated from message massa.api.v1.ExecuteSC
 */
export const ExecuteSC = proto3.makeMessageType(
  "massa.api.v1.ExecuteSC",
  () => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "max_gas", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 3, name: "datastore", kind: "message", T: BytesMapFieldEntry, repeated: true },
  ],
);

/**
 * Calls an exported function from a stored smart contract
 *
 * @generated from message massa.api.v1.CallSC
 */
export const CallSC = proto3.makeMessageType(
  "massa.api.v1.CallSC",
  () => [
    { no: 1, name: "target_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "target_func", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "param", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "max_gas", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 5, name: "coins", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
  ],
);

/**
 * Signed operation
 *
 * @generated from message massa.api.v1.SignedOperation
 */
export const SignedOperation = proto3.makeMessageType(
  "massa.api.v1.SignedOperation",
  () => [
    { no: 1, name: "content", kind: "message", T: Operation },
    { no: 2, name: "signature", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "content_creator_pub_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "content_creator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

