/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the RegistryNameCheckRequest class.
 * @constructor
 * A request to check whether a container registry name is available.
 *
 * @member {string} name The name of the container registry.
 */
export interface RegistryNameCheckRequest {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryNameStatus class.
 * @constructor
 * The result of a request to check the availability of a container registry
 * name.
 *
 * @member {boolean} [nameAvailable] The value that indicates whether the name
 * is available.
 * @member {string} [reason] If any, the reason that the name is not available.
 * @member {string} [message] If any, the error message that provides more
 * detail for the reason that the name is not available.
 */
export interface RegistryNameStatus {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplayDefinition class.
 * @constructor
 * The display information for a container registry operation.
 *
 * @member {string} [provider] The resource provider name:
 * Microsoft.ContainerRegistry.
 * @member {string} [resource] The resource on which the operation is
 * performed.
 * @member {string} [operation] The operation that users can perform.
 * @member {string} [description] The description for the operation.
 */
export interface OperationDisplayDefinition {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDefinition class.
 * @constructor
 * The definition of a container registry operation.
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @member {object} [display] The display information for the container
 * registry operation.
 * @member {string} [display.provider] The resource provider name:
 * Microsoft.ContainerRegistry.
 * @member {string} [display.resource] The resource on which the operation is
 * performed.
 * @member {string} [display.operation] The operation that users can perform.
 * @member {string} [display.description] The description for the operation.
 */
export interface OperationDefinition {
  name?: string;
  display?: OperationDisplayDefinition;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * The result of a request to list container registry operations.
 *
 * @member {array} [value] The list of container registry operations. Since
 * this list may be incomplete, the nextLink field should be used to request
 * the next list of operations.
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of container registry operations.
 */
export interface OperationListResult {
  value?: OperationDefinition[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The SKU of a container registry.
 *
 * @member {string} name The SKU name of the the container registry. Required
 * for registry creation. Allowed value: Basic.
 * @member {string} [tier] The SKU tier based on the SKU name. Possible values
 * include: 'Basic'
 */
export interface Sku {
  name: string;
  readonly tier?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountProperties class.
 * @constructor
 * The properties of a storage account for a container registry.
 *
 * @member {string} [name] The name of the storage account.
 */
export interface StorageAccountProperties {
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * An Azure resource.
 *
 * @member {string} [id] The resource ID.
 * @member {string} [name] The name of the resource.
 * @member {string} [type] The type of the resource.
 * @member {string} location The location of the resource. This cannot be
 * changed after the resource is created.
 * @member {object} [tags] The tags of the resource.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Registry class.
 * @constructor
 * An object that represents a container registry.
 *
 * @member {object} sku The SKU of the container registry.
 * @member {string} [sku.name] The SKU name of the the container registry.
 * Required for registry creation. Allowed value: Basic.
 * @member {string} [sku.tier] The SKU tier based on the SKU name. Possible
 * values include: 'Basic'
 * @member {string} [loginServer] The URL that can be used to log into the
 * container registry.
 * @member {date} [creationDate] The creation date of the container registry in
 * ISO8601 format.
 * @member {string} [provisioningState] The status of the container registry at
 * the time the operation was called. Possible values include: 'Creating',
 * 'Succeeded'
 * @member {boolean} [adminUserEnabled] The value that indicates whether the
 * admin user is enabled. This value is false by default. Default value: false
 * .
 * @member {object} [storageAccount] The properties of the storage account for
 * the container registry.
 * @member {string} [storageAccount.name] The name of the storage account.
 */
export interface Registry extends Resource {
  sku: Sku;
  readonly loginServer?: string;
  readonly creationDate?: Date;
  readonly provisioningState?: string;
  adminUserEnabled?: boolean;
  storageAccount?: StorageAccountProperties;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountParameters class.
 * @constructor
 * The parameters of a storage account for a container registry.
 *
 * @member {string} name The name of the storage account.
 * @member {string} accessKey The access key to the storage account.
 */
export interface StorageAccountParameters {
  name: string;
  accessKey: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryCreateParameters class.
 * @constructor
 * The parameters for creating a container registry.
 *
 * @member {object} [tags] The tags for the container registry.
 * @member {string} location The location of the container registry. This
 * cannot be changed after the resource is created.
 * @member {object} sku The SKU of the container registry.
 * @member {string} [sku.name] The SKU name of the the container registry.
 * Required for registry creation. Allowed value: Basic.
 * @member {string} [sku.tier] The SKU tier based on the SKU name. Possible
 * values include: 'Basic'
 * @member {boolean} [adminUserEnabled] The value that indicates whether the
 * admin user is enabled. This value is false by default.
 * @member {object} storageAccount The parameters of a storage account for the
 * container registry. If specified, the storage account must be in the same
 * physical location as the container registry.
 * @member {string} [storageAccount.name] The name of the storage account.
 * @member {string} [storageAccount.accessKey] The access key to the storage
 * account.
 */
export interface RegistryCreateParameters {
  tags?: { [propertyName: string]: string };
  location: string;
  sku: Sku;
  adminUserEnabled?: boolean;
  storageAccount: StorageAccountParameters;
}

/**
 * @class
 * Initializes a new instance of the RegistryUpdateParameters class.
 * @constructor
 * The parameters for updating a container registry.
 *
 * @member {object} [tags] The tags for the container registry.
 * @member {boolean} [adminUserEnabled] The value that indicates whether the
 * admin user is enabled. This value is false by default.
 * @member {object} [storageAccount] The parameters of a storage account for
 * the container registry. If specified, the storage account must be in the
 * same physical location as the container registry.
 * @member {string} [storageAccount.name] The name of the storage account.
 * @member {string} [storageAccount.accessKey] The access key to the storage
 * account.
 */
export interface RegistryUpdateParameters {
  tags?: { [propertyName: string]: string };
  adminUserEnabled?: boolean;
  storageAccount?: StorageAccountParameters;
}

/**
 * @class
 * Initializes a new instance of the RegistryListResult class.
 * @constructor
 * The result of a request to list container registries.
 *
 * @member {array} [value] The list of container registries. Since this list
 * may be incomplete, the nextLink field should be used to request the next
 * list of container registries.
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of container registries.
 */
export interface RegistryListResult {
  value?: Registry[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryPassword class.
 * @constructor
 * The login password for the container registry.
 *
 * @member {string} [name] The password name. Possible values include:
 * 'password', 'password2'
 * @member {string} [value] The password value.
 */
export interface RegistryPassword {
  name?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryListCredentialsResult class.
 * @constructor
 * The response from the ListCredentials operation.
 *
 * @member {string} [username] The username for a container registry.
 * @member {array} [passwords] The list of passwords for a container registry.
 */
export interface RegistryListCredentialsResult {
  username?: string;
  passwords?: RegistryPassword[];
}

/**
 * @class
 * Initializes a new instance of the RegenerateCredentialParameters class.
 * @constructor
 * The parameters used to regenerate the login credential.
 *
 * @member {string} name Specifies name of the password which should be
 * regenerated -- password or password2. Possible values include: 'password',
 * 'password2'
 */
export interface RegenerateCredentialParameters {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryListResult class.
 * @constructor
 * The result of a request to list container registries.
 *
 * @member {array} [value] The list of container registries. Since this list
 * may be incomplete, the nextLink field should be used to request the next
 * list of container registries.
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of container registries.
 */
export interface RegistryListResult {
  value?: Registry[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * The result of a request to list container registry operations.
 *
 * @member {array} [value] The list of container registry operations. Since
 * this list may be incomplete, the nextLink field should be used to request
 * the next list of operations.
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of container registry operations.
 */
export interface OperationListResult {
  value?: OperationDefinition[];
  nextLink?: string;
}


/**
 * @class
 * Initializes a new instance of the RegistryListResult class.
 * @constructor
 * The result of a request to list container registries.
 *
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of container registries.
 */
export interface RegistryListResult extends Array<Registry> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * The result of a request to list container registry operations.
 *
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of container registry operations.
 */
export interface OperationListResult extends Array<OperationDefinition> {
  nextLink?: string;
}
