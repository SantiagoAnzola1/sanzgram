import { InfiniteData } from '@tanstack/react-query'
import { Models } from 'appwrite'
import React from 'react'

export type IContextType = {
    user: IUser,
    isLoading: boolean | null,
    isAuthenticated: boolean | null,
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>,
    checkAuthUser: () => Promise<boolean>
}
// export type IContextType = {
//     user: IUser,
//     isLoading: boolean,
//     isAuthenticated: boolean,
//     setUser: React.Dispatch<React.SetStateAction<IUser>>,
//     setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
//     checkAuthUser: () => Promise<boolean>
// }
export type IUseGetSavedPostResult = {
    data: InfiniteData<Models.DocumentList<Models.Document> | undefined, unknown> | undefined
    isFetching: boolean
    isError: boolean
    fetchNextPage: () => void
    hasNextPage: boolean
}

export type INavLink = {
    imgURL: string
    route: string
    label: string
}

export type IUpdateUser = {
    userId: string
    name: string
    username: string,
    email: string,
    bio: string
    imageId: string | null
    imageUrl: URL | string
    file: File[]
}

export type INewPost = {
    userId: string
    caption: string
    file: File[]
    location?: string
    tags?: string
}

export type IUpdatePost = {
    postId: string
    caption: string
    imageId: string
    imageUrl: URL
    file: File[]
    location?: string
    tags?: string
}

export type IUser = {
    id: string
    name: string
    username: string
    email: string
    imageId: string
    imageUrl: string
    bio: string
}

export type INewUser = {
    name: string
    email: string
    username: string
    password: string
}

export interface ICreator {
    name: string
    username: string
    accountId: string
    email: string
    bio: string | null
    imageId: string | null
    imageUrl: string
    $id: string
    $createdAt: string
    $updatedAt: string
    $permissions: any[]
    posts: any[]
    liked: any[]
    save: any[]
    $databaseId: string
    $collectionId: string
}
