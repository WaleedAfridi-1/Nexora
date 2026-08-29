import React from 'react'
import Header from "../../components/contactPageComponents/Header";
import Form from "../../components/contactPageComponents/Form";
import FAQs from "../../components/FAQ";

const page = () => {
  return (
    <main className='w-full'>

      <Header 
      tag="GET IN TOUCH"
      title={`Let's talk about your`}
      title2={"next workflow."}
      description={"Have a question, need help with automation, or want to explore what Nexora can do for your team? We'd love to hear from you."}
      />
      
      <Form/>

      <FAQs/>  

    </main>
  )
}

export default page
