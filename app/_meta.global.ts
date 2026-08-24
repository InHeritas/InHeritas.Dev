import type { MetaRecord } from 'nextra'

const globalMeta = {
    index: {
        type: 'doc',
        title: 'Home',
        theme: {
            pagination: false
        }
    },

    sodam_for_ios: {
        type: 'doc',
        title: '서담 for iOS',
        theme: {
            breadcrumb: false,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: false
        },
        items: {
            notice: {
                type: 'doc',
                title: '공지사항',
                items: {
                    welcome: '👋 Welcome',
                    '1': {
                        display: 'hidden'
                    },
                    '2': {
                        display: 'hidden'
                    },
                    '3': {
                        display: 'hidden'
                    }
                }
            },
            releaseNotes: {
                type: 'doc',
                title: '변경사항',
                theme: {
                    toc: false
                }
            },
            support: {
                type: 'doc',
                title: '지원 및 문의'
            }
        }
    },
    mytype: {
        type: 'doc',
        title: 'MyType for Safari',
        theme: {
            breadcrumb: false,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: false
        },
        items: {
            notice: {
                type: 'doc',
                title: '공지사항',
                items: {
                    privacy: {
                        display: 'hidden'
                    },
                    '2': {
                        display: 'hidden',
                        theme: {
                            toc: false
                        }
                    }
                }
            },
            releaseNotes: {
                type: 'doc',
                title: '변경사항',
                theme: {
                    toc: false
                }
            },
            support: {
                type: 'doc',
                title: '지원 및 문의'
            }
        }
    },
    sgnoti: {
        type: 'doc',
        title: 'SGNoti',
        theme: {
            breadcrumb: false,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: false
        },
        items: {
            notice: {
                type: 'doc',
                title: '공지사항',
                display: 'hidden',
                items: {
                    privacy: {
                        display: 'hidden'
                    }
                }
            },
            releaseNotes: {
                type: 'doc',
                title: '변경사항',
                display: 'hidden',
                theme: {
                    toc: false
                }
            },
            support: {
                type: 'doc',
                title: '지원 및 문의',
                display: 'hidden'
            }
        }
    }
} as MetaRecord;

export default globalMeta
