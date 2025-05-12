'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


const HeroSection = () => {

    const imgRef = useRef(null)

    useEffect(() => {

        const scrollThreshold = 100;

        const handleScroll = () => {
            const currentScroll = window.scrollY
            const imageElement = imgRef.current

            if (currentScroll > scrollThreshold) {
                imageElement.classList.add('scrolled')
            } else {
                imageElement.classList.remove('scrolled')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    return (
        <section className='w-full pt-36 md:pt-48 pb-16 md:pb-24'>
            <div className='space-y-6 text-center'>
                <div className='space-y-2 mx-auto'>
                    <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title gradient'>
                        Your AI Career Coach
                        <br />
                        Professional Success
                    </h1>
                    <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                        Advanced AI career coach that helps you get the job you want
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-4 justify-center'>
                    <Link href="/dashboard">
                        <Button size='lg' className='px-10'>
                            Get Started
                        </Button>
                    </Link>

                    <Link href="https://logikxmind.com" target='_blank'>
                        <Button size='lg' className='px-10' variant='outline'>
                            Learn More
                        </Button>
                    </Link>
                </div>

                <div className='hero-image-wrapper mt-5 md:mt-0'>
                    <div ref={imgRef} className='hero-image'>
                        <Image
                            src="/banner.png"
                            alt="Banner Image"
                            width={1280}
                            height={720}
                            className='rounded-lg shadow-2xl mx-auto'
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection