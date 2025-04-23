import React from 'react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
            <div className="max-w-md">
                <h1 className="text-9xl font-bold text-gray-300">404</h1>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800">
                    페이지를 찾을 수 없습니다
                </h2>
                <div className="mt-10">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-2 -ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7m-7-7v14"
                            />
                        </svg>
                        홈으로 돌아가기
                    </Link>
                </div>
            </div>
        </div>
    )
}