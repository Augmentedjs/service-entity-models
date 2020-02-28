const ResourceCollection = require("./resourceCollection.js");

/**
 * Collection class to handle ORM to a datasource with pagination</br/>
 * <em>Note: Datasource property is required</em>
 * @extends ResourceCollection
 */
class PaginatedResourceCollection extends ResourceCollection {
  constructor(models, options) {
    if (!options) {
      options = {};
    }
    super(models, options);
    this.paginationConfiguration = {
      currentPageParam: "page",
      pageSizeParam: "per_page"
    };

    this.pageSize = (options.pageSize) ? options.pageSize : 20;
    this.currentPage = (options.currentPage) ? options.currentPage : 1;
    this.totalPages = 1; //  need to calculate later
  };
  /**
   * Sets the number of items in a page
   * @param {number} size Number of items in each page
   */
  setPageSize(size) {
    if (size) {
      this.pageSize = size;
    }
    this.refresh();
  };
  /**
   * Sets the current page
   * @param {number} page Current page in collection
   */
  setCurrentPage(page) {
    if (!page) {
      page = 1;
    }
    this.currentPage = page;
    this.refresh();
  };
  /**
   * Sets pagination configuration
   * @param {object} config pagination configuration
   * @private
   */
  setPaginationConfiguration(config) {
    this.paginationConfiguration = config;
  };
  /**
  * Fetch the entity
  * @param {object} options Any options to pass
  */
  fetch(options) {
    options = (options) ? options : {};
    var data = (options.data || {});
    var p = this.paginationConfiguration;
    var d = {};
    d[p.currentPageParam] = this.currentPage;
    d[p.pageSizeParam] = this.pageSize;

    options.data = d;

    return super.fetch(options);
  };
  /**
   * Moves to the next page
   */
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.refresh();
    }
  };
  /**
   * Moves to the previous page
   */
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
      this.refresh();
    }
  };
  /**
   * Goes to page
   * @param {number} page Page to go to
   */
  goToPage(page) {
    if ((page) && (page < this.totalPages) && (page > 0)) {
      this.currentPage = page;
      this.refresh();
    }
  };
  /**
   * Moves to the first page
   */
  firstPage() {
    this.currentPage = 1;
    this.refresh();
  };
  /**
   * Moves to the last page
   */
  lastPage() {
    this.currentPage = this.totalPages;
    this.refresh();
  };
  /**
   * Refreshes the collection
   */
  refresh() {
    this.fetch();
  };
};

module.exports = PaginatedResourceCollection;
