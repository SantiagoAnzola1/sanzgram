import BottomBar from '@/components/shared/BottomBar'
import LeftSideBar from '@/components/shared/LeftSideBar'
import TopBar from '@/components/shared/TopBar'
import TopCreators from '@/_root/pages/TopCreators'

import { Outlet, useLocation } from 'react-router-dom'
function RootLayout() {
    const { pathname } = useLocation()
    return (
        <div className='w-full md:flex md:flex-row flex flex-col'>
            <TopBar />
            <LeftSideBar />

            <section className='flex flex-grow flex-2'>
                <Outlet />
            </section>
            {pathname === '/' && <TopCreators />}
            {/* {pathname !== '/all-users' && <TopCreators />} */}

            <BottomBar />
        </div>
    )
}

export default RootLayout