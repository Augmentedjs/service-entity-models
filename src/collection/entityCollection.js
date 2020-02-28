const { AbstractCollection } = require("next-core-model");

/**
 * Collection class to handle ORM to a datasource</br/>
 * <em>Note: Datasource property is required</em>
 * @extends AbstractCollection
 */
class EntityCollection extends AbstractCollection {
  constructor(models, options) {
    if (!options) {
      options = {};
    }
    super(models, options);
    this.name = (options.name) ? options.name : "collection";
    this._uri = (options.uri) ? options.uri : "";
    this.query = (options.query) ? options.query : null;
    this.datasource = (options.datasource) ? options.datasource : null;
  };

  /**
  * Collection name for us in a datasource or an identifier
  * @property {string} name The name of the collection
  */

  /**
  * The query to use for the query - defaults to "id" selection
  * @method query The query string to use for selection
  */

  /**
  * @property {string} uri The uri for the datasource (if applicable)
  */

  /**
  * @property uri Set the uri for the ResourceCollection
  * @returns {string|function} uri The URI or a function to retun a URI object
  */
  get uri() {
    return this._uri;
  };

  set uri(uri) {
    this._uri = uri;
  };

  /**
  * @property url The url for the ResourceCollection
  * @deprecated
  */

  get url() {
    console.warn("url is deprecated, use uri instead.");
    return this._uri;
  };

  set url(uri) {
    console.warn("url is deprecated, use uri instead.");
    this._uri = uri;
  }; 

  /**
  * Initialize the model with needed wireing
  * @param {object} options Any options to pass
  */
  initialize(options) {
    if (options) {
      //logger.debug("calling initialize with options: " + JSON.stringify(options));

      if (options.datasource) {
        this.datasource = options.datasource;
      }
      if (options.query) {
        this.query = options.query;
      }
      if (options.name) {
        this.name = options.name;
      }
      if (options.uri) {
        this.uri = options.uri;
      }
    }
    if (this.datasource && (this.uri === "")) {
      this.uri =  this.datasource.uri;
    }

    this.setDataSourceCollection(this.name);

    this.init(options);
  };
  /**
  * Custom init method for the model (called at initialize)
  * @param {object} options Any options to pass
  */
  init(options) {
  };
  /**
  * @property {Augmented.Service.DataSource} datasource Datasource instance
  */

  /**
  * Set the datasource for the Collection
  * @param {object} datasource The datasource object
  */
  setDatasource(datasource) {
    this.datasource = datasource;
  };
  /**
  * Sync method to handle datasource functions for the Collection
  * @param {string} method the operation to perform
  * @param {object} options Any options to pass
  */
  sync(method, options) {
    //logger.debug("sync " + method);
    if (this.datasource) {
      let that = this;
      try {
        let j = {}, q;
        if (method === "create") {
          j = this.toJSON();
          this.datasource.insert(j, () => {
            that.reset(j);
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else if (method === "update") {
          j = this.toJSON();
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
          //logger.log("reading");

          if (options && options.query) {
            q = options.query;
          } else {
            q = this.query;
          }

          //logger.debug("query " + JSON.stringify(q));
          this.datasource.query(q, (data) => {
            that.reset(data);

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
      //logger.warn("no datasource");
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
    /**
    * Set the DataSource Collection
    * @param {string} name The name of the collection datasouce
    */
    setDataSourceCollection(name) {
      if (name && Augmented.isString(name) && this.datasource) {
        //logger.debug("service: setting collection name: " + name);
        this.name = name;
        this.datasource.setCollection(name);
      }
    }
  };

module.exports = EntityCollection;
