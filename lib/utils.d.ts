declare var revalidator: any;
/**
 * Taken from: https://github.com/parris/iz/blob/master/src/validators.js
 * Matches IPv4, IPv6 or hostname
 * @author Mikulas Dite http://stackoverflow.com/questions/9208814/validate-ipv4-ipv6-and-hostname
 * @param str
 * @return boolean
 */
declare var isIP: (str: any) => boolean;
declare var validateConfig: (config: any) => any;
declare var mergeConfig: (extCfg: any, defCfg: any) => {
    services: any;
    timeout: any;
    getIP: any;
};
