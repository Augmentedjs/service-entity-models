# service-entity-models

The Augmented.js Next Service - Entity Models Module.

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ResourceCollection](#resourcecollection)
    -   [Parameters](#parameters)
    -   [uri](#uri)
        -   [Properties](#properties)
    -   [uri](#uri-1)
        -   [Properties](#properties-1)
    -   [uri](#uri-2)
    -   [url](#url)
    -   [sync](#sync)
        -   [Parameters](#parameters-1)
    -   [fetch](#fetch)
        -   [Parameters](#parameters-2)
    -   [save](#save)
        -   [Parameters](#parameters-3)
    -   [update](#update)
        -   [Parameters](#parameters-4)
    -   [destroy](#destroy)
        -   [Parameters](#parameters-5)
-   [EntityCollection](#entitycollection)
    -   [Parameters](#parameters-6)
    -   [url](#url-1)
        -   [Properties](#properties-2)
    -   [url](#url-2)
    -   [url](#url-3)
        -   [Properties](#properties-3)
    -   [url](#url-4)
    -   [initialize](#initialize)
        -   [Parameters](#parameters-7)
    -   [init](#init)
        -   [Parameters](#parameters-8)
    -   [setDatasource](#setdatasource)
        -   [Parameters](#parameters-9)
        -   [Properties](#properties-4)
    -   [setDatasource](#setdatasource-1)
        -   [Parameters](#parameters-10)
    -   [sync](#sync-1)
        -   [Parameters](#parameters-11)
    -   [fetch](#fetch-1)
        -   [Parameters](#parameters-12)
    -   [save](#save-1)
        -   [Parameters](#parameters-13)
    -   [update](#update-1)
        -   [Parameters](#parameters-14)
    -   [destroy](#destroy-1)
        -   [Parameters](#parameters-15)
    -   [setDataSourceCollection](#setdatasourcecollection)
        -   [Parameters](#parameters-16)
-   [PaginatedResourceCollection](#paginatedresourcecollection)
    -   [Parameters](#parameters-17)
    -   [setPageSize](#setpagesize)
        -   [Parameters](#parameters-18)
    -   [setCurrentPage](#setcurrentpage)
        -   [Parameters](#parameters-19)
    -   [fetch](#fetch-2)
        -   [Parameters](#parameters-20)
    -   [nextPage](#nextpage)
    -   [previousPage](#previouspage)
    -   [goToPage](#gotopage)
        -   [Parameters](#parameters-21)
    -   [firstPage](#firstpage)
    -   [lastPage](#lastpage)
    -   [refresh](#refresh)
-   [PaginationFactory](#paginationfactory)
    -   [getPaginatedCollection](#getpaginatedcollection)
        -   [Parameters](#parameters-22)
-   [PaginationFactory.type](#paginationfactorytype)
    -   [Properties](#properties-5)
-   [Entity](#entity)
    -   [Parameters](#parameters-23)
    -   [initialize](#initialize-1)
        -   [Parameters](#parameters-24)
    -   [initialize](#initialize-2)
        -   [Parameters](#parameters-25)
        -   [Properties](#properties-6)
    -   [initialize](#initialize-3)
        -   [Parameters](#parameters-26)
        -   [Properties](#properties-7)
    -   [initialize](#initialize-4)
        -   [Parameters](#parameters-27)
    -   [init](#init-1)
        -   [Parameters](#parameters-28)
    -   [sync](#sync-2)
        -   [Parameters](#parameters-29)
        -   [Properties](#properties-8)
    -   [sync](#sync-3)
        -   [Parameters](#parameters-30)
    -   [fetch](#fetch-3)
        -   [Parameters](#parameters-31)
    -   [save](#save-2)
        -   [Parameters](#parameters-32)
    -   [update](#update-2)
        -   [Parameters](#parameters-33)
    -   [destroy](#destroy-2)
        -   [Parameters](#parameters-34)
-   [Resource](#resource)
    -   [Parameters](#parameters-35)
    -   [initialize](#initialize-5)
        -   [Parameters](#parameters-36)
        -   [Properties](#properties-9)
    -   [initialize](#initialize-6)
        -   [Parameters](#parameters-37)
        -   [Properties](#properties-10)
    -   [initialize](#initialize-7)
        -   [Parameters](#parameters-38)
    -   [init](#init-2)
        -   [Parameters](#parameters-39)
    -   [fetch](#fetch-4)
        -   [Parameters](#parameters-40)
    -   [sync](#sync-4)
        -   [Parameters](#parameters-41)

## ResourceCollection

**Extends AbstractCollection**

Collection class to handle REST

### Parameters

-   `models`  
-   `options`  

### uri

Collection name for us in a datasource or an identifier

#### Properties

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the collection

### uri

#### Properties

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The url for the datasource (if applicable)

### uri

### url

**Meta**

-   **deprecated**: This is deprecated.


### sync

Sync method to handle REST functions for the model

#### Parameters

-   `method` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the operation to perform
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### fetch

Fetch the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### save

Save the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### update

Update the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### destroy

Destroy the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

## EntityCollection

**Extends AbstractCollection**

Collection class to handle ORM to a datasource&lt;/br/>
<em>Note: Datasource property is required</em>

### Parameters

-   `models`  
-   `options`  

### url

Collection name for us in a datasource or an identifier

#### Properties

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the collection

### url

The query to use for the query - defaults to "id" selection

### url

#### Properties

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The url for the datasource (if applicable)

### url

Returns **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** url The URL or a function to retun a URL object

### initialize

Initialize the model with needed wireing

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### init

Custom init method for the model (called at initialize)

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### setDatasource

#### Parameters

-   `datasource`  

#### Properties

-   `datasource` **Augmented.Service.DataSource** Datasource instance

### setDatasource

Set the datasource for the Collection

#### Parameters

-   `datasource` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The datasource object

### sync

Sync method to handle datasource functions for the Collection

#### Parameters

-   `method` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the operation to perform
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### fetch

Fetch the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### save

Save the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### update

Update the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### destroy

Destroy the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### setDataSourceCollection

Set the DataSource Collection

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the collection datasouce

## PaginatedResourceCollection

**Extends ResourceCollection**

Collection class to handle ORM to a datasource with pagination&lt;/br/>
<em>Note: Datasource property is required</em>

### Parameters

-   `models`  
-   `options`  

### setPageSize

Sets the number of items in a page

#### Parameters

-   `size` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of items in each page

### setCurrentPage

Sets the current page

#### Parameters

-   `page` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Current page in collection

### fetch

Fetch the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### nextPage

Moves to the next page

### previousPage

Moves to the previous page

### goToPage

Goes to page

#### Parameters

-   `page` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Page to go to

### firstPage

Moves to the first page

### lastPage

Moves to the last page

### refresh

Refreshes the collection

## PaginationFactory

Pagination factory for returning pagination collections of an API type

### getPaginatedCollection

Get a pagination collection of type

#### Parameters

-   `Collection` **PAGINATION_API** The collection class to enrich
-   `apiType` **PAGINATION_API** The API type to return an instance of
-   `data`  
-   `args` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Collection arguments

Returns **Collection** Returns a new collection with pagination configured

## PaginationFactory.type

Types of pagination API

### Properties

-   `github` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** GitHub API
-   `solr` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** SOLR API
-   `database` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Database-like API

## Entity

**Extends Model**

Entity class to handle ORM to a datasource&lt;/br/>
<em>Note: Datasource property is required</em>

### Parameters

-   `attributes`  
-   `options`  
-   `args` **...any** 

### initialize

The query to use for the query - defaults to "id" selection

#### Parameters

-   `options`  

### initialize

#### Parameters

-   `options`  

#### Properties

-   `url` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** The url for the datasource (if applicable)

### initialize

#### Parameters

-   `options`  

#### Properties

-   `collection` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The collection for the datasource (if applicable)

### initialize

Initialize the model with needed wireing

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### init

Custom init method for the model (called at inititlize)

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### sync

#### Parameters

-   `method`  
-   `options`  

#### Properties

-   `datasource` **Augmented.Service.DataSource** Datasource instance

### sync

Sync method to handle datasource functions for the model

#### Parameters

-   `method` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the operation to perform
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### fetch

Fetch the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### save

Save the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### update

Update the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### destroy

Destroy the entity

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

## Resource

**Extends AbstractModel**

Resource class to handle REST from Node&lt;/br/>
<em>Note: URL property is required</em>

### Parameters

-   `attributes`  
-   `options`  
-   `args` **...any** 

### initialize

#### Parameters

-   `options`  

#### Properties

-   `secure` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The secure flag

### initialize

#### Parameters

-   `options`  

#### Properties

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The url for the REST Service

### initialize

Initialize the model with needed wiring

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### init

Custom init method for the model (called at inititlize)

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### fetch

Fetch the Resource

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### sync

Sync method to handle REST functions for the model

#### Parameters

-   `method` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the operation to perform
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass
