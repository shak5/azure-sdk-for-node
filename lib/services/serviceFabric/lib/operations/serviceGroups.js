/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const WebResource = msRest.WebResource;

/**
 * Create service groups
 *
 * @param {string} applicationName The name of the service group
 *
 * @param {object} createServiceGroupDescription The description of the service
 * group
 *
 * @param {string} [createServiceGroupDescription.applicationName]
 *
 * @param {string} [createServiceGroupDescription.serviceName]
 *
 * @param {string} [createServiceGroupDescription.serviceTypeName]
 *
 * @param {object} [createServiceGroupDescription.partitionDescription]
 *
 * @param {string}
 * [createServiceGroupDescription.partitionDescription.partitionScheme]
 * Possible values include: 'Invalid', 'Singleton', 'UniformInt64', 'Named'
 *
 * @param {number} [createServiceGroupDescription.partitionDescription.count]
 *
 * @param {array} [createServiceGroupDescription.partitionDescription.names]
 *
 * @param {string} [createServiceGroupDescription.partitionDescription.lowKey]
 *
 * @param {string} [createServiceGroupDescription.partitionDescription.highKey]
 *
 * @param {string} [createServiceGroupDescription.placementConstraints]
 *
 * @param {object} [createServiceGroupDescription.correlationScheme]
 *
 * @param {object} [createServiceGroupDescription.serviceLoadMetrics]
 *
 * @param {object} [createServiceGroupDescription.servicePlacementPolicies]
 *
 * @param {string}
 * [createServiceGroupDescription.servicePlacementPolicies.serviceName]
 *
 * @param {string}
 * [createServiceGroupDescription.servicePlacementPolicies.serviceCorrelationScheme]
 * Possible values include: 'Invalid', 'Affinity', 'AlignedAffinity',
 * 'NonAlignedAffinity'
 *
 * @param {number} [createServiceGroupDescription.flags]
 *
 * @param {array} [createServiceGroupDescription.serviceGroupMemberDescription]
 *
 * @param {string} createServiceGroupDescription.serviceKind Polymorphic
 * Discriminator
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _create(applicationName, createServiceGroupDescription, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (createServiceGroupDescription === null || createServiceGroupDescription === undefined) {
      throw new Error('createServiceGroupDescription cannot be null or undefined.');
    }
    if (this.client.timeout !== null && this.client.timeout !== undefined && typeof this.client.timeout !== 'number') {
      throw new Error('this.client.timeout must be of type number.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'Applications/{applicationName}/$/GetServices/$/CreateServiceGroup';
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  let queryParameters = [];
  if (this.client.timeout !== null && this.client.timeout !== undefined) {
    queryParameters.push('timeout=' + encodeURIComponent(this.client.timeout.toString()));
  }
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (createServiceGroupDescription !== null && createServiceGroupDescription !== undefined) {
      let requestModelMapper = new client.models['CreateServiceGroupDescription']().mapper();
      requestModel = client.serialize(requestModelMapper, createServiceGroupDescription, 'createServiceGroupDescription');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(createServiceGroupDescription, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 201 && statusCode !== 202) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError1 = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }
    // Deserialize Response
    if (statusCode === 202) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError2 = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError2.request = msRest.stripRequest(httpRequest);
        deserializationError2.response = msRest.stripResponse(response);
        return callback(deserializationError2);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Update service groups
 *
 * @param {string} applicationName The name of the application
 *
 * @param {string} serviceName The name of the service
 *
 * @param {object} updateServiceGroupDescription The description of the service
 * group update
 *
 * @param {number} [updateServiceGroupDescription.flags]
 *
 * @param {string} updateServiceGroupDescription.serviceKind Polymorphic
 * Discriminator
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _update(applicationName, serviceName, updateServiceGroupDescription, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (serviceName === null || serviceName === undefined || typeof serviceName.valueOf() !== 'string') {
      throw new Error('serviceName cannot be null or undefined and it must be of type string.');
    }
    if (updateServiceGroupDescription === null || updateServiceGroupDescription === undefined) {
      throw new Error('updateServiceGroupDescription cannot be null or undefined.');
    }
    if (this.client.timeout !== null && this.client.timeout !== undefined && typeof this.client.timeout !== 'number') {
      throw new Error('this.client.timeout must be of type number.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'Applications/{applicationName}/$/GetServices/{serviceName}/$/UpdateServiceGroup';
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  requestUrl = requestUrl.replace('{serviceName}', serviceName);
  let queryParameters = [];
  if (this.client.timeout !== null && this.client.timeout !== undefined) {
    queryParameters.push('timeout=' + encodeURIComponent(this.client.timeout.toString()));
  }
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (updateServiceGroupDescription !== null && updateServiceGroupDescription !== undefined) {
      let requestModelMapper = new client.models['UpdateServiceGroupDescription']().mapper();
      requestModel = client.serialize(requestModelMapper, updateServiceGroupDescription, 'updateServiceGroupDescription');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(updateServiceGroupDescription, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Remove service groups
 *
 * @param {string} applicationName The name of the application
 *
 * @param {string} serviceName The name of the service
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _remove(applicationName, serviceName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (serviceName === null || serviceName === undefined || typeof serviceName.valueOf() !== 'string') {
      throw new Error('serviceName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.timeout !== null && this.client.timeout !== undefined && typeof this.client.timeout !== 'number') {
      throw new Error('this.client.timeout must be of type number.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'Applications/{applicationName}/$/GetServiceGroups/{serviceName}/$/Delete';
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  requestUrl = requestUrl.replace('{serviceName}', serviceName);
  let queryParameters = [];
  if (this.client.timeout !== null && this.client.timeout !== undefined) {
    queryParameters.push('timeout=' + encodeURIComponent(this.client.timeout.toString()));
  }
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @class
 * ServiceGroups
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ServiceFabricClient.
 * Initializes a new instance of the ServiceGroups class.
 * @constructor
 *
 * @param {ServiceFabricClient} client Reference to the service client.
 */
class ServiceGroups {
  constructor(client) {
    this.client = client;
    this._create = _create;
    this._update = _update;
    this._remove = _remove;
  }

  /**
   * Create service groups
   *
   * @param {string} applicationName The name of the service group
   *
   * @param {object} createServiceGroupDescription The description of the service
   * group
   *
   * @param {string} [createServiceGroupDescription.applicationName]
   *
   * @param {string} [createServiceGroupDescription.serviceName]
   *
   * @param {string} [createServiceGroupDescription.serviceTypeName]
   *
   * @param {object} [createServiceGroupDescription.partitionDescription]
   *
   * @param {string}
   * [createServiceGroupDescription.partitionDescription.partitionScheme]
   * Possible values include: 'Invalid', 'Singleton', 'UniformInt64', 'Named'
   *
   * @param {number} [createServiceGroupDescription.partitionDescription.count]
   *
   * @param {array} [createServiceGroupDescription.partitionDescription.names]
   *
   * @param {string} [createServiceGroupDescription.partitionDescription.lowKey]
   *
   * @param {string} [createServiceGroupDescription.partitionDescription.highKey]
   *
   * @param {string} [createServiceGroupDescription.placementConstraints]
   *
   * @param {object} [createServiceGroupDescription.correlationScheme]
   *
   * @param {object} [createServiceGroupDescription.serviceLoadMetrics]
   *
   * @param {object} [createServiceGroupDescription.servicePlacementPolicies]
   *
   * @param {string}
   * [createServiceGroupDescription.servicePlacementPolicies.serviceName]
   *
   * @param {string}
   * [createServiceGroupDescription.servicePlacementPolicies.serviceCorrelationScheme]
   * Possible values include: 'Invalid', 'Affinity', 'AlignedAffinity',
   * 'NonAlignedAffinity'
   *
   * @param {number} [createServiceGroupDescription.flags]
   *
   * @param {array} [createServiceGroupDescription.serviceGroupMemberDescription]
   *
   * @param {string} createServiceGroupDescription.serviceKind Polymorphic
   * Discriminator
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createWithHttpOperationResponse(applicationName, createServiceGroupDescription, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._create(applicationName, createServiceGroupDescription, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Create service groups
   *
   * @param {string} applicationName The name of the service group
   *
   * @param {object} createServiceGroupDescription The description of the service
   * group
   *
   * @param {string} [createServiceGroupDescription.applicationName]
   *
   * @param {string} [createServiceGroupDescription.serviceName]
   *
   * @param {string} [createServiceGroupDescription.serviceTypeName]
   *
   * @param {object} [createServiceGroupDescription.partitionDescription]
   *
   * @param {string}
   * [createServiceGroupDescription.partitionDescription.partitionScheme]
   * Possible values include: 'Invalid', 'Singleton', 'UniformInt64', 'Named'
   *
   * @param {number} [createServiceGroupDescription.partitionDescription.count]
   *
   * @param {array} [createServiceGroupDescription.partitionDescription.names]
   *
   * @param {string} [createServiceGroupDescription.partitionDescription.lowKey]
   *
   * @param {string} [createServiceGroupDescription.partitionDescription.highKey]
   *
   * @param {string} [createServiceGroupDescription.placementConstraints]
   *
   * @param {object} [createServiceGroupDescription.correlationScheme]
   *
   * @param {object} [createServiceGroupDescription.serviceLoadMetrics]
   *
   * @param {object} [createServiceGroupDescription.servicePlacementPolicies]
   *
   * @param {string}
   * [createServiceGroupDescription.servicePlacementPolicies.serviceName]
   *
   * @param {string}
   * [createServiceGroupDescription.servicePlacementPolicies.serviceCorrelationScheme]
   * Possible values include: 'Invalid', 'Affinity', 'AlignedAffinity',
   * 'NonAlignedAffinity'
   *
   * @param {number} [createServiceGroupDescription.flags]
   *
   * @param {array} [createServiceGroupDescription.serviceGroupMemberDescription]
   *
   * @param {string} createServiceGroupDescription.serviceKind Polymorphic
   * Discriminator
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  create(applicationName, createServiceGroupDescription, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._create(applicationName, createServiceGroupDescription, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._create(applicationName, createServiceGroupDescription, options, optionalCallback);
    }
  }

  /**
   * Update service groups
   *
   * @param {string} applicationName The name of the application
   *
   * @param {string} serviceName The name of the service
   *
   * @param {object} updateServiceGroupDescription The description of the service
   * group update
   *
   * @param {number} [updateServiceGroupDescription.flags]
   *
   * @param {string} updateServiceGroupDescription.serviceKind Polymorphic
   * Discriminator
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  updateWithHttpOperationResponse(applicationName, serviceName, updateServiceGroupDescription, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._update(applicationName, serviceName, updateServiceGroupDescription, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Update service groups
   *
   * @param {string} applicationName The name of the application
   *
   * @param {string} serviceName The name of the service
   *
   * @param {object} updateServiceGroupDescription The description of the service
   * group update
   *
   * @param {number} [updateServiceGroupDescription.flags]
   *
   * @param {string} updateServiceGroupDescription.serviceKind Polymorphic
   * Discriminator
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  update(applicationName, serviceName, updateServiceGroupDescription, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._update(applicationName, serviceName, updateServiceGroupDescription, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._update(applicationName, serviceName, updateServiceGroupDescription, options, optionalCallback);
    }
  }

  /**
   * Remove service groups
   *
   * @param {string} applicationName The name of the application
   *
   * @param {string} serviceName The name of the service
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  removeWithHttpOperationResponse(applicationName, serviceName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._remove(applicationName, serviceName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Remove service groups
   *
   * @param {string} applicationName The name of the application
   *
   * @param {string} serviceName The name of the service
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  remove(applicationName, serviceName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._remove(applicationName, serviceName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._remove(applicationName, serviceName, options, optionalCallback);
    }
  }

}

module.exports = ServiceGroups;