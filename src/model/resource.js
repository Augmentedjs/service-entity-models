const { AbstractModel } = require("next-core-model");
const http = require("http");
const https = require("https");

/**
 * Resource class to handle REST = require(Node</br/>
 * <em>Note: URI property is required</em>
 * @param {attributes} attributes Any attributes to prefill the model
 * @param {object} options Any options to pass
 * @param {any} ...args Any additional args
 * @extends AbstractModel
 */
class Resource extends AbstractModel {
  constructor(attributes, options, ...args) {
    if (!options) {
      options = {};
    }
    super(attributes, options, args);
    this.datasource = (options.datasource) ? options.datasource : null;
    this.id = (options.id) ? options.id : "";
    this.secure = (options.secure) ? options.secure : false;
  };
  /**
  * @property {string} secure The secure flag
  */

  /**
  * @property {string} uri The uri for the REST Service
  */

  /**
  * Initialize the model with needed wiring
  * @param {object} options Any options to pass
  */
  initialize(options) {
    //logger.log("initialize");
    if (options && options.uri) {
      this.uri = options.uri;
    }
    // don't save this as data, but properties via the object base class options copy.
    this.unset("uri");
    this.init(options);
  };
  /**
  * Custom init method for the model (called at inititlize)
  * @param {object} options Any options to pass
  */
  init(options) {
  };
  /**
  * Fetch the Resource
  * @param {object} options Any options to pass
  */
  fetch(options) {
    this.sync("read", options);
  };
  /**
  * Sync method to handle REST functions for the model
  * @param {string} method the operation to perform
  * @param {object} options Any options to pass
  */
  sync(method, options) {
    //logger.debug("sync " + method);
    if (this.uri) {
      let that = this, success, error;
      if (options && options.success && (typeof options.success === "function")) {
        success = options.success;
      }
      if (options && options.error && (typeof options.error === "function")) {
        error = options.error;
      }

      try {
        let j = {}, q, u = (typeof this.uri === "function") ? this.uri() : this.uri;
        if (method === "create") {
          j = that.attributes;
          let options = {
            path: u,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }
          };
          const h = (this.secure) ? https : http;

          let req = h.request(options, (res) => {
            //logger.debug("Status: " + res.statusCode);
            //logger.debug("Headers: " + JSON.stringify(res.headers));
            res.setEncoding("utf8");
            res.on("data", (body) => {
              //logger.debug("Body: " + body);
            });

            res.once("end", () => {
              if (success) {
                success(req.statusCode);
              }
            });
          });
          req.on("error", (e) => {
            //logger.error("problem with request: " + e.message);
            if (error) {
              error(500, e);
            }
          });
          // write data to request body
          req.write(that.toJSON());
          req.end();

        } else if (method === "update") {
          j = that.attributes;
          let options = {
            path: u,
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            }
          };

          const h = (this.secure) ? https : http;

          let req = h.request(options, (res) => {
            //logger.debug("Status: " + res.statusCode);
            //logger.debug("Headers: " + JSON.stringify(res.headers));
            res.setEncoding("utf8");
            res.on("data", (body) => {
              //logger.debug("Body: " + body);
            });

            res.once("end", () => {
              if (success) {
                success(req.statusCode, req.statusMessage);
              }
            });
          });
          req.on("error", (e) => {
            //logger.error("problem with request: " + e.message);
            if (error) {
              error(req.statusCode, e);
            }
          });
          // write data to request body
          req.write(that.toJSON());
          req.end();

        } else if (method === "delete") {
          let options = {
            path: u,
            method: "DELETE"
          };

          const h = (this.secure) ? https : http;

          let req = h.request(options, (res) => {
            //logger.debug("Status: " + res.statusCode);
            res.setEncoding("utf8");
            res.once("end", () => {
              if (success) {
                success(req.statusCode, req.statusMessage);
              }
            });
          });
          req.on("error", (e) => {
            //logger.error("problem with request: " + e.message);
            if (error) {
              error(500, e);
            }
          });
          req.end();

        } else {
          // read
          //logger.debug("reading = require(" + u);
          //logger.debug("have options? " + (options));

          const h = (this.secure) ? https : http;

          h.get(u, (res) => {
            let body = ""; // Will contain the final response
            // Received data is a buffer.
            // Adding it to our body
            res.on("data", (data) => {
              body += data;
            });
            // After the response is completed, parse it and log it to the console

            if (res.statusCode >= 200 && res.statusCode < 300) {
              res.once("end", () => {
                //logger.debug("Got data: " + body);
                let parsed = {};
                try {
                  parsed = JSON.parse(body);
                  that.set(parsed);
                  if (success) {
                    success(res.statusCode, res.statusMessage);
                  }
                } catch(e) {
                  //logger.error("Not JSON response, can't add to resource.  Exception: " + e);
                  if (error) {
                    error(res.statusCode, e);
                  }
                }
              });
            } else {
              //logger.error("Unsuccessfull Fetch - " + res.statusCode + " " + res.statusMessage);
              if (error) {
                error(res.statusCode, res.statusMessage);
              }
            }
          })
          // If any error has occured, log error to console
          .once("error", (e, options) => {
            //logger.error("Got error: " + e.message);
            if (error) {
              error(500, e);
            }
          });
        }
      } catch(e) {
        //logger.error("Got exception: " + e);
        if (error) {
          error(500, e);
        }
      }
    } else {
      //throw new Error("No uri");
      //logger.warn();
    }
    return {};
  };
};

module.exports = Resource;
