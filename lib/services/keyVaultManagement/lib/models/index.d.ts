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
 * Initializes a new instance of the Sku class.
 * @constructor
 * SKU details
 *
 * @member {string} name SKU name to specify whether the key vault is a
 * standard vault or a premium vault. Possible values include: 'standard',
 * 'premium'
 */
export interface Sku {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the Permissions class.
 * @constructor
 * Permissions the identity has for keys, secrets and certificates.
 *
 * @member {array} [keys] Permissions to keys
 * @member {array} [secrets] Permissions to secrets
 * @member {array} [certificates] Permissions to certificates
 */
export interface Permissions {
  keys?: string[];
  secrets?: string[];
  certificates?: string[];
}

/**
 * @class
 * Initializes a new instance of the AccessPolicyEntry class.
 * @constructor
 * An identity that have access to the key vault. All identities in the array
 * must use the same tenant ID as the key vault's tenant ID.
 *
 * @member {uuid} tenantId The Azure Active Directory tenant ID that should be
 * used for authenticating requests to the key vault.
 * @member {string} objectId The object ID of a user, service principal or
 * security group in the Azure Active Directory tenant for the vault. The
 * object ID must be unique for the list of access policies.
 * @member {uuid} [applicationId] Application ID of the client making request
 * on behalf of a principal
 * @member {object} permissions Permissions the identity has for keys, secrets
 * and certificates.
 * @member {array} [permissions.keys] Permissions to keys
 * @member {array} [permissions.secrets] Permissions to secrets
 * @member {array} [permissions.certificates] Permissions to certificates
 */
export interface AccessPolicyEntry {
  tenantId: string;
  objectId: string;
  applicationId?: string;
  permissions: Permissions;
}

/**
 * @class
 * Initializes a new instance of the VaultProperties class.
 * @constructor
 * Properties of the vault
 *
 * @member {string} [vaultUri] The URI of the vault for performing operations
 * on keys and secrets.
 * @member {uuid} tenantId The Azure Active Directory tenant ID that should be
 * used for authenticating requests to the key vault.
 * @member {object} sku SKU details
 * @member {string} [sku.name] SKU name to specify whether the key vault is a
 * standard vault or a premium vault. Possible values include: 'standard',
 * 'premium'
 * @member {array} accessPolicies An array of 0 to 16 identities that have
 * access to the key vault. All identities in the array must use the same
 * tenant ID as the key vault's tenant ID.
 * @member {boolean} [enabledForDeployment] Property to specify whether Azure
 * Virtual Machines are permitted to retrieve certificates stored as secrets
 * from the key vault.
 * @member {boolean} [enabledForDiskEncryption] Property to specify whether
 * Azure Disk Encryption is permitted to retrieve secrets from the vault and
 * unwrap keys.
 * @member {boolean} [enabledForTemplateDeployment] Property to specify whether
 * Azure Resource Manager is permitted to retrieve secrets from the key vault.
 * @member {boolean} [enableSoftDelete] Property to specify whether the 'soft
 * delete' functionality is enabled for this key vault.
 */
export interface VaultProperties {
  vaultUri?: string;
  tenantId: string;
  sku: Sku;
  accessPolicies: AccessPolicyEntry[];
  enabledForDeployment?: boolean;
  enabledForDiskEncryption?: boolean;
  enabledForTemplateDeployment?: boolean;
  enableSoftDelete?: boolean;
}

/**
 * @class
 * Initializes a new instance of the VaultCreateOrUpdateParameters class.
 * @constructor
 * Parameters for creating or updating a vault
 *
 * @member {string} location The supported Azure location where the key vault
 * should be created.
 * @member {object} [tags] The tags that will be assigned to the key vault.
 * @member {object} properties Properties of the vault
 * @member {string} [properties.vaultUri] The URI of the vault for performing
 * operations on keys and secrets.
 * @member {uuid} [properties.tenantId] The Azure Active Directory tenant ID
 * that should be used for authenticating requests to the key vault.
 * @member {object} [properties.sku] SKU details
 * @member {string} [properties.sku.name] SKU name to specify whether the key
 * vault is a standard vault or a premium vault. Possible values include:
 * 'standard', 'premium'
 * @member {array} [properties.accessPolicies] An array of 0 to 16 identities
 * that have access to the key vault. All identities in the array must use the
 * same tenant ID as the key vault's tenant ID.
 * @member {boolean} [properties.enabledForDeployment] Property to specify
 * whether Azure Virtual Machines are permitted to retrieve certificates stored
 * as secrets from the key vault.
 * @member {boolean} [properties.enabledForDiskEncryption] Property to specify
 * whether Azure Disk Encryption is permitted to retrieve secrets from the
 * vault and unwrap keys.
 * @member {boolean} [properties.enabledForTemplateDeployment] Property to
 * specify whether Azure Resource Manager is permitted to retrieve secrets from
 * the key vault.
 * @member {boolean} [properties.enableSoftDelete] Property to specify whether
 * the 'soft delete' functionality is enabled for this key vault.
 */
export interface VaultCreateOrUpdateParameters extends BaseResource {
  location: string;
  tags?: { [propertyName: string]: string };
  properties: VaultProperties;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Key Vault resource
 *
 * @member {string} [id] The Azure Resource Manager resource ID for the key
 * vault.
 * @member {string} name The name of the key vault.
 * @member {string} [type] The resource type of the key vault.
 * @member {string} location The supported Azure location where the key vault
 * should be created.
 * @member {object} [tags] The tags that will be assigned to the key vault.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  name: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Vault class.
 * @constructor
 * Resource information with extended details.
 *
 * @member {object} properties Properties of the vault
 * @member {string} [properties.vaultUri] The URI of the vault for performing
 * operations on keys and secrets.
 * @member {uuid} [properties.tenantId] The Azure Active Directory tenant ID
 * that should be used for authenticating requests to the key vault.
 * @member {object} [properties.sku] SKU details
 * @member {string} [properties.sku.name] SKU name to specify whether the key
 * vault is a standard vault or a premium vault. Possible values include:
 * 'standard', 'premium'
 * @member {array} [properties.accessPolicies] An array of 0 to 16 identities
 * that have access to the key vault. All identities in the array must use the
 * same tenant ID as the key vault's tenant ID.
 * @member {boolean} [properties.enabledForDeployment] Property to specify
 * whether Azure Virtual Machines are permitted to retrieve certificates stored
 * as secrets from the key vault.
 * @member {boolean} [properties.enabledForDiskEncryption] Property to specify
 * whether Azure Disk Encryption is permitted to retrieve secrets from the
 * vault and unwrap keys.
 * @member {boolean} [properties.enabledForTemplateDeployment] Property to
 * specify whether Azure Resource Manager is permitted to retrieve secrets from
 * the key vault.
 * @member {boolean} [properties.enableSoftDelete] Property to specify whether
 * the 'soft delete' functionality is enabled for this key vault.
 */
export interface Vault extends Resource {
  properties: VaultProperties;
}

/**
 * @class
 * Initializes a new instance of the VaultListResult class.
 * @constructor
 * List of vaults
 *
 * @member {array} [value] Gets or sets the list of vaults.
 * @member {string} [nextLink] Gets or sets the URL to get the next set of
 * vaults.
 */
export interface VaultListResult {
  value?: Vault[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceListResult class.
 * @constructor
 * List of vault resources.
 *
 * @member {array} [value] Gets the list of vault resources.
 * @member {string} [nextLink] Gets the URL to get the next set of vault
 * resources.
 */
export interface ResourceListResult {
  value?: Resource[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the VaultListResult class.
 * @constructor
 * List of vaults
 *
 * @member {array} [value] Gets or sets the list of vaults.
 * @member {string} [nextLink] Gets or sets the URL to get the next set of
 * vaults.
 */
export interface VaultListResult {
  value?: Vault[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceListResult class.
 * @constructor
 * List of vault resources.
 *
 * @member {array} [value] Gets the list of vault resources.
 * @member {string} [nextLink] Gets the URL to get the next set of vault
 * resources.
 */
export interface ResourceListResult {
  value?: Resource[];
  nextLink?: string;
}


/**
 * @class
 * Initializes a new instance of the VaultListResult class.
 * @constructor
 * List of vaults
 *
 * @member {string} [nextLink] Gets or sets the URL to get the next set of
 * vaults.
 */
export interface VaultListResult extends Array<Vault> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceListResult class.
 * @constructor
 * List of vault resources.
 *
 * @member {string} [nextLink] Gets the URL to get the next set of vault
 * resources.
 */
export interface ResourceListResult extends Array<Resource> {
  nextLink?: string;
}
