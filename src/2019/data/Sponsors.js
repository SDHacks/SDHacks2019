const tierOneSponsor = [
    {
        name: 'Naval Information Warfare Center - Pacific',
        logo: '/sponsors/niwc.svg',
        link: 'https://www.public.navy.mil/navwar/NIWC-Pacific/Pages/default.aspx',
        width: '50'
    }
].map(x => ({...x, tier: 0}));

const tierTwoSponsor = [
    {
        name: 'Northrop Grumman',
        logo: '/sponsors/northrop.svg',
        link: 'https://www.northropgrumman.com/Pages/default.aspx',
        width: '100'
    },
    {
        name: 'Activbody',
        logo: '/sponsors/activbody.svg',
        link: 'https://activbody.com/',
        size: '100'
    },
    {
        name: 'UCSD CSE',
        logo: '/sponsors/jsoe-cse.svg',
        link: 'https://cse.ucsd.edu/',
        size: '100'
    }
].map(x => ({...x, tier: 1}));

const tierThreeSponsor = [
    {
        name: 'Amazon Web Services',
        logo: '/sponsors/aws.svg',
        link: 'https://aws.amazon.com/',
        width: '60'
    }, 
    {
        name: 'Surcle',
        logo: '/sponsors/surcle.svg',
        link: 'https://surcle.io',
        width: '90'
    },
    {
        name: 'Costar',
        logo: '/sponsors/costar.svg',
        link: 'https://www.costar.com/',
        width: '90'
    }
].map(x => ({...x, tier: 2}));

const tierFourSponsor = [
    {
        name: 'Microsoft',
        logo: '/sponsors/microsoft.svg',
        link: 'https://www.microsoft.com/en-us/',
        width: '70'
    },
    {
        name: 'UCSD ECE',
        logo: '/sponsors/jsoe-ece.svg',
        link: 'http://ece.ucsd.edu/',
        width: '70'
    },
    {
        name: 'Wolfram',
        logo: '/sponsors/wolfram.svg',
        link: 'https://www.wolfram.com/',
        width: '70'
    }
].map(x => ({...x, tier: 2}));

const tierOnePartner = [
    {
        name: 'ACM',
        logo: '/partners/acm.svg',
        width: '60'
    },
    {
        name: 'BMES',
        logo: '/partners/bmes.svg',
        width: '60'
    },
    {
        name: 'CSES',
        logo: '/partners/cses.svg',
        width: '60'
    },
    {
        name: 'DS3',
        logo: '/partners/ds3.svg',
        width: '60'
    }
].map(x => ({...x, tier: 3}));

const tierTwoPartner = [
    {
        name: 'ESW',
        logo: '/partners/esw.svg',
        width: '50'
    },
    {
        name: 'IEEE',
        logo: '/partners/ieee.svg',
        width: '50'
    },
    {
        name: 'SWE',
        logo: '/partners/swe.svg',
        width: '50'
    },
    {
        name: 'Triton XR',
        logo: '/partners/triton-xr.svg',
        width: '30'
    },
    {
        name: 'TSE',
        logo: '/partners/tse.svg',
        width: '25'
    }
].map(x => ({...x, tier: 3}));

export {
    tierOneSponsor,
    tierTwoSponsor,
    tierThreeSponsor,
    tierFourSponsor,
    tierOnePartner,
    tierTwoPartner
}