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
 * Initializes a new instance of the Resource class.
 * @constructor
 * Resource model definition.
 *
 * @member {string} [id] Resource identifier.
 * @member {string} [type] Resource type.
 * @member {string} [name] Resource name.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly type?: string;
  readonly name?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceReference class.
 * @constructor
 * Represents a reference to another resource.
 *
 * @member {string} id Resource URI.
 * @member {string} [type] Resource type qualifier.
 * @member {string} [name] Resource name.
 * @member {string} kind Polymorphic Discriminator
 */
export interface ResourceReference {
  id: string;
  readonly type?: string;
  readonly name?: string;
  kind: string;
}

/**
 * @class
 * Initializes a new instance of the MachineReference class.
 * @constructor
 * Reference to a machine.
 *
 */
export interface MachineReference extends ResourceReference {
}

/**
 * @class
 * Initializes a new instance of the ProcessReference class.
 * @constructor
 * Reference to a process.
 *
 * @member {object} [machine] Machine hosting the process.
 */
export interface ProcessReference extends ResourceReference {
  readonly machine?: MachineReference;
}

/**
 * @class
 * Initializes a new instance of the PortReference class.
 * @constructor
 * Reference to a port.
 *
 * @member {object} [machine] Machine hosting the port.
 * @member {string} [ipAddress] IP address of the port.
 * @member {number} [portNumber] Port number.
 */
export interface PortReference extends ResourceReference {
  readonly machine?: MachineReference;
  readonly ipAddress?: string;
  portNumber?: number;
}

/**
 * @class
 * Initializes a new instance of the MachineReferenceWithHints class.
 * @constructor
 * A machine reference with a hint of the machine's name and operating system.
 *
 * @member {string} [displayNameHint] Last known display name.
 * @member {string} [osFamilyHint] Last known operating system family. Possible
 * values include: 'unknown', 'windows', 'linux', 'solaris', 'aix'
 */
export interface MachineReferenceWithHints extends ResourceReference {
  readonly displayNameHint?: string;
  readonly osFamilyHint?: string;
}

/**
 * @class
 * Initializes a new instance of the CoreResource class.
 * @constructor
 * Marker resource for the core Service Map resources
 *
 * @member {string} [etag] Resource ETAG.
 * @member {string} kind Polymorphic Discriminator
 */
export interface CoreResource extends Resource {
  etag?: string;
  kind: string;
}

/**
 * @class
 * Initializes a new instance of the Timezone class.
 * @constructor
 * Describes a timezone.
 *
 * @member {string} [fullName] Timezone full name.
 */
export interface Timezone {
  fullName?: string;
}

/**
 * @class
 * Initializes a new instance of the AgentConfiguration class.
 * @constructor
 * Describes the configuration of the Dependency Agent installed on a machine.
 *
 * @member {string} agentId Health Service Agent unique identifier.
 * @member {string} [dependencyAgentId] Dependency Agent unique identifier.
 * @member {string} [dependencyAgentVersion] Dependency Agent version number.
 * @member {string} [dependencyAgentRevision] Dependency Agent revision number.
 * @member {string} [rebootStatus] Specifies whether the machine has been
 * rebooted since the Dependency Agent installation. Possible values include:
 * 'unknown', 'rebooted', 'notRebooted'
 * @member {number} [clockGranularity] Machine clock granularity in
 * milliseconds.
 */
export interface AgentConfiguration {
  agentId: string;
  dependencyAgentId?: string;
  dependencyAgentVersion?: string;
  dependencyAgentRevision?: string;
  rebootStatus?: string;
  clockGranularity?: number;
}

/**
 * @class
 * Initializes a new instance of the MachineResourcesConfiguration class.
 * @constructor
 * Describes the resources of a machine.
 *
 * @member {number} [physicalMemory] Physical memory in megabytes (MB).
 * @member {number} [cpus] Number of CPUs.
 * @member {number} [cpuSpeed] CPU speed in megahertz (Mhz).
 * @member {string} [cpuSpeedAccuracy] Describes the accuracy of the cpuSpeed
 * field. Possible values include: 'actual', 'estimated'
 */
export interface MachineResourcesConfiguration {
  physicalMemory?: number;
  cpus?: number;
  cpuSpeed?: number;
  cpuSpeedAccuracy?: string;
}

/**
 * @class
 * Initializes a new instance of the Ipv4NetworkInterface class.
 * @constructor
 * Describes an IPv4 network interface.
 *
 * @member {string} ipAddress IPv4 address.
 * @member {string} [subnetMask] IPv4 subnet mask. Default value:
 * '255.255.255.255' .
 */
export interface Ipv4NetworkInterface {
  ipAddress: string;
  subnetMask?: string;
}

/**
 * @class
 * Initializes a new instance of the Ipv6NetworkInterface class.
 * @constructor
 * Describes an IPv6 network interface.
 *
 * @member {string} ipAddress IPv6 address.
 */
export interface Ipv6NetworkInterface {
  ipAddress: string;
}

/**
 * @class
 * Initializes a new instance of the NetworkConfiguration class.
 * @constructor
 * Describes the network configuration of a machine.
 *
 * @member {array} [ipv4Interfaces] IPv4 interfaces.
 * @member {array} [ipv6Interfaces] IPv6 interfaces.
 * @member {array} [defaultIpv4Gateways] Default IPv4 gateways.
 * @member {array} [macAddresses] MAC addresses of all active network
 * interfaces.
 * @member {array} [dnsNames] DNS names associated with the machine.
 */
export interface NetworkConfiguration {
  ipv4Interfaces?: Ipv4NetworkInterface[];
  ipv6Interfaces?: Ipv6NetworkInterface[];
  defaultIpv4Gateways?: string[];
  macAddresses?: string[];
  dnsNames?: string[];
}

/**
 * @class
 * Initializes a new instance of the OperatingSystemConfiguration class.
 * @constructor
 * Describes the configuration of the operating system of a machine.
 *
 * @member {string} family Windows, Linux, etc. Possible values include:
 * 'unknown', 'windows', 'linux', 'solaris', 'aix'
 * @member {string} fullName Operating system full name.
 * @member {string} bitness Operating system bitness (32-bit or 64-bit).
 * Possible values include: '32bit', '64bit'
 */
export interface OperatingSystemConfiguration {
  family: string;
  fullName: string;
  bitness: string;
}

/**
 * @class
 * Initializes a new instance of the VirtualMachineConfiguration class.
 * @constructor
 * Describes the virtualizaton-related configuration of a machine.
 *
 * @member {string} [virtualMachineType] Specifies the virtualization
 * technology used by the machine (hyperv, vmware, etc.). Possible values
 * include: 'unknown', 'hyperv', 'ldom', 'lpar', 'vmware', 'virtualPc', 'xen'
 * @member {string} [nativeMachineId] The unique identifier of the virtual
 * machine as reported by the underlying virtualization sytem.
 * @member {string} [virtualMachineName] The Name of the virtual machine.
 * @member {string} [nativeHostMachineId] The unique identifier of the host of
 * this virtual machine as reported by the underlying virtualization system.
 */
export interface VirtualMachineConfiguration {
  virtualMachineType?: string;
  nativeMachineId?: string;
  virtualMachineName?: string;
  nativeHostMachineId?: string;
}

/**
 * @class
 * Initializes a new instance of the HypervisorConfiguration class.
 * @constructor
 * Describes the hypervisor configuration of a machine.
 *
 * @member {string} [hypervisorType] Specifies the virtualization technology
 * used by the hypervisor (hyperv, vmware, etc.). Possible values include:
 * 'unknown', 'hyperv'
 * @member {string} [nativeHostMachineId] The unique identifier of the
 * hypervisor machine as reported by the underlying virtualization system.
 */
export interface HypervisorConfiguration {
  hypervisorType?: string;
  nativeHostMachineId?: string;
}

/**
 * @class
 * Initializes a new instance of the Machine class.
 * @constructor
 * A machine resource represents a discovered computer system. It can be
 * *monitored*, i.e., a Dependency Agent is running on it, or *discovered*,
 * i.e., its existence was inferred by observing the data stream from monitored
 * machines. As machines change, prior versions of the machine resource are
 * preserved and available for access. A machine is live during an interval of
 * time, if either its Dependency Agent has reported data during (parts) of
 * that interval, or a Dependency agent running on other machines has reported
 * activity associated with the machine.
 *
 * @member {date} [timestamp] UTC date and time when this resource was updated
 * in the system.
 * @member {string} [monitoringState] Specifies whether the machine is actively
 * monitored or discovered. Possible values include: 'monitored', 'discovered'
 * @member {string} [virtualizationState] Specifies whether the machine is
 * virtualized. Possible values include: 'unknown', 'physical', 'virtual',
 * 'hypervisor'
 * @member {string} [displayName] Name to use for display purposes
 * @member {string} [computerName] Name of the machine, e.g., server
 * @member {string} [fullyQualifiedDomainName] Fully-qualified name of the
 * machine, e.g., server.company.com
 * @member {date} [bootTime] UTC date and time when the machine last booted
 * @member {object} [timezone] Timezone of the machine.
 * @member {string} [timezone.fullName] Timezone full name.
 * @member {object} [agent] Dependency Agent configuration.
 * @member {string} [agent.agentId] Health Service Agent unique identifier.
 * @member {string} [agent.dependencyAgentId] Dependency Agent unique
 * identifier.
 * @member {string} [agent.dependencyAgentVersion] Dependency Agent version
 * number.
 * @member {string} [agent.dependencyAgentRevision] Dependency Agent revision
 * number.
 * @member {string} [agent.rebootStatus] Specifies whether the machine has been
 * rebooted since the Dependency Agent installation. Possible values include:
 * 'unknown', 'rebooted', 'notRebooted'
 * @member {number} [agent.clockGranularity] Machine clock granularity in
 * milliseconds.
 * @member {object} [resources] Machine resources (memory, cpu, etc.).
 * @member {number} [resources.physicalMemory] Physical memory in megabytes
 * (MB).
 * @member {number} [resources.cpus] Number of CPUs.
 * @member {number} [resources.cpuSpeed] CPU speed in megahertz (Mhz).
 * @member {string} [resources.cpuSpeedAccuracy] Describes the accuracy of the
 * cpuSpeed field. Possible values include: 'actual', 'estimated'
 * @member {object} [networking] Network configuration (ips, gateways, dns,
 * etc.)
 * @member {array} [networking.ipv4Interfaces] IPv4 interfaces.
 * @member {array} [networking.ipv6Interfaces] IPv6 interfaces.
 * @member {array} [networking.defaultIpv4Gateways] Default IPv4 gateways.
 * @member {array} [networking.macAddresses] MAC addresses of all active
 * network interfaces.
 * @member {array} [networking.dnsNames] DNS names associated with the machine.
 * @member {object} [operatingSystem] Operating system information.
 * @member {string} [operatingSystem.family] Windows, Linux, etc. Possible
 * values include: 'unknown', 'windows', 'linux', 'solaris', 'aix'
 * @member {string} [operatingSystem.fullName] Operating system full name.
 * @member {string} [operatingSystem.bitness] Operating system bitness (32-bit
 * or 64-bit). Possible values include: '32bit', '64bit'
 * @member {object} [virtualMachine] Virtualization-related configuration.
 * Present only when `virtualizationState` is `virtual`.
 * @member {string} [virtualMachine.virtualMachineType] Specifies the
 * virtualization technology used by the machine (hyperv, vmware, etc.).
 * Possible values include: 'unknown', 'hyperv', 'ldom', 'lpar', 'vmware',
 * 'virtualPc', 'xen'
 * @member {string} [virtualMachine.nativeMachineId] The unique identifier of
 * the virtual machine as reported by the underlying virtualization sytem.
 * @member {string} [virtualMachine.virtualMachineName] The Name of the virtual
 * machine.
 * @member {string} [virtualMachine.nativeHostMachineId] The unique identifier
 * of the host of this virtual machine as reported by the underlying
 * virtualization system.
 * @member {object} [hypervisor] Hypervisor-related configuration. Present only
 * when 'virtualizationState' is `hypervisor`.
 * @member {string} [hypervisor.hypervisorType] Specifies the virtualization
 * technology used by the hypervisor (hyperv, vmware, etc.). Possible values
 * include: 'unknown', 'hyperv'
 * @member {string} [hypervisor.nativeHostMachineId] The unique identifier of
 * the hypervisor machine as reported by the underlying virtualization system.
 */
export interface Machine extends CoreResource {
  timestamp?: Date;
  monitoringState?: string;
  virtualizationState?: string;
  displayName?: string;
  computerName?: string;
  fullyQualifiedDomainName?: string;
  bootTime?: Date;
  timezone?: Timezone;
  agent?: AgentConfiguration;
  resources?: MachineResourcesConfiguration;
  networking?: NetworkConfiguration;
  operatingSystem?: OperatingSystemConfiguration;
  virtualMachine?: VirtualMachineConfiguration;
  hypervisor?: HypervisorConfiguration;
}

/**
 * @class
 * Initializes a new instance of the ProcessDetails class.
 * @constructor
 * Describes process metadata.
 *
 * @member {string} [persistentKey] A unique indentifier for a process,
 * generally resilient to process restart, computed by Service Map.
 * @member {number} [poolId] Represents the identity of the process pool
 * assigned to the process by Dependency Agent.
 * @member {number} [firstPid] The Operating System Process Idendifier (PID) of
 * the first process in this process pool.
 * @member {string} [description] Process description.
 * @member {string} [companyName] Name of company that created the process
 * executable.
 * @member {string} [internalName] Internal process name.
 * @member {string} [productName] Product name.
 * @member {string} [productVersion] Product version.
 * @member {string} [fileVersion] File version.
 * @member {string} [commandLine] Process command line.
 * @member {string} [executablePath] Process executable path.
 * @member {string} [workingDirectory] Process workingDirectory.
 */
export interface ProcessDetails {
  persistentKey?: string;
  poolId?: number;
  firstPid?: number;
  description?: string;
  companyName?: string;
  internalName?: string;
  productName?: string;
  productVersion?: string;
  fileVersion?: string;
  commandLine?: string;
  executablePath?: string;
  workingDirectory?: string;
}

/**
 * @class
 * Initializes a new instance of the ProcessUser class.
 * @constructor
 * Describes the user under which a process is running.
 *
 * @member {string} [userName] User name under which the process is running.
 * @member {string} [userDomain] Domain name for the user.
 */
export interface ProcessUser {
  userName?: string;
  userDomain?: string;
}

/**
 * @class
 * Initializes a new instance of the Process class.
 * @constructor
 * A process resource represents a process running on a machine. The process
 * may be actively *monitored*, i.e., a Dependency Agent is running on its
 * machine, or *discovered*, i.e., its existence was inferred by observing the
 * data stream from monitored machines. A process resource represents a pool of
 * actual operating system resources that share command lines and metadata. As
 * the process pool evolves over time, prior versions of the process resource
 * are preserved and available for access. A process is live during an interval
 * of time, if that process is executing during (parts) of that interval
 *
 * @member {date} [timestamp] UTC date and time when this process resource was
 * updated in the system
 * @member {string} [monitoringState] Specifies whether the process is actively
 * monitored or discovered. Possible values include: 'monitored', 'discovered'
 * @member {object} [machine] Machine hosting this process.
 * @member {string} [machine.id] Resource URI.
 * @member {string} [machine.type] Resource type qualifier.
 * @member {string} [machine.name] Resource name.
 * @member {string} [machine.kind] Polymorphic Discriminator
 * @member {string} [executableName] The name of the process executable
 * @member {string} [displayName] Name to use for display purposes
 * @member {date} [startTime] UTC date and time when the process started
 * @member {string} [role] The inferred role of this process based on its name,
 * command line, etc. Possible values include: 'webServer', 'appServer',
 * 'databaseServer', 'ldapServer', 'smbServer'
 * @member {object} [details] Process metadata (command line, product name,
 * etc.).
 * @member {string} [details.persistentKey] A unique indentifier for a process,
 * generally resilient to process restart, computed by Service Map.
 * @member {number} [details.poolId] Represents the identity of the process
 * pool assigned to the process by Dependency Agent.
 * @member {number} [details.firstPid] The Operating System Process Idendifier
 * (PID) of the first process in this process pool.
 * @member {string} [details.description] Process description.
 * @member {string} [details.companyName] Name of company that created the
 * process executable.
 * @member {string} [details.internalName] Internal process name.
 * @member {string} [details.productName] Product name.
 * @member {string} [details.productVersion] Product version.
 * @member {string} [details.fileVersion] File version.
 * @member {string} [details.commandLine] Process command line.
 * @member {string} [details.executablePath] Process executable path.
 * @member {string} [details.workingDirectory] Process workingDirectory.
 * @member {object} [user] Information about the account under which the
 * process is executing.
 * @member {string} [user.userName] User name under which the process is
 * running.
 * @member {string} [user.userDomain] Domain name for the user.
 * @member {object} [clientOf] Present only for a discovered process acting as
 * a client of a monitored process/machine/port. References the monitored
 * process/machine/port that this process is a client of.
 * @member {string} [clientOf.id] Resource URI.
 * @member {string} [clientOf.type] Resource type qualifier.
 * @member {string} [clientOf.name] Resource name.
 * @member {string} [clientOf.kind] Polymorphic Discriminator
 * @member {object} [acceptorOf] Present only for a discovered process acting
 * as a server. References the port on which the discovered process is
 * accepting.
 * @member {string} [acceptorOf.id] Resource URI.
 * @member {string} [acceptorOf.type] Resource type qualifier.
 * @member {string} [acceptorOf.name] Resource name.
 * @member {string} [acceptorOf.kind] Polymorphic Discriminator
 */
export interface Process extends CoreResource {
  timestamp?: Date;
  monitoringState?: string;
  machine?: ResourceReference;
  executableName?: string;
  displayName?: string;
  startTime?: Date;
  role?: string;
  details?: ProcessDetails;
  user?: ProcessUser;
  clientOf?: ResourceReference;
  acceptorOf?: ResourceReference;
}

/**
 * @class
 * Initializes a new instance of the Port class.
 * @constructor
 * A port resource represents a server port on a machine. The port may be
 * actively *monitored*, i.e., a Dependency Agent is running on its machine, or
 * *discovered*, i.e., its existence was inferred by observing the data stream
 * from monitored machines. A port is live during an interval of time, if that
 * port had associated activity during (parts) of that interval.
 *
 * @member {string} [monitoringState] Specifies whether the port is actively
 * monitored or discovered. Possible values include: 'monitored', 'discovered'
 * @member {object} [machine] Machine hosting this port.
 * @member {string} [machine.id] Resource URI.
 * @member {string} [machine.type] Resource type qualifier.
 * @member {string} [machine.name] Resource name.
 * @member {string} [machine.kind] Polymorphic Discriminator
 * @member {string} [displayName] Name to use for display purposes.
 * @member {string} [ipAddress] IP address associated with the port. At present
 * only IPv4 addresses are supported.
 * @member {number} [portNumber] Port number.
 */
export interface Port extends CoreResource {
  monitoringState?: string;
  machine?: ResourceReference;
  displayName?: string;
  ipAddress?: string;
  portNumber?: number;
}

/**
 * @class
 * Initializes a new instance of the ClientGroup class.
 * @constructor
 * Represents a collection of clients of a resource. A client group can
 * represent the clients of a port, process, or a machine.
 *
 * @member {object} [clientsOf] Reference to the resource whose clients are
 * represented by this group.
 * @member {string} [clientsOf.id] Resource URI.
 * @member {string} [clientsOf.type] Resource type qualifier.
 * @member {string} [clientsOf.name] Resource name.
 * @member {string} [clientsOf.kind] Polymorphic Discriminator
 */
export interface ClientGroup extends CoreResource {
  clientsOf?: ResourceReference;
}

/**
 * @class
 * Initializes a new instance of the ClientGroupMember class.
 * @constructor
 * Represents a member of a client group
 *
 * @member {string} [ipAddress] IP address.
 * @member {object} [port] Port into which this client connected
 * @member {object} [port.machine] Machine hosting the port.
 * @member {string} [port.ipAddress] IP address of the port.
 * @member {number} [port.portNumber] Port number.
 * @member {array} [processes] Processes accepting on the above port that
 * received connections from this client.
 */
export interface ClientGroupMember extends Resource {
  ipAddress?: string;
  port?: PortReference;
  processes?: ProcessReference[];
}

/**
 * @class
 * Initializes a new instance of the MachineGroup class.
 * @constructor
 * A user-defined logical grouping of machines.
 *
 * @member {string} [displayName] User defined name for the group
 * @member {array} [machines] References of the machines in this group. The
 * hints within each reference do not represent the current value of  the
 * corresponding fields. They are a snapshot created during the last time the
 * machine group was updated.
 */
export interface MachineGroup extends CoreResource {
  displayName?: string;
  machines?: MachineReferenceWithHints[];
}

/**
 * @class
 * Initializes a new instance of the Summary class.
 * @constructor
 * Base for all resource summaries.
 *
 */
export interface Summary extends Resource {
}

/**
 * @class
 * Initializes a new instance of the MachineCountsByOperatingSystem class.
 * @constructor
 * Machines by operating system.
 *
 * @member {number} windows Number of live Windows machines.
 * @member {number} linux Number of live Linux machines.
 */
export interface MachineCountsByOperatingSystem {
  windows: number;
  linux: number;
}

/**
 * @class
 * Initializes a new instance of the MachinesSummary class.
 * @constructor
 * A summary of the machines in the workspace.
 *
 * @member {date} startTime Summary interval start time.
 * @member {date} endTime Summary interval end time.
 * @member {number} total Total number of machines.
 * @member {number} live Number of live machines.
 * @member {object} os Machine counts by operating system.
 * @member {number} [os.windows] Number of live Windows machines.
 * @member {number} [os.linux] Number of live Linux machines.
 */
export interface MachinesSummary extends Summary {
  startTime: Date;
  endTime: Date;
  total: number;
  live: number;
  os: MachineCountsByOperatingSystem;
}

/**
 * @class
 * Initializes a new instance of the Relationship class.
 * @constructor
 * A typed relationship between two entities.
 *
 * @member {string} kind Polymorphic Discriminator
 */
export interface Relationship extends Resource {
  kind: string;
}

/**
 * @class
 * Initializes a new instance of the Connection class.
 * @constructor
 * A network connection.
 *
 * @member {object} source Source resource of the relationship.
 * @member {string} [source.id] Resource URI.
 * @member {string} [source.type] Resource type qualifier.
 * @member {string} [source.name] Resource name.
 * @member {string} [source.kind] Polymorphic Discriminator
 * @member {object} destination Destination resource of the relationship.
 * @member {string} [destination.id] Resource URI.
 * @member {string} [destination.type] Resource type qualifier.
 * @member {string} [destination.name] Resource name.
 * @member {string} [destination.kind] Polymorphic Discriminator
 * @member {date} [startTime] Relationship start time.
 * @member {date} [endTime] Relationship end time.
 * @member {object} [serverPort] Reference to the server port via which this
 * connection has been established.
 * @member {object} [serverPort.machine] Machine hosting the port.
 * @member {string} [serverPort.ipAddress] IP address of the port.
 * @member {number} [serverPort.portNumber] Port number.
 * @member {string} [failureState] Specifies whether there are only successful,
 * failed or a mixture of both connections represented by this resource.
 * Possible values include: 'ok', 'failed', 'mixed'
 */
export interface Connection extends Relationship {
  source: ResourceReference;
  destination: ResourceReference;
  startTime?: Date;
  endTime?: Date;
  serverPort?: PortReference;
  failureState?: string;
}

/**
 * @class
 * Initializes a new instance of the Acceptor class.
 * @constructor
 * A process accepting on a port.
 *
 * @member {object} source Port being accepted.
 * @member {object} [source.machine] Machine hosting the port.
 * @member {string} [source.ipAddress] IP address of the port.
 * @member {number} [source.portNumber] Port number.
 * @member {object} destination Accepting process.
 * @member {object} [destination.machine] Machine hosting the process.
 * @member {date} [startTime] Relationship start time.
 * @member {date} [endTime] Relationship end time.
 */
export interface Acceptor extends Relationship {
  source: PortReference;
  destination: ProcessReference;
  startTime?: Date;
  endTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the MachineCollection class.
 * @constructor
 * Collection of Machine resources.
 *
 * @member {array} [value] Collection of Machine resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface MachineCollection {
  value?: Machine[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ProcessCollection class.
 * @constructor
 * Collection of Process resources.
 *
 * @member {array} [value] Collection of Process resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ProcessCollection {
  value?: Process[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the PortCollection class.
 * @constructor
 * Collection of Port resources.
 *
 * @member {array} [value] Collection of Port resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface PortCollection {
  value?: Port[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ClientGroupMembersCollection class.
 * @constructor
 * Collection of ClientGroupMember resources.
 *
 * @member {array} [value] Collection of ClientGroupMember resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ClientGroupMembersCollection {
  value?: ClientGroupMember[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ConnectionCollection class.
 * @constructor
 * Collection of Connection resources.
 *
 * @member {array} [value] Collection of Connection resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ConnectionCollection {
  value?: Connection[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the MachineGroupCollection class.
 * @constructor
 * Collection of Machine Group resources.
 *
 * @member {array} [value] Collection of Machine Group resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface MachineGroupCollection {
  value?: MachineGroup[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SummaryProperties class.
 * @constructor
 * Base for all summaries.
 *
 * @member {date} startTime Summary interval start time.
 * @member {date} endTime Summary interval end time.
 */
export interface SummaryProperties {
  startTime: Date;
  endTime: Date;
}

/**
 * @class
 * Initializes a new instance of the RelationshipProperties class.
 * @constructor
 * Relationship properties.
 *
 * @member {object} source Source resource of the relationship.
 * @member {string} [source.id] Resource URI.
 * @member {string} [source.type] Resource type qualifier.
 * @member {string} [source.name] Resource name.
 * @member {string} [source.kind] Polymorphic Discriminator
 * @member {object} destination Destination resource of the relationship.
 * @member {string} [destination.id] Resource URI.
 * @member {string} [destination.type] Resource type qualifier.
 * @member {string} [destination.name] Resource name.
 * @member {string} [destination.kind] Polymorphic Discriminator
 * @member {date} [startTime] Relationship start time.
 * @member {date} [endTime] Relationship end time.
 */
export interface RelationshipProperties {
  source: ResourceReference;
  destination: ResourceReference;
  startTime?: Date;
  endTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the MapNodes class.
 * @constructor
 * The nodes (entities) of a map.
 *
 * @member {array} [machines] Machine resources.
 * @member {array} [processes] Process resources.
 * @member {array} [ports] Port resources.
 * @member {array} [clientGroups] Client Group resources.
 */
export interface MapNodes {
  machines?: Machine[];
  processes?: Process[];
  ports?: Port[];
  clientGroups?: ClientGroup[];
}

/**
 * @class
 * Initializes a new instance of the MapEdges class.
 * @constructor
 * The edges (relationships) of a map.
 *
 * @member {array} [connections] Network connections.
 * @member {array} [acceptors] Processes accepting on a port.
 */
export interface MapEdges {
  connections?: Connection[];
  acceptors?: Acceptor[];
}

/**
 * @class
 * Initializes a new instance of the Map class.
 * @constructor
 * A map of resources and relationships between them.
 *
 * @member {object} nodes
 * @member {array} [nodes.machines] Machine resources.
 * @member {array} [nodes.processes] Process resources.
 * @member {array} [nodes.ports] Port resources.
 * @member {array} [nodes.clientGroups] Client Group resources.
 * @member {object} edges
 * @member {array} [edges.connections] Network connections.
 * @member {array} [edges.acceptors] Processes accepting on a port.
 */
export interface Map {
  nodes: MapNodes;
  edges: MapEdges;
}

/**
 * @class
 * Initializes a new instance of the Liveness class.
 * @constructor
 * Specifies the contents of a check liveness response.
 *
 * @member {date} startTime Liveness interval start time.
 * @member {date} endTime Liveness interval end time.
 * @member {boolean} live `true` if the resource is live during [startTime,
 * endTime], `false` otherwise
 */
export interface Liveness {
  startTime: Date;
  endTime: Date;
  live: boolean;
}

/**
 * @class
 * Initializes a new instance of the MapRequest class.
 * @constructor
 * Specifies the contents of request to generate a map.
 *
 * @member {date} [startTime] Map interval start time.
 * @member {date} [endTime] Map interval end time.
 * @member {string} kind Polymorphic Discriminator
 */
export interface MapRequest {
  startTime?: Date;
  endTime?: Date;
  kind: string;
}

/**
 * @class
 * Initializes a new instance of the SingleMachineDependencyMapRequest class.
 * @constructor
 * Specifies the computation of a single server dependency map. A single server
 * dependency map includes all direct dependencies of a given machine.
 *
 * @member {string} machineId URI of machine resource for which to generate the
 * map.
 */
export interface SingleMachineDependencyMapRequest extends MapRequest {
  machineId: string;
}

/**
 * @class
 * Initializes a new instance of the MachineGroupMapRequest class.
 * @constructor
 * Specifies the computation of a machine group dependency map. A machine group
 * dependency map includes all direct dependencies of a group of machines.
 *
 * @member {string} machineGroupId URI of machine group resource for which to
 * generate the map.
 * @member {boolean} [filterProcesses] If true, only processes between grouped
 * machines will be included. Any connections in or out of those processes will
 * be included.
 */
export interface MachineGroupMapRequest extends MapRequest {
  machineGroupId: string;
  filterProcesses?: boolean;
}

/**
 * @class
 * Initializes a new instance of the MapResponse class.
 * @constructor
 * Specified the contents of a map response.
 *
 * @member {date} startTime Map interval start time.
 * @member {date} endTime Map interval end time.
 * @member {object} map The generated map.
 * @member {object} [map.nodes]
 * @member {array} [map.nodes.machines] Machine resources.
 * @member {array} [map.nodes.processes] Process resources.
 * @member {array} [map.nodes.ports] Port resources.
 * @member {array} [map.nodes.clientGroups] Client Group resources.
 * @member {object} [map.edges]
 * @member {array} [map.edges.connections] Network connections.
 * @member {array} [map.edges.acceptors] Processes accepting on a port.
 */
export interface MapResponse {
  startTime: Date;
  endTime: Date;
  map: Map;
}

/**
 * @class
 * Initializes a new instance of the ClientGroupMembersCount class.
 * @constructor
 * Specifies the number of members in a client group.
 *
 * @member {date} startTime Membership interval start time.
 * @member {date} endTime Membership interval start time.
 * @member {string} groupId Client Group URI.
 * @member {number} count Number of members in the client group. Use this value
 * together with the value of ```accuracy```. If accuracy is `exact` then the
 * value represents the actual number of members in the cloud. When accuracy is
 * `estimated`, the actual number of members is larger than the value of
 * ```count```.
 * @member {string} accuracy Accuracy of the reported count. Possible values
 * include: 'actual', 'estimated'
 */
export interface ClientGroupMembersCount {
  startTime: Date;
  endTime: Date;
  groupId: string;
  count: number;
  accuracy: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * Error details.
 *
 * @member {string} code Error code identifying the specific error.
 * @member {string} [message] Error message in the caller's locale.
 */
export interface ErrorModel {
  code: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * An error response from the API.
 *
 * @member {object} error Error information.
 * @member {string} [error.code] Error code identifying the specific error.
 * @member {string} [error.message] Error message in the caller's locale.
 */
export interface ErrorResponse {
  error: ErrorModel;
}

/**
 * @class
 * Initializes a new instance of the MachineCollection class.
 * @constructor
 * Collection of Machine resources.
 *
 * @member {array} [value] Collection of Machine resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface MachineCollection {
  value?: Machine[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ConnectionCollection class.
 * @constructor
 * Collection of Connection resources.
 *
 * @member {array} [value] Collection of Connection resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ConnectionCollection {
  value?: Connection[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ProcessCollection class.
 * @constructor
 * Collection of Process resources.
 *
 * @member {array} [value] Collection of Process resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ProcessCollection {
  value?: Process[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the PortCollection class.
 * @constructor
 * Collection of Port resources.
 *
 * @member {array} [value] Collection of Port resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface PortCollection {
  value?: Port[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the MachineGroupCollection class.
 * @constructor
 * Collection of Machine Group resources.
 *
 * @member {array} [value] Collection of Machine Group resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface MachineGroupCollection {
  value?: MachineGroup[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ClientGroupMembersCollection class.
 * @constructor
 * Collection of ClientGroupMember resources.
 *
 * @member {array} [value] Collection of ClientGroupMember resources.
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ClientGroupMembersCollection {
  value?: ClientGroupMember[];
  nextLink?: string;
}


/**
 * @class
 * Initializes a new instance of the MachineCollection class.
 * @constructor
 * Collection of Machine resources.
 *
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface MachineCollection extends Array<Machine> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ConnectionCollection class.
 * @constructor
 * Collection of Connection resources.
 *
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ConnectionCollection extends Array<Connection> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ProcessCollection class.
 * @constructor
 * Collection of Process resources.
 *
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ProcessCollection extends Array<Process> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the PortCollection class.
 * @constructor
 * Collection of Port resources.
 *
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface PortCollection extends Array<Port> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the MachineGroupCollection class.
 * @constructor
 * Collection of Machine Group resources.
 *
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface MachineGroupCollection extends Array<MachineGroup> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ClientGroupMembersCollection class.
 * @constructor
 * Collection of ClientGroupMember resources.
 *
 * @member {string} [nextLink] The URL to the next set of resources.
 */
export interface ClientGroupMembersCollection extends Array<ClientGroupMember> {
  nextLink?: string;
}
