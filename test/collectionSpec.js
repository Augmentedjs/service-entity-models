describe("Given an Augmented Service Collections", () => {

    describe("Given an Augmented Service EntityCollection", () => {
        it("is defined", () => {
            expect(Service.EntityCollection).to.be.not.undefined;
        });

        let e;
        beforeEach(() => {
            e = new Service.EntityCollection();
        });
        afterEach(() => {
            e = null;
        });

        it("can check if empty", () => {
            expect(e.isEmpty()).to.be.true;
        });

        it("supports setting a datasource", () => {
            e.setDatasource({});
            expect(e.datasource).to.be.not.undefined;
        });
    });

    describe("Given an Augmented Service ResourceCollection", () => {
        it("is defined", () => {
            expect(Service.ResourceCollection).to.be.not.undefined;
        });

        let e;
        beforeEach(() => {
            e = new Service.ResourceCollection();
        });
        afterEach(() => {
            e = null;
        });

        it("can check if empty", () => {
            expect(e.isEmpty()).to.be.true;
        });

        it("supports setting a URI", () => {
            e.uri = "localhost";
            expect(e.uri).to.equal("localhost");
        });
    });

});
