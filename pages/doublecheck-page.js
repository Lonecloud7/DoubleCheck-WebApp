import MainLayout from '@/components/layout/MainLayout'
import DoubleCheck from '@/components/double_check_app/DoubleCheck'

export default function DoubleCheckPage() {




  return (
    <MainLayout
      title="Double Check"
      showHeader={true}
      showFooter={true}
    >
      <DoubleCheck />
    </MainLayout>
  )
}
