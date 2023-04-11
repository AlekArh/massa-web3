// source: api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.massa.api.v1.NewBlocksResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.massa.api.v1.SignedBlock');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewBlocksResponse.displayName = 'proto.massa.api.v1.NewBlocksResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    block: (f = msg.getBlock()) && proto.massa.api.v1.SignedBlock.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewBlocksResponse}
 */
proto.massa.api.v1.NewBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewBlocksResponse;
  return proto.massa.api.v1.NewBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewBlocksResponse}
 */
proto.massa.api.v1.NewBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.SignedBlock;
      reader.readMessage(value,proto.massa.api.v1.SignedBlock.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.SignedBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewBlocksResponse} returns this
 */
proto.massa.api.v1.NewBlocksResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SignedBlock block = 2;
 * @return {?proto.massa.api.v1.SignedBlock}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.getBlock = function() {
  return /** @type{?proto.massa.api.v1.SignedBlock} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.SignedBlock, 2));
};


/**
 * @param {?proto.massa.api.v1.SignedBlock|undefined} value
 * @return {!proto.massa.api.v1.NewBlocksResponse} returns this
*/
proto.massa.api.v1.NewBlocksResponse.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewBlocksResponse} returns this
 */
proto.massa.api.v1.NewBlocksResponse.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};


