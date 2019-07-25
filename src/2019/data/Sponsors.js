const pastSponsors = [

    {
        name: 'Amazon',
        logo: '/sponsors/amazon.png',
        link: 'https://amazon.com'
    },
    {
        name: 'Nanome',
        logo: '/sponsors/nanome.png',
        link: 'https://nanome.com'
    },
    {
        name: "Jacob's School of Engineering - ECE Dept",
        logo: '/sponsors/jsoe.svg',
        link: 'https://ece.ucsd.edu'
    },
    {
        name: "Jacob's School of Engineering - CSE Dept",
        logo: '/sponsors/cse.png',
        link: 'https://cse.ucsd.edu'
    }
]

const tierOneSponsor = [

].map(x => ({...x, tier: 0}));

const tierTwoSponsor = [
    {
        name: 'Amazon Web Services',
        logo: '/sponsors/aws.svg',
        link: 'https://aws.amazon.com/'
    }
].map(x => ({...x, tier: 1}));

const sponsors =  [
    ...tierOneSponsor,
    ...tierTwoSponsor
]

const partners = [
    {
        name: 'WIC',
        logo: '/sponsors/gold.png',
        //logo: '/partners/wic.png',
        link: 'http://wic.ucsd.edu'
    },
    {
        name: 'CSES',
        logo: '/sponsors/gold.png',
        //logo: '/partners/cses.png',
        link: 'http://cses.ucsd.edu'
    },
    {
        name: 'Triton XR',
        logo: '/sponsors/gold.png',
        //logo: '/partners/xr.png',
        link: 'https://tritonxr.ucsd.edu'
    },
    {
        name: 'IEEE UC San Diego',
        logo: '/sponsors/gold.png',
        //logo: '/partners/ieee.png',
        link: 'http://ieeeucsd.org'
    },
    {
        name: 'HKN',
        logo: '/sponsors/gold.png',
        //logo: '/partners/hkn.png',
        link: 'http://hkn.ucsd.edu'
    },
    {
        name: 'Div-E',
        logo: '/sponsors/gold.png',
        //logo: '/partners/div-e.png',
        link: 'http://www.div-e.io/'
    }
].map(x => ({...x, tier: 2}));

export {
    pastSponsors,
    sponsors,
    partners
}