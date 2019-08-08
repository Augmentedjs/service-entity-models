import PAGINATION_API from "./paginationAPIType.js";

/**
 * Pagination factory for returning pagination collections of an API type
 */
class PaginationFactory {
  constructor() {
    this.type = PAGINATION_API;
  };

  /**
   * Get a pagination collection of type
   * @param {PAGINATION_API} Collection The collection class to enrich
   * @param {PAGINATION_API} apiType The API type to return an instance of
   * @param {object} args Collection arguments
   * @static
   * @returns {Collection} Returns a new collection with pagination configured
   */
  static getPaginatedCollection(Collection, apiType, data) {
    const arg = (data) ? data : {};
    let collection = null;

    if (!apiType) {
      apiType = PAGINATION_API.GITHUB;
    }
    if (apiType === PAGINATION_API.GITHUB) {
      collection = new Collection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "page",
        pageSizeParam: "per_page"
      });
    } else if (apiType === PAGINATION_API.SOLR) {
      collection = new Collection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "start",
        pageSizeParam: "rows"
      });
    } else if (apiType === PAGINATION_API.DATABASE) {
      collection = new Collection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "offset",
        pageSizeParam: "limit"
      });
    }
    return collection;
  };
};

export default PaginationFactory;
