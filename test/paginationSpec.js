describe('Given an Augmented Collection needing pagination', () => {
  describe('Given an Augmented PaginationFactory', () => {
    let c;
    beforeEach(() => {

    });
    afterEach(() => {
      c = null;
    });
    it('has an augmented PaginationFactory', () => {
      expect(Service.PaginationFactory).to.be.not.undefined;
    });

    it('can get a "github" API PaginatedCollection', () => {
      c = Service.PaginationFactory.getPaginatedCollection(Service.PaginatedResourceCollection, Service.PAGINATION_API.GITHUB);
      expect(c instanceof Service.PaginatedResourceCollection).to.be.true;
      expect(c.paginationConfiguration.currentPageParam).to.equal('page');
    });

    it('can get a "solr" API PaginatedCollection', () => {
      c = Service.PaginationFactory.getPaginatedCollection(Service.PaginatedResourceCollection, Service.PAGINATION_API.SOLR);
      expect(c instanceof Service.PaginatedResourceCollection).to.be.true;
      expect(c.paginationConfiguration.currentPageParam).to.equal('start');
    });

    it('can get a "database" API PaginatedCollection', () => {
      c = Service.PaginationFactory.getPaginatedCollection(Service.PaginatedResourceCollection, Service.PAGINATION_API.DATABASE);
      expect(c instanceof Service.PaginatedResourceCollection).to.be.true;
      expect(c.paginationConfiguration.currentPageParam).to.equal('offset');
    });

    it('will not get a "nothing" API PaginatedCollection', () => {
      c = Service.PaginationFactory.getPaginatedCollection(Service.PaginatedResourceCollection, "nothing");
      expect(c instanceof Service.PaginatedResourceCollection).to.be.false;
    });
  });

  describe('Given an Service Collection', () => {
    let c;
    const defConfig = {
      currentPageParam: "p",
      pageSizeParam: "pp"
    },
    testUrl = "/tests/1",
    testMethod = "GET",
    testText = "Hello World",
    testStatus = 200,
    testHeaders = {ContentType: "text/plain", User: "Mufasa"},
    mockedResponse = null;

    beforeEach(() => {
      c = new Service.PaginatedResourceCollection();
    });

    afterEach(() => {
      c = null;
    });

    it('has an augmented PaginatedCollection', () => {
      expect(Service.PaginatedResourceCollection).to.be.not.undefined;
    });

    it('can create an augmented PaginatedCollection', () => {
      expect(c instanceof Service.PaginatedResourceCollection).to.be.true;
    });

    it('has a configuration object', () => {
      expect(c.paginationConfiguration).not.to.equal({});
    });

    it('can set a configuration object', () => {
      c.setPaginationConfiguration(defConfig);
      expect(c.paginationConfiguration).to.equal(defConfig);
    });

    xit('can fetch', () => {
      c.uri = "/tests/1";
      c.mock = true;
      const ret = c.fetch();
      expect(ret).to.be.not.undefined;
    });
  });
});
