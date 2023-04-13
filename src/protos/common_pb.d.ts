// Copyright (c) 2023 MASSA LABS <info@massa.net>

// @generated by protoc-gen-es v1.2.0 with parameter "target=js+ts+dts"
// @generated from file common.proto (package massa.api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * BytesMapFieldEntry
 *
 * @generated from message massa.api.v1.BytesMapFieldEntry
 */
export declare class BytesMapFieldEntry extends Message<BytesMapFieldEntry> {
  /**
   * bytes key
   *
   * @generated from field: bytes key = 1;
   */
  key: Uint8Array;

  /**
   * bytes key
   *
   * @generated from field: bytes value = 2;
   */
  value: Uint8Array;

  constructor(data?: PartialMessage<BytesMapFieldEntry>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "massa.api.v1.BytesMapFieldEntry";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BytesMapFieldEntry;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BytesMapFieldEntry;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BytesMapFieldEntry;

  static equals(a: BytesMapFieldEntry | PlainMessage<BytesMapFieldEntry> | undefined, b: BytesMapFieldEntry | PlainMessage<BytesMapFieldEntry> | undefined): boolean;
}

/**
 * Packages a type such that it can be securely sent and received in a trust-free network
 *
 * @generated from message massa.api.v1.SecureShare
 */
export declare class SecureShare extends Message<SecureShare> {
  /**
   * Content in sharable, deserializable form. Is used in the secure verification protocols
   *
   * @generated from field: bytes serialized_data = 1;
   */
  serializedData: Uint8Array;

  /**
   * A cryptographically generated value using `serialized_data` and a public key.
   *
   * @generated from field: string signature = 2;
   */
  signature: string;

  /**
   * The public-key component used in the generation of the signature
   *
   * @generated from field: string content_creator_pub_key = 3;
   */
  contentCreatorPubKey: string;

  /**
   * Derived from the same public key used to generate the signature
   *
   * @generated from field: string content_creator_address = 4;
   */
  contentCreatorAddress: string;

  /**
   * A secure hash of the data. See also [massa_hash::Hash]
   *
   * @generated from field: string id = 5;
   */
  id: string;

  constructor(data?: PartialMessage<SecureShare>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "massa.api.v1.SecureShare";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecureShare;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecureShare;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecureShare;

  static equals(a: SecureShare | PlainMessage<SecureShare> | undefined, b: SecureShare | PlainMessage<SecureShare> | undefined): boolean;
}

