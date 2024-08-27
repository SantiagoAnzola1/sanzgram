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
                    <TabsTrigger className='border-2 rounded-md border-[#101012]' value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
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