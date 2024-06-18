import React, { Component } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import ChatBot from '@/components/double_check_app/ChatBot'

const ChatBotPage = () => {
  {
    return (
      <MainLayout title="Double Check" showHeader={true} showFooter={true}>
        <ChatBot />
      </MainLayout>
    )
  }
}

export default ChatBotPage
