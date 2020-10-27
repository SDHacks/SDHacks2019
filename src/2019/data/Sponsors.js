const tierOneSponsor = [
    
].map(x => ({...x, tier: 0}));

const tierTwoSponsor = [
    
].map(x => ({...x, tier: 1}));

const tierThreeSponsor = [

].map(x => ({...x, tier: 2}));

const tierFourSponsor = [
    {
        name: 'SPAWAR Systems Center - Pacific',
        logo: '/sponsors/spawar.svg',
        link: 'https://www.public.navy.mil/navwar/NIWC-Pacific/Pages/default.aspx',
        width: '50'
    },
    {
        name: 'Northrop Grumman',
        logo: '/sponsors/northrop.svg',
        link: 'https://www.northropgrumman.com/Pages/default.aspx',
        width: '100'
    },
    {
        name: 'UCSD CSE',
        logo: '/sponsors/jsoe-cse.svg',
        link: 'https://cse.ucsd.edu/',
        size: '100'
    },
    {
        name: 'UCSD ECE',
        logo: '/sponsors/jsoe-ece.svg',
        link: 'http://ece.ucsd.edu/',
        width: '80'
    },
    {
        name: 'Stickermule',
        logo: '/sponsors/sticker-mule.svg',
        link: 'http://hackp.ac/mlh-stickermule-hackathons',
        width: '80'
    },
    {
        name: 'Fleet Readiness Center',
        logo: '/sponsors/frc.svg',
        link: 'https://frcsw.navair.navy.mil/',
        width: '80'
    },
    {
        name: 'DocuSign',
        logo: '/sponsors/docusign.svg',
        link: 'https://www.docusign.com/',
        width: '80'
    },
    {
        name: 'Qualcomm Institute',
        logo: '/sponsors/qi.svg',
        link: 'https://qi.ucsd.edu/',
        width: '80'
    },
    {
        name: 'Cisco',
        logo: '/sponsors/cisco.png',
        link: 'https://www.cisco.com/',
        width: '80'
    },
    {
        name: 'Webroot',
        logo: '/sponsors/webroot.svg',
        link: 'https://www.webroot.com/us/en',
        width: '80'
    },
    {
        name: 'Palantir',
        logo: '/sponsors/palantir.png',
        link: 'https://www.palantir.com/',
        width: '80'
    },
    {
        name: 'Macys Tech',
        logo: '/sponsors/macys.svg',
        link: 'https://technology.macysjobs.com/',
        width: '80'
    },
    {
        name: 'Aorus',
        logo: '/sponsors/aorus.png',
        link: 'https://www.aorus.com/',
        width: '80'
    },
    {
        name: 'Gigabyte',
        logo: '/sponsors/gigabyte.png',
        link: 'https://www.gigabyte.com/',
        width: '80'
    },
    {
        name: 'Nanome',
        logo: '/sponsors/nanome.svg',
        link: 'https://nanome.ai/',
        width: '80'
    },
    {
        name: 'Microduino',
        logo: '/sponsors/microduino.svg',
        link: 'https://microduinoinc.com/',
        width: '80'
    },
    {
        name: 'Ritual Energy',
        logo: '/sponsors/ritual.png',
        link: 'https://www.ritualenergy.com/',
        width: '80'
    },
    {
        name: 'UCSD JSOE',
        logo: '/sponsors/jsoe.svg',
        link: 'https://jacobsschool.ucsd.edu/',
        width: '80'
    }
].map(x => ({...x, tier: 2}));

const tierOnePartner = [
    {
        name: 'ACM',
        logo: '/partners/ACM logo.png',
        link: 'http://www.acm.org/',
        width: '60'
    },
    {
        name: 'Open Source',
        logo: '/partners/opensource.png',
        link: 'https://os-ucsd.ucsd.edu/',
        width: '60'
    },
    {
        name: 'CSES',
        logo: '/partners/cses.png',
        link: 'https://cses.ucsd.edu/#/',
        width: '60'
    },
    {
        name: 'DS3',
        logo: '/partners/ds3.png',
        link: 'https://www.facebook.com/DS3UCSD/',
        width: '60'
    }
].map(x => ({...x, tier: 3}));

const tierTwoPartner = [
    {
        name: 'Engineers for A Cause',
        logo: '/partners/efc.jpeg',
        // should update website link
        link: '',
        width: '55'
    },
    {
        name: 'IEEE',
        logo: '/partners/ieee.png',
        link: 'http://www.ieee.org/portal/index.jsp',
        width: '80'
    },
    {
        name: 'SWE',
        logo: '/partners/swe.png',
        link: 'http://swe.ucsd.edu/',
        width: '55'
    },
    {
        name: 'Women in Computing',
        logo: '/partners/wic.png',
        link: 'https://wic.ucsd.edu/',
        width: '70'
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