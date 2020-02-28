const ResourceCollection = require("./collection/resourceCollection.js");
const EntityCollection = require("./collection/entityCollection.js");
const PaginatedResourceCollection = require("./collection/paginatedResourceCollection.js");
const PaginationFactory = require("./collection/paginationFactory.js");
const PAGINATION_API = require("./collection/paginationAPIType.js");
const Entity = require("./model/entity.js");
const Resource = require("./model/resource.js");

module.exports.ResourceCollection = ResourceCollection;
module.exports.EntityCollection = EntityCollection;
module.exports.PaginatedResourceCollection = PaginatedResourceCollection;
module.exports.PaginationFactory = PaginationFactory;
module.exports.PAGINATION_API = PAGINATION_API;
module.exports.Entity = Entity;
module.exports.Resource = Resource;
