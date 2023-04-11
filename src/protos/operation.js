// source: operation.proto
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

goog.provide('proto.massa.api.v1.Operation');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.massa.api.v1.OperationType');

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
proto.massa.api.v1.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.Operation.displayName = 'proto.massa.api.v1.Operation';
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
proto.massa.api.v1.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
    fee: jspb.Message.getFieldWithDefault(msg, 1, 0),
    expirePeriod: jspb.Message.getFieldWithDefault(msg, 2, 0),
    op: (f = msg.getOp()) && proto.massa.api.v1.OperationType.toObject(includeInstance, f)
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
 * @return {!proto.massa.api.v1.Operation}
 */
proto.massa.api.v1.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.Operation;
  return proto.massa.api.v1.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.Operation}
 */
proto.massa.api.v1.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setFee(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setExpirePeriod(value);
      break;
    case 3:
      var value = new proto.massa.api.v1.OperationType;
      reader.readMessage(value,proto.massa.api.v1.OperationType.deserializeBinaryFromReader);
      msg.setOp(value);
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
proto.massa.api.v1.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFee();
  if (f !== 0) {
    writer.writeFixed64(
      1,
      f
    );
  }
  f = message.getExpirePeriod();
  if (f !== 0) {
    writer.writeFixed64(
      2,
      f
    );
  }
  f = message.getOp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.massa.api.v1.OperationType.serializeBinaryToWriter
    );
  }
};


/**
 * optional fixed64 fee = 1;
 * @return {number}
 */
proto.massa.api.v1.Operation.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.Operation} returns this
 */
proto.massa.api.v1.Operation.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed64 expire_period = 2;
 * @return {number}
 */
proto.massa.api.v1.Operation.prototype.getExpirePeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.Operation} returns this
 */
proto.massa.api.v1.Operation.prototype.setExpirePeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional OperationType op = 3;
 * @return {?proto.massa.api.v1.OperationType}
 */
proto.massa.api.v1.Operation.prototype.getOp = function() {
  return /** @type{?proto.massa.api.v1.OperationType} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.OperationType, 3));
};


/**
 * @param {?proto.massa.api.v1.OperationType|undefined} value
 * @return {!proto.massa.api.v1.Operation} returns this
*/
proto.massa.api.v1.Operation.prototype.setOp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.Operation} returns this
 */
proto.massa.api.v1.Operation.prototype.clearOp = function() {
  return this.setOp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.Operation.prototype.hasOp = function() {
  return jspb.Message.getField(this, 3) != null;
};


