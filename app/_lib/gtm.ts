export const GTM_ID = process.env.YOUNHA_LIBRARY_GTM_ID;

export const pageview = (path: string) => {
    // @ts-ignore
    dataLayer.push({
        'event': 'virtual-page-view',
        'pageTitle': document.title,
        'virtualPagePath': path
    })
}
