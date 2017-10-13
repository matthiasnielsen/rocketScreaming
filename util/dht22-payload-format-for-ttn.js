function Decoder(bytes, port) {
  // Decode an uplink message from a buffer
  // (array) of bytes to an object of fields.
  
  var decoded = {};
  decoded.raw = bytes
  decoded.parsed = {
    "hum": parseFloat("" + bytes[2] + "." + (bytes[3] < 10 ? "0" + bytes[3] : bytes[3])),
    "temp": parseFloat("" + (bytes[0] - 128) + "." + (bytes[1] < 10 ? "0" + bytes[1] : bytes[1]))
  }
  return decoded;
}