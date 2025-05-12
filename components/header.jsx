import React from 'react'
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, LayoutDashboard, PenBox } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, StarsIcon, FileText } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
    const user = await checkUser();

    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50 supports-[backdrop - filter]: bg - background / 60">

            <nav className="container mx-auto px-4 h-16 py-2 flex items-center justify-between">
                <Link href="/">
                    <Image src="/vercel.svg" alt="logo" width={200} height={32} className="h-12 py-1 w-auto object-contain" />
                </Link>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button>
                                <LayoutDashboard className="w-4 h-4" />
                                <span className="hidden md:block">Industry Insights</span>
                            </Button>
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant="outline">
                                    <StarsIcon className="w-4 h-4" />
                                    <span className="hidden md:block">Resources</span>
                                    <ChevronDown className="w-4 h-4 ml-2" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href={"/resume"} className="flex items-center gap-2">
                                        <FileText className="w-4 h-4" />
                                        <span>Build Resume</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={"/resources"} className="flex items-center gap-2">
                                        <PenBox className="w-4 h-4" />
                                        <span>Articles</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={"/resources"} className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 mr-2" />
                                        <span>Articles</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline">Sign In</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button variant="outline">Sign Up</Button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton
                            appearance={
                                {
                                    elements: {
                                        avatarBox: "h-10 w-10",
                                        userButtonPopoverCard: "shadow-xl",
                                        userPreviewMainIdentifier: "text-lg font-semibold",
                                        userPreviewSecondaryIdentifier: "text-sm text-muted-foreground"
                                    }
                                }
                            }
                            afterSignOutUrl='/' />
                    </SignedIn>
                </div>
            </nav>

        </header >
    )
}

export default Header