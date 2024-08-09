import React from 'react'
import MainLayout from '@/components/layout/MainLayout'

const terms_and_condition = () => {
  return (
    <MainLayout title="Double Check" showHeader={true} showFooter={true}>
      <div className="container px-5 pt-5 pb-10 mx-auto flex flex-col items-center text-center text-white">
        <div className=" w-1/2 text-left ">
          <h1 className=" text-2xl font-semibold  sm:text-4xl mx-auto  md:block md:relative mb-2 sm:mb-6">
            TERMS AND CONDITIONS
          </h1>
          <div>
            <h2 className="w-6/12 text-base font-semibold mb-2 md:text-2xl">
              Quicky do a quick scan of
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, animi ullam in temporibus cum ducimus explicabo,
              voluptatem minima blanditiis itaque nemo quas quia id inventore
              reprehenderit. Laborum quas facilis obcaecati. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Deserunt eius excepturi,
              cupiditate exercitationem numquam beatae, eaque et, reiciendis
              blanditiis aperiam dolorem id vero porro architecto distinctio
              facilis dicta minus similique.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default terms_and_condition
