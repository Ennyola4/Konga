import React from 'react'

const Search = () => {
  return (
    <div className='ash-background'>
      <div className='bg-white p-3'>
      <p style={{ textAlign: 'left', paddingLeft: '25px', fontSize: '14px' }}>
        <span 
          style={{ cursor: 'pointer' }} 
          onClick={() => window.location.href = '/'}>Home</span> 
        &nbsp;&gt;&nbsp; 
        <span 
          style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => window.location.reload()}>
          Search
        </span>
      </p>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginLeft: '25px' }}>Search</h1>
      </div><br />
      
    </div>
  )
}

export default Search
