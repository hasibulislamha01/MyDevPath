import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { Menu } from 'lucide-react'

const navigationRoutes = [
    { link: '/', title: 'home' },
    { link: '/blogs', title: 'blogs' },
    { link: '/contact', title: 'contact' },
    { link: '/about', title: 'about' },
]

const authRoutes = [
    { link: '/login', title: 'login' }
]

const ownerRoutes = [
    { link: '/write', title: 'write' }
]

const Navbar = () => {

    const isLoggedIn = false

    return (
        <nav className='bg-gray-200 h-10'>

            <section className='wrapper h-full flex items-center capitalize'>

                <div className='text-lg font-bold flex-1 '>
                    <Link href='/'>MyDevPath</Link>
                </div>

                {/* menu items */}
                <section className='hidden lg:flex items-center justify-center gap-5 flex-1 '>
                    {navigationRoutes?.map(route =>
                        <Link
                            key={route.link}
                            href={route.link}
                        >
                            {route.title}
                        </Link>
                    )}

                    {isLoggedIn ?
                        ownerRoutes?.map(route =>
                            <Link
                                key={route.link}
                                href={route.link}
                            >
                                {route.title}
                            </Link>
                        )
                        :
                        authRoutes?.map(route =>
                            <Link
                                key={route.link}
                                href={route.link}
                            >
                                {route.title}
                            </Link>
                        )
                    }
                </section>

                {/* social section */}
                <section className='flex-1 flex justify-end'>
                    <ThemeToggler />
                </section>

                {/* mobile navbar ( side menu ) */}
                <section className='lg:hidden'>
                    <Menu />
                </section>
            </section>
        </nav>
    )
}

export default Navbar
