import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Models } from 'appwrite'

type followCardProps = {
    user: Models.Document
}
const FollowButton = ({ user }: followCardProps) => {
    const { toast } = useToast()
    return (
        <Button
            className='shad-button_primary group mt-2 py-0  h-8 w-20'
            onClick={() => {
                toast({
                    title: 'Function available soon',
                    description: `Soon you are going to be able to follow @${user.username}`
                })
            }}
        >
            <p className='subtle-semibold'>Follow</p>

        </Button>
    )
}

export default FollowButton