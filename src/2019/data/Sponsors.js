const pastSponsors = [

]

const tierOneSponsor = [

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
        logo: '/sponsors/surcle.png',
        link: 'https://surcle.io',
        size: 'normal'
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