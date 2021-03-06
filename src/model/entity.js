const { AbstractModel } = require("next-core-model");

/**
 * Entity class to handle ORM to a datasource</br/>
 * <em>Note: Datasource property is required</em>
 * @param {attributes} attributes Any attributes to prefill the model
 * @param {object} options Any options to pass
 * @param {any} ...args Any additional args
 * @extends AbstractModel
 */
class Entity extends AbstractModel {
  constructor(attributes, options = {}, ...args) {
    super(attributes, options, args);
    this.collection = (options.collection) ? options.collection : "collection";
    this._uri = (options.uri) ? options.uri : "";
    this.query = (options.query) ? options.query : null;
    this.datasource = (options.datasource) ? options.datasource : null;
    this.id = (options.id) ? options.id : "";
  };
  /**
  * The query to use for the query - defaults to "id" selection
  * @property {object} query The query string to use for selection
  */

  /**
  * @property {string|function} uri The uri for the datasource (if applicable)
  */

  /**
  * @property {string} collection The collection for the datasource (if applicable)
  */

  /**
  * Initialize the model with needed wiring
  * @param {object} options Any options to pass
  */
  initialize(options) {
    if (options) {
      if (options.collection) {
        this.collection = options.collection;
      }
      if (options.datasource) {
        this.datasource = options.datasource;
      }
      if (options.uri) {
        this.uri = this.datasource.uri;
      }
      if (options.id) {
        this.id = options.id;
      }
      if (options.query) {
        this.query = options.query;
      }
    }
    // don't save this as data, but properties via the object base class options copy.
    this.unset("datasource");
    this.unset("uri");
    this.unset("query");
    this.unset("collection");
    this.unset("id");
    if (this.datasource && this.collection) {
      this.datasource.setCollection(this.collection);
    }
    this.init(options);
  };
  /**
  * Custom init method for the model (called at inititlize)
  * @param {object} options Any options to pass
  */
  init(options) {
  };
  /**
  * @property {Augmented.Service.DataSource} datasource Datasource instance
  */

  /**
  * Sync method to handle datasource functions for the model
  * @param {string} method the operation to perform
  * @param {object} options Any options to pass
  */
  sync(method, options) {
    //logger.debug("sync " + method);
    if (this.datasource) {
      const that = this;
      try {
        let j = {}, q;
        if (method === "create") {
          j = that.attributes;
          this.datasource.insert(j, () => {
            that.reset(j);
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else if (method === "update") {
          j = that.attributes;

          //logger.debug("The object: " + JSON.stringify(j));

          if (options && options.query) {
            q = options.query;
          } else {
            q = this.query;
          }

          this.datasource.update(q, j, () => {
            //that.reset(j);
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else if (method === "delete") {
          if (options && options.query) {
            q = options.query;
          } else {
            q = this.query;
          }
          this.datasource.remove(q, () => {
            that.reset();
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else {
          // read
          //logger.debug("reading");

          if (options && options.query) {
            q = options.query;
          } else {
            q = that.query;
          }

          let myQuery = q;
          if (Augmented.isFunction(q)) {
            let x = q();
            //logger.debug("x " + x);
            myQuery = x;
          }

          console.debug("query " + JSON.stringify(myQuery));
          this.datasource.query(myQuery, (data) => {
            if (data === null) {
              throw new Error("No Data Returned!");
            }
            if (Array.isArray(data) && data.length > 0) {
              that.reset(data[0]);
            } else if (Array.isArray(data) && data.length === 0) {
              that.reset();
            } else {
              that.reset(data);
            }

            //logger.debug("returned: " + JSON.stringify(data));
            if (options && options.success && (typeof options.success === "function")) {
              options.success(data);
            }
          });
        }
      } catch(e) {
        if (options && options.error && (typeof options.error === "function")) {
          options.error(e);
        }
        //throw(e);
      }
    } //else {
      //    logger.warn("no datasource");
      //}
    return {};
  };
  /**
  * Fetch the entity
  * @param {object} options Any options to pass
  */
  fetch(options) {
    this.sync("read", options);
  };
  /**
  * Save the entity
  * @param {object} options Any options to pass
  */
  save(options) {
    this.sync("create", options);
  };
  /**
  * Update the entity
  * @param {object} options Any options to pass
  */
  update(options) {
    this.sync("update", options);
  };
  /**
  * Destroy the entity
  * @param {object} options Any options to pass
  */
  destroy(options) {
    this.sync("delete", options);
  };
};

module.exports = Entity;
