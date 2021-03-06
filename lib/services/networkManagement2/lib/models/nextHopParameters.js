/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the NextHopParameters class.
 * @constructor
 * Parameters that define the source and destination endpoint.
 *
 * @member {string} targetResourceId The resource identifier of the target
 * resource against which the action is to be performed.
 *
 * @member {string} sourceIPAddress The source IP address.
 *
 * @member {string} destinationIPAddress The destination IP address.
 *
 * @member {string} [targetNicResourceId] The NIC ID. (If VM has multiple NICs
 * and IP forwarding is enabled on any of the nics, then this parameter must be
 * specified. Otherwise optional).
 *
 */
class NextHopParameters {
  constructor() {
  }

  /**
   * Defines the metadata of NextHopParameters
   *
   * @returns {object} metadata of NextHopParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NextHopParameters',
      type: {
        name: 'Composite',
        className: 'NextHopParameters',
        modelProperties: {
          targetResourceId: {
            required: true,
            serializedName: 'targetResourceId',
            type: {
              name: 'String'
            }
          },
          sourceIPAddress: {
            required: true,
            serializedName: 'sourceIPAddress',
            type: {
              name: 'String'
            }
          },
          destinationIPAddress: {
            required: true,
            serializedName: 'destinationIPAddress',
            type: {
              name: 'String'
            }
          },
          targetNicResourceId: {
            required: false,
            serializedName: 'targetNicResourceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NextHopParameters;
