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
 * Initializes a new instance of the InfoField class.
 * @constructor
 * Key-value pairs of instance details in the legacy format.
 *
 * @member {string} [project] Identifies the name of the instance provisioned
 * by the user.
 */
export interface InfoField {
  project?: string;
}

/**
 * @class
 * Initializes a new instance of the UsageAggregation class.
 * @constructor
 * Describes the usageAggregation.
 *
 * @member {string} [id] Unique Id for the usage aggregate.
 * @member {string} [name] Name of the usage aggregate.
 * @member {string} [type] Type of the resource being returned.
 * @member {uuid} [subscriptionId] The subscription identifier for the Azure
 * user.
 * @member {string} [meterId] Unique ID for the resource that was consumed (aka
 * ResourceID).
 * @member {date} [usageStartTime] UTC start time for the usage bucket to which
 * this usage aggregate belongs.
 * @member {date} [usageEndTime] UTC end time for the usage bucket to which
 * this usage aggregate belongs.
 * @member {object} [quantity] The amount of the resource consumption that
 * occurred in this time frame.
 * @member {string} [unit] The unit in which the usage for this resource is
 * being counted, e.g. Hours, GB.
 * @member {string} [meterName] Friendly name of the resource being consumed.
 * @member {string} [meterCategory] Category of the consumed resource.
 * @member {string} [meterSubCategory] Sub-category of the consumed resource.
 * @member {string} [meterRegion] Region of the meterId used for billing
 * purposes
 * @member {object} [infoFields] Key-value pairs of instance details (legacy
 * format).
 * @member {string} [infoFields.project] Identifies the name of the instance
 * provisioned by the user.
 * @member {string} [instanceData] Key-value pairs of instance details
 * represented as a string.
 */
export interface UsageAggregation {
  id?: string;
  name?: string;
  type?: string;
  subscriptionId?: string;
  meterId?: string;
  usageStartTime?: Date;
  usageEndTime?: Date;
  quantity?: any;
  unit?: string;
  meterName?: string;
  meterCategory?: string;
  meterSubCategory?: string;
  meterRegion?: string;
  infoFields?: InfoField;
  instanceData?: string;
}

/**
 * @class
 * Initializes a new instance of the UsageAggregationListResult class.
 * @constructor
 * The Get UsageAggregates operation response.
 *
 * @member {array} [value] Gets or sets details for the requested aggregation.
 * @member {string} [nextLink] Gets or sets the link to the next set of
 * results.
 */
export interface UsageAggregationListResult {
  value?: UsageAggregation[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the RateCardQueryParameters class.
 * @constructor
 * Parameters that are used in the odata $filter query parameter for providing
 * RateCard information.
 *
 * @member {string} offerDurableId The Offer ID parameter consists of the
 * 'MS-AZR-' prefix, plus the Offer ID number (e.g., MS-AZR-0026P). See
 * https://azure.microsoft.com/en-us/support/legal/offer-details/ for more
 * information on the list of available Offer IDs, country/region availability,
 * and billing currency.
 * @member {string} currency The currency in which the rates need to be
 * provided.
 * @member {string} locale The culture in which the resource metadata needs to
 * be localized.
 * @member {string} regionInfo 2 letter ISO code where the offer was purchased.
 */
export interface RateCardQueryParameters {
  offerDurableId: string;
  currency: string;
  locale: string;
  regionInfo: string;
}

/**
 * @class
 * Initializes a new instance of the OfferTermInfo class.
 * @constructor
 * Describes the offer term.
 *
 * @member {date} [effectiveDate] Indicates the date from which the offer term
 * is effective.
 * @member {string} name Polymorphic Discriminator
 */
export interface OfferTermInfo {
  effectiveDate?: Date;
  name: string;
}

/**
 * @class
 * Initializes a new instance of the MeterInfo class.
 * @constructor
 * Detailed information about the meter.
 *
 * @member {uuid} [meterId] The unique identifier of the resource.
 * @member {string} [meterName] The name of the meter, within the given meter
 * category
 * @member {string} [meterCategory] The category of the meter, e.g., 'Cloud
 * services', 'Networking', etc..
 * @member {string} [meterSubCategory] The subcategory of the meter, e.g., 'A6
 * Cloud services', 'ExpressRoute (IXP)', etc..
 * @member {string} [unit] The unit in which the meter consumption is charged,
 * e.g., 'Hours', 'GB', etc.
 * @member {array} [meterTags] Provides additional meter data. 'Third Party'
 * indicates a meter with no discount. Blanks indicate First Party.
 * @member {string} [meterRegion] The region in which the Azure service is
 * available.
 * @member {object} [meterRates] The list of key/value pairs for the meter
 * rates, in the format 'key':'value' where key = the meter quantity, and value
 * = the corresponding price
 * @member {date} [effectiveDate] Indicates the date from which the meter rate
 * is effective.
 * @member {number} [includedQuantity] The resource quantity that is included
 * in the offer at no cost. Consumption beyond this quantity will be charged.
 */
export interface MeterInfo {
  meterId?: string;
  meterName?: string;
  meterCategory?: string;
  meterSubCategory?: string;
  unit?: string;
  meterTags?: string[];
  meterRegion?: string;
  meterRates?: { [propertyName: string]: number };
  effectiveDate?: Date;
  includedQuantity?: number;
}

/**
 * @class
 * Initializes a new instance of the ResourceRateCardInfo class.
 * @constructor
 * Price and Metadata information for resources
 *
 * @member {string} [currency] The currency in which the rates are provided.
 * @member {string} [locale] The culture in which the resource information is
 * localized.
 * @member {boolean} [isTaxIncluded] All rates are pretax, so this will always
 * be returned as 'false'.
 * @member {array} [offerTerms] A list of offer terms.
 * @member {array} [meters] A list of meters.
 */
export interface ResourceRateCardInfo {
  currency?: string;
  locale?: string;
  isTaxIncluded?: boolean;
  offerTerms?: OfferTermInfo[];
  meters?: MeterInfo[];
}

/**
 * @class
 * Initializes a new instance of the MonetaryCredit class.
 * @constructor
 * Indicates that this is a monetary credit offer.
 *
 * @member {number} [credit] The amount of credit provided under the terms of
 * the given offer level.
 * @member {array} [excludedMeterIds] An array of meter ids that are excluded
 * from the given offer terms.
 */
export interface MonetaryCredit extends OfferTermInfo {
  credit?: number;
  excludedMeterIds?: string[];
}

/**
 * @class
 * Initializes a new instance of the MonetaryCommitment class.
 * @constructor
 * Indicates that a monetary commitment is required for this offer
 *
 * @member {object} [tieredDiscount] The list of key/value pairs for the tiered
 * meter rates, in the format 'key':'value' where key = price, and value = the
 * corresponding discount percentage. This field is used only by offer terms of
 * type 'Monetary Commitment'.
 * @member {array} [excludedMeterIds] An array of meter ids that are excluded
 * from the given offer terms.
 */
export interface MonetaryCommitment extends OfferTermInfo {
  tieredDiscount?: { [propertyName: string]: number };
  excludedMeterIds?: string[];
}

/**
 * @class
 * Initializes a new instance of the RecurringCharge class.
 * @constructor
 * Indicates a recurring charge is present for this offer.
 *
 * @member {number} [recurringCharge] The amount of recurring charge as per the
 * offer term.
 */
export interface RecurringCharge extends OfferTermInfo {
  recurringCharge?: number;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Describes the format of Error response.
 *
 * @member {string} [code] Error code
 * @member {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the UsageAggregationListResult class.
 * @constructor
 * The Get UsageAggregates operation response.
 *
 * @member {array} [value] Gets or sets details for the requested aggregation.
 * @member {string} [nextLink] Gets or sets the link to the next set of
 * results.
 */
export interface UsageAggregationListResult {
  value?: UsageAggregation[];
  nextLink?: string;
}


/**
 * @class
 * Initializes a new instance of the UsageAggregationListResult class.
 * @constructor
 * The Get UsageAggregates operation response.
 *
 * @member {string} [nextLink] Gets or sets the link to the next set of
 * results.
 */
export interface UsageAggregationListResult extends Array<UsageAggregation> {
  nextLink?: string;
}
