export default [
    { path: '', crumbs: [{ name: 'Home' }] },
    { path: '/home', crumbs: [{ name: 'Home' }] },
    { path: '/basePacks', crumbs: [{ name: 'Home', link: '/home' }, { name: 'basePacks' }] },
    { path: '/basePacks/:id', crumbs: [{ name: 'Home', link: '/home' }, { name: 'basePacks', link: '/basePacks' }, { name: 'Detail' }] },
    { path: '/basePacks/:id/patchList', crumbs: [{ name: 'Home', link: '/home' }, { name: 'basePacks', link: '/basePacks/:id/' }, { name: 'Detail', link: '/basePacks/:id' },{ name: 'patch' }] },
]