// function name: lowercaseDomains
// parameters:
//   - DOMAIN_NAMES: array of strings
// returns: array of strings

// set CLEANED_DOMAINS to an empty array

// for each DOMAIN in DOMAIN_NAMES
		// set LOWERCASE_DOMAIN to lowercase(DOMAIN)
		// insert LOWERCASE_DOMAIN at the end of CLEANED_DOMAINS

// return CLEANED_DOMAINS

/**
 * Given a list of domain names, return the list in lowercase
 * @param {string[]} domainNames - mixed case list of domain names
 * @returns {string[]} - list manipulated to lowercase
 */

function lowercaseDomains(domainNames){
const cleanedDomains = [];

for (let i=0; i<domainNames.length; i++){
    cleanedDomains.push(domainNames[i].toLowerCase())
} return cleanedDomains;
}

// test cases

console.log(
	lowercaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),
	["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]
)

console.log(
	lowercaseDomains(["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
	["m1a.tech", "example.co.uk", "https://javascript.info"]
)