import type { MetaRecord } from 'nextra'
import { ArchivedBadge } from '../components/archived-badge'

const globalMeta = {
    index: {
        type: 'doc',
        title: 'Home',
        theme: {
            pagination: false
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
                        display: 'hidden',
                        theme: {
                            toc: false
                        }
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
    },

    // 서비스 종료 (Archived) — 페이지는 유지, 사이드바 맨 아래에 표시
    sodam_for_ios: {
        type: 'doc',
        title: (
            <span>
                서담 for iOS <ArchivedBadge className="ml-1 align-middle" />
            </span>
        ),
        theme: {
            collapsed: true,
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
    }
} as MetaRecord;

export default globalMeta
