const pastSponsors = [

]

const tierOneSponsor = [
    {
        name: 'Northrop Grumman',
        logo: '/sponsors/northrop-grumman.svg',
        link: 'https://www.northropgrumman.com/Pages/default.aspx',
        size: 'normal'
    },
    {
        name: 'Activbody',
        logo: '/sponsors/activbody.svg',
        link: 'https://activbody.com/',
        size: 'normal'
    }
].map(x => ({...x, tier: 0}));

const tierTwoSponsor = [
    {
        name: 'Amazon Web Services',
        logo: '/sponsors/aws.svg',
        link: 'https://aws.amazon.com/',
        size: 'small'
    }, 
    {
        name: 'Surcle',
        logo: '/sponsors/surcle.svg',
        link: 'https://surcle.io',
        size: 'medium'
    }
].map(x => ({...x, tier: 1}));

const sponsors =  [
    ...tierOneSponsor,
    ...tierTwoSponsor
]

const partners = [

].map(x => ({...x, tier: 2}));

export {
    pastSponsors,
    sponsors,
    partners
}