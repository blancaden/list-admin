
import React from 'react'
import FormList from '../../FormList/FormList'
import TableList from '../../TableList/TableList'
import '../PageAdmin/PageAdmin.css'

const PageAdmin = () => {
  return (
    < section className='page_body'>
    
      <FormList />
      <TableList />
      
    </section>
  )
}

export default PageAdmin