import { useGetTopUsers } from '@/lib/react-query/queriesAndMutations'
import UserCard from '../../components/shared/UserCard'
import Loader from '../../components/shared/Loader'
import { useUserContext } from '@/context/AuthContext'



const TopCreators = () => {
    const topCreatorsLimit = 10
    const { data: creators, isLoading: isLoadingCreators, isError: isErrorCreators } = useGetTopUsers(topCreatorsLimit)
    const { user: currentUser } = useUserContext()
    return (

        <div className='min-w-[400px] min-h-screen overflow-y-auto max-h-44 bg-dark-2 hidden xl:flex  xl:flex-col xl:align-center gap-10 py-10 px-6'>
            <h3 className='h3-bold text-left w-full'>Top Creators</h3>
            <div className='grid grid-cols-2 gap-4 '>

                {(isLoadingCreators && !isErrorCreators) ? <Loader />
                    : (creators?.documents.map(creator => (<UserCard key={creator.$id} user={creator} currentUserId={currentUser.id} />)))
                }
                {isErrorCreators && (<div>Error Fetching the data</div>)}
            </div>
        </div>
    )

}

export default TopCreators