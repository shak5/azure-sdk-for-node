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
 * Initializes a new instance of the ARecord class.
 * @constructor
 * An A record.
 *
 * @member {string} [ipv4Address] The IPv4 address of this A record.
 */
export interface ARecord {
  ipv4Address?: string;
}

/**
 * @class
 * Initializes a new instance of the AaaaRecord class.
 * @constructor
 * An AAAA record.
 *
 * @member {string} [ipv6Address] The IPv6 address of this AAAA record.
 */
export interface AaaaRecord {
  ipv6Address?: string;
}

/**
 * @class
 * Initializes a new instance of the MxRecord class.
 * @constructor
 * An MX record.
 *
 * @member {number} [preference] The preference value for this MX record.
 * @member {string} [exchange] The domain name of the mail host for this MX
 * record.
 */
export interface MxRecord {
  preference?: number;
  exchange?: string;
}

/**
 * @class
 * Initializes a new instance of the NsRecord class.
 * @constructor
 * An NS record.
 *
 * @member {string} [nsdname] The name server name for this NS record.
 */
export interface NsRecord {
  nsdname?: string;
}

/**
 * @class
 * Initializes a new instance of the PtrRecord class.
 * @constructor
 * A PTR record.
 *
 * @member {string} [ptrdname] The PTR target domain name for this PTR record.
 */
export interface PtrRecord {
  ptrdname?: string;
}

/**
 * @class
 * Initializes a new instance of the SrvRecord class.
 * @constructor
 * An SRV record.
 *
 * @member {number} [priority] The priority value for this SRV record.
 * @member {number} [weight] The weight value for this SRV record.
 * @member {number} [port] The port value for this SRV record.
 * @member {string} [target] The target domain name for this SRV record.
 */
export interface SrvRecord {
  priority?: number;
  weight?: number;
  port?: number;
  target?: string;
}

/**
 * @class
 * Initializes a new instance of the TxtRecord class.
 * @constructor
 * A TXT record.
 *
 * @member {array} [value] The text value of this TXT record.
 */
export interface TxtRecord {
  value?: string[];
}

/**
 * @class
 * Initializes a new instance of the CnameRecord class.
 * @constructor
 * A CNAME record.
 *
 * @member {string} [cname] The canonical name for this CNAME record.
 */
export interface CnameRecord {
  cname?: string;
}

/**
 * @class
 * Initializes a new instance of the SoaRecord class.
 * @constructor
 * An SOA record.
 *
 * @member {string} [host] The domain name of the authoritative name server for
 * this SOA record.
 * @member {string} [email] The email contact for this SOA record.
 * @member {number} [serialNumber] The serial number for this SOA record.
 * @member {number} [refreshTime] The refresh value for this SOA record.
 * @member {number} [retryTime] The retry time for this SOA record.
 * @member {number} [expireTime] The expire time for this SOA record.
 * @member {number} [minimumTtl] The minimum value for this SOA record. By
 * convention this is used to determine the negative caching duration.
 */
export interface SoaRecord {
  host?: string;
  email?: string;
  serialNumber?: number;
  refreshTime?: number;
  retryTime?: number;
  expireTime?: number;
  minimumTtl?: number;
}

/**
 * @class
 * Initializes a new instance of the RecordSet class.
 * @constructor
 * Describes a DNS record set (a collection of DNS records with the same name
 * and type).
 *
 * @member {string} [id] The ID of the record set.
 * @member {string} [name] The name of the record set.
 * @member {string} [type] The type of the record set.
 * @member {string} [etag] The etag of the record set.
 * @member {object} [metadata] The metadata attached to the record set.
 * @member {number} [tTL] The TTL (time-to-live) of the records in the record
 * set.
 * @member {array} [aRecords] The list of A records in the record set.
 * @member {array} [aaaaRecords] The list of AAAA records in the record set.
 * @member {array} [mxRecords] The list of MX records in the record set.
 * @member {array} [nsRecords] The list of NS records in the record set.
 * @member {array} [ptrRecords] The list of PTR records in the record set.
 * @member {array} [srvRecords] The list of SRV records in the record set.
 * @member {array} [txtRecords] The list of TXT records in the record set.
 * @member {object} [cnameRecord] The CNAME record in the  record set.
 * @member {string} [cnameRecord.cname] The canonical name for this CNAME
 * record.
 * @member {object} [soaRecord] The SOA record in the record set.
 * @member {string} [soaRecord.host] The domain name of the authoritative name
 * server for this SOA record.
 * @member {string} [soaRecord.email] The email contact for this SOA record.
 * @member {number} [soaRecord.serialNumber] The serial number for this SOA
 * record.
 * @member {number} [soaRecord.refreshTime] The refresh value for this SOA
 * record.
 * @member {number} [soaRecord.retryTime] The retry time for this SOA record.
 * @member {number} [soaRecord.expireTime] The expire time for this SOA record.
 * @member {number} [soaRecord.minimumTtl] The minimum value for this SOA
 * record. By convention this is used to determine the negative caching
 * duration.
 */
export interface RecordSet {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  metadata?: { [propertyName: string]: string };
  tTL?: number;
  aRecords?: ARecord[];
  aaaaRecords?: AaaaRecord[];
  mxRecords?: MxRecord[];
  nsRecords?: NsRecord[];
  ptrRecords?: PtrRecord[];
  srvRecords?: SrvRecord[];
  txtRecords?: TxtRecord[];
  cnameRecord?: CnameRecord;
  soaRecord?: SoaRecord;
}

/**
 * @class
 * Initializes a new instance of the RecordSetUpdateParameters class.
 * @constructor
 * Parameters supplied to update a record set.
 *
 * @member {object} [recordSet] Specifies information about the record set
 * being updated.
 * @member {string} [recordSet.id] The ID of the record set.
 * @member {string} [recordSet.name] The name of the record set.
 * @member {string} [recordSet.type] The type of the record set.
 * @member {string} [recordSet.etag] The etag of the record set.
 * @member {object} [recordSet.metadata] The metadata attached to the record
 * set.
 * @member {number} [recordSet.tTL] The TTL (time-to-live) of the records in
 * the record set.
 * @member {array} [recordSet.aRecords] The list of A records in the record
 * set.
 * @member {array} [recordSet.aaaaRecords] The list of AAAA records in the
 * record set.
 * @member {array} [recordSet.mxRecords] The list of MX records in the record
 * set.
 * @member {array} [recordSet.nsRecords] The list of NS records in the record
 * set.
 * @member {array} [recordSet.ptrRecords] The list of PTR records in the record
 * set.
 * @member {array} [recordSet.srvRecords] The list of SRV records in the record
 * set.
 * @member {array} [recordSet.txtRecords] The list of TXT records in the record
 * set.
 * @member {object} [recordSet.cnameRecord] The CNAME record in the  record
 * set.
 * @member {string} [recordSet.cnameRecord.cname] The canonical name for this
 * CNAME record.
 * @member {object} [recordSet.soaRecord] The SOA record in the record set.
 * @member {string} [recordSet.soaRecord.host] The domain name of the
 * authoritative name server for this SOA record.
 * @member {string} [recordSet.soaRecord.email] The email contact for this SOA
 * record.
 * @member {number} [recordSet.soaRecord.serialNumber] The serial number for
 * this SOA record.
 * @member {number} [recordSet.soaRecord.refreshTime] The refresh value for
 * this SOA record.
 * @member {number} [recordSet.soaRecord.retryTime] The retry time for this SOA
 * record.
 * @member {number} [recordSet.soaRecord.expireTime] The expire time for this
 * SOA record.
 * @member {number} [recordSet.soaRecord.minimumTtl] The minimum value for this
 * SOA record. By convention this is used to determine the negative caching
 * duration.
 */
export interface RecordSetUpdateParameters {
  recordSet?: RecordSet;
}

/**
 * @class
 * Initializes a new instance of the RecordSetListResult class.
 * @constructor
 * The response to a record set List operation.
 *
 * @member {array} [value] Information about the record sets in the response.
 * @member {string} [nextLink] The continuation token for the next page of
 * results.
 */
export interface RecordSetListResult {
  value?: RecordSet[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource ID.
 * @member {string} [name] Resource name.
 * @member {string} [type] Resource type.
 * @member {string} location Resource location.
 * @member {object} [tags] Resource tags.
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
 * Initializes a new instance of the Zone class.
 * @constructor
 * Describes a DNS zone.
 *
 * @member {string} [etag] The etag of the zone.
 * @member {number} [maxNumberOfRecordSets] The maximum number of record sets
 * that can be created in this DNS zone.  This is a read-only property and any
 * attempt to set this value will be ignored.
 * @member {number} [numberOfRecordSets] The current number of record sets in
 * this DNS zone.  This is a read-only property and any attempt to set this
 * value will be ignored.
 * @member {array} [nameServers] The name servers for this DNS zone. This is a
 * read-only property and any attempt to set this value will be ignored.
 */
export interface Zone extends Resource {
  etag?: string;
  maxNumberOfRecordSets?: number;
  numberOfRecordSets?: number;
  readonly nameServers?: string[];
}

/**
 * @class
 * Initializes a new instance of the ZoneDeleteResult class.
 * @constructor
 * The response to a Zone Delete operation.
 *
 * @member {string} [azureAsyncOperation] Users can perform a Get on
 * Azure-AsyncOperation to get the status of their delete Zone operations.
 * @member {string} [status] Possible values include: 'InProgress',
 * 'Succeeded', 'Failed'
 * @member {string} [statusCode] Possible values include: 'Continue',
 * 'SwitchingProtocols', 'OK', 'Created', 'Accepted',
 * 'NonAuthoritativeInformation', 'NoContent', 'ResetContent',
 * 'PartialContent', 'MultipleChoices', 'Ambiguous', 'MovedPermanently',
 * 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod', 'NotModified',
 * 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb', 'BadRequest',
 * 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound',
 * 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired',
 * 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired',
 * 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong',
 * 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable', 'ExpectationFailed',
 * 'UpgradeRequired', 'InternalServerError', 'NotImplemented', 'BadGateway',
 * 'ServiceUnavailable', 'GatewayTimeout', 'HttpVersionNotSupported'
 * @member {string} [requestId]
 */
export interface ZoneDeleteResult {
  azureAsyncOperation?: string;
  status?: string;
  statusCode?: string;
  requestId?: string;
}

/**
 * @class
 * Initializes a new instance of the ZoneListResult class.
 * @constructor
 * The response to a Zone List or ListAll operation.
 *
 * @member {array} [value] Information about the DNS zones.
 * @member {string} [nextLink] The continuation token for the next page of
 * results.
 */
export interface ZoneListResult {
  value?: Zone[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the RecordSetListResult class.
 * @constructor
 * The response to a record set List operation.
 *
 * @member {array} [value] Information about the record sets in the response.
 * @member {string} [nextLink] The continuation token for the next page of
 * results.
 */
export interface RecordSetListResult {
  value?: RecordSet[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ZoneListResult class.
 * @constructor
 * The response to a Zone List or ListAll operation.
 *
 * @member {array} [value] Information about the DNS zones.
 * @member {string} [nextLink] The continuation token for the next page of
 * results.
 */
export interface ZoneListResult {
  value?: Zone[];
  nextLink?: string;
}


/**
 * @class
 * Initializes a new instance of the RecordSetListResult class.
 * @constructor
 * The response to a record set List operation.
 *
 * @member {string} [nextLink] The continuation token for the next page of
 * results.
 */
export interface RecordSetListResult extends Array<RecordSet> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ZoneListResult class.
 * @constructor
 * The response to a Zone List or ListAll operation.
 *
 * @member {string} [nextLink] The continuation token for the next page of
 * results.
 */
export interface ZoneListResult extends Array<Zone> {
  nextLink?: string;
}
