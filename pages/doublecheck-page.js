import MainLayout from '@/components/layout/MainLayout'
import PersonalizedSquare from '@/components/personalized_square/PersonalizedSquare'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useFetchUser } from '@/lib/authContext'
import { CircularProgress } from '@mui/material'
import DoubleCheck from '@/components/double_check_app/DoubleCheck'

export default function DoubleCheckPage() {
  const { user, loading, id } = useFetchUser()
  const router = useRouter()

  // useEffect(() => {
  //   if (loading) {
  //     return
  //   }
  //   if (!user) {
  //     router.push('/sign-in')
  //   }
  // }, [loading, router, user])

  return (
    <MainLayout
      title="Double Check"
      showHeader={true}
      showFooter={true}
      user={user}
      id={id}
    >
      <DoubleCheck />
    </MainLayout>
  )
}
