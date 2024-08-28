import EditButtonProfile from '@/components/shared/Buttons/EditButtonProfile'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useUserContext } from '@/context/AuthContext'
import React from 'react'

const Profile = () => {
    const { user, isUserLoading, isAuthenticated } = useUserContext()
    return (
        <div>
            <EditButtonProfile />

            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2 tab-list">
                    <TabsTrigger className='bg-dark-2  border-2 border-r-0 rounded-tl-md rounded-bl-md border-[#101012] focus:border-2 focus:border-white' value="account">Account</TabsTrigger>
                    <TabsTrigger className='bg-dark-2 border-2 border-l-0 rounded-tr-md rounded-br-md border-[#101012] focus:border-2 focus:border-white' value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    sdasdas
                </TabsContent>
                <TabsContent value="password">
                    dasd
                </TabsContent>
            </Tabs>




        </div>
    )
}

export default Profile